import questions from './questions'

export default {
    API_URL: 'https://staging.dev',
    NEWLYWEDS: {
      PARTNER1: process.env.VUE_APP_PARTNER1_NAME,
      PARTNER2: process.env.VUE_APP_PARTNER2_NAME,
    },
    LOCATION: {
      ADDRESS:  process.env.VUE_APP_ADDRESS,
      STATE: process.env.VUE_APP_STATE,
      CITY: process.env.VUE_APP_CITY,
      ZIP: process.env.VUE_APP_ZIP,
      LAT: parseFloat(process.env.VUE_APP_LAT),
      LONG: parseFloat(process.env.VUE_APP_LONG)
    },
    QUESTIONS: questions
  }