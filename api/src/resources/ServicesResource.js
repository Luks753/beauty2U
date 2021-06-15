const knex = require('../database');

class ServicesResource {

    static async show(id) {
        try {
            let service = await knex('services').select('*')
            if(id){
                service.where('id', id);
            }
            
            service = service[0];

            const output = {
                ...service
            }

            return output;
        } catch (error) {
            console.log(error)
        }
    }

    static async search(){
        try {
            let query = knex('services').select('*');

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const services = await knex('services').insert(data);

            return services[0];
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = ServicesResource;