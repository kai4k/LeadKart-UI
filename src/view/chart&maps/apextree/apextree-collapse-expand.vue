<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
import { ref, onMounted, watchEffect, computed } from 'vue'
// @ts-ignore
import ApexTree from 'apextree'
// @ts-ignore
import { useStore } from 'vuex'

// Import user avatars
import user1 from '@/assets/images/avatar/user-1.png'
import user2 from '@/assets/images/avatar/user-2.png'
import user3 from '@/assets/images/avatar/user-3.png'
import user4 from '@/assets/images/avatar/user-4.png'
import user5 from '@/assets/images/avatar/user-5.png'
import user6 from '@/assets/images/avatar/user-6.png'
import user7 from '@/assets/images/avatar/user-7.png'
import user8 from '@/assets/images/avatar/user-8.png'
import user9 from '@/assets/images/avatar/user-9.png'
import user10 from '@/assets/images/avatar/user-10.png'
import user11 from '@/assets/images/avatar/user-11.png'
const store = useStore()
// Setup reference for the tree container
const apexTreeContainer = ref<HTMLElement | null>(null)

// Colors based on data attributes
// const colorCodes = [
//     '#f3f4f6', '#6b7280', '#ffffff', '#DAEDFF', '#F3E8FF', '#FEF9C3',
//     '#F1F5F9', '#FFEDD5', '#DCFCE7', '#FCE7F3', '#E0E7FF'
// ]
const theme = computed(() => store.getters.layoutTheme);
const colorCodes = computed(() => {
    return theme.value === 'light' ? [
        '#f3f4f6', '#6b7280', '#ffffff', '#DAEDFF', '#F3E8FF', '#FEF9C3',
        '#F1F5F9', '#FFEDD5', '#DCFCE7', '#FCE7F3', '#E0E7FF'
    ] : [
        '#000000', '#0e0e0e', '#ffffff', '#358FFC', '#A855F7', '#EAB308',
        '#161C30', '#F97316', '#22C55E', '#EC4899', '#6366F1'
    ]
})
const treeData = {
    id: 'Lucas_Alex',
    data: {
        name: 'Omer Sporer',
        imageURL: user1,
    },
    options: {
        nodeBGColor: colorCodes.value[3],
        nodeBGColorHover: colorCodes.value[3],
    },
    children: [
        {
            id: 'Alex_Lee',
            data: {
                name: 'Reva Botsford',
                imageURL: user2,
            },
            options: {
                nodeBGColor: colorCodes.value[4],
                nodeBGColorHover: colorCodes.value[4],
            },
            children: [
                {
                    id: 'Mia_Patel',
                    data: { name: 'Tyshawn Marquardt', imageURL: user3 },
                    options: { nodeBGColor: colorCodes.value[5], nodeBGColorHover: colorCodes.value[5] },
                },
                {
                    id: 'Ryan_Clark',
                    data: { name: 'Kailey Corkery', imageURL: user4 },
                    options: { nodeBGColor: colorCodes.value[5], nodeBGColorHover: colorCodes.value[5] },
                },
                {
                    id: 'Zoe_Wang',
                    data: { name: 'Zoe Wang', imageURL: user5 },
                    options: { nodeBGColor: colorCodes.value[5], nodeBGColorHover: colorCodes.value[5] },
                },
            ],
        },
        {
            id: 'Leo_Kim',
            data: { name: 'Hardy Maggio', imageURL: user6 },
            options: { nodeBGColor: colorCodes.value[6], nodeBGColorHover: colorCodes.value[6] },
            children: [
                {
                    id: 'Ava_Jones',
                    data: { name: 'Adelle Abbott', imageURL: user7 },
                    options: { nodeBGColor: colorCodes.value[7], nodeBGColorHover: colorCodes.value[7] },
                },
                {
                    id: 'Maya_Gupta',
                    data: { name: 'Vincenzo Hirthe', imageURL: user8 },
                    options: { nodeBGColor: colorCodes.value[7], nodeBGColorHover: colorCodes.value[7] },
                },
            ],
        },
        {
            id: 'Lily_Chen',
            data: { name: 'Idella Heaney', imageURL: user9 },
            options: { nodeBGColor: colorCodes.value[8], nodeBGColorHover: colorCodes.value[8] },
            children: [
                {
                    id: 'Jake_Scott',
                    data: { name: 'Lambert Schoen', imageURL: user10 },
                    options: { nodeBGColor: colorCodes.value[9], nodeBGColorHover: colorCodes.value[9] },
                },
            ],
        },
        {
            id: 'Max_Ruiz',
            data: { name: 'Cornelius Harris', imageURL: user11 },
            options: { nodeBGColor: colorCodes.value[10], nodeBGColorHover: colorCodes.value[10] },
        },
    ],
}

const treeOptions = {
    contentKey: 'data',
    width: '100%',
    height: 700,
    nodeWidth: 150,
    nodeHeight: 70,
    childrenSpacing: 70,
    siblingSpacing: 30,
    fontSize: '12px',
    direction: 'left',
    borderRadius: 0,
    nodeBGColor: colorCodes.value[2],
    nodeBGColorHover: colorCodes.value[2],
    fontColor: colorCodes.value[1],
    borderColor: colorCodes.value[0],
    edgeColor: colorCodes.value[0],
    edgeColorHover: colorCodes.value[0],
    tooltipBorderColor: colorCodes.value[0],
    enableExpandCollapse: true,
    nodeTemplate: (content: any) => {
        return `<div class="flex items-center h-full gap-2 px-4 shadow-lg rounded-t-md">
              <img class="rounded-full size-8" src='${content.imageURL}' alt=''>
              <h6 class="text-xs text-gray-500 dark:text-dark-100">${content.name}</h6>
            </div>`
    },
    enableToolbar: true,
}

const renderTree = () => {
    if (apexTreeContainer.value) {
        apexTreeContainer.value.innerHTML = '' // Clear the container
        const apexTree = new ApexTree(apexTreeContainer.value, treeOptions)
        apexTree.render(treeData)
    }
}

onMounted(() => {
    renderTree()

    // Re-render the tree on window resize
    window.addEventListener('resize', renderTree)
})

watchEffect(() => {
    if (apexTreeContainer.value) {
        renderTree()
    }
})
</script>
<template>
    <PageHeading title="Collapse Expand" sub-title="Apextree" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card title="Collapse Expand" :full-width="true">
            <div class="border border-gray-200 rounded-md dark:border-dark-800">
                <div ref="apexTreeContainer" id="apex-tree-container" class="w-full"></div>
            </div>
        </Card>
    </div>
</template>