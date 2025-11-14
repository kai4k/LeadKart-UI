<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import WorldMap from '@/components/common/WorldMap.vue';
import { imageMarkersMap, lineStyleMap, dataSeriesMap } from './victor-map-data';
import { reactive, ref } from 'vue';

interface Marker {
    coords: [number, number];
    name: string;
}
interface MapOptions {
    markers: Marker[];
}
const mapOptions = reactive<MapOptions>({
    markers: [],
});

const locationDisplay = ref<string>('');
async function findLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
        return;
    }
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            const coords: [number, number] = [latitude, longitude];

            try {
                const response = await fetch('https://ipinfo.io/geo');
                const data = await response.json();

                const city = data.city;
                const country = data.country;
                const ip = data.ip;

                const locationName = `• ${city}-${country}(${ip})`;

                // Update map markers by mutating the array
                mapOptions.markers.splice(0, mapOptions.markers.length, {
                    coords,
                    name: locationName,
                });
                // Update display text
                locationDisplay.value = `Location: ${locationName}`;
            } catch (error) {
                console.error('Error fetching location info:', error);
                alert('Error fetching location info.');
            }
        },
        (error) => {
            console.error('Error getting location:', error);
            alert('Unable to retrieve your location.');
        }
    );
}
function clearLocation() {
    // Clear markers by mutating the array
    mapOptions.markers.splice(0, mapOptions.markers.length);
    locationDisplay.value = ''; // Clear display text
}
</script>
<template>
    <PageHeading title="Vector" sub-title="Maps" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :full-width="true">
            <WorldMap :height="384" />
        </Card>
        <Card :half-width="true" title="Markers">
            <WorldMap :height="384" :selectedMark="0"
                :markers="[{ coords: [-14.235, -51.9253] }, { coords: [35.8617, 104.1954] }]" />
        </Card>
        <Card :half-width="true" title="Image Marker">
            <WorldMap :height="384" :markers="imageMarkersMap.markers" />
        </Card>
        <Card :half-width="true" title="Line Style">
            <WorldMap :height="384" :markers="lineStyleMap.markers" :lines="lineStyleMap.addLines"
                :lineStyle="{ stoke: '#676767', strokeWidth: 1.5, strokeDasharray: '6 3 6', animation: true, fillOpacity: 1, fill: '#ff5566' }" />
        </Card>
        <Card :half-width="true" title="With Tooltip">
            <WorldMap :height="384" />
        </Card>
        <Card :half-width="true" title="Data Series">
            <WorldMap :height="384" :markers="dataSeriesMap.markers" :series="dataSeriesMap.series" />
        </Card>
        <Card :half-width="true" title="Reflect user location">
            <WorldMap :height="384" :markers="mapOptions.markers" />
            <div class="flex gap-5 mt-4">
                <button id="request-location" class="text-white btn" style="background-color: rgb(0, 162, 255);"
                    @click="findLocation">
                    Find My Location
                </button>
                <button id="clear-location" class="text-white btn" style="background-color: #ef4444;"
                    @click="clearLocation">
                    Clear Location
                </button>
            </div>
            <div id="location-display" class="mt-2">{{ locationDisplay }}</div>
        </Card>
    </div>
</template>