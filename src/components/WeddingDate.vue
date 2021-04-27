<template>
  <div>{{ prettyDate }}</div>
</template>

<script>
export default {
  name: "WeddingDate",
  computed: {
    prettyDate: function () {
      this.$appConfig.DATE.locale(this.$i18n.locale);
      return this.$appConfig.DATE.tz(this.$appConfig.TIMEZONE).format("LLLL");
    },
  },
};
</script>

