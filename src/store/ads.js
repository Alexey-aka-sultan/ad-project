class Ad {
  constructor(
    title,
    description,
    ownerId,
    imageSrc = "",
    promo = false,
    id = null
  ) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id;
  }
}

export default {
  state: {
    ads: [
      {
        id: "1",
        title: "One",
        description: "desc1",
        promo: false,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        id: "2",
        title: "Two",
        description: "desc2",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        id: "3",
        title: "Three",
        description: "desc3",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        id: "4",
        title: "Four",
        description: "desc4",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    async createAd({ commit, getters }, payload) {
      commit("clearError");
      commit("setLoading", true);

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        );
        console.log(newAd);


        /*eslint-disable */
        const ad = await firebase
          .database()
          .ref("ads")
          .push(newAd);
          
        commit("setLoading", false);
        commit("createAd", { ...newAd, id: ad.key });
        /*eslint-enable */
      } catch (error) {
        commit("setError", error.message);
        commit("setLoading", false);
        throw error;
      }
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
