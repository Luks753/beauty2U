import GoogleMap from '../../components/GoogleMap'
import Card from '../../components/Card'
import professionals from '../../services/professionals';

export default {
  name: 'map',
  components: {
    'GoogleMap': GoogleMap,
    'Card': Card
  },
  props: [],
  data() {
    return {
      isMap: true,
      domicilio: []
    }
  },
  computed: {

  },
  mounted() {
    professionals.indexDomicilio().then((response) => {
      this.domicilio = response.data.result;
    }).catch((error) => {
      console.log(error.response);
    });
  },
  methods: {
    openDetails(id) {
      this.$router.push(`/showDetails/${id}`)
    },
  }
}


