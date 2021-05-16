'use strict';

const ResponseAPI = {
    api(response) {
        return {
            success(data) {
                return response.json({
                    status: 'OK',
                    result: data || null,
                    error: null,
                });
            },

            error(code, message, statusCode = 500) {
                return response.status(statusCode).json({
                    status: 'ERROR',
                    error: { code, message },
                });
            },
        };
    },
};

module.exports = ResponseAPI;
