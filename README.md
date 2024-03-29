# Wedding Site Front End

### Compiles and hot-reloads for development
```
docker-compose up
```

### Compiles and minifies for production
```
docker-compose -f docker-compose.yml -f docker-compose.build.yml up
```

### Environmental Variable Definitions:

```
VUE_APP_I18N_LOCALE - Default Locale
VUE_APP_I18N_FALLBACK_LOCALE - Fallback Locale
VUE_APP_PARTNER1_NAME - Name of first partner
VUE_APP_PARTNER2_NAME - Name of Second partner
VUE_APP_ADDRESS - Wedding Location street
VUE_APP_CITY - Wedding Location city
VUE_APP_STATE - Wedding Location state
VUE_APP_ZIP - Wedding Location zip
VUE_APP_LAT - Cordinates for map (LAT)
VUE_APP_LONG - Cordinates for map (LONG)
VUE_APP_SAVE_THE_DATE_VIEW - Disable the navbar and other routes
VUE_APP_WEDDING_DATE_UTC - Date of wedding in UTC Example: 2025-12-31
VUE_APP_WEDDING_TIME_UTC - Time of wedding in UTC Example: 23:30:00
VUE_APP_TIMEZONE - Timezone of wedding Example: America/Phoenix
VUE_APP_MAPS_LINK - Where to link the map https://goo.gl/maps/FLvZXTsU6A5ExBx28
VUE_APP_VIDEO - Optional, video to add to galleryhttps://www.youtube.com/watch?v=r_CcCnG7pIE
VUE_APP_VIDEO_THUMB - file name/url of thumbnail for video. example: video_thumbnail.png (Place in the `assets/gallery/thumbnails` directory)
VUE_APP_PRETTY_URL - Pretty URL to be displayed for guests to type in their code
```

## Desgin Decisions

Having the frontend do the configuration for the date, names, etc makes it more difficult to just spin up the site and customize to your liking. This is because the front-end is "compiled" and then served. However, this offers us one big advantage: stability. Instead of relying on a server to provide that information, we can compile and have the site work 100% statically. If the backend crashes or the database becomes corrupt, the guests still get 90% of the functionality. There is even a backup RSVP system to let guests email RSVP instead of programatically RSVP. 
