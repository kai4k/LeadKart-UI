<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import studentsListData from "./student-data";
import TableDataNotFount from "@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue";
import { ChevronLeft, ChevronRight, CirclePlus, Search } from "lucide-vue-next";
import DeleteModule from "@/view/apps/apps-email/apps-mailbox/DeleteModule.vue";

interface Student {
    studentName: string;
    image?: string;
    gender: string;
    rollNo: string;
    class: string;
    email: string;
    phone: string;
    birthDate: string;
    date: string;
    studentID?: string | number;
}

const students = ref<Student[]>(studentsListData.value);
const filteredStudents = ref<Student[]>([]);
const searchStudent = ref("");
const selectedClass = ref("");
const sortBy = ref("");
const sortDirection = ref<"asc" | "desc">("asc");
const currentPage = ref(1);
const itemsPerPage = ref(10);
const selectedData = ref<Student>()
const showDeleteModule = ref(false)
const setDeleteModuleValue = (state: boolean, data?: any) => {
    showDeleteModule.value = state;
    selectedData.value = data
}

const columns = [
    { key: "studentID", label: "ID" },
    { key: "studentName", label: "Student Name" },
    { key: "gender", label: "Gender" },
    { key: "rollNo", label: "Roll No" },
    { key: "class", label: "Class" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "bod", label: "Birth Of Date" },
    { key: "date", label: "Joining Date" },
];

const totalPages = computed(() =>
    Math.ceil(filteredStudents.value.length / itemsPerPage.value)
);

const displayedStudents = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredStudents.value.slice(start, end).map((student) => ({
        ...student,
        formattedDate: formatDate(student.date),
    }));
});

const showingStart = computed(() =>
    Math.min(
        (currentPage.value - 1) * itemsPerPage.value + 1,
        filteredStudents.value.length
    )
);
const showingEnd = computed(() =>
    Math.min(currentPage.value * itemsPerPage.value, filteredStudents.value.length)
);

const uniqueClasses = computed(() =>
    Array.from(new Set(students.value.map((student) => student.class)))
);

const filterStudents = () => {
    let results = [...students.value];

    if (searchStudent.value) {
        const searchTerm = searchStudent.value.toLowerCase();
        results = results.filter((student) =>
            Object.values(student).some((value) =>
                value.toString().toLowerCase().includes(searchTerm)
            )
        );
    }

    if (selectedClass.value) {
        results = results.filter((student) => student.class === selectedClass.value);
    }

    filteredStudents.value = results;
};

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
};

const generateAvatarText = (name: string) => {
    const nameParts = name.split(" ");
    return nameParts.length > 1
        ? nameParts[0][0] + nameParts[1][0]
        : name[0];
};

const sort = (key: string) => {
    if (sortBy.value === key) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortBy.value = key;
        sortDirection.value = "asc";
    }
    filteredStudents.value.sort((a: any, b: any) => {
        if (a[key] < b[key]) return sortDirection.value === "asc" ? -1 : 1;
        if (a[key] > b[key]) return sortDirection.value === "asc" ? 1 : -1;
        return 0;
    });
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

const removeImage = (event: Event) => {
    (event.target as HTMLImageElement).src = "";
};

function deleteRow() {
    const findindex = studentsListData.value.findIndex(data => data.studentID == selectedData.value?.studentID)
    studentsListData.value.splice(findindex, 1)

}

// Simulate API call
onMounted(() => {
    studentsListData.value.forEach((student, index) => {
        student.studentID = index + 1595
    })
    filteredStudents.value = students.value;
})
</script>
<template>
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <div class="flex flex-wrap justify-between gap-5">
                    <!-- Search input -->
                    <div>
                        <div class="relative group/form grow">
                            <input v-model="searchStudent" @input="filterStudents" type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search student, class etc. ..." />
                            <button class="absolute inset-y-0 flex items-center ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                <Search data-lucide="search" class="text-gray-500 size-4 fill-gray-100 dark:text-dark-500 dark:fill-dark-850">
                                </Search>
                            </button>
                        </div>
                    </div>
                    <!-- Add Student Button -->
                    <div>
                        <div class="items-center gap-5 sm:flex">
                            <select v-model="selectedClass" @change="filterStudents" class="form-select">
                                <option value="">Sorting by class</option>
                                <option v-for="cls in uniqueClasses" :key="cls" :value="cls">
                                    {{ cls }}
                                </option>
                            </select>
                            <router-link to="apps-school-students-admission" class="mt-5 btn btn-primary shrink-0 sm:mt-0">
                                <CirclePlus class="inline-block ltr:mr-1 rtl:ml-1 size-4"></CirclePlus>
                                Add Student
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-0 card-body">
                <!-- Students Table -->
                <div class="overflow-x-auto table-box whitespace-nowrap">
                    <table class="table flush">
                        <thead>
                            <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                <th v-for="column in columns" :key="column.key" @click="sort(column.key)" class="!font-medium cursor-pointer">
                                    {{ column.label }}
                                    <span v-if="sortBy === column.key">
                                        {{ sortDirection === 'asc' ? '↑' : '↓' }}
                                    </span>
                                </th>
                                <th class="!font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in displayedStudents" :key="student.studentID" class="*:px-3 *:py-2.5">
                                <td>PES-{{ student.studentID }}</td>
                                <td>
                                    <div class="flex items-center gap-3">
                                        <div class="relative text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850 size-8">
                                            <img v-if="student.image" :src="student.image" alt="" class="rounded-full" @error="removeImage($event)" />
                                            <span v-else class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-500 bg-gray-100 rounded-full dark:text-dark-500 dark:bg-dark-850">
                                                {{ generateAvatarText(student.studentName) }}
                                            </span>
                                        </div>
                                        <div>
                                            <h6>
                                                <router-link to="apps-school-students-overview" class="hover:underline">
                                                    {{ student.studentName }}
                                                </router-link>
                                            </h6>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ student.gender }}</td>
                                <td>{{ student.rollNo }}</td>
                                <td>{{ student.class }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.phone }}</td>
                                <td>{{ student.birthDate }}</td>
                                <td>{{ student.formattedDate }}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <!-- @click="editStudent(student.studentID)" -->
                                        <button class="btn btn-sub-primary btn-icon !size-8">
                                            <i class="ri-pencil-line"></i>
                                        </button>
                                        <button class="btn btn-sub-red btn-icon !size-8" @click="setDeleteModuleValue(true, student)">
                                            <i class="ri-delete-bin-line"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="displayedStudents.length === 0">
                                <TableDataNotFount />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="grid items-center grid-cols-12 mt-space gap-space" v-if="displayedStudents.length > 0">
                    <div class="flex flex-wrap justify-center col-span-12 xl:col-span-6 xl:justify-start">
                        <p class="text-gray-500 dark:text-dark-500"> 
                            Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filteredStudents.length }}</b> Results
                        </p>
                    </div>
                    <div class="col-span-12 md:col-span-6">
                        <div class="flex justify-center xl:justify-end pagination pagination-primary">
                            <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                Prev
                            </button>
                            <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ active: currentPage === page }" class="pagination-item">
                                {{ page }}
                            </button>
                            <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-next">
                                Next
                                <ChevronRight class="ml-1 ltr:inline-block rtl:hidden size-4"/>
                                <ChevronLeft class="mr-1 ltr:hidden rtl:inline-block size-4"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <DeleteModule :showDeletePop="showDeleteModule" :setDeleteModal="setDeleteModuleValue" :delete-row="deleteRow" />
</template>