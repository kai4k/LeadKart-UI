<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import CardBody from '../../forms/common-components/CardComponent.vue';
import {
    basicTableData,
    borderTableData,
    borderStyleData,
    separateTableData,
    borderSpacingTableData,
    captionTableData,
    headingLight,
    hoverTableData,
    stripedEvenTableData,
    stripedOddTableData,
    coloredBorderTableData1,
    stripedColoredTableData,
    loadingTableData,
    sortingTableData
} from './table-data';
import TableBody from './TableBody.vue';
import { ref } from 'vue';
import { ArrowDownUp, Eye, Trash2, TriangleAlert } from 'lucide-vue-next';
// Define rows and loading state
const rows = ref<any>([]);
const loading = ref(true);

// Simulate data loading with a delay
setTimeout(() => {
    loading.value = false;
    rows.value = [...loadingTableData.value]
}, 2000);

// Handle row action (e.g., delete)
const handleRowAction = (index: number) => {
    rows.value.splice(index, 1);
};
const columns = ref([
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'date', label: 'Date' },
    { key: 'address', label: 'Address' },
    { key: 'salary', label: 'Salary' },
]);

const basicTableColumn = ref([
    { key: 'id', label: 'Transition ID' },
    { key: 'name', label: 'Customer Name' },
    { key: 'date', label: '	Date' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'status' },
])

const captionTableColumn = ref([
    { key: 'name', label: 'Wrestler' },
    { key: 'address', label: 'Signature Move(s)' },
])
const baseItemDelete = (index: number) => {
    basicTableData.value.splice(index, 1);
};
const borderItemDelete = (index: number) => {
    borderStyleData.value.splice(index, 1);
}
function borderStyleDelete(index: number) {
    borderStyleData.value.splice(index, 1)
}
function separateTableItemDelete(index: number) {
    separateTableData.value.splice(index, 1)
}
function spacingTableItemDelete(index: number) {
    borderSpacingTableData.value.splice(index, 1)
}
function headLightTableItemDelete(index: number) {
    headingLight.value.splice(index, 1)
}
function hoverTableItemDelete(index: number) {
    hoverTableData.value.splice(index, 1)
}
function stripedEvenTableItemDelete(index: number) {
    stripedEvenTableData.value.splice(index, 1)
}
function stripedOddTableItemDelete(index: number) {
    stripedOddTableData.value.splice(index, 1)
}
function coloredBorderTableItemDelete(index: number) {
    coloredBorderTableData1.value.splice(index, 1)
}
function stripedColoredTableItemDelete(index: number) {
    stripedColoredTableData.value.splice(index, 1)
}
function loadingTableItemDelete(index: number) {
    loadingTableData.value.splice(index, 1)
}

function sortBy(field: string) {

}

