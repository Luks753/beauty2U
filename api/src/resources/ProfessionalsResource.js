const knex = require('../database');
const bcrypt = require('bcrypt');
const AddressesResource = require('./AddressesResource');
const ServicesResource = require('./ServicesResource');
const CategoriesResource = require('./CategoriesResource');

class ProfessionalsResource {
    static async search(user_id) {
        try {
            let query = knex('professionals').select('*')

            if (user_id) {
                query.where('user_id', user_id);
            }
            const professional = await query;
            let address;

            if (professional[0].address_id) {
                address = await AddressesResource.search(professional[0].address_id)

                return { ...professional[0], address: address[0] };
            } else {
                return professional[0]
            }

        } catch (error) {
            console.log(error)
        }
    }

    static async indexDomicilio() {
        try {
            let query = knex('professionals')
                .select([
                    'professionals.user_id as id',
                    'professionals.razao_social as nome',
                    'categories.nome as categoria'
                ])
                .where('professionals.atende_domicilio', 1)
                .join('professionals_categories', 'professionals_categories.professional_id', 'professionals.id')
                .join('categories', 'professionals_categories.category_id', 'categories.id');

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {

            const services = data.services;
            const categories = data.categories;
            const insertData = {
                address_id: data.address_id,
                user_id: data.user_id,
                razao_social: data.razao_social,
                atende_domicilio: data.atende_domicilio ? 1 : 0, // No banco está como int
            }

            const professional = await knex('professionals').insert(insertData);

            if (services.length > 0) {
                services.forEach(service => {
                    ServicesResource.create({ professional_id: professional[0], ...service })
                });
            }

            if (categories.length > 0) {
                categories.forEach(category => {
                    CategoriesResource.associateWithProfessional({ professional_id: professional[0], category_id: category.id })
                })
            }

            return professional;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = ProfessionalsResource;