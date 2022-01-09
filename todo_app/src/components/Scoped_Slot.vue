<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <slot
        :item="item"
        :index="index"
        :another-attribute="anotherAttribute"
      ></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Scoped_Slot",
  data() {
    return {
      items: ["Feed a cat", "Buy milk"],
    };
  },
};
</script>