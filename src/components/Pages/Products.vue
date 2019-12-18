<template>
  <div>
    <div class="products_fluid">
      <div class="container products_container">
        <div
          class="row"
          style="display:flex;justify-content:center;margin-top:100px;"
        >
          <div class="col-12">
            <div class="products_tittle">
              <h2>პროდუქცია</h2>
            </div>
          </div>
        </div>

        <!-- //main content -->

        <div class="row main_products_row">
          <div class="col-md-2 main_products_menu_col">
            <div class="animals_tab_panel animals_tab_panel_full">
              <label v-for="(data, index) in chekbox" :key="index">
                <input
                  type="checkbox"
                  :value="data.type"
                  :checked="data.checked"
                  @input="valueHandler"
                />

                <span class="checkmark"></span>{{ data.type }}
              </label>
            </div>
          </div>

          <div class="col-lg-10 col-12 producst_main_col">
            <div class="producs_price_box">
              <div>
                <span>დალაგება ფასით</span>
                <select>
                  <option value="volvo">Hight</option>
                  <option value="saab">Low</option>
                </select>
              </div>
            </div>

            <div class="row animals_row pig_row">
              <div class="row_wrapper col-12">
                <div class="row">
                  <div
                    class="col-lg-3 col-6 product_content"
                    v-for="(data, index) in lists"
                    :key="index"
                  >
                    <div class="new_box">
                      <img src="../../assets/images/products_new.png" />
                    </div>

                    <div class="product_box">
                      <div class="product_add_basket">
                        <span>
                          <img src="../../assets/images/producs_icon.svg" />
                        </span>
                        <div class="add_basket">
                          <img src="../../assets/images/basket.png" />
                          <span>კალათაში დამატება</span>
                        </div>
                      </div>

                      <h3>{{ data.title }}</h3>
                      <a href="products_inside.html">
                        <img class="img_ani" :src="data.img" />
                      </a>

                      <div class="star_price_box">
                        <div>
                          <img src="../../assets/images/stars.png" />
                        </div>
                        <span>{{ data.price }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <b-pagination
                  @click.native="paginationHandler"
                  :total-rows="totalRows"
                  v-model="currentPage"
                  :per-page="perPage"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- //main content -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import pagination from "./Pagination.vue";
export default {
  components: {
    appPagination: pagination
  },

  data: function() {
    return {
      chekbox: [
        { type: "pig", checked: false },
        { type: "bird", checked: false },
        { type: "fish", checked: false },
        { type: "rabbit", checked: false },
        { type: "other", checked: false }
      ],
      animalLocalData: this.$store.state.animalData.AnimalData,
      currentPage: this.$route.query.currentpage,
      animalFilterquery: [],
      filterData: [],
      perPage: 4
    };
  },

  methods: {
    valueHandler($event) {
      this.chekbox.map((el, index) => {
        if (el.type == event.target.value) {
          el.checked = event.target.checked;
          if (event.target.checked) {
            this.filterData.push(event.target.value);
          } else {
            this.filterData = this.filterData.filter((hobby, el) => {
              return hobby !== event.target.value;
            });
          }
        }
        this.$router
          .replace({
            query: { type: this.filterData, currentpage: this.currentPage }
          })
          .catch(error => {});
      });

      // var _this = this;

      // setTimeout(() => {
      //   if (_this.animalLocalData.length == 0) {
      //     _this.animalLocalData = _this.animalVuData;
      //   } else {
      //     _this.animalLocalData = [];
      //     _this.animalLocalData.map(function(el, index) {
      //       for (let i = 0; i < _this.animalVuData.length; i++) {
      //         if (el == _this.animalVuData[i].type) {
      //           _this.animalLocalData.push(_this.animalVuData[i]);
      //         }
      //       }
      //     });
      //   }
      // }, 110);
    },
    filterHandler() {},
    paginationHandler() {
      this.$router
        .replace({
          query: { currentpage: this.currentPage }
        })
        .catch(err => {});
    }
  },
  computed: {
    ...mapGetters(["animalVuData"]),
    lists() {
      const items = this.animalLocalData;

      setTimeout(() => {
        this.$router
          .replace({
            query: {
              currentpage: this.currentPage,
              type: this.filterData
            }
          })
          .catch(err => {});
      }, 2);

      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.animalLocalData.length;
    }
  },
  mounted() {
    if (this.$route.query.type !== undefined) {
      this.$route.query.type.map((el, index) => {
        for (var i = 0; i < this.chekbox.length; i++) {
          if (el == this.chekbox[i].type) {
            this.chekbox[i].checked = true;
            this.filterData.push(this.chekbox[i].type);
          }
        }
      });
    }

    if (this.currentPage == undefined) {
      this.currentPage = 1;
    }

    this.$router
      .replace({
        query: {
          currentpage: this.currentPage,
          type: this.filterData
        }
      })
      .catch(err => {});
  }
};
</script>

<style scopled>
.row {
  display: flex;
  flex-wrap: wrap;
}
.row_wrapper {
  width: 100%;
}
.img_ani {
  height: 200px;
  object-fit: contain;
}
label {
  cursor: pointer;
}
.products_fluid .products_container .main_products_row {
  min-height: 125vh;
}

.page-item.active .page-link {
  background-color: #f5c400;
  border-color: #f5c400;
}
.page-item .page-link {
  transition: all 0.4s;
}
.page-item .page-link:hover {
  transform: translateY(-5px);
  color: #6c6c6c;
}

.page-link:focus {
  box-shadow: unset;
}
.pagination {
  margin-top: 50px;
  justify-content: center;
}
.page-link {
  color: #6c6c6c;
}
.page-item.active .page-link:hover {
  color: #fff;
}
</style>
