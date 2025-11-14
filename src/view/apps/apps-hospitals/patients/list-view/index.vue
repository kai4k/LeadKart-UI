<script setup lang="ts">
import { ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import TableList from './TableList.vue';
import { CirclePlus, MoveLeft, MoveRight, Search, SlidersHorizontal, X } from 'lucide-vue-next';

// Reactive state for the filter sidebar
const searchTerm = ref('');
const selectedDoctor = ref('');
const selectedStatus = ref('');
const selectedInsurance = ref('');
const selectedCity = ref('');
const selectedGender = ref('');
const setFilter = ref(false)
// Sample options for the dropdowns
const doctors = ref([
    { id: 1, name: 'Dr. Michael' },
    { id: 2, name: 'Dr. Sarah' },
    { id: 3, name: 'Dr. Emily' }
]);

const statuses = ref(['New', 'Active', 'Inactive']);
const insurances = ref(['Yes', 'No']);
const cities = ref(['Algeria', 'Argentina', 'Belgium', 'Mexico']);
const genders = ref(['Male', 'Female', 'Other']);

const clearFilters = () => {
    searchTerm.value = '';
    selectedDoctor.value = '';
    selectedStatus.value = '';
    selectedInsurance.value = '';
    selectedCity.value = '';
    selectedGender.value = '';
};


// State for search query and filters
const searchQuery = ref('');

// Method to filter patients
const filterPatients = () => {
    // Logic for filtering patients goes here
    console.log('Filtering with:', {
        searchQuery: searchQuery.value,
        selectedDoctor: selectedDoctor.value,
        selectedStatus: selectedStatus.value,
        selectedInsurance: selectedInsurance.value,
        selectedCity: selectedCity.value,
        selectedGender: selectedGender.value,
    });
};


</script>
<template>
    <PageHeading title="List View" sub-title="Patients" />
    <div class="justify-between sm:flex">
        <!-- Search Input -->
        <div>
            <div class="relative group/form">
                <input type="email" class="ltr:pl-9 rtl:pr-9 form-input 
                 ltr:group-[&.right]/form:pr-9 
                 rtl:group-[&.right]/form:pl-9 
                 ltr:group-[&.right]/form:pl-4 
                 rtl:group-[&.right]/form:pr-4" placeholder="Search for patients..." v-model="searchTerm" />
                <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 
                    ltr:left-3 rtl:right-3 
                    ltr:group-[&.right]/form:right-3 
                    rtl:group-[&.right]/form:left-3 
                    ltr:group-[&.right]/form:left-auto 
                    rtl:group-[&.right]/form:right-auto 
                    focus:outline-none">
                    <Search class="size-4"></Search>
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div>
            <div class="flex flex-wrap items-center justify-end gap-2 mt-2 sm:mt-0">
                <button type="button" class="btn btn-sub-gray" @click="setFilter = true">
                    <SlidersHorizontal class="inline-block ltr:mr-1 rtl:ml-1 size-4"></SlidersHorizontal>
                    Filters
                </button>
                <router-link to="apps-hospital-patients-create" class="btn btn-primary">
                    <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus> Add Patient
                </router-link>
            </div>
        </div>
    </div>
    <TableList :search-query="searchTerm" :doctor-filter="selectedDoctor" :gender-filter="selectedGender" :insurance-filter="selectedInsurance" :location-filter="selectedCity" />

    <div id="filterSidebar" v-if="setFilter" class="ltr:right-0 rtl:left-0 drawer">
        <div class="drawer-header">
            <h6>Patients Filters</h6>
            <button @click="setFilter = false" title="drawer-close">
                <X data-lucide="x" class="link link-red size-5"></X>
            </button>
        </div>
        <div class="drawer-content">
            <div class="relative mb-5 group/form">
                <input v-model="searchQuery" type="text" class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Search for patients..." />
                <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 focus:outline-none">
                    <i data-lucide="search" class="size-4"></i>
                </div>
            </div>
            <div class="mb-5">
                <p class="mb-1.5">Doctors</p>
                <select v-model="selectedDoctor" class="form-select" placeholder="Select Doctor">
                    <option value="">Select Doctor</option>
                    <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.name">{{ doctor.name }}
                    </option>
                </select>
            </div>
            <div class="mb-5">
                <p class="mb-1.5">Patient Status</p>
                <select v-model="selectedStatus" class="form-select" placeholder="Select Status">
                    <option value="" class="text-gray-500">Select Status</option>
                    <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
                </select>
            </div>
            <div class="mb-5">
                <p class="mb-1.5">Insurance</p>
                <select v-model="selectedInsurance" class="form-select" placeholder="Select Insurance">
                    <option value="">Select insurance</option>
                    <option v-for="insurance in insurances" :key="insurance" :value="insurance">{{ insurance }}
                    </option>
                </select>
            </div>
            <div class="mb-5">
                <p class="mb-1.5">City</p>
                <select v-model="selectedCity" class="form-select" placeholder="Select City">
                    <option value="">Select City</option>
                    <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                </select>
            </div>
            <div>
                <p class="mb-1.5">Gender</p>
                <select v-model="selectedGender" class="form-select" placeholder="Select Gender">
                    <option value="">Select Gender</option>
                    <option v-for="gender in genders" :key="gender" :value="gender">{{ gender }}</option>
                </select>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 border-t border-gray-200 dark:border-dark-800">
            <button type="button" class="btn btn-sub-gray" @click="clearFilters">Reset</button>
            <button type="button" class="btn btn-primary" @click="filterPatients">
                Filters
                <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
            </button>
        </div>
    </div>
    <div class="backdrop-overlay backdrop-blur-xs" v-if="setFilter" @click="setFilter = false"></div>
</template>