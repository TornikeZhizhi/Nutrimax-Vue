const state = {
  NewsData: null
};

const getters = {
  newsGetters: state => {
    return state.NewsData;
  }
};

export default {
  state,
  getters
};
