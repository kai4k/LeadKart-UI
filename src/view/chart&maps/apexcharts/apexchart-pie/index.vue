<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { simplePieChart, simpleDonutChart, updateDonut, add, remove, randomize, reset, monochromePieChart, gradientDonutChart, semiDonutChart, donutWithPatternChart } from './pie-chart-data';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

</script>
<template>
    <PageHeading title="Pie/Donuts Charts" sub-title="Apexcharts" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Simple Pie" :half-width="true">
            <VueApexCharts type="pie" :series="simplePieChart.series" :options="simplePieChart.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]" />
        </Card>
        <Card title="Simple Donut" :half-width="true">
            <VueApexCharts type="donut" :series="simpleDonutChart.series" :options="simpleDonutChart.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-red-500, bg-purple-500]" />
        </Card>
        <Card title="Simple Donut" :half-width="true">
            <div class="flex flex-wrap items-center gap-2 mb-3">
                <button class="btn btn-sub-primary" @click="add">Add </button>
                <button class="btn btn-sub-primary" @click="remove">Remove</button>
                <button class="btn btn-sub-primary" @click="randomize">Randomize </button>
                <button class="btn btn-sub-primary" @click="reset">Reset</button>
            </div>
            <VueApexCharts type="donut" :series="updateDonut.series" :options="updateDonut.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-red-500]" />
        </Card>
        <Card title="Monochrome Pie" :half-width="true">
            <VueApexCharts type="pie" :series="monochromePieChart.series" :options="monochromePieChart.chartOptions" :height="300" color-classes="[bg-yellow-500]" />
        </Card>
        <Card title="Gradient Donut" :half-width="true">
            <VueApexCharts type="donut" :series="gradientDonutChart.series" :options="gradientDonutChart.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]" />
        </Card>
        <Card title="Semi Donut" :half-width="true">
            <VueApexCharts type="donut" :series="semiDonutChart.series" :options="semiDonutChart.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]" />
        </Card>
        <Card title="Donut with Pattern" :half-width="true">
            <VueApexCharts type="donut" :series="donutWithPatternChart.series" :options="donutWithPatternChart.chartOptions" :height="300" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]" />
        </Card>

    </div>
</template>