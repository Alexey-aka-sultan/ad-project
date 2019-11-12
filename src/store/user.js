class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser({ commit }, { email, password }) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", new User(user.uid));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
};
