const knex = require('../database');
const bcrypt = require('bcrypt');

class AddressesResource {

    static async search(id) {
        try {
            let query = knex('addresses').select('*').where('id', id);

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const address = await knex('addresses').insert(data);

            return address[0];
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = AddressesResource;