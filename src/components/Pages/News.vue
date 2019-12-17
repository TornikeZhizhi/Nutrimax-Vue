<template>
  <div class="container-fluid news_fluid">
    <div class="container news_in_container">
      <div class="row" style="display:flex; justify-content:center">
        <div class="col-12 d-flex justify-content-center">
          <div class="news_tittle">
            <h2>სიახლეები</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-6 new_col"
          v-for="(data, index) in newsGetters"
          :key="index"
        >
          <div class="news_box">
            <div class="news_img_box">
              <a href>
                <img
                  src="../../assets/images/photo-1523741543316-beb7fc7023d8.jpg"
                />
              </a>
            </div>

            <div class="news_info_box">
              <div class="news_info_text">
                <h3>{{ data.title }}</h3>
                <p>{{ data.text }}</p>
              </div>

              <a href>იხილეთ სღულად</a>
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
      newData: [
        { title: "ახალი ამბები", text: "ყველაზე გემრიელი უქმეენი იწყება" },
        { title: "ახალი ამბები2", text: "ყველაზე გემრიელი უქმეენი იწყება2" },
        { title: "ახალი ამბები3", text: "ყველაზე გემრიელი უქმეენი იწყება3" },
        { title: "ახალი ამბები4", text: "ყველაზე გემრიელი უქმეენი იწყება4" }
      ]
    };
  },
  computed: {
    ...mapGetters(["newsGetters"])
  },
  mounted() {
    this.$store.state.news.NewsData = this.newData;
  }
};
</script>

<style scoped>
.news_in_container {
  margin-top: 100px;
}
</style>
