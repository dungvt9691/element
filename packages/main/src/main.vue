<template>
  <main class="el-main" :class="customClass">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: 'ElMain',
    componentName: 'ElMain',
    props: {
      customClass: {
        type: String,
        default: ''
      }
    }
  };
</script>
