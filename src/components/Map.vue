<template>

  <div style="height: 700px; width: 100%">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="center">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            {{$appConfig.LOCATION.ADDRESS}} <br> {{$appConfig.LOCATION.CITY}}, {{$appConfig.LOCATION.STATE}} {{$appConfig.LOCATION.ZIP}}
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 12,
      center: latLng(this.$appConfig.LOCATION.LAT, this.$appConfig.LOCATION.LONG),
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>',
      currentZoom: .5,
      currentCenter: latLng(this.$appConfig.LOCATION.LAT, this.$appConfig.LOCATION.LONG),
      mapOptions: {
        zoomSnap: 0.5,
        zoomControl: false,
        maxZoom: 16
      },
      showMap: true
    };
  },
    beforeCreate: function() {
    console.log(this.$appConfig)
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    innerClick() {
        // open google maps link @todo
      alert("Click!");
    }
  }
};
</script>


