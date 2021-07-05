import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import StarRating from 'vue-star-rating';
import rating from '../../services/rating';

export default {
  name: 'Modal',
  components: {
    'Button': Button,
    'TextArea': TextArea,
    'StarRating': StarRating,
  },
  props: {
    onClose: {
      type: Function
    }
  },
  data () {
    return {
      rating: 0,
      text: null,
      user_id: null,
    }
  },
  computed: {

  },
  mounted () {
    this.user_id = this.$route.params.id;
  },
  methods: {
    onSubmit() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;

      let data = {
        nota: this.rating,
        comentario: this.text,
        data_hora: today,
        service_id: null,
        user_id: this.user_id,
      }
      rating.create(data).then((response) => {
        console.log('foi')
      }).catch((error) => {
        console.log(error.response);
      });
    }
  }
}


