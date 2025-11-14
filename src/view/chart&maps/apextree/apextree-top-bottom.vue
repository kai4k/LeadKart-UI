<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import Card from '@/view/forms&tables/forms/common-components/CardComponent.vue';
// @ts-ignore
import ApexTree from 'apextree'; // Assuming this is available as an npm package or you can import it
// @ts-ignore
import { useStore } from 'vuex'
import user4 from '@/assets/images/avatar/user-4.png';
import user11 from '@/assets/images/avatar/user-11.png';
import user13 from '@/assets/images/avatar/user-13.png';
import user14 from '@/assets/images/avatar/user-14.png';
import user15 from '@/assets/images/avatar/user-15.png';
import user16 from '@/assets/images/avatar/user-16.png';
import user17 from '@/assets/images/avatar/user-17.png';
const store = useStore()
interface TreeNode {
    id: string;
    data: {
        imageURL: string;
        name: string;
    };
    options: {
        nodeBGColor: string;
        nodeBGColorHover: string;
        hideRootLine?: boolean;
    };
    children?: TreeNode[];
}

const apexTreeContainer = ref<HTMLElement | null>(null);
const theme = computed(() => store.getters.layoutTheme);
const colorCodes = computed(() => {
    return [
        '#0e0e0e', '#ffffff', '#358FFC', '#A855F7', '#EAB308',
        '#161C30', '#F97316', '#22C55E', '#EC4899', '#6366F1'
    ]
})


const treeData = ref<TreeNode>({
    id: 'ms',
    data: {
        imageURL: user4,
        name: 'Jordan Davis',
    },
    options: {
        nodeBGColor: colorCodes.value[2],
        nodeBGColorHover: colorCodes.value[2],
    },
    children: [
        {
            id: 'mh',
            data: { imageURL: user11, name: 'Chris Wilson' },
            options: {
                nodeBGColor: colorCodes.value[3],
                nodeBGColorHover: colorCodes.value[3],
            },
            children: [
                {
                    id: 'kb',
                    data: { imageURL: user13, name: 'Alex Lee' },
                    options: {
                        nodeBGColor: colorCodes.value[4],
                        nodeBGColorHover: colorCodes.value[4],
                    },
                },
                {
                    id: 'cr',
                    data: { imageURL: user14, name: 'Taylor Wilson' },
                    options: {
                        nodeBGColor: colorCodes.value[5],
                        nodeBGColorHover: colorCodes.value[5],
                    },
                },
            ],
        },
        {
            id: 'cs',
            data: { imageURL: user15, name: 'Jane Brown' },
            options: {
                nodeBGColor: colorCodes.value[6],
                nodeBGColorHover: colorCodes.value[6],
            },
            children: [
                {
                    id: 'Noah_Chandler',
                    data: { imageURL: user16, name: 'John Garcia' },
                    options: {
                        nodeBGColor: colorCodes.value[7],
                        nodeBGColorHover: colorCodes.value[7],
                    },
                },
                {
                    id: 'Felix_Wagner',
                    data: { imageURL: user17, name: 'Cameron Wilson' },
                    options: {
                        nodeBGColor: colorCodes.value[8],
                        nodeBGColorHover: colorCodes.value[8],
                    },
                },
            ],
        },
    ],
});

const treeOptions = ref({
    contentKey: 'data',
    width: '100%',
    height: 600,
    nodeWidth: 150,
    nodeHeight: 120,
    fontColor: colorCodes.value[1],
    borderColor: colorCodes.value[0],
    edgeColor: colorCodes.value[0],
    edgeColorHover: colorCodes.value[2],
    tooltipBorderColor: colorCodes.value[0],
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'top',
    borderWidth: 0,
    nodeTemplate: (content: any) => `
    <div class="flex flex-col items-center justify-center gap-5 p-3">
      <img class="rounded-full size-12" src="${content.imageURL}" alt="" />
      <h6>${content.name}</h6>
    </div>
  `,
    enableToolbar: true,
    // Add additional custom options as needed
});

const apexTreeInstance = ref<ApexTree | null>(null);

// Function to hide the root line when clicked
const toggleRootLineVisibility = (nodeId: string) => {
    const toggleVisibility = (node: TreeNode) => {
        if (node.id === nodeId) {
            node.options.hideRootLine = !node.options.hideRootLine;
        }
        if (node.children) {
            node.children.forEach(toggleVisibility);
        }
    };
    toggleVisibility(treeData.value);
    renderTree(); // Re-render after toggle
};

// Render the tree
const renderTree = () => {
    if (apexTreeContainer.value) {
        apexTreeContainer.value.innerHTML = ''; // Clear the container
    }

    // Initialize new tree
    apexTreeInstance.value = new ApexTree(apexTreeContainer.value!, treeOptions.value);
    apexTreeInstance.value.render(treeData.value);
};

// Handle resize
const resizeHandler = () => {
    renderTree(); // Re-render tree on resize
};

onMounted(() => {
    renderTree();
    window.addEventListener('resize', resizeHandler);
});

watch(colorCodes, () => {
    renderTree(); // Re-render when color codes change
});

</script>
<template>
    <PageHeading title="Top to Bottom" sub-title="Apextree" />
    <div class="grid grid-cols-12 gap-x-space">
        <Card :full-width="true">
            <div class="border border-gray-200 rounded-md dark:border-dark-800">
                <div ref="apexTreeContainer" class="w-full" :style="{ height: '600px' }"></div>
            </div>
        </Card>
    </div>
</template>