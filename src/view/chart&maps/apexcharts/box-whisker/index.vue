<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicChart, boxplotScatterChart, horizontalBoxPlotChartOptions } from './chart-box-data';
</script>
<template>
    <PageHeading title="Box-whisker Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <Apexchart :options="basicChart.chartOptions" :series="basicChart.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Boxplot-Scatter">
            <Apexchart :options="boxplotScatterChart.chartOptions" :series="boxplotScatterChart.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Horizontal BoxPlot">
            <Apexchart :options="horizontalBoxPlotChartOptions.chartOptions"
                :series="horizontalBoxPlotChartOptions.series" :height="300" />
        </Card>
    </div>
</template>