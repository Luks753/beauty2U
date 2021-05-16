const knex = require('../database');
const bcrypt = require('bcrypt');

class UsersResource {
    static async search(id) {
        try {
            let query = knex('users').select('*');

            if (id) {
                query.where('id', id);
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