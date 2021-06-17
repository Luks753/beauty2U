const knex = require('../database');

class CategoriesResource {

    static async show(id) {
        try {
            let category = await knex('categories').select('*').where('id', id);

            return category[0];
        } catch (error) {
            console.log(error)
        }
    }

    static async search() {
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

    static async associateWithProfessional(data) {
        try {
            const association = await knex('professionals_categories').insert(data);


            console.log(association)
            return association;
        } catch (error) {
            console.log(error)
        }
    }

    static async indexAssociations(nome) {
        try {
            let query = await knex('professionals_categories')
                .select([
                    'professionals.user_id as id',
                    'professionals.razao_social as nome',
                    'categories.nome as categoria'
                ])
                .where('categories.nome', nome)
                .join('professionals', 'professionals_categories.professional_id', 'professionals.id')
                .join('categories', 'professionals_categories.category_id', 'categories.id');;

            return query;
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = CategoriesResource;