<template>
  <div class="relative min-h-screen">
    <header class="bg-indigo-900 h-16 flex items-center justify-center">
      <p v-if="user" class="text-indigo-100 text-lg font-semibold">
        Hello {{ user.name }}
      </p>
    </header>
    <slot />
    <ChatBubble />
  </div>
</template>
<script>
import { userComputed } from "@/services/stateful/userService";
import ChatBubble from "@/components/chat/ChatBubble";
export default {
  components: {
    ChatBubble,
  },
  computed: {
    ...userComputed,
  },
};
</script>
<style module></style>