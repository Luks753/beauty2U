import Card from '../../components/Card';
import categories from '../../services/categories';

export default {
  name: 'categoriesList',
  components: {
    'Card': Card
  },
  props: [],
  data() {
    return {
      category: null,
      professionals: []
    }
  },
  computed: {

  },
  mounted() {
    this.category = this.$route.params.nome
    this.load()
  },
  methods: {
    load() {
      categories.indexProfessionals(this.category).then((response) => {
        this.professionals = response.data.result
        console.log(this.professionals)
      }).catch((error) => {
        console.log(error.response);
      });
    },
    openDetails(id) {
      this.$router.push(`/showDetails/${id}`)
    },
  }
}
