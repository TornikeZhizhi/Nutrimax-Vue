const state = {
  AnimalData: [
    {
      checked: false,
      title: "ღორის საკვები",
      img:
        "https://images.unsplash.com/photo-1545468258-576dbac5faa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      price: 121,
      type: "pig"
    },

    {
      checked: false,
      title: "ფრინველი",
      img: "https://freedesignfile.com/upload/2013/10/310628.jpg",
      price: 41,
      type: "bird"
    },
    {
      checked: false,
      title: "ღორის",
      img:
        "https://pbs.twimg.com/profile_images/438551037670998016/2itMlqFY_400x400.jpeg",
      price: 78,
      type: "pig"
    },
    {
      checked: false,
      title: "თევზი",
      img:
        "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?quality=45&resize=960,413",
      price: 22,
      type: "fish"
    },
    {
      checked: false,
      title: "თევზი2",
      img:
        "https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-931270318-43ab672.jpg?quality=45&resize=960,413",
      price: 222,
      type: "fish"
    },
    {
      checked: false,
      title: "თევზი 2",
      img:
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      price: 14,
      type: "fish"
    },
    {
      checked: false,
      title: "ბოცვერი",
      img:
        "https://ichef.bbci.co.uk/news/660/cpsprodpb/5FD0/production/_108982542_07e3c4ae-e447-48e7-beb9-9242e374ed87.jpg",
      price: 43,
      type: "rabbit"
    },
    {
      checked: false,
      title: "ბოცვერი",
      img:
        "https://ichef.bbci.co.uk/news/660/cpsprodpb/5FD0/production/_108982542_07e3c4ae-e447-48e7-beb9-9242e374ed87.jpg",
      price: 43,
      type: "rabbit"
    },

    {
      checked: false,
      title: "ბოცვერი 2",
      img:
        "https://media.daysoftheyear.com/20171223124052/international-rabbit-day1.jpg",
      price: 57,
      type: "rabbit"
    },
    {
      checked: false,
      title: "ცხვარი სხვა",
      img:
        "http://karibche.ambebi.ge/images/stories/article/2008/2_ianvari/werilebi-cxvari.jpg",
      price: 32,
      type: "other"
    },
    {
      checked: false,
      title: "ცხვარი სხვა 2",
      img:
        "http://karibche.ambebi.ge/images/stories/article/2008/2_ianvari/werilebi-cxvari.jpg",
      price: 11,
      type: "other"
    }
  ],
  animalVuFilter: []
};

const getters = {
  animalVuData: state => {
    return state.AnimalData;
  }
};

export default {
  state,
  getters
};
