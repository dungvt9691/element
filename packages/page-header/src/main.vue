<template>
  <div class="el-page-header" :class="customClass">
    <div class="el-page-header__left" @click="$emit('back')">
      <i class="el-icon-back"></i>
      <div class="el-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="el-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'element-ui/src/locale';
export default {
  name: 'ElPageHeader',

  props: {
    customClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
