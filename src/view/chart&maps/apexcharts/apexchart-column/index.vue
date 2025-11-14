<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

import {
    basicChart,
    columnDataChart,
    stackColumnChart,
    stackColumn100Chart,
    groupedStackColumnChart,
    dumbbellChart,
    markersChart,
    columnGroupLabelChart,
    rotatedLabelsChart,
    negativeValuesChart,
    distributedColumnsChart
} from './column-chart';

</script>
<template>
    <PageHeading title="Column Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :full-width="true">
            <VueApexCharts type="bar" :options="basicChart.chartOptions" :series="basicChart.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500]" />
        </Card>
        <Card :full-width="true" title="Column with Data Labels">
            <VueApexCharts type="bar" :options="columnDataChart.chartOptions" :series="columnDataChart.series" :height="300" color-classes="[bg-primary-500]" />
        </Card>
        <Card :half-width="true" title="Stacked Columns">
            <VueApexCharts type="bar" :options="stackColumnChart.chartOptions" :series="stackColumnChart.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-red-500, bg-yellow-500]"/>
        </Card>
        <Card :half-width="true" title="Stacked Columns 100">
            <VueApexCharts type="bar" :options="stackColumn100Chart.chartOptions" :series="stackColumn100Chart.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500]"/>
        </Card>
        <Card :full-width="true" title="Grouped Stacked Columns">
            <VueApexCharts type="bar" :options="groupedStackColumnChart.chartOptions" :series="groupedStackColumnChart.series" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-primary-200, bg-green-300]"/>
        </Card>

        <Card :half-width="true" title="Dumbbell Chart">
            <VueApexCharts type="bar" :options="dumbbellChart.chartOptions" :series="dumbbellChart.series" :height="300" color-classes="[bg-primary-500, bg-pink-500]"/>
        </Card>
        <Card :half-width="true" title="Column with Markers">
            <VueApexCharts type="bar" :options="markersChart.chartOptions" :series="markersChart.series" :height="300" color-classes="[bg-primary-500]"/>
        </Card>
        <Card :half-width="true" title="Column with Group Label">
            <VueApexCharts type="bar" :options="columnGroupLabelChart.chartOptions" :series="columnGroupLabelChart.series" :height="300" color-classes="[bg-primary-500]"/>
        </Card>
        <Card :half-width="true" title="Column with Rotated Labels">
            <VueApexCharts type="bar" :options="rotatedLabelsChart.chartOptions" :series="rotatedLabelsChart.series" :height="300" color-classes="[bg-primary-500]"/>
        </Card>
        <Card :half-width="true" title="Column with Negative Values">
            <VueApexCharts type="bar" :options="negativeValuesChart.chartOptions" :series="negativeValuesChart.series" :height="300" color-classes="[bg-primary-500, bg-yellow-500, bg-red-500]"/>
        </Card>
        <Card :half-width="true" title="Distributed Columns">
            <VueApexCharts type="bar" :options="distributedColumnsChart.chartOptions" :series="distributedColumnsChart.series" :height="300" color-classes="[bg-primary-500, bg-pink-500, bg-sky-500, bg-green-300, bg-yellow-500, bg-purple-500, bg-red-500, bg-sky-500]" />
        </Card>
    </div>
</template>