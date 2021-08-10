const jwt = require('jsonwebtoken');
const UsersResource = require('../resources/UsersResource');
const bcrypt = require('bcrypt');

const AuthProvider = {
    async login(data) {
        let user = await UsersResource.search({ username: data.username }, true);
        user = user[0]

        if (user) {
            const compare = await bcrypt.compare(data.password, user.password);

            if (compare) {
                const userData = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }

                const token = jwt.sign(userData, process.env.TOKEN);

                return {
                    ...userData,
                    token
                }

            } else {
                throw new Error("Senha incorreta.")
            }
        } else {
            throw new Error("Usuário não encontrado.")
        }
    }
}

module.exports = AuthProvider;