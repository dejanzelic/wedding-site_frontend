<template>
  <div>
    {{ $t("coutdown-until") }}:
    {{ daysLeft }}
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Countdown",
  computed: {
    daysLeft: function () {
      var todaysdate = moment();
      return this.$appConfig.DATE.diff(todaysdate, "days") + 1;
    },
  }
};
</script>

