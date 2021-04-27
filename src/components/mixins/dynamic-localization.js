export default {
  methods: {
    $t: function (translate) {
      if (typeof translate === 'string') {
        return this.$i18n.t(translate)
      } else if (translate === void 0) {
        return this.$i18n.t('loading')
      }
      return translate[this.$i18n.locale]
    }
  }
}
