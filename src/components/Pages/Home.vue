<template>
  <div>
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

export default {
  components: {
    appHomeMainSlider: HomeMainslider,
    appHomeProducts: HomeProducts,
    appHomeServices: HomeServices,
    appHomeNewsSlider: HomeNewsSlider
  }
};
</script>

<style></style>
