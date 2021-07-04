import Button from '../../components/Button';
import CategoryLabel from '../../components/CategoryLabel';
import RatingCard from '../../components/RatingCard';
import professionals from '../../services/professionals';
import Modal from '../../components/Modal';

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
      showModal: false
    }
  },
  computed: {

  },
  mounted () {
    this.user_id = this.$route.params.id;
    this.load()
  },
  methods: {
    load() {
      professionals.show(this.user_id).then((response)=>{
        this.form = response.data.result;
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
    }
  }
}


