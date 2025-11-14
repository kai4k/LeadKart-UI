<script setup lang="ts">
import { ref, onMounted } from 'vue'
// @ts-ignore
// @ts-ignore
import ApexSankey from 'apexsankey'

// @ts-ignore
import { useStore } from 'vuex'
const store = useStore()

// Color Codes as Hex Values
const colorCodes = [
    '#2d2d2d', // bg-gray-800
    '#ffffff', // bg-white
    '#e0e0e0', // bg-gray-200
    '#1a1a1a', // bg-dark-100
    '#121212', // bg-dark-900
    '#333333', // bg-dark-800
]

// Setup reference for the Sankey container
const apexSankeyContainer = ref<HTMLElement | null>(null)

const graphData = {
    nodes: [
        { id: 'Oil', title: 'Oil' },
        { id: 'Natural Gas', title: 'Natural Gas' },
        { id: 'Coal', title: 'Coal' },
        { id: 'Fossil Fuels', title: 'Fossil Fuels' },
        { id: 'Electricity', title: 'Electricity' },
        { id: 'Energy', title: 'Energy' },
    ],
    edges: [
        { source: 'Oil', target: 'Fossil Fuels', value: 15 },
        { source: 'Natural Gas', target: 'Fossil Fuels', value: 20 },
        { source: 'Coal', target: 'Fossil Fuels', value: 25 },
        { source: 'Coal', target: 'Electricity', value: 25 },
        { source: 'Fossil Fuels', target: 'Energy', value: 60 },
        { source: 'Electricity', target: 'Energy', value: 25 },
    ],
}
const themeColor = ref(store.getters.sidebarColor)
const graphOptions = {
    nodeWidth: 20,
    fontWeight: 500,
    fontSize: '10px',
    height: 300,
    fontColor: themeColor ? colorCodes[0] : '#ffffff',
    canvasStyle: '',
    tooltipBGColor: colorCodes[1],
    tooltipBorderColor: colorCodes[2],
    nodeTemplate: (content: any) => {
        return `<div class="flex items-center gap-2">
              <div class="size-3" style="background-color:${colorCodes[3]}"></div>
              <h6 class="dark:text-dark-100">${content.source.title}</h6>
              <div>=></div>
              <div class="size-3" style="background-color:${colorCodes[4]}"></div>
              <h6 class="dark:text-dark-100">${content.target.title}</h6>
              <div>: ${content.value}</div>
            </div>`
    },
}

const renderSankey = () => {
    if (apexSankeyContainer.value) {
        apexSankeyContainer.value.innerHTML = '' // Clear the container
        const sankey = new ApexSankey(apexSankeyContainer.value, graphOptions)
        sankey.render(graphData)
    }
}

onMounted(() => {
    renderSankey()

    // Re-render Sankey on window resize
    window.addEventListener('resize', renderSankey)
})
</script>
<template>
    <div ref="apexSankeyContainer" class="w-full" />
</template>