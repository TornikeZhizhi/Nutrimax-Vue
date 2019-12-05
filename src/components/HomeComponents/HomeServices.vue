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
            <h2>ლაბორატორია</h2>
          </div>
        </div>
        <div class="col-6">
          <div
            class="farmers_tittle text-center"
            @click="homeService = false"
            v-bind:class="{ active: !homeService }"
          >
            <h2>ფერმერების მხარდაჭერა</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- // container 1 -->
    <div
      class="container home_services_content_container lab_cont"
      v-if="homeService"
    >
      <div class="row">
        <div
          class="col-12 d-flex justify-content-center"
          style="display: flex;
    justify-content: center;"
        >
          <div class="services_tittle text-center">
            <h3>სერვისები</h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="laboratory_content">
            <p>
              კომპანია მუდმივად აგზავნის წარმოებულ პროდუქციას Nutreco-ს
              შვილობილი კომპანიის Masterlab-ის ლაბორატორიაში, სადაც
              მაღალკვალიფიციური სპეციალისტები ამოწმებენ და უტარებენ ანალიზს.
              Masterlab ევროპის წამყვანი ლაბორატორიაა, როგორც ცხოველთა, ასევე
              ადამიანთა საკვებისა და ფარმაცევტული პროდუქციის კონტროლის სფეროში
            </p>

            <a href="">იხილეთ სრულად</a>
          </div>
        </div>
      </div>
    </div>

    <!-- container 2 -->

    <div
      class="container home_services_content_container farmers_cont"
      v-if="!homeService"
    >
      <div class="row">
        <div
          class="col-12 d-flex justify-content-center"
          style="display: flex;
    justify-content: center;"
        >
          <div class="services_tittle text-center">
            <h3>სერვისები 2</h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="laboratory_content">
            <p>
              კომპანია მუდმივად აგზავნის წარმოებულ პროდუქციას Nutreco-ს
              შვილობილი კომპანიის Masterlab-ის ლაბორატორიაში, სადაც
              მაღალკვალიფიციური სპეციალისტები ამოწმებენ და უტარებენ ანალიზს.
              Masterlab ევროპის წამყვანი ლაბორატორიაა, როგორც ცხოველთა, ასევე
              ადამიანთა საკვებისა და ფარმაცევტული პროდუქციის კონტროლის სფეროში
            </p>

            <a href="">იხილეთ სრულად</a>
          </div>
        </div>
      </div>
    </div>

    <!-- //container 2 -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      homeService: true
    };
  }
};
</script>

<style></style>
