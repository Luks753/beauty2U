import Button from '../../components/Button';
import Input from '../../components/Input';
import { http } from '../../config'

export default {
  name: 'userForm',
  components: {
    'Button': Button,
    'Input': Input
  },
  props: [],
  data () {
    return {
      form: {
        username: null,
        email: null,
        password: null,
      },
      confirmPassword: null
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    cadastrar(){
      if(this.confirmPassword === this.form.password){
        http.post('register', this.form).then((response)=>{
          this.$router.push('login')
        }).catch((error) => {
          console.log(error.response);
        });
      }else{
        alert('senhas diferentes')
      }
    }
  }
}


