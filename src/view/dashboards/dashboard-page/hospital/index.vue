<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import recentMenuList from '../../recent-menu-list.vue';
import Apexchart from '@/components/common/Apexchart.vue';
import { patientVisitChart, patientVisitByDepartmentChart, patientsHistoryChart, hospitalBirthDeathChart, roomData, doctors, chartOptions, patientSeries } from './hospital-data'
import HospitalDetailsCard from './HospitalDetailsCard.vue';
import { updateCounter } from '@/view/dashboards/dashboard-page/email/email-data'
import { onMounted, ref, watch } from 'vue';
import { Ellipsis, MoveLeft, MoveRight, TrendingDown, TrendingUp } from 'lucide-vue-next';
import RecentMenuList from '../../recent-menu-list.vue';
import VueApexCharts from '@/components/common/VueApexCharts.vue';

// ------------- chart color change ------------- //
//@ts-ignore
import { useStore } from 'vuex'
const store = useStore()
const patientVisitedChart = ref(patientVisitChart())
const patientVisitedByDepartmentChart = ref(patientVisitByDepartmentChart())
const patientHisChart = ref(patientsHistoryChart())
const hospitalBirthChart = ref(hospitalBirthDeathChart())
watch(() => store.getters.primaryColor, () => {
    patientVisitedChart.value = patientVisitChart()
    patientVisitedByDepartmentChart.value = patientVisitByDepartmentChart()
    patientHisChart.value = patientsHistoryChart()
    hospitalBirthChart.value = hospitalBirthDeathChart()
})


const titleName = () => 'Last Week'
import PatientsTable from './PatientsTable.vue';
const totalPatients = ref(0)
const surgery = ref(0)
const totalReports = ref(0)
const totalStaffs = ref(0)
onMounted(() => {
    updateCounter(1540, totalPatients)
    updateCounter(241, surgery)
    updateCounter(574, totalReports)
    updateCounter(150, totalStaffs)
})

interface appointmentType {
    name: string;
    time: number | string | Date;
    image: string | any,
    status: string
}

const appointmentItems = ref<appointmentType[]>([
    {
        name: "Jerry Kizer",
        time: " 11:49 AM - 12 Jun, 2024",
        image: new URL('@//assets/images/avatar/user-15.png', import.meta.url),
        status: "pending"
    },
    {
        name: "Thomas Maloney",
        time: "04:44 PM - 18 Jul, 2024",
        image: new URL('@/assets/images/avatar/user-11.png', import.meta.url),
        status: "accepted"
    },
    {
        name: "Dawn Beebe",
        time: "01:24 PM - 12 Jun, 2024",
        image: new URL('@/assets/images/avatar/user-13.png', import.meta.url),
        status: "rejected"
    }
]);

const setStatus = (index: number, status: string) => {
    appointmentItems.value[index].status = status;
};


