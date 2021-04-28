<template>
  <div class="pt-4">
    <div class="container">
      <b-container fluid="lg">
        <b-row>
          <b-col lg="12">
            <b-alert
              variant="success"
              :show="guests.confirmed"
              v-html="$t('long-confirmed')"
            ></b-alert>
            <b-alert
              variant="danger"
              :show="!guests.confirmed"
              v-html="$t('not-confirmed')"
            ></b-alert>
            <!-- TODO: if submitted show answers without ability to resubmit -->
            <survey v-if="guests.confirmed" :survey="survey" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import * as Survey from "survey-vue";

import "survey-vue/modern.css";
// The theme doesn't match, but "bootstrap" would require more CSS changes. This would be nice to change later TODO
Survey.StylesManager.applyTheme("modern");

// TODO: get answers from store and disable after submitted
export default {
  name: "Questions",
  data() {
    const survey = new Survey.Model(this.$appConfig.QUESTIONS);
    survey.locale = this.lang;
    survey.showQuestionNumbers = "off";
    survey.completedHtml = "<span></span>";
    // TODO: post data to api
    survey.onComplete.add(function (result) {
      alert("Result JSON:\n" + JSON.stringify(result.data, null, 3));
    });
    return {
      survey: survey,
    };
  },
  computed: {
    guests() {
      return this.$store.state.guests;
    },
    lang() {
      return this.$store.state.lang;
    },
  },
  watch: {
    // Vue Survey doesn't auto update the lang. Using veux to watch
    lang (newLang) {
      this.survey.locale = newLang;
      this.survey.render();
    }
  }
};
</script>

<style scoped>
</style>
