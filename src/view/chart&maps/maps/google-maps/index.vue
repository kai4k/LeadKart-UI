<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { GoogleMap, Marker } from 'vue3-google-map'
const center = { lat: -31.397, lng: 125.644 };
const trackYourLocationCenter = { lat: -34.397, lng: 150.644 };
const mapWithLatLang = { lat: -25.363882, lng: 131.044922 };
// Define the bounds
const bounds = {
    north: -25.363882,
    south: -31.203405,
    east: 131.044922,
    west: 125.244141,
};
// Generate random marker positions within the bounds
const lngSpan = bounds.east - bounds.west;
const latSpan = bounds.north - bounds.south;
// Secret messages to be displayed at marker positions
const secretMessages = ["This", "is", "the", "secret", "message"];

// Function to calculate the marker positions
const getMarkerOptions = (index: number) => {
    const lat = bounds.south + latSpan * Math.random();
    const lng = bounds.west + lngSpan * Math.random();
    return { position: { lat, lng } };
};
const poiWithEvents = { lat: -33.871, lng: 151.197 }
</script>
<template>
    <PageHeading title="Google Maps" sub-title="Maps" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :full-width="true">
            <GoogleMap api-key="AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88" style="width: 100%; height: 350px"
                :center="center" :zoom="6">
                <Marker :options="{ position: center }" />
            </GoogleMap>
        </Card>
        <Card :full-width="true" title="Track your Location">
            <GoogleMap api-key="AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88" style="width: 100%; height: 350px"
                :center="trackYourLocationCenter" :zoom="6">
                <Marker :options="{ position: center }" />
            </GoogleMap>
        </Card>
        <Card :full-width="true" title="Map with LatLang">
            <GoogleMap api-key="AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88" style="width: 100%; height: 350px"
                :center="mapWithLatLang" :zoom="5">
                <Marker v-for="(message, index) in secretMessages" :key="index" :options="getMarkerOptions(index)" />
            </GoogleMap>
        </Card>
        <Card :full-width="true" title="POI Click Events">
            <GoogleMap api-key="AIzaSyB_dQ6dcSGTdhjDI7sGD8R74UnqYdnNK88" style="width: 100%; height: 350px"
                :center="poiWithEvents" :zoom="18">
                <Marker :options="{ position: center }" />
            </GoogleMap>
        </Card>
    </div>
</template>