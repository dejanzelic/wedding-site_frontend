<template>
  <main>
    <div class="pt-4">
      <div class="container">
        <b-container fluid="lg" class="mb-5">
          <component
            v-for="(c, k) in components"
            :key="k"
            :is="c.name"
            v-bind="c.props"
          ></component>
        </b-container>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import moment from "moment-timezone";

export default {
  name: "Home",
  components: {
    Hero,
    Gallery: () => import("@/components/Gallery.vue"), //eslint-disable-line
    Custom: () => import("@/components/Custom.vue"), //eslint-disable-line
    MapAndDate: () => import("@/components/MapAndDate.vue"), //eslint-disable-line
    Transportation: () => import("@/components/Transportation.vue"), //eslint-disable-line
  },
  created() {
    this.$appConfig.EXTRAS.dynamicHomepage.forEach((e) => {
      console.log(e);
      if (
        moment().isBetween(moment.parseZone(e.start), moment.parseZone(e.end))
      ) {
        this.components = this.components.concat(e.components);
        console.log(this.components);
      }
    });
  },
  data() {
    console.log(moment.parseZone());
    return {
      components: [],
    };
  },
};
</script>

