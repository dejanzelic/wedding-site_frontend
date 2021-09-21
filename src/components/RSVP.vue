<template>
  <div class="pt-4">
    <div class="container">
      <b-container fluid="lg">
        <b-row>
          <b-col md="12" lg="4" order-lg="1" order="2">
            <Map></Map>
          </b-col>
          <b-col md="12" lg="8" order-lg="2" order="1">
            <b-alert show>{{
              $t($appConfig.EXTRAS.rsvp.alertMessage)
            }}</b-alert>
            <RSVPForm></RSVPForm>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import RSVPForm from "@/components/RSVPForm.vue";
import dynamicLocalization from "@/components/mixins/dynamic-localization";

export default {
  name: "RSVP",
  mixins: [dynamicLocalization],
  components: {
    RSVPForm,
    Map,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hero-text {
  font-size: calc(4.575rem + 3.9vw);
  font-family: "Antic Didone", serif;
}
#hero-and {
  font-size: calc(1.575rem + 3.9vw);
  font-style: italic;
}
.intro {
  padding-top: 100px;
  padding-bottom: 80px;
}
</style>
