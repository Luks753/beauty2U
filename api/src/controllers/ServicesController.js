const ServicesResource = require('../resources/ServicesResource');
const { api } = require('../helpers/ResponseAPI');

const ServicesController = {
    async show(request, response){
        try{
            const resources = await ServicesResource.show(request.params.id);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async index(request, response){
        try{
            const resources = await ServicesResource.search();

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async create(request, response){
        try{
            const resources = await ServicesResource.create(request.body);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    }
}

module.exports = ServicesController;