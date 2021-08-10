Component('rating-star', {
    template: '@',

    props: {
        name: {
            type: String,
            default: null
        },
        value: {
            type: Number,
            default: null
        },
        id: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        }
    },

    data: function() {
        return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        star_over(index) {
          if (!this.disabled) {
            this.temp_value = this.value;
            this.value = index;
            return this.value;
          }

        },
        star_out() {
          if (!this.disabled) {
            this.value = this.temp_value;

            return this.value;
          }
        },
        set(value) {
            if (!this.disabled) {
                this.temp_value = value;
                this.value = value;
            }
        }
    },
    mounted() {
        // console.log(this.value)
    },
});
