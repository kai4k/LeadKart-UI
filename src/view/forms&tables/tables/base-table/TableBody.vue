<script setup lang="ts">

interface Column {
    key: string; // The key to access the data in the row
    label: string; // The column header label
}

interface RowData {
    [key: string]: any; // Generic object to handle dynamic row data
}

// Props for dynamic columns and rows
const props = defineProps<{
    columns: Column[]; // Array of column definitions
    rows: RowData[]; // Array of row data
    showActions?: boolean;  // Optional action callback for row actions
    caption?: String;
    tableCss?: String;
    tableHeadCss?: String;
    rowCss?: String;
    deleteBtnCss?: String;
}>();

// Emit events for parent interaction (e.g., row delete)
const emit = defineEmits<{
    (e: 'rowAction', index: number): void;
}>();
</script>

<template>
    <div class="overflow-x-auto">
        <table class="table" :class="tableCss">
            <caption v-if="caption" class="pb-3 text-xs text-gray-500 dark:text-gray-400 caption-top">
                {{ caption }}
            </caption>
            <thead>
                <tr :class="tableHeadCss">
                    <th v-for="column in columns" :key="column.key" class="">
                        {{ column.label }}
                    </th>
                    <th v-if="showActions" class="">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index" class="" :class="rowCss">
                    <td v-for="cell in columns" :key="cell.key" class="">
                        {{ row[cell.key] }}
                    </td>
                    <td v-if="showActions" class="">
                        <a href="javascript:void(0);" @click="emit('rowAction', index)" :class="deleteBtnCss">
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>