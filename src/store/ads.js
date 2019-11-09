export default {
  state: {
    ads: [
      {
        id: "1",
        title: "One",
        description: "desc1",
        promo: false,
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        id: "2",
        title: "Two",
        description: "desc2",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        id: "3",
        title: "Three",
        description: "desc3",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        id: "4",
        title: "Four",
        description: "desc4",
        promo: true,
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = '777';
      commit("createAd", payload);
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(item => {
        if (item.promo) return true;
      });
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId);
      };
    }
  }
};
