import questions from './questions'
import extra from './extra'
import moment from 'moment-timezone';
import supportedLocales from "@/config/supported-locales"


let dateString = false
if (process.env.VUE_APP_WEDDING_DATE_UTC &&
    process.env.VUE_APP_WEDDING_TIME_UTC) {

    dateString =
        process.env.VUE_APP_WEDDING_DATE_UTC + " " +
        process.env.VUE_APP_WEDDING_TIME_UTC
}
var coverImage = ""
try {
    require('@/assets/images/cover_image.png')
} catch (e) {
    coverImage = "https://picsum.photos/1920/1080"
}


export default {
    API_URL: process.env.VUE_APP_API_URL || 'mockapi',
    PRETTY_URL: process.env.VUE_APP_PRETTY_URL || 'WWW.LOVE.COM',
    NEWLYWEDS: {
        PARTNER1: process.env.VUE_APP_PARTNER1_NAME || 'Tester Test',
        PARTNER2: process.env.VUE_APP_PARTNER2_NAME || 'Test McTest Face'
    },
    LOCATION: {
        ADDRESS: process.env.VUE_APP_ADDRESS || '123 W South st',
        STATE: process.env.VUE_APP_STATE || 'MI',
        CITY: process.env.VUE_APP_CITY || 'Lasning',
        ZIP: process.env.VUE_APP_ZIP || '12345',
        LAT: parseFloat(process.env.VUE_APP_LAT) || 0,
        LONG: parseFloat(process.env.VUE_APP_LONG) || 0,
        RIDESHARE: {
            DISPLAY: (process.env.VUE_APP_RIDESHARE_ADDRESS != undefined),
            ADDRESS: process.env.VUE_APP_RIDESHARE_ADDRESS || '123 W South st',
            STATE: process.env.VUE_APP_RIDESHARE_STATE || 'MI',
            CITY: process.env.VUE_APP_RIDESHARE_CITY || 'Lasning',
            ZIP: process.env.VUE_APP_RIDESHARE_ZIP || '12345',
            LAT: parseFloat(process.env.VUE_APP_RIDESHARE_LAT) || 0,
            LONG: parseFloat(process.env.VUE_APP_RIDESHARE_LONG) || 0,
        },
        PARKING: {
            DISPLAY: (process.env.VUE_APP_PARKING_ADDRESS != undefined),
            ADDRESS: process.env.VUE_APP_PARKING_ADDRESS || '123 W South st',
            STATE: process.env.VUE_APP_PARKING_STATE || 'MI',
            CITY: process.env.VUE_APP_PARKING_CITY || 'Lasning',
            ZIP: process.env.VUE_APP_PARKING_ZIP || '12345',
            LAT: parseFloat(process.env.VUE_APP_PARKING_LAT) || 0,
            LONG: parseFloat(process.env.VUE_APP_PARKING_LONG) || 0,
            MAPS_LINK: process.env.VUE_APP_PARKING_MAPS_LINK || "https://goo.gl/maps/gKTe9bbq8XHxCMMT6",
        }
    },
    DATE: moment.utc(dateString),
    TIMEZONE: process.env.VUE_APP_TIMEZONE || 'America/Phoenix',
    QUESTIONS: questions,
    EXTRAS: extra,
    SAVE_THE_DATE_VIEW: (process.env.VUE_APP_SAVE_THE_DATE_VIEW === 'true'),
    MAPS_LINK: process.env.VUE_APP_MAPS_LINK || "https://goo.gl/maps/gKTe9bbq8XHxCMMT6",
    COVERIMAGE: coverImage,
    VIDEO: process.env.VUE_APP_VIDEO || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    VIDEO_THUMB: process.env.VUE_APP_VIDEO_THUMB || "https://picsum.photos/300/200",
    SITE_TITLE: process.env.VUE_APP_SITE_TITLE || "Wedding Site",
    LOCALES: supportedLocales,
    CONTACTEMAIL: process.env.VUE_APP_CONTACT_EMAIL || "contactus@asdfasdfasdf.com",
    SHUTTLE: {
        RUN: (process.env.VUE_APP_SHUTTLE === 'true'),
        START: process.env.VUE_APP_SHUTTLE_START || "12:30PM",
        END: process.env.VUE_APP_SHUTTLE_END || "12:30AM",
    },

}