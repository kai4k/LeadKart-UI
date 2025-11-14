<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import EchartsVue from '@/components/common/EChartsVue.vue';
import { MoveRight } from 'lucide-vue-next';
import { basicBarChart, getAxisAlignBarChart, backgroundBarChart, singleBarApp, getWorldPopulationBarChart, stackedBorderRadiusBarChart } from './bar-chart-data';

// @ts-ignore
import { useStore } from 'vuex';
const store = useStore();
const theme = computed(() => store.getters.layoutTheme);
const lineColor = theme.value === 'dark' ? '#0e0e0e' : '#e5e7eb';
const textColor = theme.value === 'dark' ? '#ffffff' : '#000000';
const basicBarChartRef = ref(basicBarChart(lineColor))
const axisAlignBarChartRef = ref(getAxisAlignBarChart(lineColor))
const backgroundBarChartRef = ref(backgroundBarChart(lineColor))
const singleBarAppRef = ref(singleBarApp(lineColor))
const worldPopulationBarChartRef = ref(getWorldPopulationBarChart(lineColor, textColor))
const stackedBorderRadiusBarChartRef = ref(stackedBorderRadiusBarChart(lineColor))
// Watch for theme change and update just the lineStyle color
watch(theme, (newTheme) => {
    const newLineColor = newTheme === 'dark' ? '#0e0e0e' : '#e5e7eb';
    const textColor = theme.value === 'dark' ? '#ffffff' : '#000000';
    basicBarChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    axisAlignBarChartRef.value.yAxis[0].splitLine.lineStyle.color = newLineColor;
    backgroundBarChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    singleBarAppRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    worldPopulationBarChartRef.value = getWorldPopulationBarChart(newLineColor, textColor);
    stackedBorderRadiusBarChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
});
</script>
<template>
    <PageHeading title="Bar Charts" sub-title="Echarts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <EchartsVue :options="basicBarChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Axis Align with Tick">
            <EchartsVue :options="axisAlignBarChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Bar with Background">
            <EchartsVue :options="backgroundBarChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Set Style of Single Bar">
            <EchartsVue :options="singleBarAppRef" :height="320" />
        </Card>
        <Card :half-width="true" title="World Population">
            <EchartsVue :options="worldPopulationBarChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Stacked Bar with borderRadius">
            <EchartsVue :options="stackedBorderRadiusBarChartRef" :height="320" />
        </Card>
    </div>
    <div class="mb-5 text-center">
        <a href="https://echarts.apache.org/examples/en/index.html#chart-type-bar" target="_blank" class="btn btn-primary">More Example
            <MoveRight class="inline-block ml-1 size-4" />

        </a>
    </div>
</template>