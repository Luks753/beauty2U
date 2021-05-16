const UsersResource = require('../resources/UsersResource');
const { api } = require('../helpers/ResponseAPI');

const UsersController = {
    async index(request, response){
        try {
            const resources = await UsersResource.search(request.params.id);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    },

    async signup(request, response){
        try {
            const resources = await UsersResource.create(request.body);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error('INVALID_RESOURCE', error.message, error.status);
        }
    }
}

module.exports = UsersController;