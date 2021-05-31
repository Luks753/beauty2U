const knex = require('../database');

class CategoriesResource {

    static async show(id) {
        try {
            let category = await knex('categories').select('*').where('id', id);
            category = category[0];

            const output = {
                ...category
            }

            return output;
        } catch (error) {
            console.log(error)
        }
    }

    static async search(){
        try {
            let query = knex('categories').select('*');

            return await query;
        } catch (error) {
            console.log(error)
        }
    }

    static async create(data) {
        try {
            const categories = await knex('categories').insert(data);

            return categories[0];
        } catch (error) {
            console.log(error)
        }
    }

    static async associateWithProfessional(data){
        try{
            const association = await knex('professionals_categories').insert(data);
            

            console.log(association)
            return association;
        }catch(error){
            console.log(error)
        }
    }

    static async indexAssociations(){
        try {
            let query = await knex('professionals_categories').select('*');

            console.log(query)
            return query;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = CategoriesResource;