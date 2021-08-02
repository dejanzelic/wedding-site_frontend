<template>
  <main>
    <RSVP v-if="guestsFetched" />
    <InviteSearch v-else />
  </main>
</template>

<script>
// @ is an alias to /src
import RSVP from "@/components/RSVP.vue";
import InviteSearch from "@/components/InviteSearch.vue";

import { mapState } from "vuex";

export default {
  name: "Invite",
  computed: mapState(["guestsFetched"]),
  components: {
    RSVP,
    InviteSearch,
  },
};
</script>
