<template>
  <footer class="el-footer" :class="customClass" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'ElFooter',

    componentName: 'ElFooter',

    props: {
      customClass: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
