<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next';
import { computed, ref } from 'vue';

const props = defineProps({
    tableData: {
        type: Array,
        default: () => []
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    itemsPerPage: {
        type: Number,
        default: 10
    },
})

// Emit an event to the parent to update pagination
const emit = defineEmits(['update-pagination']);

const totalPages = computed(() => Math.ceil(props.tableData.length / props.itemsPerPage));
// Emit page change when the page is updated
function prevPage() {
    if (props.currentPage! > 1) {
        emit('update-pagination', props.currentPage - 1);
    }
}

function nextPage() {
    if (props.currentPage! < totalPages.value) {
        emit('update-pagination', props.currentPage + 1);
    }
}

function goToPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        emit('update-pagination', page);
    }
}

const showingStart = computed(() => ((props.currentPage ?? 1) - 1) * ((props.itemsPerPage ?? 1)) + 1);
const showingEnd = computed(() =>
    Math.min(
        props.currentPage! * props.itemsPerPage!,
        props.tableData!.length
    )
);
</script>

<template>
    <div class="grid items-center grid-cols-12 gap-space mt-space">
        <div class="col-span-12 text-center md:col-span-6 ltr:md:text-left rtl:md:text-right">
            <p class="text-gray-500 dark:text-dark-500">
                Showing <b>{{ showingStart }}</b> to <b>{{ showingEnd }}</b> of
                <b>{{ props.tableData?.length }}</b> entries
            </p>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div class="flex justify-center md:justify-end pagination pagination-primary">
                <button class="pagination-pre" :disabled="props.currentPage === 1" @click="prevPage">
                    <ChevronsLeft class="ltr:inline-block rtl:hidden size-3" />
                    <ChevronsRight class="ltr:hidden rtl:inline-block size-3" />
                </button>
                <button class="pagination-pre" :disabled="props.currentPage === 1" @click="prevPage">
                    <ChevronLeft class="ltr:inline-block rtl:hidden size-3" />
                    <ChevronRight class="ltr:hidden rtl:inline-block size-3" />
                </button>
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: props.currentPage === page }" class="pagination-item">
                    {{ page }}
                </button>
                <button class="pagination-next" :disabled="props.currentPage === totalPages" @click="nextPage">
                    <ChevronRight class="ltr:inline-block rtl:hidden size-3" />
                    <ChevronLeft class="ltr:hidden rtl:inline-block size-3" />
                </button>
                <button class="pagination-next" :disabled="props.currentPage === totalPages" @click="nextPage">
                    <ChevronsRight class="ltr:inline-block rtl:hidden size-3" />
                    <ChevronsLeft class="ltr:hidden rtl:inline-block size-3" />
                </button>
            </div>
        </div>
    </div>
</template>
