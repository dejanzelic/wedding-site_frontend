import Vue from 'vue'
import VueI18n from 'vue-i18n'
import getBrowserLocale from "@/util/get-browser-locale"
import { supportedLocalesInclude, supportedReplacmentLocalesInclude } from "./util/supported-locales"
import store from './store'

Vue.use(VueI18n)

function getStartingLocale() {
  //If already stored in state / local storage
  if(store.state.lang){
    return store.state.lang
  }
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    const replacement = supportedReplacmentLocalesInclude(browserLocale)
    if(replacement){
      return replacement
    }else{
      return process.env.VUE_APP_I18N_LOCALE || "en"
    }
  }
}


function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const startingLocale = getStartingLocale()
store.dispatch("changeLanguage", {lang: startingLocale})

export default new VueI18n({
  locale: startingLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
