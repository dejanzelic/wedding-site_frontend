<template>
  <div id="app">
    <NavBar/>
    <Error/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Error
  },
};
</script>

<style>
</style>
