<template>
  <div v-if="showLoader">
    <p>Hello</p>
    <slot />
  </div>
</template>

<script>
// import { ref, watch } from "vue";
export default {
  name: "BaseLazyLoad",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 2000,
    },
  },

  data() {
    return {
      // Flag for showing the loader
      showLoader: false,
    };
  },
  created() {
    console.log("Created " + this.show);
  },

  watch: {
    show(newshow) {
      console.log("new value" + newshow);
      if (newshow) {
        // Start show loader timeout
        this.showLoader = true;
        this.timeout = setTimeout(() => {
          this.showLoader = false;
        }, this.delay);
      }
      //  else {
      //   clearTimeout(this.timeout);
      //   this.showLoader && (this.showLoader = false);
      // }
    },
  },

  //   setup(props) {
  //     // Flag for showing the loader
  //     const showLoader = ref(false);
  //     // Store timeout with will turn on loader after a delay
  //     let timeout = null;
  //     // Run any time loader should be switched on or off
  //     watch(
  //       () => props.show,
  //       (show) => {
  //         // Start show loader timeout

  //         if (show) {
  //           timeout = setTimeout(() => {
  //             showLoader.value = true;
  //             console.log("SHowLoader " + showLoader.value);
  //           }, props.delay);
  //         } else {
  //           console.log("SHowLoader else" + showLoader.value);
  //           // Clear timeout and hide loader
  //           clearTimeout(timeout);
  //           showLoader.value && (showLoader.value = false);
  //         }
  //       }
  //     );
  //     return {
  //       showLoader,
  //     };
  //   },
};
</script>
