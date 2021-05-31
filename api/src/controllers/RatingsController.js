const RatingsResource = require('../resources/RatingsResource');
const { api } = require('../helpers/ResponseAPI');

const RatingsController = {
    async show(request, response){
        try{
            const resources = await RatingsResource.show(request.params.id);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async index(request, response){
        try{
            const resources = await RatingsResource.search();

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async create(request, response){
        try{
            const resources = await RatingsResource.create(request.body);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    }
}

module.exports = RatingsController;