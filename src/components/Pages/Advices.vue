<template>
  <div>
    <div class="container-fluid farmers_fluid"></div>

    <div class="container-fluid farmer_info_fluid">
      <div class="container farmers_container">
        <div class="farmers_main_tittle ">
          <h2>რჩევები ფერმერებს</h2>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="advice_container">
              <div
                class="advice_main_info_box"
                v-for="(data, index) in advideData"
                :key="index"
                @click="dropdownAdvice(index)"
              >
                <div class="advice_img_box">
                  <img src="../../assets/images/service-bg.png" />
                </div>

                <div class="advice_tex_box">
                  <div class="adive_tittle_box">
                    <h3>გამოყენებული ინგრედიენტები</h3>
                  </div>

                  <transition name="slide">
                    <div class="advice_info_box" v-if="data.adviceTrue">
                      <p>
                        {{ data.text }}
                      </p>

                      <div class="farmers_link">
                        <a href="farmers_inside.html">იხილეთ სრულად</a>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
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
      advideData: [
        {
          text:
            "სხლეტილი გოჭი აღწევს 110კგ ცოცხალ წონას და ამ პერიოდის განმავლობაში მოიხმარს სულ რაღაც 260კგ-მდე Pig Max-ის მზა საკვებს; Pig Max პროდუქცია მორგებულია ღორის კონკრეტულ წონაზე, ასაკზე",
          adviceTrue: false
        },
        {
          adviceTrue: false,
          text:
            "სხლეტილი გოჭი აღწევს 110კგ ცოცხალ წონას და ამ პერიოდის განმავლობაში მოიხმარს სულ რაღაც 260კგ-მდე Pig Max-ის მზა საკვებს; Pig Max პროდუქცია მორგებულია ღორის კონკრეტულ წონაზე, ასაკზე"
        },
        {
          adviceTrue: false,
          text:
            "სხლეტილი გოჭი აღწევს 110კგ ცოცხალ წონას და ამ პერიოდის განმავლობაში მოიხმარს სულ რაღაც 260კგ-მდე Pig Max-ის მზა საკვებს; Pig Max პროდუქცია მორგებულია ღორის კონკრეტულ წონაზე, ასაკზე"
        }
      ]
    };
  },
  methods: {
    dropdownAdvice(arg) {
      this.advideData[arg].adviceTrue = !this.advideData[arg].adviceTrue;
    }
  }
};
</script>

<style scoped>
.slide-enter-active {
  transition: 0.3s;
  /* -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in; */
}

.slide-leave-active {
  transition: 0.3s;
  /* -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1); */
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
