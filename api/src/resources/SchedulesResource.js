const knex = require('../database');

class SchedulesResource {

    static async show(professionalId) {
        try {
            let category = await knex('schedules').select('*').where('professional_id', professionalId);

            return category;
        } catch (error) {
            console.log(error)
        }
    }

    static async search(){
        try {
            let query = knex('schedules').select('*');

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const schedules = await knex('schedules').insert(data);

            return schedules[0];
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = SchedulesResource;