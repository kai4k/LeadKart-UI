<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { basicPolarChart, monochromePolarChart } from './polar-chart-data';
// @ts-ignore 
import { useStore } from 'vuex'
import { ref, watch } from 'vue';
const store = useStore()
// -------- set Dynamic Chart color -----------
const basicPolarChartRef = ref(basicPolarChart())
watch(() => store.getters.primaryColor, () => {
    basicPolarChartRef.value = basicPolarChart()
})
</script>
<template>
    <PageHeading title="Polar Area Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <Apexchart :series="basicPolarChartRef.series" :options="basicPolarChartRef.options" :height="300" />
        </Card>
        <Card :half-width="true" title="Monochrome">
            <Apexchart :series="monochromePolarChart.series" :options="monochromePolarChart.options" :height="300" />
        </Card>
    </div>
</template>