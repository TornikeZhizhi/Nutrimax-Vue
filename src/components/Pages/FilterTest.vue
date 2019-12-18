<template>
  <div id="main">
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

      {{ filterData }}
    </div>

    <div class="img">
      <img
        v-for="(products, index) in animalLocalData"
        :key="index"
        :src="products.img"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      chekbox: [
        { type: "pig", checked: false },
        { type: "bird", checked: false },
        { type: "other", checked: false },
        { type: "hen", checked: false },
        { type: "cow", checked: false }
      ],
      animalLocalData: [
        {
          title: "ღორის საკვები",
          img:
            "https://images.unsplash.com/photo-1545468258-576dbac5faa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          price: 121,
          type: "pig"
        },
        {
          title: "ფრინველი",
          img: "https://freedesignfile.com/upload/2013/10/310628.jpg",
          price: 41,
          type: "bird"
        },
        {
          title: "ღორის",
          img:
            "https://pbs.twimg.com/profile_images/438551037670998016/2itMlqFY_400x400.jpeg",
          price: 78,
          type: "pig"
        },
        {
          title: "ცხვარი სხვა",
          img:
            "http://karibche.ambebi.ge/images/stories/article/2008/2_ianvari/werilebi-cxvari.jpg",
          price: 32,
          type: "other"
        },
        {
          title: "ცხვარი სხვა 2",
          img:
            "http://karibche.ambebi.ge/images/stories/article/2008/2_ianvari/werilebi-cxvari.jpg",
          price: 11,
          type: "other"
        }
      ],

      filterData: []
    };
  },

  computed: {},
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
          .replace({ query: { type: this.filterData } })
          .catch(error => {});
      });
    }
  },
  created() {
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
  }
};
</script>

<style scoped>
#main {
  display: flex;
  margin-top: 150px;
}
.animals_tab_panel_full {
  display: flex;
  flex-direction: column;
}
.img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto 0;
}
img {
  flex: 0 0 24%;
  max-width: 24%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px;
}
</style>
