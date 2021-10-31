<template>
  <main>
    <div class="pt-4">
      <div class="container">
        <b-container fluid="lg" class="mb-5">
          <h1 class="text-center">{{ $t(title) }}</h1>
          <hr />
          <div v-html="$t(content)"></div>
        </b-container>
      </div>
    </div>
  </main>
</template>

<script>
import dynamicLocalization from "@/components/mixins/dynamic-localization";

export default {
  name: "Custom",
  mixins: [dynamicLocalization],
  props: ["title", "content"],
  components: {},
  methods: {},
};
</script>

