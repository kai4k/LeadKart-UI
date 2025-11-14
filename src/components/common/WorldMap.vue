<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    height: {
        type: Number,
        default: 210,
    },
    markers: {
        type: Object,
        default: () => ({})
    },
    selectedMark: {
        type: Number,
        default: -1,
    },
    lines: {
        type: Object,
        default: () => ([])
    },
    lineStyle: {
        type: Object,
        default: () => ({})
    },
    series: {
        type: Object,
        default: () => ({})
    }
})


const markPoint = ref(props.markers)

const mapType = ref('world'); // Specify the map type
const zoom = ref(1); // Initial zoom level
const toolbarShow = ref(false)
const regionStyle = {
    initial: {
        fill: '#e4e4e4', // Default region color
    },
    hover: {
        fill: '#6950E8', // Color on hover
        fillOpacity: 1,
    },
};

</script>
<template>
    <vuevectormap map="world" :zoom="zoom" :backgroundColor="'#fff'" :regionStyle="regionStyle" :showTooltip="false"
        :showControls="false" width="100%" :height="height" :options="{
            markers: markPoint,
            selectedMarkers: [selectedMark],
            lines: lines,
            lineStyle: lineStyle,
            series: series,

        }" />
</template>

<style scoped>
.jvm-series-container .jvm-legend {
    background-color: transparent;
}
</style>