function sortIcon(field: string) {
}
</script>
<template>
    <PageHeading title="Base Table" sub-title="Tables" />
    <div class="grid grid-cols-12 gap-x-space">
        <CardBody title="Basic Styling" :full-width="true" extraCss="">
            <div class="overflow-x-auto">
                <table class="table flush">
                    <tbody>
                        <tr>
                            <th v-for="column in basicTableColumn" :key="column.key" class="px-4 py-2">
                                {{ column.label }}
                            </th>
                            <th class="px-4 py-2">Action</th>
                        </tr>
                        <template v-for="(row, index) in basicTableData" :key="index">
                            <tr class="*:px-3 *:py-2.5">
                                <td>{{ row.id }}</td>
                                <td>{{ row.name }}</td>
                                <td>{{ row.date }}</td>
                                <td>{{ row.amount }}</td>
                                <td>
                                    <span :class="[`badge inline-flex items-center gap-1`, row.status == 'Pending' ? 'badge-yellow ' : 'badge-green']">
                                        <component :is="row.status == 'Pending' ? TriangleAlert : TriangleAlert" class="size-3.5" />
                                        <span>{{ row.status }}</span>
                                    </span>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <a href="#!" class="btn btn-icon !size-8 btn-sub-primary">
                                            <Eye class="size-3.5" />
                                        </a>
                                        <a href="#!" class="btn btn-icon !size-8 btn-sub-red">
                                            <Trash2 class="size-3.5" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </CardBody>

        <CardBody title="Border Styling" :full-width="true">
            <div class="overflow-x-auto">
                <TableBody :columns="columns" :rows="borderStyleData" @rowAction="borderItemDelete" :showActions="true" deleteBtnCss="btn btn-sm btn-sub-red" />
            </div>
        </CardBody>

        <CardBody title="Bordered Table" :full-width="true">
            <div class="overflow-x-auto">
                <TableBody :columns="columns" :rows="borderTableData" @rowAction="borderStyleDelete" :showActions="true" table-css="bordered" deleteBtnCss="text-red-500" />
            </div>
        </CardBody>

        <CardBody title="Separate Table" :full-width="true" extraCss="">
            <p class="mb-2 text-gray-500">Use border-separate to force each cell to display its own separate borders.
            </p>
            <TableBody :columns="columns" :rows="separateTableData" @rowAction="separateTableItemDelete" :showActions="true" table-css="border-separate bordered" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Border Spacing Table" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="borderSpacingTableData" @rowAction="spacingTableItemDelete" :showActions="true" table-css="border-separate border-spacing-2 whitespace-nowrap bordered" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Caption Side" :full-width="true" extraCss="">
            <TableBody :columns="captionTableColumn" :rows="captionTableData" @rowAction="spacingTableItemDelete" table-css="table-auto bordered" caption="Table 3.1: Professional wrestlers and their signature moves." />
        </CardBody>

        <CardBody title="Heading Light" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="headingLight" @rowAction="headLightTableItemDelete" :showActions="true" table-css="flush" table-head-css="bg-gray-100 dark:bg-dark-850" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Hovered Table" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="hoverTableData" @rowAction="hoverTableItemDelete" :showActions="true" table-css="hovered" table-head-css="bg-gray-100 dark:bg-dark-850" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Striped Even Table" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="stripedEvenTableData" @rowAction="stripedEvenTableItemDelete" :showActions="true" table-css="even-striped" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Striped Odd Table" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="stripedOddTableData" @rowAction="stripedOddTableItemDelete" :showActions="true" table-css="odd-striped" table-head-css="!bg-white dark:!bg-dark-900" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Colored Border Table" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="coloredBorderTableData1" @rowAction="coloredBorderTableItemDelete" :showActions="true" table-css="bordered" table-head-css="*:!border-primary-200 dark:*:!border-primary-900" deleteBtnCss="text-red-500" />
            <TableBody :columns="columns" :rows="coloredBorderTableData1" @rowAction="coloredBorderTableItemDelete" :showActions="true" table-css="mt-5 border-green" table-head-css="*:!border-green-200 *:dark:!border-green-900" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Striped Colored Table" :full-width="true" extraCss="">
            <TableBody :columns="columns" :rows="stripedColoredTableData" @rowAction="stripedColoredTableItemDelete" :showActions="true" table-css="odd-striped" table-head-css="!bg-white dark:!bg-dark-900" row-css="odd:!bg-purple-50 dark:odd:!bg-purple-500/10" deleteBtnCss="text-red-500" />
        </CardBody>

        <CardBody title="Loading Table" :full-width="true" extraCss="">
            <!-- Loading Spinner -->
            <div v-if="loading" class="flex items-center justify-center w-full h-64">
                <div class="relative">
                    <div class="border-t-4 border-b-4 border-gray-200 rounded-full size-8"></div>
                    <div class="absolute top-0 left-0 border-t-4 border-b-4 rounded-full border-primary-500 size-8 animate-spin">
                    </div>
                </div>
            </div>
            <!-- Table -->
            <div v-else>
                <TableBody :columns="columns" :rows="rows" :showActions="true" @rowAction="handleRowAction" table-css="even-striped" />
            </div>
        </CardBody>

        <CardBody title="Sorting Tables" :full-width="true" extraCss="">
            <div>
                <div class="overflow-x-auto">
                    <table class="table">
                        <tbody>
                            <tr>
                                <template v-for="(column, index) in columns" :key="index">
                                    <th @click="sortBy(column.key)" class="!font-medium cursor-pointer">
                                        <span class="align-middle">{{ column.label }}</span> <ArrowDownUp class="inline-block text-gray-500 dark:text-dark-500 size-4"></ArrowDownUp>
                                    </th>
                                </template>
                                <th>Action</th>
                            </tr>
                            <template v-for="(row, index) in sortingTableData" :key="index">
                                <tr>
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.age }}</td>
                                    <td>{{ row.date }}</td>
                                    <td>{{ row.address }}</td>
                                    <td>{{ row.salary }}</td>
                                    <td>
                                        <div class="flex items-center gap-2">
                                            <button class="text-primary-500">Edit</button>
                                            <button class="text-red-500">Remove</button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </CardBody>
    </div>
</template>