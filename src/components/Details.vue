<template>
  <div class="pt-4">
    <div class="container">
      <b-container fluid="lg">
        <b-row>
          <b-col md="12" lg="7" order-lg="1" order="2" mb-3>
            <Map></Map>
          </b-col>
          <b-col md="12" lg="4" order-lg="2" order="1" class="text-center" mb-3>
            <h2><WeddingDate /></h2>
            <br />
            <Calendar
              :attributes="attributes"
              :from-page="{
                month,
                year,
              }"
              disable-page-swipe
            />
            <br />
            <br />
            <h3>
              <Countdown/>
            </h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Calendar from "v-calendar/lib/components/calendar.umd";
import Map from "@/components/Map.vue";
import WeddingDate from "@/components/WeddingDate.vue";
import Countdown from "@/components/Countdown.vue";

export default {
  name: "Details",
  components: {
    Map,
    Calendar,
    WeddingDate,
    Countdown
  },
  computed: {
    month: function () {
      return this.$appConfig.DATE.format("M");
    },
    year: function () {
      return this.$appConfig.DATE.format("Y");
    }
  },
  data() {
    return {
      attributes: [
        {
          highlight: "gray",
          dates: [this.$appConfig.DATE.tz(this.$appConfig.TIMEZONE).toDate()],
        },
      ],
    };
  },
};
</script>

