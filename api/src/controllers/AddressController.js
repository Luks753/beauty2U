const AddressesResource = require("../resources/AddressesResource");
const { api } = require('../helpers/ResponseAPI');

const AddressController = {

    async search(request, response) {
        try {
            const resource = await AddressesResource.search(request.params.id);

            return api(response).success(resource);
        } catch (error) {
            return api(response).error;
        }
    },

    async create(request, response) {

        try {
            const resources = await AddressesResource.create(request.body);

            return api(response).success(resources);
        } catch (error) {
            return api(response).error;
        }
    }
}

module.exports = AddressController;