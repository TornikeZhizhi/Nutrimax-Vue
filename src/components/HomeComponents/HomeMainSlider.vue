<template>
  <div class="home_main_slider">
    <carousel
      :autoplay="true"
      :nav="false"
      :smartSpeed="1200"
      :autoplayTimeout="5000"
      :dots="false"
      :loop="true"
      :items="1"
    >
      <div v-for="(data, index) in sliderData" :key="index">
        <img :src="data.img" />
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  data: function() {
    return {
      sliderData: [
        {
          img:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
        },
        {
          img:
            "https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    };
  },
  components: {
    carousel
  }
};
</script>

<style>
.home_main_slider img {
  height: calc(100vh - 100px);
  object-fit: cover;
}
.home_main_slider .owl-nav {
  display: none !important;
}
</style>
