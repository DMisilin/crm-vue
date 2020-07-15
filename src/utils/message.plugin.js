export default {
  install (Vue, html) {
    Vue.prototype.$message = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html })
    }

    Vue.prototype.$error = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[Error] :: ${html}` })
    }
  }
}
