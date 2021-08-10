const SchedulesResource = require('../resources/SchedulesResource');
const { api } = require('../helpers/ResponseAPI');

const SchedulesController = {
    async show(request, response){
        try{
            const resources = await SchedulesResource.show(request.params.professionalId);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async index(request, response){
        try{
            const resources = await SchedulesResource.search();

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async create(request, response){
        try{
            const resources = await SchedulesResource.create(request.body);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    }
}

module.exports = SchedulesController;