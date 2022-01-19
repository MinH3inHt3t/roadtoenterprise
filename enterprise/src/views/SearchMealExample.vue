<template>
  <div class="py-8">
    <form class="mb-8">
      <fieldset class="flex flex-col">
        <label class="mb-4 font-semibold" for="meal">Search meal</label>
        <input
          class="px-4 py-2 border border-gray-300 rounded-lg"
          type="text"
          autocomplete="off"
          v-model="mealQuery"
          id="meal"
        />
      </fieldset>
    </form>
    <div>
      <h1 class="font-bold text-2xl mb-2">Meals</h1>
      <div v-for="meal of meals" :key="meal.idMeal" class="py-1">
        <p>{{ meal.strMeal }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { abortable, didAbort } from "@/api/api";
import { searchMeals } from "@/api/mealApi";
import { withAsync } from "@/helpers/withAsync";
export default {
  data() {
    return {
      // Store users search query
      mealQuery: "",
      // Store meals returned for user's search query
      meals: [],
    };
  },
  watch: {
    // Perform search immediately when component is created
    // and when user's query changes
    mealQuery: {
      immediate: true,
      handler: "initSearchMeals",
    },
  },
  methods: {
    async initSearchMeals(q) {
      // Abort previous request
      this.$options.abort?.();

      const { response, error } = await withAsync(searchMeals, q, {
        abort: (abort) => (this.$options.abort = abort),
      });
      if (error) {
        console.log("error", error);
        if (error.aborted) {
          console.warn("Aborted!");
        }
        return;
      }
      //   // Get a new abortable. Axios will create new CancelToken
      //   const { abort, fn: abortableSearchMeals } = abortable(searchMeals);
      //   // Assign abort function on the instance so it can be
      //   // called when initSearchMeals is called again
      //   this.$options.abort = abort;
      // Initialise search
      //   const { response, error } = await withAsync(abortableSearchMeals, q, {});
      //   if (error) {
      //     // Log the error
      //     console.log("error", error);
      //     // Show a warning in the console when request was aborted
      //     if (didAbort(error)) {
      //       console.warn("Aborted!");
      //     }
      //     return;
      //   }
      this.meals = response.data.meals;
    },
  },
};
</script>
