<template>
  <div class="pt-4">
    <div
      class="pb-3 container"
      v-for="(story, index) in config.ourStory"
      :key="index"
    >
      <b-row>
        <b-col md="12" lg="6" :order="getOrder(index, 1)" mb-3>
          <img id="storyImg" :src="getImgUrl(story.image)" />
        </b-col>
        <b-col
          md="12"
          lg="6"
          :order="getOrder(index, 2)"
          class="text-center"
          v-html="$t(story.content)"
          mb-3
        >
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import dynamicLocalization from "@/components/mixins/dynamic-localization";

export default {
  name: "Story",
  mixins: [dynamicLocalization],
  components: {},
  methods: {
    getImgUrl(name) {
      try {
        return this.images("./" + name);
      } catch (e) {
        if (process.env.NODE_ENV === "development") {
          return "asdfasdf";
        }
      }
    },
    getOrder(index, original) {
      if (index % 2 === 0) {
        return original;
      } else {
        if (original === 1) {
          return 2;
        } else {
          return 1;
        }
      }
    },
  },
  data() {
    return {
      images: require.context("@/assets/images/ourStory", false, /\.png$/),
      config: this.$appConfig.OURSTORY,
    };
  },
};
</script>

<style>
#storyImg {
  width: 100%;
}
</style>