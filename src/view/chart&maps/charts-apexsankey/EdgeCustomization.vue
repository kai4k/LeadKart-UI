<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
// @ts-ignore
import ApexSankey from 'apexsankey'
// Type definitions for nodes and edges
interface SankeyNode {
    id: string;
    title: string;
}

interface SankeyEdge {
    source: string;
    target: string;
    value: number;
}

// Utility to parse color codes from dataset
function getColorCodes(dataset: DOMStringMap): string[] {
    return JSON.parse(dataset.chartColors || "[]");
}

// Sankey data structure
const Data3 = ref({
    nodes: [
        { id: "England", title: "england" },
        { id: "Wales", title: "wales" },
        { id: "Level 4", title: "level 4" },
        { id: "Level 3", title: "level 3" },
        { id: "Level 2", title: "level 2" },
        { id: "Level 1 and entry level", title: "level 1 and entry level" },
        { id: "No qualifications", title: "no qualifications" },
        { id: "Other", title: "other" },
        { id: "Wholesale & retail", title: "wholesale & retail" },
        { id: "Health & social work", title: "health & social work" },
        { id: "Education", title: "education" },
        { id: "Construction", title: "construction" },
        { id: "Manufacturing", title: "manufacturing" },
        { id: "Transport & storage", title: "transport & storage" },
        { id: "Finance & insurance", title: "finance & insurance" },
    ],
    edges: [
        { source: "England", target: "Level 4", value: 13 },
        { source: "England", target: "Level 3", value: 8 },
        { source: "England", target: "Level 2", value: 8 },
        { source: "England", target: "Level 1 and entry level", value: 6 },
        { source: "England", target: "No qualifications", value: 3 },
        { source: "Wales", target: "Level 4", value: 7 },
        { source: "Wales", target: "Level 3", value: 8 },
        { source: "Wales", target: "Level 2", value: 4 },
        { source: "Wales", target: "Level 1 and entry level", value: 5 },
        { source: "Wales", target: "No qualifications", value: 5 },
        { source: "Level 4", target: "Wholesale & retail", value: 4 },
        { source: "Level 4", target: "Health & social work", value: 3 },
        { source: "Level 4", target: "Education", value: 2 },
        { source: "Level 4", target: "Construction", value: 1 },
        { source: "Level 4", target: "Manufacturing", value: 2 },
        { source: "Level 4", target: "Other", value: 3 },
        { source: "Level 4", target: "Transport & storage", value: 2 },
        { source: "Level 4", target: "Finance & insurance", value: 3 },
        { source: 'Level 3', target: 'Wholesale & retail', value: 3 },
        { source: 'Level 3', target: 'Health & social work', value: 2 },
        { source: 'Level 3', target: 'Education', value: 1 },
        { source: 'Level 3', target: 'Construction', value: 2 },
        { source: 'Level 3', target: 'Manufacturing', value: 1 },
        { source: 'Level 3', target: 'Other', value: 3 },
        { source: 'Level 3', target: 'Transport & storage', value: 2 },
        { source: 'Level 3', target: 'Finance & insurance', value: 2 },
        { source: 'Level 2', target: 'Wholesale & retail', value: 2 },
        { source: 'Level 2', target: 'Health & social work', value: 1 },
        { source: 'Level 2', target: 'Education', value: 2 },
        { source: 'Level 2', target: 'Construction', value: 1 },
        { source: 'Level 2', target: 'Manufacturing', value: 2 },
        { source: 'Level 2', target: 'Other', value: 2 },
        { source: 'Level 2', target: 'Transport & storage', value: 1 },
        { source: 'Level 2', target: 'Finance & insurance', value: 1 },
        { source: 'Level 1 and entry level', target: 'Wholesale & retail', value: 1 },
        { source: 'Level 1 and entry level', target: 'Health & social work', value: 2 },
        { source: 'Level 1 and entry level', target: 'Education', value: 1 },
        { source: 'Level 1 and entry level', target: 'Construction', value: 2 },
        { source: 'Level 1 and entry level', target: 'Manufacturing', value: 1 },
        { source: 'Level 1 and entry level', target: 'Other', value: 2 },
        { source: 'Level 1 and entry level', target: 'Transport & storage', value: 1 },
        { source: 'Level 1 and entry level', target: 'Finance & insurance', value: 1 },
        { source: 'No qualifications', target: 'Wholesale & retail', value: 1 },
        { source: 'No qualifications', target: 'Health & social work', value: 1 },
        { source: 'No qualifications', target: 'Education', value: 1 },
        { source: 'No qualifications', target: 'Construction', value: 1 },
        { source: 'No qualifications', target: 'Manufacturing', value: 1 },
        { source: 'No qualifications', target: 'Other', value: 1 },
        { source: 'No qualifications', target: 'Transport & storage', value: 1 },
        { source: 'No qualifications', target: 'Finance & insurance', value: 1 },
    ],
});

const graphOptions3 = ref({
    nodeWidth: 20,
    fontWeight: 500,
    fontSize: "10px",
    height: 300,
    fontColor: "",
    canvasStyle: "",
    nodeBorderColor: "",
    tooltipBGColor: "",
    tooltipBorderColor: "",
    edgeOpacity: 0.2,
    nodeTemplate: (content: any) => `
    <div class="flex items-center gap-2">
      <div class="size-3"  style='background-color:${content.source.color}'></div>
      <h6>${content.source.title}</h6>
      <div>=></div>
      <div class="size-3" style='background-color:${content.target.color}'></div>
      <h6>${content.target.title}</h6>
      <div>: ${content.value}</div>
    </div>`,
});

const apexSankeyEdgeContainer = ref<HTMLDivElement | null>(null);

let sankeyInstance: any = null;

function renderSankey() {
    if (apexSankeyEdgeContainer.value) {
        apexSankeyEdgeContainer.value.innerHTML = ""; // Clear the container
        // Initialize Sankey chart
        sankeyInstance = new ApexSankey(apexSankeyEdgeContainer.value, graphOptions3.value);
        sankeyInstance.render(Data3.value);
    }
}

function reloadSankey() {
    renderSankey(); // Re-render Sankey on resize
}

// Lifecycle hooks
onMounted(() => {
    if (apexSankeyEdgeContainer.value) {
        const dataset = apexSankeyEdgeContainer.value.dataset;
        const colorCodes = getColorCodes(dataset);
        graphOptions3.value.fontColor = colorCodes[0];
        graphOptions3.value.nodeBorderColor = colorCodes[2];
        graphOptions3.value.tooltipBGColor = colorCodes[1];
        graphOptions3.value.tooltipBorderColor = colorCodes[2];

        renderSankey();

        // Attach resize listener
        window.addEventListener("resize", reloadSankey);
    }
});

onBeforeUnmount(() => {
    // Clean up
    window.removeEventListener("resize", reloadSankey);
    if (sankeyInstance) {
        sankeyInstance.destroy();
    }
});

</script>
<template>
    <div ref="apexSankeyEdgeContainer" class="sankey-container"></div>
</template>
