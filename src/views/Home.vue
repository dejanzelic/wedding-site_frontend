<template>
  <main>
    <Hero partner1="First Name" partner2="Second Name"/>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>
