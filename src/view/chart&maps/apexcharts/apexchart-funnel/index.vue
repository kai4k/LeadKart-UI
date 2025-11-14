<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';
import { funnelChart, pyramidChart } from './funnel-chart-data';

</script>
<template>
    <PageHeading title="Funnel Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Funnel" :half-width="true">
            <VueApexCharts type="bar" :series="funnelChart.series" :options="funnelChart.chartOptions" :height="300" color-classes="[bg-primary-500]" />
        </Card>
        <Card title="Pyramid" :half-width="true">
            <VueApexCharts type="bar" :series="pyramidChart.series" :options="pyramidChart.chartOptions" :height="300" />
        </Card>
    </div>
</template>