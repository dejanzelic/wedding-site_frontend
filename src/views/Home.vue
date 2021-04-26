<template>
  <main>
    <Hero partner1="First Name" partner2="Second Name"/>
    <Gallery/>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Gallery from '../components/Gallery.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Gallery
  }
}
</script>

