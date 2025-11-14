<script setup lang="ts">
import Apexchart from '@/components/common/Apexchart.vue';
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { basicRadialBarChart, multipleRadialBarChart, customAngleRadialbarChart, gradientRadialbarChart, imageRadialbarChart, strokedGaugeRadialbarChart, semiGaugeRadialbarChart } from './radialbar-chart-data';

// @ts-ignore 
import { useStore } from 'vuex'
import { ref, watch } from 'vue';
const store = useStore()
// -------- set Dynamic Chart color -----------
const basicRadialBarChartRef = ref(basicRadialBarChart());
const multipleRadialBarChartRef = ref(multipleRadialBarChart());
const customAngleRadialbarChartRef = ref(customAngleRadialbarChart());
const gradientRadialbarChartRef = ref(gradientRadialbarChart());
const strokedGaugeRadialbarChartRef = ref(strokedGaugeRadialbarChart())
watch(() => store.getters.primaryColor, () => {
    basicRadialBarChartRef.value = basicRadialBarChart();
    multipleRadialBarChartRef.value = multipleRadialBarChart();
    customAngleRadialbarChartRef.value = customAngleRadialbarChart();
    gradientRadialbarChartRef.value = gradientRadialbarChart();
    strokedGaugeRadialbarChartRef.value = strokedGaugeRadialbarChart()
})
</script>
<template>
    <PageHeading title="Radialbar Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">

        <Card :half-width="true">
            <Apexchart :options="basicRadialBarChartRef.chartOptions" :series="basicRadialBarChartRef.series"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Multiple">
            <Apexchart :options="multipleRadialBarChartRef.chartOptions" :series="multipleRadialBarChartRef.series"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Custom Angle Circle">
            <Apexchart :options="customAngleRadialbarChartRef.chartOptions"
                :series="customAngleRadialbarChartRef.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Gradient">
            <Apexchart :options="gradientRadialbarChartRef.chartOptions" :series="gradientRadialbarChartRef.series"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Radialbars with Image">
            <Apexchart :options="imageRadialbarChart.chartOptions" :series="imageRadialbarChart.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Stroked Gauge">
            <Apexchart :options="strokedGaugeRadialbarChartRef.chartOptions"
                :series="strokedGaugeRadialbarChartRef.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Semi Circle Gauge">
            <Apexchart :options="semiGaugeRadialbarChart.chartOptions" :series="semiGaugeRadialbarChart.series"
                :height="300" />
        </Card>

    </div>
</template>