<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';
import { basicChart, splineArea, negativeAreaChart, stackedAreaChartOptions, missingValuesAreaChart } from './area-chart-data';

</script>
<template>
    <PageHeading title="Area Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Basic" :full-width="true">
            <VueApexCharts type="area" :series="basicChart.series" :options="basicChart.chartOptions" :height="300" color-classes="[bg-primary-500]" />
        </Card>

        <Card title="Spline Area" :full-width="true">
            <VueApexCharts type="area" :series="splineArea.series" :options="splineArea.chartOptions" :height="300" color-classes="[bg-sky-500, bg-green-500]" />
        </Card>
        <card title="Negative" :full-width="true">
            <VueApexCharts type="area" :series="negativeAreaChart.series" :options="negativeAreaChart.chartOptions" :height="300" color-classes="[bg-primary-500, bg-gray-300]" />
        </card>
        <card title="Stacked" :full-width="true">
            <VueApexCharts type="area" :series="stackedAreaChartOptions.series" :options="stackedAreaChartOptions.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-gray-200]" />
        </card>
        <card title="Stacked" :full-width="true">
            <VueApexCharts type="area" :series="missingValuesAreaChart.series" :options="missingValuesAreaChart.chartOptions" :height="300" color-classes="[bg-primary-500]" />
        </card>
    </div>
</template>