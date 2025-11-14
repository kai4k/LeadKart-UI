<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import simplebar from 'simplebar-vue';
import AddFormModule from './AddFormModule.vue';
import { ReportData } from './overview-data';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-vue-next';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';

// Modal and form control
const showAddReportForm = ref(false);
const deleteReportModal = ref(false);
const deleteReport = ref(1);
const selectedData = ref<any>({})
const setDeleteReportModal = (state: boolean, data: any) => {
    deleteReportModal.value = state;
    selectedData.value = data
}
const setShowAddReportForm = (state: boolean) => {
    showAddReportForm.value = state
}

const errors = ref<{ [key: string]: string }>({});

// Pagination
const currentPage = ref(1);
const itemsPerPage = ref(5);

const totalPages = computed(() => Math.ceil(ReportData.value.length / itemsPerPage.value));

const displayedReports = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return ReportData.value.slice(start, end);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, ReportData.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, ReportData.value.length));

// Methods
function getStatusClass(status: string) {
    if (status === 'Completed') return 'badge badge-green';
    if (status === 'In Progress') return 'badge badge-purple';
    if (status === 'Pending') return 'badge badge-yellow';
    return '';
}

function deleteReports() {
    const deleteIndex = ReportData.value.findIndex((data) => data.id === selectedData.value.id)
    ReportData.value.splice(deleteIndex, 1)
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}
function gotoPage(page: number) {
    currentPage.value = page;
}

function addReport(data: any) {
    ReportData.value.unshift({ ...data });
    // Close the modal after adding the report
}
onMounted(() => {
    ReportData.value.forEach((data, index) => {
        data.id = 1 + index
    })
})
</script>
<template>
    <div class="col-span-12 overflow-hidden xl:col-span-6 xl:row-span-2 card">
        <!-- Card Header with "Add Reports" button -->
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Reports</h6>
            <button class="font-medium shrink-0 !text-primary-500 link hover:!text-primary-600" @click="showAddReportForm = true">
                <Plus class="inline-block mb-1 align-middle size-4"></Plus> Add Reports
            </button>
        </div>

        <!-- Reports Table -->
        <div class="pt-0 card-body">
            <div>
                <simplebar data-simplebar class="table-box">
                    <table class="table flush even-striped whitespace-nowrap">
                        <tbody>
                            <tr v-for="(report, index) in displayedReports" class="*:px-3 *:py-2.5" :key="index">
                                <td>{{ report.name }}</td>
                                <td x-text="report.age"></td>
                                <td>{{ report.date }}</td>
                                <td>{{ report.doctor }}</td>
                                <td>
                                    <span :class="getStatusClass(report.status)">{{ report.status }}</span>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button title="Download" class="btn btn-sub-purple btn-icon !size-8 rounded-full">
                                            <i class="ri-download-2-line"></i>
                                        </button>
                                        <button title="Delete" class="btn btn-sub-red btn-icon !size-8 rounded-full" @click="setDeleteReportModal(true, report)">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </simplebar>

                <!-- Pagination Controls -->
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ ReportData.length
                                }}</b>
                            Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-pre">
                                Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <DeleteModule :showDeletePop="deleteReportModal" :setDeleteModal="setDeleteReportModal" :deleteRow="deleteReports" />

        <AddFormModule :showAddForm="showAddReportForm" :setModuleValue="setShowAddReportForm" :addRow="addReport" />
    </div>
</template>