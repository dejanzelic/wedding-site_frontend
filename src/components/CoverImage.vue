<template>
  <div>
    <section style="background-size: cover">
      <b-container>
        <b-row class="d-flex justify-content-center align-items-center">
          <b-col col md="12" class="text-center">
            <img id="coverImage" :src="getImgUrl()" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "CoverImage",
  methods: {
    getImgUrl(){
      if (this.$appConfig.COVERIMAGE.includes("http")){
        return this.$appConfig.COVERIMAGE
      }else{
        return require("@/assets/images/cover_image.png")
      }
    }
  }
};
</script>

<style>
#coverImage {
	width: 100%;
}
</style>

