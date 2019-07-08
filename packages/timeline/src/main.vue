<script>
  export default {
    name: 'ElTimeline',

    props: {
      customClass: {
        type: String,
        default: ''
      },
      reverse: {
        type: Boolean,
        default: false
      }
    },

    provide() {
      return {
        timeline: this
      };
    },

    render() {
      const reverse = this.reverse;
      const classes = [{
        'el-timeline': true,
        'is-reverse': reverse
      }, this.customClass];
      let slots = this.$slots.default || [];
      if (reverse) {
        slots = slots.reverse();
      }
      return (<ul class={ classes }>
        { slots }
      </ul>);
    }
  };
</script>
