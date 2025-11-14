<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { patientListData } from "./hospital-data";
import { ChevronLeft, ChevronRight, CirclePlus, Search, Trash } from "lucide-vue-next";
import TableDataNotFount from "@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue";
// Patient data structure
interface Patient {
    patientName: string;
    age: string;
    phone: string;
    email: string;
    condition: string;
    medications: string;
    lastVisit: string;
    patientID?: string;
}


// Reactive state
const patients = ref<Patient[]>([...patientListData.value]);
const searchTerm = ref<string>("");
const sortBy = ref<string>("");
const sortDirection = ref<"asc" | "desc">("asc");
const selectAll = ref<boolean>(false);
const selectedItems = ref<Patient[]>([]);
const currentPage = ref<number>(1);
const itemsPerPage = 8;

// Computed properties
const filteredPatients = computed(() => {
    if (!searchTerm.value.trim()) return patients.value;
    const lowerSearch = searchTerm.value.toLowerCase();
    return patients.value.filter((patient) =>
        Object.values(patient).some((value) =>
            value.toString().toLowerCase().includes(lowerSearch)
        )
    );
});

const totalPages = computed(() => Math.ceil(filteredPatients.value.length / itemsPerPage));
const displayedPatients = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredPatients.value.slice(start, start + itemsPerPage);
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage + 1, filteredPatients.value.length));
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, filteredPatients.value.length));

// Methods
const toggleAll = () => {
    selectAll.value = !selectAll.value;
    selectedItems.value = selectAll.value ? [...filteredPatients.value] : [];
};

const toggleItem = (patient: Patient) => {
    if (selectedItems.value.includes(patient)) {
        selectedItems.value = selectedItems.value.filter((p) => p !== patient);
    } else {
        selectedItems.value.push(patient);
    }
    selectAll.value = selectedItems.value.length === filteredPatients.value.length;
};

const deleteSelectedItems = () => {
    patients.value = patients.value.filter(
        (patient) => !selectedItems.value.includes(patient)
    );
    selectedItems.value = [];
    selectAll.value = false;
};

const deleteItem = (patient: Patient) => {
    patients.value = patients.value.filter((p) => p !== patient);
};

const sort = (column: string) => {
    if (column === sortBy.value) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortDirection.value = "asc";
        sortBy.value = column;
    }

    patients.value.sort((a: any, b: any) => {
        const valA = a[column as keyof Patient];
        const valB = b[column as keyof Patient];
        let comparison = valA > valB ? 1 : valA < valB ? -1 : 0;
        return sortDirection.value === "desc" ? comparison * -1 : comparison;
    });
};

// Pagination handlers
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

</script>
<template>
    <div class="col-span-12 card">
        <div class="flex flex-wrap items-center justify-between card-header gap-space">
            <h6 class="card-title grow">Patients List</h6>
            <div class="flex flex-col w-full md:items-center md:flex-row gap-space md:w-auto">
                <button class="btn btn-red btn-icon shrink-0" v-if="selectedItems.length" @click="deleteSelectedItems">
                    <Trash class="size-4"></Trash>
                </button>
                <div class="relative w-full group/form grow">
                    <input type="text" placeholder="Search for..."
                        class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                        v-model="searchTerm" />
                    <button title="search-button"
                        class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search class="size-4"></Search>
                    </button>
                </div>
                <a href="apps-hospital-patients-create" class="btn btn-primary shrink-0">
                    <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus> Add Patient
                </a>
            </div>
        </div>

        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table whitespace-nowrap">
                    <thead>
                        <tr>
                            <th class="!font-medium text-gray-500 dark:text-dark-500">
                                <div class="input-check-group">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input type="checkbox" class="input-check input-check-primary size-4"
                                        v-model="selectAll" @click="toggleAll" />
                                </div>
                            </th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('patientName')">Patient Name</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('age')">Age</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('phone')">Phone</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('email')">Email</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('condition')">Condition</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('medications')">Medications</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer"
                                @click="sort('lastVisit')">Last Visit</th>
                            <th class="!font-medium text-gray-500 dark:text-dark-500 cursor-pointer">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(patient, index) in displayedPatients" :key="index">
                            <td>
                                <div class="input-check-group">
                                    <label :for="`Patient${index}`" class="hidden input-check-label"></label>
                                    <input :id="`Patient${index}`" type="checkbox"
                                        :checked="selectedItems.includes(patient)" @click="toggleItem(patient)"
                                        class="input-check input-check-primary size-4" />
                                </div>
                            </td>
                            <td>{{ patient.patientName }}</td>
                            <td>{{ patient.age }}</td>
                            <td>{{ patient.phone }}</td>
                            <td>{{ patient.email }}</td>
                            <td>{{ patient.condition }}</td>
                            <td>{{ patient.medications }}</td>
                            <td>{{ patient.lastVisit }}</td>
                            <td class="w-16">
                                <div class="flex gap-3">
                                    <a href="apps-hospital-patients-lists" title="overview" class="link link-primary"><i
                                            class="ri-eye-line"></i></a>
                                    <a href="apps-hospital-patients-lists" title="edit" class="link link-primary"><i
                                            class="ri-edit-2-line"></i></a>
                                    <button class="link link-primary" @click="deleteItem(patient)"><i
                                            class="ri-delete-bin-6-line"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="displayedPatients.length === 0">
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="grid items-center grid-cols-12 mt-3 gap-space" x-show="displayedPatient.length > 0">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 ltr:pr-1 rtl:pl-1 dark:text-dark-500">Showing <b x-text="showingStart">{{ showingStart
                            }}</b> - <b x-text="showingEnd">{{ showingEnd }}</b> of <b x-text="filterPatient.length">{{
                                patients.length }}</b> Results</p>
                    <span v-show="selectedItems.length > 0">
                        <b>{{ selectedItems.length }}</b> Row Selected
                    </span>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div v-if="totalPages > 1" class="flex justify-center md:justify-end pagination pagination-primary">
                        <button @click="prevPage" class="pagination-pre" :disabled="currentPage === 1">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></ChevronLeft>
                            <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"></ChevronRight>
                            Prev
                        </button>
                        <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }"
                            @click="gotoPage(page)" class="pagination-item">
                            {{ page }}
                        </button>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                            Next
                            <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"></ChevronRight>
                            <ChevronLeft class="mr-1 rtl:inline-block ltr:hidden size-4"></ChevronLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>