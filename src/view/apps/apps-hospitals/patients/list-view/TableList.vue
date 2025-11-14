<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { patientsData, type PatientsType } from './patients-data';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import DeleteModal from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import Preview from './Preview.vue';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import { dropdownOption } from '@/view/apps/app-ecommerce/products/grid-view/grid-data-list';
import { useRouter } from 'vue-router';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';

const props = defineProps({
    searchQuery: {
        type: String,
        default: ''
    },
    doctorFilter: {
        type: String,
        default: '',
    },
    insuranceFilter: {
        type: String,
        default: '',
    },
    locationFilter: {
        type: String,
        default: '',
    },
    genderFilter: {
        type: String,
        default: '',
    },
});
const currentPage = ref(1);
const itemsPerPage = 16;

const filteredPatients = computed(() => {
    return patientsData.value.filter(patient =>
        patient.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
        patient.email.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
        patient.phoneNumber.includes(props.searchQuery)
    ).filter((patient) =>
        props.doctorFilter ? patient.doctorName === props.doctorFilter : true
    )
        .filter((patient) =>
            props.insuranceFilter ? patient.insurance === props.insuranceFilter : true
        )
        .filter((patient) =>
            props.locationFilter ? patient.location === props.locationFilter : true
        )
        .filter((patient) =>
            props.genderFilter ? patient.gender === props.genderFilter : true
        );
})
// Reactive patient data and pagination methods
const displayedPatients = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredPatients.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(patientsData.value.length / itemsPerPage));

const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage, patientsData.value.length));
// Pagination functions
const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};

// ------- Table Activity -------
// const overviewItem = ref<null | any>(null);
const overviewItem = ref<any>(null);
const showDeleteModule = ref(false);
const selectedData = ref()
const setDeleteModuleValue = (state: boolean, data?: any) => {
    selectedData.value = data
    showDeleteModule.value = state
}
const PreviewHide = () => {
    overviewItem.value = null;
}
const overviewPatient = (index: number) => {
    overviewItem.value = { ...patientsData.value[index] };
}

const deletePatientRow = () => {
    const findIndex = patientsData.value.findIndex((patient) => patient.id === selectedData.value.id);
    patientsData.value.splice(findIndex, 1)

}

const router = useRouter()
const handleTableActivity = (option: string, data?: PatientsType) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        const findIndex = patientsData.value.findIndex((patient: PatientsType) => patient.id == data?.id)
        overviewPatient(findIndex)
    }
    if (activity == 'edit') {
        router.push('/apps-hospital-patients-create')
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}
onMounted(() => {
    patientsData.value.forEach((data, index) => data.id = index + 1);
})
</script>
<template>
    <div>
        <!-- Patient Cards Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-space mt-space">
            <div v-for="(patient, index) in displayedPatients" :key="index" class="relative card">
                <div class="card-body">
                    <!-- Dropdown Menu -->
                    <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="float-end" iconCss="size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, patient)" />

                    <!-- Patient Info -->
                    <div class="flex items-center gap-3">
                        <img :src="patient.image" alt="" class="rounded-md size-20 shrink-0">
                        <div class="grow">
                            <h6 class="mb-1.5"><a href="javascript:void(0);" @click="overviewItem = patient">{{
                                patient.name }}</a></h6>
                            <p class="mb-1 text-gray-500 dark:text-dark-500">
                                <i class="ltr:mr-1 rtl:ml-1 ri-mail-line"></i> <span class="align-middle"> {{ patient.email }}</span>
                            </p>
                            <p class="text-gray-500 dark:text-dark-500">
                                <i class="ltr:mr-1 rtl:ml-1 ri-phone-line"></i> <span class="align-middle"> {{ patient.phoneNumber }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- No Data Message -->
        <div v-if="displayedPatients.length === 0" class="flex justify-center p-8">
            <TableDataNotFount />
        </div>
        <!-- Pagination Section -->
        <div v-if="displayedPatients.length !== 0" class="grid items-center grid-cols-12 gap-5 mb-5">
            <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                <p class="text-gray-500 dark:text-dark-500">
                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ patientsData.length }}</b>
                    Results
                </p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="flex justify-center md:justify-end pagination pagination-primary">
                    <button @click="prevPage()" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                        Prev
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                        <span>{{ page }}</span>
                    </button>
                    <button @click="nextPage()" :disabled="currentPage === totalPages" class="pagination-next">
                        Next
                        <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                        <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Preview :overviewItem="overviewItem" :setModuleValue="PreviewHide" />
    <DeleteModal :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :deleteRow="deletePatientRow" />

</template>