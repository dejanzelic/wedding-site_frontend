<template>
  <div>
    <b-alert variant="success" :show="guests.confirmed">{{
      $t("confirmed")
    }}</b-alert>
    <b-form @submit="onSubmit">
      <b-form-group id="email-group" label="Email:" label-for="email">
        <b-form-input
          id="email"
          v-model="guests.email"
          type="email"
          :placeholder="$t('email-description')"
          :disabled="guests.confirmed"
          required
        ></b-form-input>
      </b-form-group>
      <label v-if="guests.list.length <= 1">{{ $t("guest") }}</label>
      <label v-else>{{ $t("guests") }}</label>
      <b-button
        variant="link"
        :hidden="guests.list.length == 1 || guests.confirmed"
        v-on:click="allComing"
        class="float-right all-coming"
        >{{ $t("all-guests-coming") }}</b-button
      >
      <div v-for="(guest, index) in guests.list" :key="index">
        <b-container fluid="lg">
          <b-row>
            <b-col md="12" lg="4">
              <b-form-group>
                <b-form-input
                  id="input-1"
                  v-model="guest.name"
                  :placeholder="$t('name-description')"
                  :disabled="guests.confirmed"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="12" lg="8">
              <b-form-group>
                <b-form-select
                  v-model="guest.attending"
                  :options="options"
                  :disabled="guests.confirmed"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>
        <hr :hidden="index === guests.list.length - 1" />
      </div>
      <div class="mb-3">
        <b-button
          @click="onDecline()"
          variant="secondary"
          id="decline"
          :hidden="guests.confirmed"
          >{{ $t("rsvp-decline") }}</b-button
        >
        <b-button
          type="submit"
          variant="primary"
          class="float-right"
          :hidden="guests.confirmed"
          >{{ $t("rsvp-accept") }}</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "RSVPForm",
  components: {},
  data() {
    return {
      inviteCode: this.$route.params.inviteCode,
      selected: null
    };
  },
  computed: {
    guests() {
      return this.$store.state.guests;
    },
    options() {
      return [
        { value: null, text: this.$t("will-you-celebrate") },
        { value: true, text: this.$t("yes") },
        { value: false, text: this.$t("no") },
      ]
    }
  },
  methods: {
    allComing() {
      this.guests.list.forEach((o, i, a) => (a[i].attending = true));
    },
    onSubmit(event) {
      event.preventDefault();
      this.guests.confirmed = true;
      this.$store.dispatch("putInvite");
      this.$router.push(this.inviteCode + "/q");
    },
    onDecline() {
      this.guests.list.forEach((o, i, a) => (a[i].attending = false));
      this.guests.confirmed = true;
      this.guests.email = "NOTCOMING";
      this.$store.dispatch("putInvite");
    },
  },
};
</script>

<style scoped>
.all-coming {
  font-size: 11px;
}
</style>