<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

import { basicChart, multipleColorChart, multipleColorFlippedChart, RoundedChart } from './heat-chart.data';

</script>
<template>
    <PageHeading title="Heatmap Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <VueApexCharts type="heatmap" :options="basicChart.chartOptions" :series="basicChart.series" :height="300" color-classes="[bg-primary-500]" />
        </Card>
        <Card :half-width="true" title="Multiple Colors">
            <VueApexCharts type="heatmap" :options="multipleColorChart.chartOptions" :series="multipleColorChart.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-pink-500, bg-sky-500, bg-indigo-500, bg-purple-500, bg-orange-500, bg-yellow-500]" />
        </Card>
        <Card :half-width="true" title="Multiple Colors Flipped">
            <VueApexCharts type="heatmap" :options="multipleColorFlippedChart.chartOptions" :series="multipleColorFlippedChart.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-pink-500, bg-sky-500, bg-indigo-500, bg-purple-500, bg-orange-500, bg-yellow-500]" />
        </Card>
        <Card :half-width="true" title="Rounded">
            <VueApexCharts type="heatmap" :options="RoundedChart.chartOptions" :series="RoundedChart.series" :height="300" color-classes="[bg-primary-500, bg-green-500]" />
        </Card>
    </div>
</template>