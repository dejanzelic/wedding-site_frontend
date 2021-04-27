<template>
  <main>
    <CoverImage/>
    <Story/>
  </main>
</template>

<script>
import CoverImage from '@/components/CoverImage.vue'
import Story from '@/components/Story.vue'


export default {
  name: "OurStory",
  components: {
    CoverImage,
    Story
  },
};
</script>

