<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicChart, candlestickWithLineChart } from './candle-stick-data';
</script>
<template>
    <PageHeading title="Candlestick Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <Apexchart :options="basicChart.chartOptions" :series="basicChart.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Candlestick with line">
            <Apexchart :options="candlestickWithLineChart.chartOptions" :series="candlestickWithLineChart.series"
                :height="300" />
        </Card>
    </div>
</template>