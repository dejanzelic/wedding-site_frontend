<template>
  <main>
    <RSVP v-if="guestsFetched && backendHealthy" />
    <InviteSearch v-else-if="backendHealthy" />
    <Fallback v-else />
  </main>
</template>

<script>
// @ is an alias to /src
import RSVP from "@/components/RSVP.vue";
import InviteSearch from "@/components/InviteSearch.vue";
import Fallback from "@/components/Fallback.vue";

import { mapState } from "vuex";

export default {
  name: "Invite",
  computed: mapState(["guestsFetched", "backendHealthy"]),
  components: {
    RSVP,
    InviteSearch,
    Fallback
  },
};
</script>
