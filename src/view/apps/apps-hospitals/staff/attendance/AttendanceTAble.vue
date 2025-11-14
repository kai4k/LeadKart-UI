<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { attendanceData } from './attendance-data';
import type { AttendanceList } from './attendance-data';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import Simplebar from 'simplebar-vue';
const attendances = ref<AttendanceList[]>([]);
const sortBy = ref<string>('');
const sortDirection = ref<'asc' | 'desc'>('asc');
const deletedAttendance = ref<AttendanceList | any>();
const currentPage = ref(1);
const itemsPerPage = ref(5);
const showDeleteModule = ref(false);
const setShowDeleteModuleValue = (state: boolean, data: any) => {
    showDeleteModule.value = state
    deletedAttendance.value = data
}

onMounted(() => {
    init();
});

const totalPages = computed(() => Math.ceil(attendances.value.length / itemsPerPage.value));

const displayedAttendances = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return attendances.value.slice(start, end).map((attendance) => ({
        ...attendance,
        formattedDate: formatDate(attendance.date),
    }));
});

const showingStart = computed(() => Math.min((currentPage.value - 1) * itemsPerPage.value + 1, attendances.value.length));

const showingEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, attendances.value.length));

function init() {
    let startID = 22697;
    attendanceData.value.forEach((report: any, index) => {
        report.attendanceIDs = `PER-${startID + index}`;
        const checkIn = parseTime(report.checkInTime);
        const checkOut = parseTime(report.checkOutTime);
        const workedTime = calculateWorkedTime(checkIn, checkOut);
        const shiftTime = { hours: 9, minutes: 0 }; // 9 hrs shift
        report.workedTime = formatTime(workedTime);
        const difference = calculateDifferenceTime(workedTime, shiftTime);
        report.differenceTime = formatTime(difference);
    });
    attendances.value = attendanceData.value;
}

function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ').replace(/(?<=\d) (?=\d{4})/, ', ');
}

function parseTime(timeStr: string) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier === 'pm' && hours !== 12) {
        hours += 12;
    } else if (modifier === 'am' && hours === 12) {
        hours = 0;
    }

    return { hours, minutes };
}

function calculateWorkedTime(checkIn: { hours: number; minutes: number }, checkOut: { hours: number; minutes: number }) {
    let hours = checkOut.hours - checkIn.hours;
    let minutes = checkOut.minutes - checkIn.minutes;
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) hours += 24;
    return { hours, minutes };
}

function calculateDifferenceTime(workedTime: { hours: number; minutes: number }, shiftTime: { hours: number; minutes: number }) {
    let hours = workedTime.hours - shiftTime.hours;
    let minutes = workedTime.minutes - shiftTime.minutes;
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    return { hours, minutes };
}

function formatTime(time: { hours: number; minutes: number }) {
    const hours = Math.abs(time.hours);
    const minutes = Math.abs(time.minutes);
    const sign = time.hours < 0 || time.minutes < 0 ? '-' : '';
    return `${sign}${hours} hrs ${minutes} min`;
}

function sort(column: string) {
    if (column === sortBy.value) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection.value = 'asc';
        sortBy.value = column;
    }

    attendances.value.sort((a: any, b: any) => {
        const valueA = a[column as keyof AttendanceList];
        const valueB = b[column as keyof AttendanceList];
        let comparison = 0;
        if (valueA > valueB) {
            comparison = 1;
        } else if (valueA < valueB) {
            comparison = -1;
        }
        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
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

function deleteAttendance() {

    const index = attendances.value.findIndex(attendance => attendance.attendanceIDs === deletedAttendance.value.attendanceIDs);
    if (index !== -1) {
        attendances.value.splice(index, 1);
    }
}

</script>
<template>
    <div class="col-span-12 card">
        <div class="flex items-center gap-3 card-header">
            <h6 class="card-title grow">Attendance List</h6>
            <button type="button" class="btn btn-primary shrink-0">Start Timing</button>
        </div>
        <div class="pt-0 card-body">
            <div>
                <Simplebar data-simplebar class="table-box">
                    <table class="table flush whitespace-nowrap">
                        <tbody>
                            <tr class="text-gray-500 dark:text-dark-500">
                                <th @click="sort('date')" class="!font-medium cursor-pointer">
                                    Date
                                    <span v-if="sortBy === 'date'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th class="!font-medium">Shift Time</th>
                                <th @click="sort('checkInTime')" class="!font-medium cursor-pointer">
                                    Check In
                                    <span v-if="sortBy === 'checkInTime'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                        }}</span>
                                </th>
                                <th @click="sort('checkOutTime')" class="!font-medium cursor-pointer">
                                    Check Out
                                    <span v-if="sortBy === 'checkOutTime'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                        }}</span>
                                </th>
                                <th @click="sort('workedTime')" class="!font-medium cursor-pointer">
                                    Worked Time
                                    <span v-if="sortBy === 'workedTime'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                        }}</span>
                                </th>
                                <th @click="sort('differenceTime')" class="!font-medium cursor-pointer">
                                    Difference
                                    <span v-if="sortBy === 'differenceTime'">{{ sortDirection === 'asc' ? '↑' : '↓'
                                        }}</span>
                                </th>
                                <th @click="sort('status')" class="!font-medium cursor-pointer">
                                    Status
                                    <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                </th>
                                <th class="!font-medium">Action</th>
                            </tr>

                            <tr v-for="(attendance, index) in displayedAttendances" :key="index" class="*:px-3 *:py-2.5">
                                <td>{{ attendance.formattedDate }}</td>
                                <td>
                                    <div class="badge badge-gray">
                                        9 hrs Shift
                                    </div>
                                </td>
                                <td>{{ attendance.checkInTime }}</td>
                                <td>{{ attendance.checkOutTime }}</td>
                                <td>{{ attendance.workedTime }}</td>
                                <td>{{ attendance.differenceTime }}</td>
                                <td>
                                    <span :class="{
                                        'badge badge-green': attendance.status === 'Present',
                                        'badge badge-yellow': attendance.status === 'Late',
                                        'badge badge-red': attendance.status === 'Absent'
                                    }">{{ attendance.status }}</span>
                                </td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <button class="btn btn-sub-primary btn-icon !size-8" title="edit">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8" title="delete" @click="setShowDeleteModuleValue(true, attendance)">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Simplebar>

                <!-- Pagination Section -->
                <div class="grid items-center grid-cols-12 gap-5 mt-5">
                    <div class="col-span-12 lg:col-span-6">
                        <p class="text-gray-500 dark:text-dark-500">
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ attendances.length
                                }}</b> Results
                        </p>
                    </div>
                    <div class="col-span-12 lg:col-span-6">
                        <div class="flex justify-start lg:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>

                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                <span>{{ page }}</span>
                            </button>

                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                                Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setShowDeleteModuleValue" :deleteRow="deleteAttendance" />
    </div>
</template>