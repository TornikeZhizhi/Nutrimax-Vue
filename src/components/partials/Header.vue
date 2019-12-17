<template>
  <div>
    <div class="container-fluid header_fluid">
      <div class="row" style="display:flex">
        <div class="col-lg-2 col-6">
          <div class="header_logo">
            <router-link tag="a" to="/">
              <img src="../../assets/images/main_logo.png" />
            </router-link>
          </div>
        </div>

        <div class="col-lg-8 col-7 header_nav_col">
          <div class="header_nav">
            <ul>
              <router-link tag="li" to="/" exact active-class="active">
                <a href>მთავარი</a>
              </router-link>
              <router-link tag="li" active-class="active" to="/about">
                <a href>ჩვენს შესახებ</a>
              </router-link>
              <router-link tag="li" active-class="active" to="/news">
                <a href>სიახლეები</a>
              </router-link>
              <router-link tag="li" active-class="active" to="/services">
                <a href>სერვისები</a>
              </router-link>
              <router-link tag="li" active-class="active" to="/advices">
                <a href>რჩევები ფერმერებს</a>
              </router-link>
              <router-link tag="li" active-class="active" to="/products">
                <a href>პროდუქტები</a>
              </router-link>
              <router-link tag="li" active-class="active" to="/contact">
                <a href>კონტაქტი</a>
              </router-link>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <div class="header_language_search_box">
            <div class="header_language_box">
              <span class="active">GEO</span>
              <span>Eng</span>
            </div>

            <div class="header_seach_box">
              <span id="header_search" @click="searchBar = !searchBar">
                <img src="../../assets/images/search.png" />
              </span>

              <div class="header_form" v-if="searchBar">
                <form action>
                  <input type="search" name />
                </form>
              </div>
            </div>

            <div class="hamburger_box">
              <img src="../../assets/images/hamburger.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchBar: false
    };
  }
};
</script>

<style scoped>
.header_nav li.active a {
  color: #f5c400;
}
</style>
