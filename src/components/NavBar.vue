<template>
  <div class="nav-centered">
    <div class="container">
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand class="font-weight-bold navbar-brand-centered">
          zelic
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home'}">Home</b-nav-item>
            <b-nav-item :to="{ name: 'OurStory'}">{{ $t("our-story") }}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'Info'}">{{ $t("when-and-where") }}</b-nav-item>
            <b-nav-item-dropdown :text="'🌐 ' + $t('language')" right v-model="$i18n.locale">
              <b-dropdown-item
                v-for="(lang, i) in Object.keys($appConfig.LOCALES)"
                :key="`Lang${i}`"
                :active="$i18n.locale === lang"
                @click="changeLocale(lang)"
                >{{ $appConfig.LOCALES[lang].name }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return { langs: this.$i18n.availableLocales };
  },
  methods: {
    changeLocale(lang) {
      this.$store.dispatch("changeLanguage", {lang: lang})
      // Ideally this would be in the store, but I couldn't figure out how to access $i18n in the store to changes it
      this.$i18n.locale = lang;
    },
  },
};
</script>
