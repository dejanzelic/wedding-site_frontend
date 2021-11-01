<template>
  <main>
doc    <div class="pt-4">
      <div class="container">
        <b-container fluid="lg" class="mb-5">
          <MapAndDate />
          <Transportation></Transportation>
        </b-container>
      </div>
    </div>
  </main>
</template>

<script>
import MapAndDate from "@/components/MapAndDate.vue";
import Transportation from "@/components/Transportation.vue";


export default {
  name: "WeddingInfo",
  components: {
    MapAndDate,
    Transportation,
  },
};
</script>

