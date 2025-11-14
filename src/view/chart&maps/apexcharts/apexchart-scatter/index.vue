<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicScatterChartData, datetimeScatterChartData, imagesScatterChartData } from './scatter-chart-data';
import VueApexCharts from '@/components/common/VueApexCharts.vue';
</script>
<template>
    <PageHeading title="Scatter Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <VueApexCharts type="scatter" :options="basicScatterChartData.chartOptions" :series="basicScatterChartData.series" :height="300" color-classes="[bg-primary-500, bg-yellow-500, bg-red-500]" />
        </Card>
        <Card :half-width="true" title="Scatter – Datetime">
            <VueApexCharts type="scatter" :options="datetimeScatterChartData.chartOptions" :series="datetimeScatterChartData.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-purple-500, bg-orange-500, bg-red-500]" />
        </Card>
        <Card :half-width="true" title="Scatter – Images">
            <VueApexCharts type="scatter" :options="imagesScatterChartData.chartOptions" :series="imagesScatterChartData.series" :height="300" />
        </Card>
    </div>
</template>