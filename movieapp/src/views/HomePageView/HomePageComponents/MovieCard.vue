<template  >
  <div
    class="
      shadow-lg
      overflow-hidden
      flex-grow flex-shrink-0
      basis-44
      h-96
      bg-[#1B6185]
      rounded
    "
  >
    <!--Shrink Div -->

    <div
      class="bg-[dark] w-full h-60 shadow-lg slide flex flex-wrap items-start"
    >
      <!-- cardOuterDiv-->
      <div class="w-full h-72">
        <img :src="movieImage" alt="Image" class="h-full w-full" />
      </div>

      <div class="px-2 py-4">
        <h1 class="text-[#CCD3DC] font-extrabold">{{ movieName }}</h1>
        <h3 class="text-[#CCD3DC] text-sm">{{ movieDate }}</h3>
      </div>
    </div>
    <!-- cardOuterDiv-->
  </div>
  <!--Shrink Div -->
</template>
<script setup>
const props = defineProps({
  movieName: String,
  movieImage: String,
  movieDate: String,
});
</script >

<style  >
</style>