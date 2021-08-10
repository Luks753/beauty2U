import Button from '../../components/Button';
import Input from '../../components/Input';
import auth from '../../services/auth';

export default {
  name: 'login',
  components: {
    'Button': Button,
    'Input': Input
  },
  props: [],
  data() {
    return {
      name: '',
      value: '',
      form: {
        username: null,
        password: null
      }
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    login() {
      auth.login(this.form).then((response) => {
        localStorage.login = true
        localStorage.username = response.data.result.username
        localStorage.token = response.data.result.token
        this.$router.replace('map')
        location.reload();
      }).catch((error) => {
        console.log(error.response);
      });
    }
  }
}


