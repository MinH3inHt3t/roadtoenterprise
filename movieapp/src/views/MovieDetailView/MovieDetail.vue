<template  >
  <div>
    <div class="bg-[lightgray] px-4 py-4">
      <div class="imageSec">
        <img :src="fetchImage(data.poster_path)" alt="" />
      </div>
      <div class="detailSec">
        <h2>{{ data.poster_path }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
import { useApi } from "../../api/composables/useApi";
import { fetchMovieDetail, fetchImage } from "../../api/movieApi";

export default {
  name: "MovieDetail",

  setup() {
    const { data, movieStatus, movieError, exec, ...movieStatusObj } = useApi(
      "fetchMovieDetail",
      fetchMovieDetail
    );
    exec("425909");

    // console.log("img pat" + JSON.stringify(imgPath));
    return {
      data,
      movieStatus,
      movieError,
      exec,
      ...movieStatusObj,
      fetchImage,
    };
  },
};
</script>
<style  >
</style>