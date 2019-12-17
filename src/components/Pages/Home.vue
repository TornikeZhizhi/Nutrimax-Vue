<template>
  <div>
    <div class="weather"></div>
    <appHomeMainSlider></appHomeMainSlider>
    <appHomeProducts></appHomeProducts>
    <appHomeServices></appHomeServices>
    <appHomeNewsSlider></appHomeNewsSlider>
  </div>
</template>

<script>
import HomeMainslider from "../HomeComponents/HomeMainSlider.vue";
import HomeProducts from "../HomeComponents/HomeProducts.vue";
import HomeServices from "../HomeComponents/HomeServices.vue";
import HomeNewsSlider from "../HomeComponents/HomeNews.vue";
import axios from "axios";

export default {
  components: {
    appHomeMainSlider: HomeMainslider,
    appHomeProducts: HomeProducts,
    appHomeServices: HomeServices,
    appHomeNewsSlider: HomeNewsSlider
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>
