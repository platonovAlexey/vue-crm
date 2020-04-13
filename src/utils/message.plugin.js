/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
export default {
  install(Vue) {
    Vue.prototype.$message = function (html) {
      M.toast({ html });
    };
    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
