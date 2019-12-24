<template>
  <div class="container-fluid home_products_fluid">
    <div class="row" style="justify-content-center">
      <div
        class="col-12 d-flex justify-content-center"
        style="display:flex;justify-content:center"
      >
        <div class="products_tittle text-center">
          <h2>პროდუქტები</h2>
        </div>
      </div>
    </div>

    <div class="container home_product_container">
      <div class="row home_pr_row">
        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('pig')">
              <h3>ღორი</h3>
              <img src="../../assets/images/pig.png" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('bird')">
              <h3>ფრინველი</h3>
              <img src="../../assets/images/hen.png" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('cow')">
              <h3>მსხვილფეხა რქოსანი პირუტყვი</h3>
              <img src="../../assets/images/cow.png" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('fish')">
              <h3>თევზი</h3>
              <img class="fish_img" src="../../assets/images/fish_icon.svg" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('mckeri')">
              <h3>მწყერი</h3>
              <img src="../../assets/images/writer.png" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('rabbit')">
              <h3>ბოცვერი</h3>
              <img src="../../assets/images/rabbit.png" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('sheep')">
              <h3>ცხვარი</h3>
              <img src="../../assets/images/sheep.png" />
            </a>
          </div>
        </div>

        <div class="col-lg-3 col-6">
          <div class="products_content">
            <a href @click.prevent="productGo('other')">
              <h3>სხვა</h3>
              <img src="../../assets/images/others.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    productGo(arg) {
      // this.$store.state.animalData.animalVuFilter.push("other");
      this.$router.push({
        path: "/products",
        query: {
          type: arg
        },
        hash:"top"
      });

      // console.log(this.$store.state.animalData.animalVuFilter);
    }
  }
};
</script>

<style>
.home_products_fluid > .row {
  justify-content: center;
}
</style>
