const knex = require('../database');
const bcrypt = require('bcrypt');
const AddressesResource = require('./AddressesResource');

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
            const insertData = {
                address_id: data.address_id,
                user_id: data.user_id,
                razao_social: data.razao_social,
                atende_domicilio: data.atende_domicilio,
            }

            const professional = await knex('professionals').insert(insertData);

            return professional;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = ProfessionalsResource;