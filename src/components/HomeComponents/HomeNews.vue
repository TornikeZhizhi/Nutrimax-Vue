<template>
  <div class="home_news_fluid">
    <div class="row justify-content-center" style="display:flex;justify-content:center">
      <div class="home_news_tittle text-center">
        <h2>
          <a href="news.html">სიახლეებიიგიი</a>
        </h2>
      </div>
    </div>
    <div class="home_news_container">
      <div class="home_news_slider news_slide">
        <carousel
          :autoplay="true"
          :margin="20"
          :nav="false"
          :smartSpeed="1200"
          :autoplayTimeout="5000"
          :dots="true"
          :loop="true"
          :items="3"
        >
          <div class="news_box">
            <div class="news_img_box">
              <a href>
                <img src="../../assets/images/photo-1523741543316-beb7fc7023d8.jpg" />
              </a>
            </div>

            <div class="news_info_box">
              <div class="news_info_text">
                <h3>სათაური</h3>
                <p>
                  ყველაზე გემრიელი უქმეები იწყება! გემოვანი ბაზარი 30 ივნისიდან
                  მთელი ზაფხულის განმავლობაში ფერმერების მიერ შექმნილ პროდუქტს
                </p>
              </div>
              <a href="news_inside.html">იხილეთ სღულად</a>
            </div>
          </div>
          <div class="news_box">
            <div class="news_img_box">
              <a href>
                <img src="../../assets/images/photo-1523741543316-beb7fc7023d8.jpg" />
              </a>
            </div>

            <div class="news_info_box">
              <div class="news_info_text">
                <h3>სათაური</h3>
                <p>
                  ყველაზე გემრიელი უქმეები იწყება! გემოვანი ბაზარი 30 ივნისიდან
                  მთელი ზაფხულის განმავლობაში ფერმერების მიერ შექმნილ პროდუქტს
                </p>
              </div>
              <a href="news_inside.html">იხილეთ სღულად</a>
            </div>
          </div>
          <div class="news_box">
            <div class="news_img_box">
              <a href>
                <img src="../../assets/images/photo-1523741543316-beb7fc7023d8.jpg" />
              </a>
            </div>

            <div class="news_info_box">
              <div class="news_info_text">
                <h3>სათაური</h3>
                <p>
                  ყველაზე გემრიელი უქმეები იწყება! გემოვანი ბაზარი 30 ივნისიდან
                  მთელი ზაფხულის განმავლობაში ფერმერების მიერ შექმნილ პროდუქტს
                </p>
              </div>
              <a href="news_inside.html">იხილეთ სღულად</a>
            </div>
          </div>
        </carousel>
      </div>
    </div>
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
            "https://../../assets/.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
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
.home_news_slider img {
  height: 200px;
  width: 100%;
}

.owl-nav {
  display: block !important;
  margin-top: 20px;
}
</style>
