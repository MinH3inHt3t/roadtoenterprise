<template>
  <ToggleProvider :on="false">
    <template #default="{ isOn, turnOn, turnOff, toggle }">
      <div>
        <div class="flex space-x-3 mb-4">
          <button @click.prevent="turnOn">On</button>
          <button @click.prevent="turnOff">Off</button>
          <button @click.prevent="toggle">Toggle</button>
        </div>
        <div v-if="isOn" class="mb-4">Hooray, TogglerProvider is working!</div>
      </div>
    </template>
  </ToggleProvider>
</template>
<script>
import ToggleProvider from "@/components/common/ToggleProvider.vue";
export default {
  components: {
    ToggleProvider,
  },
};
</script>
