const knex = require('../database');
const bcrypt = require('bcrypt');
const AddressesResource = require('./AddressesResource');
const ServicesResource = require('./ServicesResource');
const CategoriesResource = require('./CategoriesResource');

class ProfessionalsResource {
    static async search(user_id) {
        try {
            let query = knex('professionals').select('*');

            if (user_id) {
                query.where('user_id', user_id);
            }
            const professional = await query;
            let address;
            
            if(professional[0].address_id){
                address = await AddressesResource.search(professional[0].address_id)
            }

            return {...professional[0], address: address[0]};
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
                atende_domicilio: data.atende_domicilio,
            }

            const professional = await knex('professionals').insert(insertData);

            if(services.length > 0){
                services.forEach(service => {
                    ServicesResource.create({professional_id: professional[0], ...service})
                });
            }

            if(categories.length > 0){
                categories.forEach(category=>{
                    CategoriesResource.associateWithProfessional({professional_id: professional[0], category_id: category.id})
                })
            }

            return professional;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = ProfessionalsResource;