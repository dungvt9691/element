<template>
  <i :class="['el-icon-' + name, customClass]"></i>
</template>

<script>
  export default {
    name: 'ElIcon',

    props: {
      customClass: {
        type: String,
        default: ''
      },
      name: String
    }
  };
</script>