</script>
<template>
    <PageHeading title="Hospital" sub-title="Dashboards" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 xl:col-span-8 xl:row-span-2 card">
            <div class="card-body">
                <div class="grid grid-cols-12 gap-space">
                    <div class="col-span-12 row-span-2 xl:col-span-6">
                        <div class="flex items-center gap-3 mb-space">
                            <h6 class="card-title grow">Patient Visits</h6>
                            <recentMenuList :list="['Weekly', 'Monthly', 'Yearly']" :title="titleName" className="flex px-2 py-1 text-xs border-gray-200 dark:border-dark-800 link link-red border rounded-md" extraClass="zero-position" />
                        </div>
                        <Apexchart :series="patientVisitedChart.series" :options="patientVisitedChart.chartOptions" :height="320" class="!min-h-full" />
                    </div>
                    <HospitalDetailsCard title="Total Patients" :number="totalPatients" class="stroke-purple-500/30" bgColor="bg-purple-500/15" sign="+" />
                    <HospitalDetailsCard title="Surgeries" :number="surgery" class="stroke-red-500/30" bgColor="bg-red-500/15" />
                    <HospitalDetailsCard title="Total Reports" :number="totalReports" class="stroke-sky-500/30" bgColor="bg-sky-500/15" />
                    <HospitalDetailsCard title="Total Staffs" :number="totalStaffs" class="stroke-green-500/30" bgColor="bg-green-500/15" />
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 card">
            <div class="flex flex-col gap-3 md:items-center card-header md:flex-row">
                <h6 class="card-title grow">Patient Visits by Department</h6>
                <recentMenuList :list="['Weekly', 'Monthly', 'Yearly']" :title="titleName" className="flex px-2 py-1 text-xs border-gray-200 dark:border-dark-800 link link-red border rounded-md" extraClass="zero-position" />
            </div>
            <div class="card-body">
                <VueApexCharts type="donut" :width="350" :height="250" :series="patientSeries" :options="chartOptions" color-classes="[bg-primary-500, bg-green-500, bg-yellow-500, bg-purple-500, bg-red-500]" />
            </div>

        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4 xl:row-span-2 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Appointment Requests</h6>
                <a href="#!" class="link link-primary shrink-0">
                    Create
                    <i class="ri-arrow-right-line ltr:inline-block rtl:hidden"></i>
                    <i class="ri-arrow-right-line ltr:hidden rtl:inline-block"></i>
                </a>
            </div>
            <div class="card-body">
                <div>
                    <template v-for="(item, index) in appointmentItems" :key="index">
                        <div class="flex items-center gap-3 mb-3 last:mb-0">
                            <img :src="item.image" loading="lazy" alt="" class="rounded-full size-10 shrink-0" />
                            <div class="grow">
                                <h6 class="mb-1">{{ item.name }}</h6>
                                <p class="text-xs text-gray-500 dark:text-dark-500">
                                    <i class="align-baseline ri-calendar-line"></i> <span>{{ item.time }}</span>
                                </p>
                            </div>
                            <div class="flex items-center gap-2 shrink-0" v-if="item.status === 'pending'">
                                <button @click="setStatus(index, 'accepted')" title="Accepted" class="btn btn-icon btn-sub-green !size-8">
                                    <i class="ri-check-line"></i>
                                </button>
                                <button @click="setStatus(index, 'rejected')" title="Rejected" class="btn btn-icon btn-sub-red !size-8">
                                    <i class="ri-close-line"></i>
                                </button>
                            </div>
                            <div class="flex items-center gap-2 shrink-0" v-if="item.status === 'accepted'">
                                <span class="badge badge-green">Accepted</span>
                            </div>
                            <div class="flex items-center gap-2 shrink-0" v-if="item.status === 'rejected'">
                                <span class="badge badge-red">Rejected</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-8 xl:row-span-2 card">
            <div class="flex flex-col gap-3 md:flex-row md:items-center card-header">
                <h6 class="card-title grow">Patients History</h6>
                <div class="flex flex-wrap items-center gap-2 shrink-0">
                    <button type="button" class="px-3 !text-13 py-1 btn btn-primary">All</button>
                    <button type="button" class="px-3 !text-13 py-1 border-gray-200 dark:border-dark-800 btn btn-outline-gray">Weekly</button>
                    <button type="button" class="px-3 !text-13 py-1 border-gray-200 dark:border-dark-800 btn btn-outline-gray">Monthly</button>
                    <button type="button" class="px-3 !text-13 py-1 border-gray-200 dark:border-dark-800 btn btn-outline-gray">Yearly</button>
                </div>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12 gap-4 mb-3">
                    <div class="col-span-6 md:col-span-3">
                        <h6>241</h6>
                        <p class="text-gray-500 dark:text-dark-500">Assign Doctors <span class="text-xs font-medium text-green-500 align-baseline">
                                <TrendingUp data-lucide="trending-up" class="inline-block ltr:ml-1 rtl:mr-1 size-4" />
                                3.5%
                            </span></p>
                    </div><!--end col-->
                    <div class="col-span-6 md:col-span-3">
                        <h6>241</h6>
                        <p class="text-gray-500 dark:text-dark-500">Admit Patients <span class="text-xs font-medium text-red-500 align-baseline">
                                <TrendingDown data-lucide="trending-down" class="inline-block ltr:ml-1 rtl:mr-1 size-4" />
                                0.4%
                            </span></p>
                    </div><!--end col-->
                </div>
                <Apexchart :series="patientHisChart.series" :options="patientHisChart.chartOptions" :height="195" />
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4">
            <h6 class="mb-2">Upcoming Consultation</h6>
            <div class="card">
                <div class="card-body">
                    <div class="flex gap-3">
                        <img src="@/assets/images/avatar/user-25.png" loading="lazy" alt="" class="rounded-md size-11 shrink-0">
                        <div class="grow">
                            <h6 class="mb-1">Dr. Waylon Modin</h6>
                            <p class="text-gray-500 dark:text-dark-500">Dental Specialist</p>
                        </div>
                    </div>
                    <div class="px-3 py-2 my-4 text-gray-500 bg-gray-100 rounded-md dark:text-dark-500 dark:bg-dark-850 text-13">
                        <p><i class="align-baseline ri-calendar-todo-line text-14 ltr:mr-1 rtl:ml-1"></i> 24 Jul, 2024 -
                            11:00 AM -
                            12:00 PM</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" class="w-full btn btn-outline-red">Cancel</button>
                        <button type="button" class="w-full btn btn-primary">Reschedule</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Hospital Birth & Death Analytics</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex text-xs font-medium dark:border-dark-800 link link-primary" extraClass="set-position" />
            </div>
            <div class="card-body">
                <Apexchart :series="hospitalBirthChart.series" :options="hospitalBirthChart.chartOptions" :height="340" />
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Rooms Analytics Sessions</h6>
                <RecentMenuList :title="Ellipsis" :showArrow="false" :list="['Weekly', 'Monthly', 'Yearly']" className="flex text-xs font-medium dark:border-dark-800 link link-primary" extraClass="set-position" />
            </div>
            <div class="card-body">
                <div class="space-y-4">
                    <div v-for="(room, index) in roomData" :key="index" class="flex flex-col gap-3 md:items-center md:flex-row">
                        <img :src="room.image" loading="lazy" alt="" class="size-8 shrink-0">
                        <div class="grow">
                            <h6>{{ room.title }}</h6>
                            <p class="text-gray-500 dark:text-dark-500">{{ room.description }}</p>
                        </div>
                        <div class="md:ltr:text-right md:rtl:text-left shrink-0">
                            <h6>{{ room.usage }}</h6>
                            <span class="text-green-500">this month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-4 card">
            <div class="flex items-center gap-3 card-header">
                <h6 class="card-title grow">Treatment Summaries</h6>
                <a href="#!" class="text-primary-500 link hover:text-primary-600">
                    See All
                    <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                    <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4" />
                </a>
            </div>
            <div class="card-body">
                <div class="grid grid-cols-12">
                    <div v-for="(doctor, index) in doctors" :key="index" class="col-span-6 p-4 border-gray-200 border-dashed dark:border-dark-800" :class="[doctors.length - 2 > index ? 'border-b' : '', index % 2 == 0 ? 'border-r' : '']">
                        <div class="flex gap-2">
                            <img :src="doctor.image.href" loading="lazy" alt="doctor" class="rounded-md size-10 shrink-0">
                            <div class="overflow-hidden grow">
                                <h6 class="truncate">{{ doctor.name }}</h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ doctor.specialty }}</p>
                            </div>
                        </div>
                        <p class="mt-4 text-gray-500 dark:text-dark-500">{{ doctor.treatments }} Treatment</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Table Pending -->
        <PatientsTable />
    </div>
</template>