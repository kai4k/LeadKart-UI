<script setup lang="ts">
import { defineProps } from 'vue';
import productListData from './list-view/list-data';
const props = defineProps({
    firstIcon: Function,
    secondIcon: Function,
    title: {
        type: String,
        default: 'Products List',
    },
    buttonTitle: {
        type: String,
        default: "Export"
    },
    extraClass: {
        type: String,
    },
    setShowFilterModal: {
        type: Function,
    },
    description: {
        type: String,
    }
})

const emits = defineEmits(['export', 'filter'])

function exportTable() {
    const headers = Object.keys(productListData.value[0]).join(',');
    const rows = productListData.value.map((product) =>
        Object.values(product).join(',')
    );
    const csvContent = [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'emails.csv';
    link.click();
}

const handleClickEvent = () => {
    if (props.setShowFilterModal) props.setShowFilterModal(true)
}
</script>
<template>

    <div class="flex flex-wrap items-center gap-5" :class="extraClass">
        <div class="grow">
            <h6 class="mb-1 card-title">{{ title }}</h6>
            <p class="text-gray-500 dark:text-dark-500" v-if="description">{{ description }}</p>
        </div>
        <div class="flex flex-wrap gap-2 shrink-0">
            <button class="btn btn-sub-gray" @click="handleClickEvent">
                <component :is="firstIcon" class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4">
                </component>
                {{ buttonTitle }}
            </button>
            <a href="apps-ecommerce-create-products" class="btn btn-primary">
                <component :is="secondIcon" class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4">
                </component>
                Add Products
            </a>
        </div>
    </div>
</template>