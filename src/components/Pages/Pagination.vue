<template>
  <div>
    <div class="myList">
      <div v-for="list in lists" :key="list.id">
        <img :src="list.img" alt="" />
      </div>
      <b-pagination
        @click.native="test"
        :total-rows="totalRows"
        v-model="currentPage"
        :per-page="perPage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      data: this.$store.state.animalData.AnimalData,
      currentPage: this.$route.query.currentpage,
      perPage: 3
    };
  },
  computed: {
    ...mapGetters(["animalVuData"]),
    lists() {
      const items = this.data;
      this.$router
        .replace({
          query: { currentpage: this.currentPage }
        })
        .catch(err => {});
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.data.length;
    }
  },

  methods: {
    test() {
      this.$router
        .replace({
          query: { currentpage: this.currentPage }
        })
        .catch(err => {});
      //   window.scrollTo(300, 300);
    }
  },
  mounted() {
    console.log(this.currentPage);
    if (this.currentPage == undefined) {
      this.currentPage = 1;
    }

    this.$router
      .replace({
        query: { currentpage: this.currentPage }
      })
      .catch(err => {});
  }
};
</script>

<style scoped>
.myList {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.myList > div {
  flex: 0 0 24%;
  height: 100px;
}
img {
  height: 100px;
  width: 100px;
}
</style>
