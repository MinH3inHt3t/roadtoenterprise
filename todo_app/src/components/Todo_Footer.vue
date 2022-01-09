<template lang="">
    <div>
           <p>{{ todoListSize }} item left</p>
    </div>
</template>
<script>
export default {
  name: "TodoFooter",
  inject: ["todoListSize"],
};
</script>
<style lang="">
</style>