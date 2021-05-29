const jwt = require('jsonwebtoken');
const { api } = require('../helpers/ResponseAPI');

module.exports = {
    verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) return api(res).error('NÃO AUTORIZADO', 'Faça login para continuar.', 401);

        jwt.verify(token, process.env.SECRET, function (err, user) {
            if (err) return api(res).error(
                'NÃO AUTORIZADO',
                'Faça login para continuar.',
                500
            );

            // se tudo estiver ok, salva no request para uso posterior
            req.user = user;
            next();
        });
    }
}