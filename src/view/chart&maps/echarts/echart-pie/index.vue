<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import EChartsVue from '@/components/common/EChartsVue.vue';
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { basicPieChart, doughnutRoundedPieApp, doughnutPieChart, halfDouglasNutApp } from './pie-chart-data';
import { MoveRight } from 'lucide-vue-next';
// @ts-ignore
import { useStore } from 'vuex';
const store = useStore();
const theme = computed(() => store.getters.layoutTheme);
const lineColor = theme.value === 'dark' ? '#0e0e0e' : '#ffffff';
const doughnutRoundedPieAppRef = ref(doughnutRoundedPieApp(lineColor));

watch(theme, (newTheme) => {
    const newLineColor = newTheme === 'dark' ? '#0e0e0e' : '#ffffff';
    doughnutRoundedPieAppRef.value.series[0].itemStyle.borderColor=newLineColor
});
</script>
<template>
    <PageHeading title="Pie Charts" sub-title="Echarts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <EChartsVue :options="basicPieChart" :height="320" />
        </Card>
        <Card :half-width="true" title="Doughnut Chart with Rounded Corner">
            <EChartsVue :options="doughnutRoundedPieAppRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Doughnut Chart">
            <EChartsVue :options="doughnutPieChart" :height="320" />
        </Card>
        <Card :half-width="true" title="Doughnut Chart">
            <EChartsVue :options="halfDouglasNutApp" :height="320" />
        </Card>
    </div>
    <div class="mb-5 text-center">
        <a href="https://echarts.apache.org/examples/en/index.html#chart-type-pie" target="_blank"
            class="btn btn-primary">More Example
            <MoveRight data-lucide="move-right" class="inline-block ml-1 size-4"></MoveRight>
        </a>
    </div>
</template>