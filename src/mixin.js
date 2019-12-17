export const mixin = {
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.$store.state.services.toka.push(data[0]);
      });
  }
};
