import createStore from "unistore";

export const store = createStore({
  testpage1: "test page 1",
  testpage2: "test page 2",
  testpage2: "test page 2",
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
//   setListNews(state, listNewsInput) {
//     return {
//       listNews: listNewsInput
//     };
//   }
});
