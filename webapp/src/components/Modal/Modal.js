import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import StarRating from 'vue-star-rating';

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
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onSubmit() {
      //
    }
  }
}


