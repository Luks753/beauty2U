const knex = require('../database');
const ProfessionalsResource = require('./ProfessionalsResource');

class RatingsResource {

    static async show(id) {
        try {
            let rating = await knex('ratings').select('*').where('id', id);
            rating = rating[0];

            const output = {
                ...rating
            }

            return output;
        } catch (error) {
            console.log(error)
        }
    }

    static async search() {
        try {
            let query = knex('ratings').select('*');

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {            
            const ratings = await knex('ratings').insert(data);

            return ratings[0];
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = RatingsResource;