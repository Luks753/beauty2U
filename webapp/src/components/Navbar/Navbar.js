export default {
  name: 'CategoryLabel',
  components: {},
  props: {
    link: String,
  },
  data() {
    return {
      name: null
    }
  },
  computed: {

  },
  mounted() {
    if (localStorage.login) {
      this.name = localStorage.username
    }
  },
  methods: {
    logout(){
      localStorage.clear();
      this.name = null;
      this.$router.push('/')
    }
  }
}


