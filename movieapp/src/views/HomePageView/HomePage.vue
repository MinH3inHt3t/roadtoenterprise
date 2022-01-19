<template >
  <div
    class="px-0 md:px-16 py-20 overflow-hidden bg-[#1B2838]"
    id="mainHomePageDiv"
  >
    <!-- mainHomePageDiv-->
    <div class="flex flex-col justify-center items-center space-y-4">
      <!-- Carousel -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide relative md:w-3/4"
        data-bs-ride="carousel"
      >
        <div
          class="
            carousel-indicators
            absolute
            right-0
            bottom-0
            left-0
            flex
            justify-center
            p-0
            mb-4
          "
        >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <!-- <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="block w-full"
              alt="Wild Landscape"
            /> -->
            <MovieCard
              movieName="Commando"
              movieImage="https://foumovies.one/wp-content/uploads/2022/01/mvCVaas7FkRV8uvyIJl1ANdT28k-185x278.jpg"
              movieDate="2022"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <!-- <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            /> -->
            <MovieCard
              movieName="Commando"
              movieImage="https://foumovies.one/wp-content/uploads/2022/01/mvCVaas7FkRV8uvyIJl1ANdT28k-185x278.jpg"
              movieDate="2022"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <!-- <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            /> -->
            <MovieCard
              movieName="Commando"
              movieImage="https://foumovies.one/wp-content/uploads/2022/01/mvCVaas7FkRV8uvyIJl1ANdT28k-185x278.jpg"
              movieDate="2022"
            />
          </div>
        </div>
        <button
          class="
            carousel-control-prev
            absolute
            top-0
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            left-0
          "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="
            carousel-control-next
            absolute
            top-0
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            right-0
          "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Carousel -->

      <!-- Random Section -->
      <div
        class="w-full rounded-2xl md:w-3/4 h-auto bg-[#262B36]"
        id="randomMovieDiv"
      >
        <div class="text-left px-4 py-4">
          <h3 class="text-[#CCD3DC] font-bold my-2.5">RANDOM MOVIES</h3>

          <div id="" class="flex flex-wrap p-0 gap-5">
            <!--replve here -->
            <MovieCard
              movieName="Commando"
              movieImage="https://foumovies.one/wp-content/uploads/2022/01/mvCVaas7FkRV8uvyIJl1ANdT28k-185x278.jpg"
              movieDate="2022"
            />

            <MovieCard
              movieName="Matrix"
              movieImage="https://foumovies.one/wp-content/uploads/2021/12/8c4a8kE7PizaGQQnditMmI1xbRp-185x278.jpg"
              movieDate="2022"
            />

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>
          </div>
        </div>
      </div>
      <!-- Random Section -->

      <!-- Recent  -->
      <div class="w-full md:w-3/4 h-auto bg-[#262B36]" id="randomMovieDiv">
        <div class="text-left px-4 py-4">
          <h3 class="text-[#CCD3DC] font-bold">Recent</h3>

          <div id="" class="flex flex-wrap p-0 gap-1">
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>
            <div
              class="flex-grow flex-shrink-0 basis-44 h-44 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>

            <div
              class="flex-grow flex-shrink-0 basis-44 h-0 bg-[#1B6185]"
            ></div>
          </div>
        </div>
      </div>
      <!-- Recent  -->
    </div>
  </div>
  <!-- end mainHomePageDiv-->
</template>


<script setup >
import MovieCard from "./HomePageComponents/MovieCard.vue";
</script>

<style lang="">
</style>