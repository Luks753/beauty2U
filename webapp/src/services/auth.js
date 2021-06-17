import { http } from '../config'

const auth = {
    login(data) {
        return http.post('login', data);
    },
    cadastrar(data){
        return http.post('register', data);        
    }
}

export default auth;

