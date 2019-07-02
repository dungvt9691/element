<template>
  <div class="el-button-group" :class="customClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElButtonGroup',
    props: {
      customClass: {
        type: String,
        default: ''
      }
    }
  };
</script>
