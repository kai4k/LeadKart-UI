<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicChartData, advancedTimelineData, multipleGroupTimelineData, dumbbellTimelineData } from './tilmeline-chart-data';
// @ts-ignore 
import { useStore } from 'vuex'
const store = useStore()

</script>
<template>
    <PageHeading title="Timeline Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <Apexchart :options="basicChartData.chartOptions" :series="basicChartData.series" :height="300" />
        </Card>
        <Card :half-width="true" title="Advanced">
            <Apexchart :options="advancedTimelineData.chartOptions" :series="advancedTimelineData.series"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Multiple Series – Group Rows">
            <Apexchart :options="multipleGroupTimelineData.chartOptions" :series="multipleGroupTimelineData.series"
                :height="300" />
        </Card>
        <Card :half-width="true" title="Dumbbell Chart (Horizontal)">
            <Apexchart :options="dumbbellTimelineData.chartOptions" :series="dumbbellTimelineData.series"
                :height="300" />
        </Card>
    </div>
</template>