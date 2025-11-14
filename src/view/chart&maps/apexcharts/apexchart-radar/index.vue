<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicRadarChart, multipleRadarChart, polygonRadarChart } from './radar-chart-data';
</script>
<template>
    <PageHeading title="Radar Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <Apexchart :options="basicRadarChart.options" :series="basicRadarChart.series" :height="370" />
        </Card>
        <Card :half-width="true" title="Radar – Multiple Series">
            <Apexchart :options="multipleRadarChart.options" :series="multipleRadarChart.series" :height="370" />
        </Card>
        <Card :half-width="true" title="Radar with Polygon-fill">
            <Apexchart :options="polygonRadarChart.options" :series="polygonRadarChart.series" :height="370" />
        </Card>
    </div>
</template>