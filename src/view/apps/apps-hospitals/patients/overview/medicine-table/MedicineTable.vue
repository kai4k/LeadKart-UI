<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { medicineData } from './medicine-data';
import type { Medicine } from './medicine-data';
import AddMedicineModule from './AddMedicineModule.vue';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-vue-next';
import simplebar from 'simplebar-vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';

const medicines = ref<Medicine[]>(medicineData.value); // List of medicines
const currentPage = ref(1);
const itemsPerPage = 5;
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc' | string>('');
const deleteMedicineModel = ref(false);
const showAddMedicineForm = ref(false);
const showEditMedicineForm = ref(false);
const selectedData = ref<any>({})

const setDeleteModalValue = (stats: boolean, data?: any) => {
    deleteMedicineModel.value = stats
    selectedData.value = data
}
const setShowAddMedicineFormValue = (state: any) => {
    showAddMedicineForm.value = state
}
const setEditModuleValue = (state: boolean, data?: any) => {
    showEditMedicineForm.value = state;
    selectedData.value = data

}

// Computed values for pagination
const totalPages = computed(() => Math.ceil(medicines.value.length / itemsPerPage));
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, medicines.value.length));

// Filtered list of medicines for the current page
const displayedMedicine = computed(() => {
    const sortedMedicines = [...medicines.value].sort((a: any, b: any) => {
        const valA = a[sortBy.value as keyof Medicine];
        const valB = b[sortBy.value as keyof Medicine];
        if (valA < valB) return sortDirection.value === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection.value === 'asc' ? 1 : -1;
        return 0;
    });
    return sortedMedicines.slice(showingStart.value - 1, showingEnd.value);
});

// Methods
const sort = (field: string) => {
    if (sortBy.value === field) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = field;
        sortDirection.value = 'asc';
    }
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

const handleModal = (form: string) => {
    showAddMedicineForm.value = form === 'showAddMedicineForm';
    showEditMedicineForm.value = form === 'showEditMedicineForm';
    deleteMedicineModel.value = form === 'deleteMedicineModel';
};

const deleteMedicines = () => {
    const deleteIndex = medicineData.value.findIndex(data => data.id == selectedData.value.id)
    medicineData.value.splice(deleteIndex, 1)

};
onMounted(() => {
    medicineData.value.forEach((data, index) => {
        data.id = index + 1;
    })
})
</script>
<template>
    <div class="col-span-12 overflow-hidden card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Medicine History</h6>
            <a href="#!" @click="handleModal('showAddMedicineForm')" class="font-medium shrink-0 !text-primary-500 link hover:!text-primary-600">
                <Plus class="inline-block mb-1 align-middle size-4" /> Add Medicine
            </a>
        </div>
        <div class="pt-0 card-body">
            <div>
                <simplebar data-simplebar class="table-box whitespace-nowrap">
                    <table class="table flush whitespace-nowrap">
                        <tbody>
                            <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                <th @click="sort('date')" class="!font-medium cursor-pointer">Date <span v-if="sortBy === 'date'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('time')" class="!font-medium cursor-pointer">Time <span v-if="sortBy === 'time'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('medicineName')" class="!font-medium cursor-pointer">Medicine Name
                                    <span v-if="sortBy === 'medicineName'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('dosage')" class="!font-medium cursor-pointer">Dosage <span v-if="sortBy === 'dosage'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('frequency')" class="!font-medium cursor-pointer">Frequency <span v-if="sortBy === 'frequency'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('startDate')" class="!font-medium cursor-pointer">Start Date <span v-if="sortBy === 'startDate'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('endDate')" class="!font-medium cursor-pointer">End Date <span v-if="sortBy === 'endDate'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th @click="sort('prescribingDoctor')" class="!font-medium cursor-pointer">Prescribing
                                    Doctor <span v-if="sortBy === 'prescribingDoctor'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('reasonCondition')" class="!font-medium cursor-pointer">
                                    Reason/Condition <span v-if="sortBy === 'reasonCondition'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span></th>
                                <th @click="sort('notes')" class="!font-medium cursor-pointer">Notes <span v-if="sortBy === 'notes'" :text="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                </th>
                                <th class="!font-medium">Action</th>
                            </tr>
                            <tr v-for="(medicine, index) in displayedMedicine" :key="index" class="*:px-3 *:py-2.5">
                                <td>{{ medicine.date }}</td>
                                <td>{{ medicine.time }}</td>
                                <td>{{ medicine.medicineName }}</td>
                                <td>{{ medicine.dosage }}</td>
                                <td>{{ medicine.frequency }}</td>
                                <td>{{ medicine.startDate }}</td>
                                <td>{{ medicine.endDate }}</td>
                                <td>{{ medicine.prescribingDoctor }}</td>
                                <td>{{ medicine.reasonCondition }}</td>
                                <td>{{ medicine.notes }}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-purple btn-icon !size-8 rounded-full" @click="setEditModuleValue(true, medicine)">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8 rounded-full" @click="setDeleteModalValue(true, medicine)">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </simplebar>
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                        <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{
                            medicines.length }}</b> Results</p>
                    </div>
                    <div class="items-center col-span-12 md:col-span-6">
                        <div class="flex justify-center md:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">{{ page }}</button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">Next
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                                <ChevronRight class="ml-1 rtl:hidden ltr:inline-block size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <DeleteModule :showDeletePop="deleteMedicineModel" :setDeleteModal="setDeleteModalValue" :deleteRow="deleteMedicines" />


        <!-- Add/Edit Medicine Modal -->
        <AddMedicineModule :setModuleShowValue="setShowAddMedicineFormValue" :moduleShow="showAddMedicineForm" :editModuleShow="showEditMedicineForm" :setEditModuleValue="setEditModuleValue" :editDetails="selectedData" />
    </div>
</template>