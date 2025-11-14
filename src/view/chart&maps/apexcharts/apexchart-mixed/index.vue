<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { lineColumnChart, areaChart, columnAreaChart, scatterChart } from './mixed-chart-data';
import Apexchart from '@/components/common/Apexchart.vue';
// @ts-ignore 
import { useStore } from 'vuex'
import { ref, watch } from 'vue';
const store = useStore()
// -------- set Dynamic Chart color -----------
const lineColumnChartRef = ref(lineColumnChart())
watch(() => store.getters.primaryColor, () => {
    lineColumnChartRef.value = lineColumnChart()
})
</script>
<template>
    <PageHeading title="Mixed Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Line column" :full-width="true">
            <Apexchart :options="lineColumnChartRef.chartOptions" :series="lineColumnChartRef.series" :height="300" />
        </Card>
        <Card title="Line & Area" :full-width="true">
            <Apexchart :options="areaChart.chartOptions" :series="areaChart.series" :height="300" />
        </Card>
        <Card title="Line Column Area" :half-width="true">
            <Apexchart :options="columnAreaChart.chartOptions" :series="columnAreaChart.series" :height="300" />
        </Card>
        <Card title="Line Scatter" :half-width="true">
            <Apexchart :options="scatterChart.chartOptions" :series="scatterChart.series" :height="300" />
        </Card>
    </div>
</template>