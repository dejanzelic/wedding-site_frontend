<template>
  <div class="nav-centered">
    <div class="container">
      <b-alert
        :show="error.show"
        dismissible
        variant="danger"
        @dismissed="dismiss"
      >
        {{ $t(error.message) }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Error",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
    };
  },
  methods: {
    dismiss() {
      this.$store.dispatch("clearError")
    }
  },
  computed: mapState(["error"]),
};
</script>
