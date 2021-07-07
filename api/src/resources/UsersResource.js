const knex = require('../database');
const bcrypt = require('bcrypt');
const ProfessionalsResource = require('./ProfessionalsResource');
const AddressesResource = require('./AddressesResource');
const ServicesResource = require('./ServicesResource');
const CategoriesResource = require('./CategoriesResource');

class UsersResource {

    static fields(){
        return ['id', 'username', 'email']
    }

    static async search(data, isLogin) {
        try {
            let query = knex('users').select(this.fields());            

            if(isLogin){
                query.select('password').where('username', data.username);
            }

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const professional = data.professional;
            const password = await bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS));

            const user = {
                username: data.username,
                email: data.email,
                password
            }

            const save = await knex('users').insert(user);

            if(professional){
                let address_id;
                
                if(professional.address){
                    address_id = await AddressesResource.create(professional.address);
                }

                const saveProfessional = await ProfessionalsResource.create({address_id: address_id, user_id: save[0], ...data.professional})
            }

            return save[0];
        } catch (error) {
            console.log(error)
        }
    }

    static async show(id) {
        try {
            let user = await knex('users').select(this.fields()).where('id', id);  
            user = user[0];

            const professional = await ProfessionalsResource.search(user.id);

            if (professional) {
                professional.services = await ServicesResource.search({ professional_id: professional.id });
                professional.categories = await CategoriesResource.getAssociation(professional.id);
            }

            const output = {
                ...user,
                professional
            }

            return output;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UsersResource;