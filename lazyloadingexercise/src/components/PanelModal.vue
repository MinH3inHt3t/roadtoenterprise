<template>
  <div :class="[$style.lazyModal, open && $style.open]">
    <slot />
  </div>
</template><script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style module>
.lazyModal {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  @apply bg-gray-100 shadow-lg transition-transform transform translate-x-full duration-500;
}

.open {
  @apply translate-x-0;
}
</style>