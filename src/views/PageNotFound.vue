<template>
  <div>
    <section class="intro" style="background-size: cover">
      <b-container>
        <b-row class="d-flex justify-content-center align-items-center">
          <b-col col md="12" class="text-center">
            <h1 id="hero-text">
              404 - Not Found
            </h1>
            <h3>But here are some pictures of us:</h3>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <Gallery/>
  </div>
</template>

<script>
import Gallery from '../components/Gallery.vue'

export default {
  name: "PageNotFound",
  components: {
    Gallery
  },
};
</script>

<style scoped>
  #hero-text {
      font-size: calc(4.575rem + 3.9vw);
      font-family: 'Antic Didone', serif;
  }
  #hero-and {
    font-size: calc(1.575rem + 3.9vw);
    font-style: italic;
  }
  .intro{
    padding-top: 100px;
    padding-bottom: 80px;
  }
</style>
