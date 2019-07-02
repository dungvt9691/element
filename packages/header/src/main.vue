<template>
  <header class="el-header" :class="customClass" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'ElHeader',

    componentName: 'ElHeader',

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
