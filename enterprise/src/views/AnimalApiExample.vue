<template>
  <div>
    <!-- hello -->
    <p v-if="fetchDogStatusIdle">Welcome</p>
    <BaseLazyLoad :show="fetchDogStatusPending">
      <p>Loading Dog</p>
    </BaseLazyLoad>
    <p v-if="fetchDogStatusError">There was a problem.</p>
    <div v-if="true">
      <img :src="data.message" alt="Dog image" />
    </div>

    <div>{{ data }} print data</div>
    <div>{{ catdata }} print data</div>

    <p v-if="fetchKittyStatusIdle">Welcome</p>
    <BaseLazyLoad :show="fetchKittyStatusPending">
      <p>Loading Dog</p>
    </BaseLazyLoad>
    <p v-if="fetchKittyStatusError">There was a problem.</p>
    <div v-if="true">
      <img :src="catdata" alt="Cat image" />
    </div>
  </div>
</template>
<script>
import { fetchDog, fetchKitty } from "../api/animalApi";

import { apiStatus } from "@/api/constants/apiStatus";
// import { withAsync } from "@/helpers/withAsync";
// import { apiStatusComputedFactory } from "@/helpers/apiStatusComputedFactory";
import BaseLazyLoad from "../components/Base/BaseLazyLoad.vue";
import { useApi } from "../api/composables/useApi";
import { concatUrl } from "../helpers/concatUrlHelper";
export default {
  name: "AnimalApiExample",
  components: {
    BaseLazyLoad,
  },
  data() {
    return {
      dog: null,
      cat: null,
    };
  },

  setup() {
    const dogRes = useApi("fetchDog", fetchDog);
    const data = dogRes.data;

    const catRes = useApi("fetchKitty", fetchKitty, concatUrl);
    const catdata = catRes.data;
    // const { catData, catStatus, catError, catExec, ...catStatusObj } = useApi(
    //   "fetchKitty",
    //   fetchKitty
    // );

    dogRes.exec();
    catRes.exec();
    // catExec.exec();

    return {
      data,
      catdata,
      // ...statusobj,

      // catData,
      // catStatus,
      // catError,
      // catExec,
      // ...catStatusObj,
    };
  },

  methods: {
    // async fetchDog() {
    //   this.fetchDogStatus = apiStatus.PENDING;
    //   // const { response, error } = await withAsync(fetchDog);
    //   if (error) {
    //     this.fetchDogStatus = apiStatus.ERROR;
    //     return;
    //   }
    //   this.dog = response.data.message;
    //   console.log("Pending " + this.fetchDogStatusPending);
    //   this.fetchDogStatus = apiStatus.SUCCESS;
    // },
    // async fetchKitty() {
    //   this.fetchKittyStatus = apiStatus.PENDING;
    //   // const { response, error } = await withAsync(fetchKitty);
    //   if (error) {
    //     this.fetchKittyStatus = apiStatus.ERROR;
    //     return;
    //   }
    //   this.cat = "https://cataas.com" + response.data.url;
    //   this.fetchKittyStatus = apiStatus.SUCCESS;
    // },
    // fetchAnimals() {
    //   this.fetchDog();
    //   this.fetchKitty();
    // },
  },
  computed: {
    // ...apiStatusComputedFactory("fetchDogStatus"),
    // ...apiStatusComputedFactory("fetchKittyStatus"),
  },

  created() {
    this.apiStatus = apiStatus;
    // this.fetchAnimals();
  },
};
</script>
