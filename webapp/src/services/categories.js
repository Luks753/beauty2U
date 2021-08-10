import { http } from '../config'

const categories = {
    index() {
        return http.get('categories');
    },
    indexProfessionals(nome) {
        return http.get(`categories/${nome}/professionals`);
    },
}

export default categories;

