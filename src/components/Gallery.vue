<template>
  <div>
    <CoolLightBox :items=images :index="index" @close="index = null">
    </CoolLightBox>
    <!-- TODO: Added ability for multilingual Alternative Text and Captions -->
    <b-container>
      <b-card-group columns>
        <b-card
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :img-src="image.thumb"
          img-alt="Image"
          overlay
        ></b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  components: {
    CoolLightBox,
  },
  name: "Gallery",
  data() {
    let i = require.context("@/assets/images/gallery", false, /^.*\.png$/);
    let t = require.context("@/assets/images/gallery/thumbnails", false, /^.*\.png$/);
    let images = [];
    i.keys().forEach(name => {

      images.push({
        "src": i(name),
        "thumb": t(name)
        })

    });
    return {
      images,
      index: null
    };
  }
};
</script>

