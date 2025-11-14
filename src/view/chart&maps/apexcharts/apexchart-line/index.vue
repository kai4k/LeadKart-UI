<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { basicChart, lineWithDataChart, zoomableTimeSeriesChart, steplineChart, gradientChart, dashedCharts } from './line-chart-data';
import Apexchart from '@/components/common/Apexchart.vue';// @ts-ignore 
import { useStore } from 'vuex'
import { ref, watch } from 'vue';
const store = useStore()
// -------- set Dynamic Chart color -----------
const basicChartRef = ref(basicChart());
const lineWithDataChartRef = ref(lineWithDataChart());
const gradientChartRef = ref(gradientChart());
watch(() => store.getters.primaryColor, () => {
    basicChartRef.value = basicChart()
    lineWithDataChartRef.value = lineWithDataChart()
    gradientChartRef.value = gradientChart()
})
</script>
<template>
    <PageHeading title="Line Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <Apexchart :options="basicChartRef.chartOptions" :series="basicChartRef.chartSeries" :height="300" />
        </Card>
        <Card :half-width="true" title="Line with Data Labels">
            <Apexchart :options="lineWithDataChartRef.chartOptions" :series="lineWithDataChartRef.chartSeries"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Zoomable Timeseries">
            <Apexchart :options="zoomableTimeSeriesChart.chartOptions" :series="zoomableTimeSeriesChart.chartSeries"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Stepline">
            <Apexchart :options="steplineChart.chartOptions" :series="steplineChart.chartSeries" :height="300" />
        </Card>
        <Card :half-width="true" title="Gradient">
            <Apexchart :options="gradientChartRef.chartOptions" :series="gradientChartRef.chartSeries" :height="300" />
        </Card>
        <Card :half-width="true" title="Dashed">
            <Apexchart :options="dashedCharts.chartOptions" :series="dashedCharts.chartSeries" :height="300" />
        </Card>

    </div>
</template>