<template>
  <!-- Also add v-on="$listeners" in Vue 2 -->
  <component :is="component" class="tag" v-bind="$attrs">
    <slot />
  </component>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    component: {
      type: String,
      default: "div",
    },
  },
};
</script>
<style lang="scss" scoped>
.tag {
  @apply px-3 py-2 bg-purple-100 text-purple-600 border
border-purple-400 rounded-lg font-semibold;
}
</style>