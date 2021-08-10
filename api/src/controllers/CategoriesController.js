const CategoriesResource = require('../resources/CategoriesResource');
const { api } = require('../helpers/ResponseAPI');
const { associateWithProfessional } = require('../resources/CategoriesResource');

const CategoriesController = {
    async show(request, response){
        try{
            const resources = await CategoriesResource.show(request.params.id);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async index(request, response){
        try{
            const resources = await CategoriesResource.search();

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async create(request, response){
        try{
            const resources = await CategoriesResource.create(request.body);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async associateWithProfessional(request, response){
        try{
            const resources = await CategoriesResource.associateWithProfessional(request.body);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async indexAssociations(request, response){
        try{
            const resources = await CategoriesResource.indexAssociations(request.params.nome);

            return api(response).success(resources);
        }catch(error){
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    }
}

module.exports = CategoriesController;