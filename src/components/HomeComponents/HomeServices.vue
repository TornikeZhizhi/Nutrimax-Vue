<template>
  <div class="container-fluid home_services_fluid">
    <div class="container home_services_tittle_container">
      <div class="row" style="display:flex;justify-content:center">
        <div class="col-6">
          <div
            class="laboratory_tittle text-center"
            @click="homeService = true"
            v-bind:class="{ active: homeService }"
          >
            <h2>{{serviceVuGetters[0].title}}</h2>
          </div>
        </div>
        <div class="col-6">
          <div
            class="farmers_tittle text-center"
            @click="homeService = false"
            v-bind:class="{ active: !homeService }"
          >
            <h2>{{serviceVuGetters[1].title}}</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- // container 1 -->
    <div class="container home_services_content_container lab_cont" v-if="homeService">
      <div class="row" style="justify-content: center">
        <div
          class="col-12 d-flex justify-content-center"
          style="display: flex;
    justify-content: center;"
        >
          <div class="services_tittle text-center">
            <h3>{{serviceVuGetters[0].title}}</h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="laboratory_content">
            <div class="lab_text">
              <p>{{serviceVuGetters[0].text | StringFilter}}</p>
            </div>

            <a href @click.prevent="goServices(0)">იხილეთ სრულად</a>
          </div>
        </div>
      </div>
    </div>

    <!-- container 2 -->

    <div class="container home_services_content_container farmers_cont" v-if="!homeService">
      <div class="row">
        <div
          class="col-12 d-flex justify-content-center"
          style="display: flex;
    justify-content: center;"
        >
          <div class="services_tittle text-center">
            <h3>{{serviceVuGetters[1].title}}</h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="laboratory_content">
            <div class="lab_text">
              <p>{{serviceVuGetters[1].text | StringFilter}}</p>
            </div>

            <a href @click.prevent="goServices(1)">იხილეთ სრულად</a>
          </div>
        </div>
      </div>
    </div>

    <!-- //container 2 -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      homeService: true
    };
  },
  methods: {
    goServices(arg) {
      this.$store.state.services.serviceActiveIndex = arg;
      console.log(this.$store.state.services.serviceActiveIndex);
      this.$router.push("/services");
    }
  },

  computed: {
    ...mapGetters(["serviceVuGetters"])
  },

  filters: {
    StringFilter(value) {
      return value.slice(0, 200) + "...";
    }
  }
};
</script>

<style scoped>
.row {
  justify-content: center;
}
</style>
