export default {
    API_URL: 'https://local.dev',
    NEWLYWEDS: {
        PARTNER1: process.env.VUE_APP_PARTNER1_NAME || 'Tester Test',
        PARTNER2: process.env.VUE_APP_PARTNER2_NAME || 'Test McTest Face'
    },
    LOCATION: {
        ADDRESS:  process.env.VUE_APP_ADDRESS || '123 W South st',
        STATE: process.env.VUE_APP_STATE || 'MI',
        CITY: process.env.VUE_APP_CITY || 'Lasning',
        ZIP: process.env.VUE_APP_ZIP || '12345',
        LAT: parseFloat(process.env.VUE_APP_LAT) || 0,
        LONG: parseFloat(process.env.VUE_APP_LONG) || 0
    }
  }