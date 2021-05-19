const knex = require('../database');
const bcrypt = require('bcrypt');

class UsersResource {
    static async search(data) {
        try {
            let query = knex('users').select('*');

            if (data.id) {
                query.where('id', data.id);
            }
            if (data.username) {
                query.where('username', data.username);
            }

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const password = await bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS));
            
            const user = {
                username: data.username,
                email: data.email,
                password
            }
            
            return await knex('users').insert(user);            
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UsersResource;