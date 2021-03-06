import questions from './questions'
import ourStory from './ourStory'
import moment from 'moment-timezone';
import supportedLocales from "@/config/supported-locales"

let dateString = false
if (process.env.VUE_APP_WEDDING_DATE_UTC &&
    process.env.VUE_APP_WEDDING_TIME_UTC) {

    dateString =
        process.env.VUE_APP_WEDDING_DATE_UTC + " " +
        process.env.VUE_APP_WEDDING_TIME_UTC
}

export default {
    API_URL: 'https://production.com',
    NEWLYWEDS: {
        PARTNER1: process.env.VUE_APP_PARTNER1_NAME,
        PARTNER2: process.env.VUE_APP_PARTNER2_NAME
    },
    LOCATION: {
        ADDRESS: process.env.VUE_APP_ADDRESS,
        STATE: process.env.VUE_APP_STATE,
        CITY: process.env.VUE_APP_CITY,
        ZIP: process.env.VUE_APP_ZIP,
        LAT: parseFloat(process.env.VUE_APP_LAT),
        LONG: parseFloat(process.env.VUE_APP_LONG)
    },
    DATE: moment.utc(dateString),
    TIMEZONE: process.env.VUE_APP_TIMEZONE,
    QUESTIONS: questions,
    OURSTORY: ourStory,
    SAVE_THE_DATE_VIEW: (process.env.VUE_APP_SAVE_THE_DATE_VIEW === 'true'),
    MAPS_LINK: process.env.VUE_APP_MAPS_LINK,
    COVERIMAGE: '@/assets/images/cover_image.png',
    VIDEO: process.env.VUE_APP_VIDEO,
    VIDEO_THUMB: process.env.VUE_APP_VIDEO_THUMB,
    SITE_TITLE: process.env.VUE_APP_SITE_TITLE,
    LOCALES: supportedLocales
}