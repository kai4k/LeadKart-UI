<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { simpleChart, chart3D } from './bubble-data';
// @ts-ignore 
import { useStore } from 'vuex'
import { ref, watch } from 'vue';
const store = useStore()
// -------- set Dynamic Chart color -----------
const simpleChartRef = ref(simpleChart())
const chart3DRef = ref(chart3D())
watch(() => store.getters.primaryColor, () => {
    simpleChartRef.value = simpleChart();
    chart3DRef.value = chart3D()
})

</script>
<template>
    <PageHeading title="Bubble Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true" title="Simple">
            <Apexchart :options="simpleChartRef.chartOptions" :series="simpleChartRef.series" :height="300" />
        </Card>
        <Card :half-width="true" title="3D Bubble">
            <Apexchart :options="chart3DRef.chartOptions" :series="chart3DRef.series" :height="300" />
        </Card>
    </div>
</template>