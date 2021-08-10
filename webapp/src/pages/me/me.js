import Button from '../../components/Button';
import Input from '../../components/Input';
import CategoryLabel from '../../components/CategoryLabel';
import auth from '../../services/auth';
import categories from '../../services/categories';



export default {
  name: 'professional-form',
  components: {
    'Button': Button,
    'Input': Input,
    'CategoryLabel': CategoryLabel
  },
  props: [],
  data() {
    return {
      isPerfil: true,
      form: {
        username: null,
        email: null,
        professional: {
          razao_social: null,
          address: {
            cep: null,
            logradouro: null,
            numero: null,
            bairro: null,
            cidade: null,
            estado: null,
          },
          atende_domicilio: null,
          services: [],
          categories: []
        }
      },
      service: {
        nome: null,
        valor: null
      },
      category: null,
      confirmPassword: null,
      categories: []
    }
  },
  computed: {

  },
  mounted() {
    categories.index().then((response) => {
      this.categories = response.data.result
    }).catch((error) => {
      console.log(error.response);
    });
    this.showPerfil();
  },
  methods: {
    showPerfil() {
      auth.me().then((response) => {
        const result = response.data.result;
        this.form.professional = result.professional;
      }).catch((error) => {
        console.log(error.response);
      });
    },
    cadastrar() {
      if(this.form.password && this.confirmPassword === this.form.password){
        auth.cadastrar(this.form).then((response)=>{
          this.$router.push('login')
        }).catch((error) => {
          console.log(error.response);
        });
      }else{
        alert('senhas diferentes')
      }
    },
    passar() {
      this.isPerfil = false;
    },
    addService() {
      this.form.professional.services.push({...this.service})
      this.service.nome = "";
      this.service.valor = "";
      const existCategory = this.form.professional.categories.find(category => category.id === this.category.id)
      if(!existCategory){
        this.form.professional.categories.push({...this.category})
      }
    }
  }
}


