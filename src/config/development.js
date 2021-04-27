import questions from './questions'
import moment from 'moment-timezone';

let dateString = false
if (process.env.VUE_APP_WEDDING_DATE_UTC &&
    process.env.VUE_APP_WEDDING_TIME_UTC) {

    dateString =
        process.env.VUE_APP_WEDDING_DATE_UTC + " " +
        process.env.VUE_APP_WEDDING_TIME_UTC
}


export default {
    API_URL: 'https://local.dev',
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
        LONG: parseFloat(process.env.VUE_APP_LONG) || 0
    },
    DATE: moment.utc(dateString),
    TIMEZONE: process.env.VUE_APP_TIMEZONE || 'America/Phoenix',
    QUESTIONS: questions,
    SAVE_THE_DATE_VIEW: (process.env.VUE_APP_SAVE_THE_DATE_VIEW === 'true'),
    MAPS_LINK: process.env.VUE_APP_MAPS_LINK || "https://goo.gl/maps/gKTe9bbq8XHxCMMT6"
}