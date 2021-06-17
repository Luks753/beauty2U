import Button from '../../components/Button';
import CategoryLabel from '../../components/CategoryLabel';
import RatingCard from '../../components/RatingCard';

export default {
  name: 'showDetails',
  components: {
    'Button': Button,
    'CategoryLabel': CategoryLabel,
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
    showEvaluations() {
      document.getElementById("right").style.display = "none";
      document.getElementById("evaluations").style.display = "block";
    },

    hideEvaluations() {
      document.getElementById("right").style.display = "block";
      document.getElementById("evaluations").style.display = "none";
    }
  }
}


