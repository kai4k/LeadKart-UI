<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { basiTreepmapData, multipleTreemapData, colorRangeTreemapData, distributedTreemapData } from './treemap-chart-data';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

</script>
<template>
    <PageHeading title="Treemap Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <VueApexCharts type="treemap" :options="basiTreepmapData.chartOptions" :series="basiTreepmapData.series" :height="300" color-classes="[bg-primary-500]" />
        </Card>
        <Card :half-width="true" title="Treemap Multiple Series">
            <VueApexCharts type="treemap" :options="multipleTreemapData.chartOptions" :series="multipleTreemapData.series" :height="300" color-classes="[bg-primary-500, bg-green-500]" />
        </Card>
        <Card :half-width="true" title="Color Range">
            <VueApexCharts type="treemap" :options="colorRangeTreemapData.chartOptions" :series="colorRangeTreemapData.series" :height="300" color-classes="[bg-primary-500, bg-green-500]" />
        </Card>
        <Card :half-width="true" title="Distributed">
            <VueApexCharts type="treemap" :options="distributedTreemapData.chartOptions" :series="distributedTreemapData.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-sky-500, bg-red-500]" />
        </Card>
    </div>
</template>