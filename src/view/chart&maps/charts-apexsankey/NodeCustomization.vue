<script setup lang="ts">
import { ref, onMounted } from 'vue'
// @ts-ignore
import ApexSankey from 'apexsankey'

// Color codes directly as hex values
const colorCodes = [
    '#2d2d2d', // bg-gray-800
    '#ffffff', // bg-white
    '#e0e0e0', // bg-gray-200
]

const apexSankeyNodeContainer = ref<HTMLElement | null>(null)

const graphData = {
    nodes: [
        { id: 'Applications', title: 'Applications' },
        { id: 'Accepted', title: 'Accepted' },
        { id: 'Rejected', title: 'Rejected' },
        { id: 'In Progress', title: 'In Progress' },
        { id: 'Software Engineering', title: 'Software Engineering' },
        { id: 'Data Science', title: 'Data Science' },
        { id: 'Marketing', title: 'Marketing' },
        { id: 'Sales', title: 'Sales' },
        { id: 'HR', title: 'HR' },
        { id: 'Finance', title: 'Finance' },
        { id: 'Internship', title: 'Internship' },
        { id: 'Junior', title: 'Junior' },
        { id: 'Mid-level', title: 'Mid-level' },
        { id: 'Senior', title: 'Senior' },
        { id: 'Entry Level', title: 'Entry Level' },
        { id: 'Full-time', title: 'Full-time' },
        { id: 'Part-time', title: 'Part-time' },
    ],
    edges: [
        { source: 'Applications', target: 'Accepted', value: 10 },
        { source: 'Applications', target: 'Rejected', value: 15 },
        { source: 'Applications', target: 'In Progress', value: 10 },
        { source: 'Accepted', target: 'Software Engineering', value: 4 },
        { source: 'Accepted', target: 'Data Science', value: 2 },
        { source: 'Accepted', target: 'Marketing', value: 1 },
        { source: 'Accepted', target: 'Sales', value: 1 },
        { source: 'Accepted', target: 'HR', value: 1 },
        { source: 'Accepted', target: 'Finance', value: 1 },
        { source: 'Rejected', target: 'Software Engineering', value: 5 },
        { source: 'Rejected', target: 'Data Science', value: 3 },
        { source: 'Rejected', target: 'Marketing', value: 2 },
        { source: 'Rejected', target: 'Sales', value: 2 },
        { source: 'Rejected', target: 'HR', value: 2 },
        { source: 'Rejected', target: 'Finance', value: 1 },
        { source: 'In Progress', target: 'Software Engineering', value: 3 },
        { source: 'In Progress', target: 'Data Science', value: 2 },
        { source: 'In Progress', target: 'Marketing', value: 2 },
        { source: 'In Progress', target: 'Sales', value: 1 },
        { source: 'In Progress', target: 'HR', value: 1 },
        { source: 'In Progress', target: 'Finance', value: 1 },
        { source: 'Software Engineering', target: 'Internship', value: 1 },
        { source: 'Software Engineering', target: 'Junior', value: 1 },
        { source: 'Software Engineering', target: 'Mid-level', value: 1 },
        { source: 'Software Engineering', target: 'Senior', value: 1 },
        { source: 'Software Engineering', target: 'Entry Level', value: 1 },
        { source: 'Data Science', target: 'Internship', value: 1 },
        { source: 'Data Science', target: 'Junior', value: 1 },
        { source: 'Data Science', target: 'Mid-level', value: 1 },
        { source: 'Data Science', target: 'Senior', value: 1 },
        { source: 'Data Science', target: 'Entry Level', value: 1 },
        { source: 'Marketing', target: 'Internship', value: 1 },
        { source: 'Marketing', target: 'Junior', value: 1 },
        { source: 'Marketing', target: 'Mid-level', value: 1 },
        { source: 'Marketing', target: 'Senior', value: 1 },
        { source: 'Marketing', target: 'Entry Level', value: 1 },
        { source: 'Sales', target: 'Internship', value: 1 },
        { source: 'Sales', target: 'Junior', value: 1 },
        { source: 'Sales', target: 'Mid-level', value: 1 },
        { source: 'Sales', target: 'Senior', value: 1 },
        { source: 'Sales', target: 'Entry Level', value: 1 },
        { source: 'HR', target: 'Internship', value: 1 },
        { source: 'HR', target: 'Junior', value: 1 },
        { source: 'HR', target: 'Mid-level', value: 1 },
        { source: 'HR', target: 'Senior', value: 1 },
        { source: 'HR', target: 'Entry Level', value: 1 },
        { source: 'Finance', target: 'Internship', value: 1 },
        { source: 'Finance', target: 'Junior', value: 1 },
        { source: 'Finance', target: 'Mid-level', value: 1 },
        { source: 'Finance', target: 'Senior', value: 1 },
        { source: 'Finance', target: 'Entry Level', value: 1 },
        { source: 'Internship', target: 'Full-time', value: 1 },
        { source: 'Internship', target: 'Part-time', value: 1 },
        { source: 'Junior', target: 'Full-time', value: 1 },
        { source: 'Junior', target: 'Part-time', value: 1 },
        { source: 'Mid-level', target: 'Full-time', value: 1 },
        { source: 'Mid-level', target: 'Part-time', value: 1 },
        { source: 'Senior', target: 'Full-time', value: 1 },
        { source: 'Senior', target: 'Part-time', value: 1 },
        { source: 'Entry Level', target: 'Full-time', value: 1 },
        { source: 'Entry Level', target: 'Part-time', value: 1 },
    ],
}

const graphOptions = {
    nodeWidth: 20,
    fontWeight: 500,
    fontSize: '10px',
    height: 300,
    fontColor: colorCodes[0],
    canvasStyle: '',
    nodeBorderColor: colorCodes[2],
    tooltipBGColor: colorCodes[1],
    tooltipBorderColor: colorCodes[2],
    edgeGradientFill: false,
}

const renderSankey = () => {
    if (apexSankeyNodeContainer.value) {
        apexSankeyNodeContainer.value.innerHTML = '' // Clear container
        const sankey = new ApexSankey(apexSankeyNodeContainer.value, graphOptions)
        sankey.render(graphData)
    }
}

onMounted(() => {
    renderSankey()
    window.addEventListener('resize', renderSankey) // Re-render on resize
})
</script>
<template>
    <div ref="apexSankeyNodeContainer" class="w-full" />
</template>