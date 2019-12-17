<template>
  <div>
    <div class="container-fluid services_fluid"></div>

    <div class="container-fluid service_fluid">
      <div class="container service_container">
        <div class="service_fix_icons">
          <div class="service_icon" @click="labTrue = true">
            <h2>ლაბორატორია</h2>

            <img src="../../assets/images/serv_icon2.svg" />
          </div>

          <div class="service_icon" @click="labTrue = false">
            <h2>ფერმერების მხარდაჭერა</h2>
            <img src="../../assets/images/serv_icon1.svg" />
          </div>
        </div>

        <div class="service_wrapp" v-if="labTrue">
          <div class="service_tittle">
            <h2>ლაბორატორია</h2>
          </div>
          <div class="row justify-content-center serv_row">
            <div class="col-12 col-lg-10">
              <div class="service_text_box">
                <p>{{serviceVuGetters[0].text}}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="service_wrapp" v-if="!labTrue">
          <div class="service_tittle">
            <h2>ფერმერის მხარდაჭერა</h2>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="service_text_box">
                <p>{{serviceVuGetters[1].text}}</p>
              </div>
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
      labTrue: true
    };
  },
  mounted() {
    if (this.$store.state.services.serviceActiveIndex == 0) {
      this.labTrue = true;
    } else {
      this.labTrue = false;
    }
  },

  computed: {
    ...mapGetters(["serviceVuGetters", "tokk"])
  }
};
</script>

<style></style>
