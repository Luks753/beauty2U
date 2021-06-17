import { http } from '../config'

const professionals = {
    index(params) {
        return http.get('professionals', params);
    },
    show(id) {
        return http.get(`professionals/${id}`);
    },
    indexDomicilio(params){
        return http.get('domicilio', params);        
    }
}

export default professionals;

