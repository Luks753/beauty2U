import { http } from '../config'

const auth = {
    login(data) {
        return http.post('login', data);
    },
    cadastrar(data) {
        return http.post('register', data);
    },
    me() {
        return http.get('me', {
            headers: {
                'x-access-token': localStorage.token
            }
        });
    }
}

export default auth;

