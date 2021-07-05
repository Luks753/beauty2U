import { http } from '../config'

const rating = {
    index() {
        return http.get('ratings');
    },
    showRating(id) {
        return http.get(`ratings/${id}`);
    },
    create(data){
      return http.post('ratings', data);
    }
}

export default rating;

