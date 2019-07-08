export default {
  functional: true,

  name: 'ElDivider',

  props: {
    customClass: {
      type: String,
      default: ''
    },

    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },

    contentPosition: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  },

  render(h, context) {
    const $slots = context.slots();
    const { direction, contentPosition, customClass } = context.props;
    return (
      <div class={['el-divider', `el-divider--${direction}`, customClass]}>
        {
          $slots.default && direction !== 'vertical'
            ? <div class={['el-divider__text', `is-${contentPosition}`]}>{$slots.default}</div>
            : null
        }
      </div>
    );
  }
};
