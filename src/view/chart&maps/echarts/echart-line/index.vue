<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { basicLineChart, smoothLineChart, stackedLineChart, categoryLineChart, stepLineApp, styleLineApp } from './line-chart-data';
import EChartsVue from '@/components/common/EChartsVue.vue';
import { MoveRight } from 'lucide-vue-next';
// @ts-ignore
import { useStore } from 'vuex';
const store = useStore();
const theme = computed(() => store.getters.layoutTheme);
const lineColor = theme.value === 'dark' ? '#0e0e0e' : '#e5e7eb';
const textColor = theme.value === 'dark' ? '#ffffff' : '#000000';
const basicLineChartRef = ref(basicLineChart(lineColor))
const smoothLineChartRef = ref(smoothLineChart(lineColor))
const stackedLineChartRef = ref(stackedLineChart(lineColor))
const categoryLineChartRef = ref(categoryLineChart(lineColor))
const stepLineAppRef = ref(stepLineApp(lineColor, textColor))
const styleLineAppRef = ref(styleLineApp(lineColor))
watch(theme, (newTheme) => {
    const newLineColor = newTheme === 'dark' ? '#0e0e0e' : '#e5e7eb';
    const textColor = theme.value === 'dark' ? '#ffffff' : '#000000';
    basicLineChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    smoothLineChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    stackedLineChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    categoryLineChartRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
    stepLineAppRef.value = stepLineApp(newLineColor, textColor);
    styleLineAppRef.value.yAxis.splitLine.lineStyle.color = newLineColor;
})

</script>
<template>
    <PageHeading title="Line Charts" sub-title="Echarts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :half-width="true">
            <EChartsVue :options="basicLineChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Smooth Line">
            <EChartsVue :options="smoothLineChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Stacked Line Chart">
            <EChartsVue :options="stackedLineChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Line Y Category">
            <EChartsVue :options="categoryLineChartRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Step Line">
            <EChartsVue :options="stepLineAppRef" :height="320" />
        </Card>
        <Card :half-width="true" title="Style Line">
            <EChartsVue :options="styleLineAppRef" :height="320" />
        </Card>
    </div>
    <div class="mb-5 text-center">
        <a href="https://echarts.apache.org/examples/en/index.html#chart-type-line" target="_blank"
            class="btn btn-primary">More Example
            <MoveRight class="inline-block ml-1 size-4"></MoveRight>
        </a>
    </div>
</template>