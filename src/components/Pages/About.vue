<template>
  <div>
    <appFilter></appFilter>
  </div>
</template>

<script>
import filtertest from "./FilterTest.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    appFilter: filtertest
  }
};
</script>

<style scoped>
.about_fluid {
  padding-top: 190px;
}

.about_tittle_row > div {
  display: flex;
  justify-content: center;
}
</style>
