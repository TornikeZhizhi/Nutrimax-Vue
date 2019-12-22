<template>
  <div class="container-fluid products_fluid">
    <div class="container products_inside_container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div class="products_tittle">
            <h2>პროდუქცია</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="row food_content_lft_row">
            <div class="col-12">
              <div class="img_zoom_container">
                <div class="imgBox" style="position: relative;">
                  <img :src="data.img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="inside_product_info">
            <div class="inside_product_tittle_rating">
              <h2>{{ data.title }}</h2>

              <img src="../../assets/images/stars.png" />

              <span>{{ data.price }}</span>
            </div>

            <div class="inside_product_information">
              <h3>გამოყენებული ინგრედიენტები</h3>

              <p>
                {{ data.text }}
              </p>

              <a href="" data-toggle="modal" data-target="#exampleModal"
                >ინტერესის გამოხატვა</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      data: null
    };
  },
  computed: {
    ...mapGetters(["animalVuData"]),
    animal() {
      //   return this.data;
    }
  },
  created() {
    // if (this.data == undefined) {
    //   this.$router.push({
    //     name: "contact"
    //   });
    // }
    var productid = this.$route.query.productId;
    const data = this.animalVuData[productid];
    this.data = data;
    console.log(this.data);
  }
};
</script>

<style scoped>
.products_fluid {
  padding: 100px 0;
}
img {
  object-fit: contain !important;
}
</style>
