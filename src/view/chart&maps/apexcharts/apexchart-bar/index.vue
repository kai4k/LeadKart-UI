<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicBarChart, groupedBarChart, stackedBarChartOptions, stackedBar100Chart, groupedStackedBarsChart, barWithNegativeValuesBarsChart, barWithMarkersChart, reversedBarChart, patternedBarChart } from './bar-chart-data';
// @ts-ignore 
import { useStore } from 'vuex'
import { ref, watch } from 'vue';
const store = useStore()
// -------- set Dynamic Chart color -----------
const basicBarChartRef = ref(basicBarChart());
const groupedBarChartRef = ref(groupedBarChart());
const stackedBarChartOptionsRef = ref(stackedBarChartOptions());
const stackedBar100ChartRef = ref(stackedBar100Chart());
const groupedStackedBarsChartRef = ref(groupedStackedBarsChart());
const barWithMarkersChartRef = ref(barWithMarkersChart());
const reversedBarChartRef = ref(reversedBarChart())
const patternedBarChartRef = ref(patternedBarChart())
watch(() => store.getters.primaryColor, () => {
    basicBarChartRef.value = basicBarChart();
    groupedBarChartRef.value = groupedBarChart();
    stackedBarChartOptionsRef.value = stackedBarChartOptions();
    stackedBar100ChartRef.value = stackedBar100Chart();
    groupedStackedBarsChartRef.value = groupedStackedBarsChart();
    barWithMarkersChartRef.value = barWithMarkersChart();
    reversedBarChartRef.value = reversedBarChart()
    patternedBarChartRef.value = patternedBarChart()
})
</script>
<template>
    <PageHeading title="Bar Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Basic" :halfWidth="true">
            <Apexchart :options="basicBarChartRef.chartOptions" :series="basicBarChartRef.series" :height="300" />
        </Card>
        <Card title="Grouped" :halfWidth="true">
            <Apexchart :options="groupedBarChartRef.chartOptions" :series="groupedBarChartRef.series" :height="300" />
        </Card>
        <Card title="Stacked Bar" :half-width="true">
            <Apexchart :options="stackedBarChartOptionsRef.chartOptions" :series="stackedBarChartOptionsRef.series"
                :height="300" />
        </Card>
        <Card title="Stacked Bars 100" :half-width="true">
            <Apexchart :options="stackedBar100ChartRef.chartOptions" :series="stackedBar100ChartRef.series"
                :height="300" />
        </Card>
        <Card title="Grouped Stacked Bars" :half-width="true">
            <Apexchart :series="groupedStackedBarsChartRef.series" :options="groupedStackedBarsChartRef.chartOptions"
                :height="300" />
        </Card>
        <Card title="Bar with Negative Values" :half-width="true">
            <Apexchart :options="barWithNegativeValuesBarsChart.chartOptions"
                :series="barWithNegativeValuesBarsChart.series" :height="300" />
        </Card>
        <Card title="Bar with Markers" :half-width="true">
            <Apexchart :options="barWithMarkersChartRef.chartOptions" :series="barWithMarkersChartRef.series"
                :height="300" />
        </Card>
        <Card title="Reversed Bar Chart" :half-width="true">
            <Apexchart :options="reversedBarChartRef.chartOptions" :series="reversedBarChartRef.series" :height="300" />
        </Card>
        <Card title="Patterned" :half-width="true">
            <Apexchart :options="patternedBarChartRef.chartOptions" :series="patternedBarChartRef.series"
                :height="300" />
        </Card>
    </div>
</template>