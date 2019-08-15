import createStore from "unistore";

export const store = createStore({
  username: "",
  email: "",
  avatar: "",
  listMovie: [],
  listMovieByCategory: []
});

export const actions = store => ({
  setTestPage1(state, input) {
    return {
      testpage1: input
    };
  },
  //   setEmail(state, emailInput) {
  //     return {
  //       email: emailInput
  //     };
  //   },
  //   setLogin(state, loginInput) {
  //     return {
  //       isLogin: loginInput
  //     };
  //   },
  setListMovie(state, listMovieInput) {
    return {
      listMovie: listMovieInput
    };
  },
  setListMovieByCategory(state, listMovieInput) {
    return {
      listMovieByCategory: listMovieInput
    };
  }
});
