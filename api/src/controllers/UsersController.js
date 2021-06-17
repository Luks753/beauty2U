const UsersResource = require('../resources/UsersResource');
const ProfessionalsResource = require('../resources/ProfessionalsResource');
const { api } = require('../helpers/ResponseAPI');
const AuthProvider = require('../providers/AuthProvider');

const UsersController = {
    async index(request, response) {
        try {
            const resources = await UsersResource.search();

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async indexProfessionals(request, response) {
        try {            
            const resources = await ProfessionalsResource.search();

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async indexDomicilio(request, response) {
        try {
            const resources = await ProfessionalsResource.indexDomicilio();

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async show(request, response) {
        try {
            const resources = await UsersResource.show(request.params.id);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async showProfessional(request, response) {
        try {
            const resources = await ProfessionalsResource.search(request.params.id);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async signup(request, response) {
        try {
            const resources = await UsersResource.create(request.body);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async login(request, response) {
        try {
            const resources = await AuthProvider.login(request.body);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    }
}

module.exports = UsersController;