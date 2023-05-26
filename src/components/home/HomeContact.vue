<template>
  <div class="contact">
    <div class="contact-left">
      <span>Working Hour</span>
      <p>Sunday to Saturday 09:00 AM to 11:00 PM</p>
      <span>Location</span>
      <p>Street - 127, New York, United States 546544</p>
      <span>Contact us</span>
      <p>+123456789<br/>hey@yourdomain.com</p>
    </div>
    <div class="contact-right">
      <div id="map"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface LeafletDom {
  map: null
}

const data: LeafletDom = reactive({
  map: null
})

const initMap = (): void => {
  data.map = L.map('map', {
    center: [30.50383, 114.393644],
    attributionControl: false,
    zoom: 16
  })
  L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(data.map)
}
onMounted(() => {
  initMap()
})
</script>

<style lang="less">
.contact {
  width: 80rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .contact-left {
    width: 40%;
    height: 28rem;
    padding-left: 8rem;
    padding-top: 5rem;
    background: #1F1D21;
    span {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
      width: 8rem;
      color: #919092;
    }
  }
  .contact-right {
    width: 60%;
    height: 28rem;
    #map {
      width: 100%;
      height: 100%;
    }
  }
}
</style>