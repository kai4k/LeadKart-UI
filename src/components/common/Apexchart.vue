<script setup lang="ts">
import { defineProps, onMounted, watch } from 'vue';
//@ts-ignore
import { useStore } from 'vuex';
const store = useStore()
import VueApexCharts from 'vue3-apexcharts';
defineProps({
    series: Object,
    options: Object,
    height: {
        type: Number,
        default: 150,
    },
    chartKey: {
        type: Number,
        default: 0,
    }
})
</script>

<template>
    <VueApexCharts :key="chartKey" v-if="series && options" :height="height"  :options="options" :series="series"
        ref="netProfitChart" />
</template>