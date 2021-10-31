<template>
  <div>
    <b-row>
      <b-col md="12" lg="7" order-lg="1" order="2" class="mb-5">
        <h2>{{ $t("parking") }}</h2>
        <img class="w-100" src="@/assets/images/transportMap.png" />
      </b-col>
      <b-col md="12" lg="4" order-lg="2" order="1" class="text-center mb-5" >
        <h1>{{ $t("transportation") }}</h1>
        <hr />
        <div v-if="$appConfig.LOCATION.RIDESHARE.DISPLAY">
          <h2>{{ $t("rideshare-drop-off") }}</h2>
          <b-button class="w-100" v-if="mobile()" :href="getUberLink()"
            >Request ride with Uber</b-button
          >
          <p class="mb-0">{{ $appConfig.LOCATION.RIDESHARE.ADDRESS }}</p>
          <p>
            {{ $appConfig.LOCATION.RIDESHARE.CITY }},
            {{ $appConfig.LOCATION.RIDESHARE.STATE }}
            {{ $appConfig.LOCATION.RIDESHARE.ZIP }}
          </p>
        </div>
        <div v-if="$appConfig.LOCATION.PARKING.DISPLAY">
          <h2>{{ $t("parking") }}</h2>
          <a :href="$appConfig.LOCATION.PARKING.MAPS_LINK">
            <p class="mb-0">{{ $appConfig.LOCATION.PARKING.ADDRESS }}</p>
            <p>
              {{ $appConfig.LOCATION.PARKING.CITY }},
              {{ $appConfig.LOCATION.PARKING.STATE }}
              {{ $appConfig.LOCATION.PARKING.ZIP }}
            </p>
          </a>
        </div>
        <p v-if="$appConfig.SHUTTLE.RUN" v-html="$t('shuttle-details', 
            {
              start: $appConfig.SHUTTLE.START,
              end: $appConfig.SHUTTLE.END,
              email: $appConfig.CONTACTEMAIL
            })
          ">

        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Transportation",
  components: {},
  methods: {
    mobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },

    // It would be nice to have lyft as well, but they don't support universal links from a dynamic pickup location
    getUberLink() {
      let paramaters = {
        action: "action=setPickup",
        pickup: "pickup=my_location",
        dropoff_lat:
          encodeURIComponent("dropoff[latitude]") +
          "=" +
          this.$appConfig.LOCATION.RIDESHARE.LAT,
        dropoff_long:
          encodeURIComponent("dropoff[longitude]") +
          "=" +
          this.$appConfig.LOCATION.RIDESHARE.LONG,
        nickname:
          encodeURIComponent("dropoff[nickname]") +
          "=" +
          encodeURIComponent(
            this.$appConfig.NEWLYWEDS.PARTNER1 +
              " and " +
              this.$appConfig.NEWLYWEDS.PARTNER2 +
              "'s Wedding"
          ),
      };
      return `uber://?${paramaters.action}&${paramaters.pickup}&${paramaters.dropoff_lat}&${paramaters.dropoff_long}&${paramaters.nickname}`;
    },
  },
};
</script>

