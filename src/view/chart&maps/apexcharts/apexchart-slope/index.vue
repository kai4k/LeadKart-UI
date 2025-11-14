<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { slopeBasicChartData, slopeMultiGroupChartData } from './slope-chart-data';
</script>
<template>
    <PageHeading title="Slope Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :full-width="true">
            <Apexchart :options="slopeBasicChartData.chartOptions" :series="slopeBasicChartData.series" :height="300" />
        </Card>
        <Card :full-width="true" title="Multi Group">
            <Apexchart :options="slopeMultiGroupChartData.chartOptions" :series="slopeMultiGroupChartData.series"
                :height="300" />
        </Card>
    </div>
</template>