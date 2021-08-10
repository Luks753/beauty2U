import Button from '../../components/Button';
import CategoryLabel from '../../components/CategoryLabel';
import RatingCard from '../../components/RatingCard';
import Modal from '../../components/Modal';
import professionals from '../../services/professionals';
import rating from '../../services/rating';

export default {
  name: 'showDetails',
  components: {
    'Button': Button,
    'CategoryLabel': CategoryLabel,
    'RatingCard': RatingCard,
    'Modal': Modal
  },
  props: [],
  data () {
    return {
      form: {},
      user_id: null,
      showModal: false,
      services: {},
      ratings: {},
      average: null
    }
  },
  computed: {

  },
  mounted () {
    this.user_id = this.$route.params.id;
    this.load();

    rating.index().then((response)=>{
      this.ratings = response.data.result;
      if(this.ratings.length > 0){
        this.average = this.ratings.reduce(function(prev, cur) {
          return prev + cur.nota;
        }, 0);
        console.log(this.average)
      }
    }).catch((error) => {
      console.log(error.response);
    });
  },
  methods: {
    load() {
      professionals.show(this.user_id).then((response)=>{
        this.form = response.data.result;
      }).catch((error) => {
        console.log(error.response);
      });

      professionals.showServices().then((response)=>{
        this.services = response.data.result;
      }).catch((error) => {
        console.log(error.response);
      });
    },

    showEvaluations() {
      document.getElementById("right").style.display = "none";
      document.getElementById("evaluations").style.display = "block";
    },

    hideEvaluations() {
      document.getElementById("right").style.display = "block";
      document.getElementById("evaluations").style.display = "none";
    },

    back() {
      this.$router.go(-1);
    },

    openModal() {
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },
  }
}


