<template lang="">
    <div>
           <p>{{ todoListSize }} item left</p>
    </div>
</template>
<script>
export default {
  name: "TodoFooter",

  computed: {
    todoListSize() {
      return this.$store.getters.todoLength;
    },
  },
};
</script>
<style lang="">
</style>