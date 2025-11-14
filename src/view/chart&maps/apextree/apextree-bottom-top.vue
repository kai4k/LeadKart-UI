<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { ref, onMounted, watch } from 'vue';
// @ts-ignore
import ApexTree from 'apextree';
import user18 from '@/assets/images/avatar/user-18.png';
import user19 from '@/assets/images/avatar/user-19.png';
import user20 from '@/assets/images/avatar/user-20.png';
import user21 from '@/assets/images/avatar/user-21.png';
import user22 from '@/assets/images/avatar/user-22.png';
import user23 from '@/assets/images/avatar/user-23.png';
import user24 from '@/assets/images/avatar/user-24.png';
import user25 from '@/assets/images/avatar/user-25.png';
import user26 from '@/assets/images/avatar/user-26.png';

// Reference to the container where the tree will be rendered
const apexTreeContainer = ref<HTMLElement | null>(null);

// Define the color codes (replace with actual color values)
const colorCodes = ref<string[]>([
    '#f3f4f6', '#6b7280', '#ffffff', '#3b82f6', '#9333ea', '#f59e0b',
    '#1f2937', '#f97316', '#10b981', '#ec4899'
]);

// Tree data structure
const treeData = ref({
    id: 'Lucas_Alex',
    data: {
        name: 'Ezekiel Halvorson',
        imageURL: user18,
        borderColor: colorCodes.value[3],
    },
    children: [
        {
            id: 'Alex_Lee',
            data: {
                name: 'Erin Dicki',
                imageURL: user19,
                borderColor: colorCodes.value[4],
            },
            children: [
                {
                    id: 'Mia_Patel',
                    data: {
                        name: 'Norval Murray',
                        imageURL: user20,
                        borderColor: colorCodes.value[5],
                    },
                },
                {
                    id: 'Ryan_Clark',
                    data: {
                        name: 'Oliver Boehm',
                        imageURL: user21,
                        borderColor: colorCodes.value[5],
                    },
                },
                {
                    id: 'Zoe_Wang',
                    data: {
                        name: 'Gino Prosacco',
                        imageURL: user22,
                        borderColor: colorCodes.value[5],
                    },
                },
            ],
        },
        {
            id: 'Leo_Kim',
            data: {
                name: 'Edgardo Kessler',
                imageURL: user23,
                borderColor: colorCodes.value[6],
            },
            children: [
                {
                    id: 'Ava_Jones',
                    data: {
                        name: 'Marcos Stracke',
                        imageURL: user24,
                        borderColor: colorCodes.value[7],
                    },
                },
                {
                    id: 'Maya_Gupta',
                    data: {
                        name: 'Waylon Erdman',
                        imageURL: user25,
                        borderColor: colorCodes.value[7],
                    },
                },
            ],
        },
        {
            id: 'Max_Ruiz',
            data: {
                name: 'Eleanora Hayes',
                imageURL: user26,
                borderColor: colorCodes.value[6],
            },
        },
    ],
});

// Tree options
const treeOptions = ref({
    contentKey: 'data',
    width: '100%',
    height: 600,
    nodeWidth: 150,
    nodeHeight: 70,
    childrenSpacing: 70,
    fontSize: '12px',
    siblingSpacing: 30,
    direction: 'bottom',
    nodeBGColor: colorCodes.value[2],
    nodeBGColorHover: colorCodes.value[2],
    fontColor: colorCodes.value[1],
    borderColor: colorCodes.value[0],
    edgeColor: colorCodes.value[0],
    edgeColorHover: colorCodes.value[2],
    tooltipBorderColor: colorCodes.value[0],
    borderWidth: 0,
    nodeTemplate: (content: any) => {
        return `<div class="flex flex-col h-full border border-gray-200 rounded-sm dark:border-none"><div class="flex items-center h-full gap-2 px-4 dark:bg-[#0F172A] border-none shadow-lg ">
              <img class="rounded-full size-8" src="${content.imageURL}" alt="">
              <h6 class="text-xs text-gray-500 dark:text-dark-500">${content.name}</h6>
            </div><div class="mt-auto rounded-b" style="border-bottom: 10px solid ${content.borderColor}"></div></div>`;
    },
    enableToolbar: true,
});

// Reference to the ApexTree instance
const apexTreeInstance = ref<ApexTree | null>(null);

// Initialize and render the tree
const renderTree = () => {
    if (apexTreeContainer.value) {
        apexTreeContainer.value.innerHTML = ''; // Clear previous tree
    }

    // Create a new ApexTree instance and render it
    apexTreeInstance.value = new ApexTree(apexTreeContainer.value!, treeOptions.value);
    apexTreeInstance.value.render(treeData.value);
};

// Resize handling (re-render on window resize)
const resizeHandler = () => {
    renderTree();
};

// Lifecycle hook to render the tree after component mounts
onMounted(() => {
    renderTree();
    window.addEventListener('resize', resizeHandler);
});

// Watch for any changes to the color codes and re-render the tree
watch(colorCodes, () => {
    renderTree();
});
</script>
<template>
    <PageHeading title="Bottom to Top" sub-title="Apextree" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Bottom to Top" :full-width="true">
            <div class="border border-gray-200 rounded-md dark:border-dark-800">
                <div ref="apexTreeContainer" class="w-full" :style="{ height: '600px' }"></div>
            </div>
        </Card>
    </div>
</template>

<style>
.border-none {
    border: none !important;
}
</style>