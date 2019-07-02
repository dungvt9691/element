<template>
  <aside class="el-aside" :class="customClass" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'ElAside',

    componentName: 'ElAside',

    props: {
      customClass: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
