const knex = require('../database');

class ServicesResource {

    static async show(id) {
        try {
            let service = knex('services').select('*');

            if(id){
                service.where('professional_id', id);
            }
            
            service = await service[0];

            const output = {
                ...service
            }

            return output;
        } catch (error) {
            console.log(error)
        }
    }

    static async search(params = {}){
        try {
            let query = knex('services').select('*');
            
            if(params.professional_id){
                query.where('professional_id', params.professional_id)
            }

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