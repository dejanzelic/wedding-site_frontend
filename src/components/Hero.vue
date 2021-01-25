<template>
<div>
  <section class="intro" style="background-size: cover;">
    <b-container>
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col col md="11" class="text-center">
          <h1 id="hero-text">{{partner1}} <div id="hero-and">— and —</div>  {{partner2}}</h1>
        </b-col>
      </b-row>
    </b-container>
  </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    partner1: String,
    partner2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
