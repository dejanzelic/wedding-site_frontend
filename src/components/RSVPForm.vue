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
      <div v-for="(guest, index) in guests.list" :key="guest">
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
        <hr :hidden="index === (guests.list.length - 1)" />
      </div>
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
      selected: null,
      options: [
        { value: null, text: "Will you celebrate with us?" },
        { value: true, text: "Yes" },
        { value: false, text: "No" },
      ],
    };
  },
  computed: {
    guests() {
      return this.$store.state.guests;
    },
  },
  methods: {
    allComing() {
      this.guests.list.forEach((o, i, a) => (a[i].attending = true));
    },
    onSubmit(event) {
      event.preventDefault();
      this.guests.confirmed = true;
      alert(JSON.stringify(this.guests)); //@TODO: post data
    },
    onDecline() {
      this.guests.list.forEach((o, i, a) => (a[i].attending = false));
      this.guests.confirmed = true;
      alert("Sorry you can't make it "); //@TODO: show message
    },
  },
};
</script>

<style scoped>
.all-coming {
  font-size: 11px;
}

</style>