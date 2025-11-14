<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { rangeAreaChartData, rangeComboChartData } from './range-area-chart-data';

import VueApexCharts from '@/components/common/VueApexCharts.vue';
</script>
<template>
    <PageHeading title="Range Area Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <VueApexCharts type="rangeArea" :series="rangeAreaChartData.series" :options="rangeAreaChartData.chartOptions" :height="300" color-classes="[bg-primary-500]" />
        </Card>
        <Card :half-width="true" title="Combo">
            <VueApexCharts type="rangeArea" :series="rangeComboChartData.series" :options="rangeComboChartData.chartOptions" :height="300" color-classes="[bg-sky-500, bg-red-500]" />
        </Card>
    </div>
</template>