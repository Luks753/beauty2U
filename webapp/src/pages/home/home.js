import Button from '../../components/Button';
import CategoryLabel from '../../components/CategoryLabel';
import Card from '../../components/Card';
import RatingCard from '../../components/RatingCard';

export default {
  name: 'home',
  components: {
    'Button': Button,
    'CategoryLabel': CategoryLabel,
    'Card': Card,
    'RatingCard': RatingCard
  },
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    acharServico(){
      this.$router.push('map')
    },
    divulgarServico(){
      this.$router.push('professionalform')
    }
  }
}


