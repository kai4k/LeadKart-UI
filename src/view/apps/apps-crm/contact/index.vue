<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import AddRowModule from './AddRowModule.vue';
import DeleteModal from '../../apps-email/apps-mailbox/DeleteModule.vue';
import { contacts, type Contacts } from './contact-details';
import { ChevronLeft, ChevronRight, Download, Ellipsis, Filter, Plus, Search, Trash } from 'lucide-vue-next';
import OverviewModule from './OverviewModule.vue';
import { exportTable } from '@/utils/reusable-functions';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../../app-ecommerce/products/grid-view/grid-data-list';

const searchTerm = ref(''); // For storing the search term
// State variables
const sortBy = ref(null);
const sortDirection = ref('asc');
const selectedItems = ref<any>([]);
const selectAll = ref(false);
const dropdownOpen = ref(false);
const showAddContactForm = ref(false);
const isDeleteModuleVisible = ref(false)
const showOverviewModule = ref(false);
const selectedDetails = ref()
const setInsertModuleValue = (state: boolean) => {
    showAddContactForm.value = state
}
const setOverviewModuleValue = (state: boolean, data: Contacts) => {
    showOverviewModule.value = state
    selectedDetails.value = data
}
const setDeleteModuleValue = (state: boolean, data?: Contacts) => {
    selectedDetails.value = data
    isDeleteModuleVisible.value = state
}

const showEditForm = ref(false)
const editData = ref<Contacts | null>(null)
function setEditFormValue(state: boolean, data?: Contacts) {
    showEditForm.value = state
    editData.value = data!

}

// Pagination state
const currentPage = ref(1);
const itemsPerPage = ref(10); // Adjust how many items per page
const totalPages = computed(() => Math.ceil(contacts.value.length / itemsPerPage.value));

// Showing current page range
const showingStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const showingEnd = computed(() => {
    return Math.min(currentPage.value * itemsPerPage.value, contacts.value.length);
});

const displayedContacts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return contacts.value.filter(contact =>
        contact.contactName.toLowerCase().includes(searchTerm.value.toLowerCase())
    ).slice(start, end);
});

// Handle page navigation
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

function gotoPage(page: any) {
    currentPage.value = page;
}


const deleteSelectedItems = () => {
    contacts.value = contacts.value.filter(contact => !selectedItems.value.includes(contact));
    selectedItems.value = [];
    selectAll.value = false;
};

// Sorting Function
function sort(column: any) {
    if (column === sortBy.value) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection.value = 'asc';
        sortBy.value = column;
    }
    contacts.value.sort((a: any, b: any) => {
        const valueA = a[column];
        const valueB = b[column];
        let comparison = 0;
        if (valueA > valueB) comparison = 1;
        else if (valueA < valueB) comparison = -1;
        return sortDirection.value === 'desc' ? comparison * -1 : comparison;
    });
}

watch(selectAll, () => {
    if (selectAll.value) {
        selectedItems.value = [...contacts.value]; // Select all items
    } else {
        selectedItems.value = []; // Deselect all items
    }
})

// Toggle individual item checkbox
function toggleItem(contact: any) {
    if (selectedItems.value.includes(contact)) {
        selectedItems.value = selectedItems.value.filter((item: any) => item !== contact);
    } else {
        selectedItems.value.push(contact);
    }
}

// Delete button click event
const deleteContact = () => {
    // Find the index of the contact
    const contactIndex = contacts.value.findIndex(contact => contact.contactID === selectedDetails.value.contactID);
    if (contactIndex !== -1) {
        contacts.value.splice(contactIndex, 1); // Remove the contact from the array
    }
};
// Dropdown handling
function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
}

function closeDropdown() {
    dropdownOpen.value = false;
}

const handleTableActivity = (option: string, data?: Contacts) => {
    const activity = option.toLowerCase()
    if (activity == 'overview') {
        setOverviewModuleValue(true, data!)
    }
    if (activity == 'edit') {
        setEditFormValue(true, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}

onMounted(() => {
    contacts.value.forEach((data, index) => {
        data.contactID = 24151 + index;
    })
})

</script>
<template>
    <PageHeading title="Contact" sub-title="CRM" />
    <div>
        <div class="card">
            <div class="card-header">
                <div class="flex flex-wrap justify-between gap-5">
                    <!-- Search Input Section -->
                    <div>
                        <div class="relative group/form">
                            <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." v-model="searchTerm" />
                            <div class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                                <Search data-lucide="search" class="size-4"></Search>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons Section -->
                    <div>
                        <div class="flex flex-wrap gap-2">
                            <!-- Delete Selected Items Button -->
                            <button class="btn btn-red btn-icon" v-show="selectedItems.length > 0" @click="deleteSelectedItems">
                                <Trash data-lucide="trash" class="inline-block size-4"></Trash>
                            </button>

                            <!-- Export Button -->
                            <button @click="exportTable(contacts)" type="button" class="btn btn-sub-gray">
                                <Download data-lucide="download" class="inline-block size-4" />
                                <span class="align-baseline"> Export</span>
                            </button>

                            <!-- Add Contact Button -->
                            <button type="button" class="btn btn-primary" @click="showAddContactForm = true" data-modal-target="contactCreateModal">
                                <Plus data-lucide="plus" class="inline-block size-4" /> <span class="align-baseline">Add Contact</span>
                            </button>

                            <!-- Sort Dropdown -->
                            <div class="dropdown shrink-0">
                                <button @click="toggleDropdown" class="btn btn-sub-gray">
                                    <Filter data-lucide="filter" class="inline-block ltr:mr-1 rtl:ml-1 align-center size-4" /> Sort By
                                </button>

                                <div v-show="dropdownOpen" @click.outside="closeDropdown" class="!fixed p-2 dropdown-menu !w-64">
                                    <ul>
                                        <li>
                                            <a href="#" @click="sort(null)" class="dropdown-item">
                                                No Sorting
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="sort('contactName')" class="dropdown-item">
                                                Alphabetical (A -> Z)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="sort('contactName')" class="dropdown-item">
                                                Reverse Alphabetical (Z -> A)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="sort('status')" class="dropdown-item">
                                                Status
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <div class="overflow-x-auto">
                        <table class="table whitespace-nowrap">
                            <tbody>
                                <!-- Table Header -->
                                <tr class="text-gray-500 bg-gray-100 dark:bg-dark-850 dark:text-dark-500">
                                    <th class="!font-medium">
                                        <label for="checkboxAll" class="hidden input-check-label"></label>
                                        <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" />
                                    </th>
                                    <th @click="sort('contactID')" class="!font-medium cursor-pointer">
                                        ID
                                        <span v-if="sortBy === 'contactID'" :class="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                    </th>
                                    <th @click="sort('contactName')" class="!font-medium cursor-pointer">
                                        Name
                                        <span v-if="sortBy === 'contactName'" :class="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                    </th>
                                    <th @click="sort('company')" class="!font-medium cursor-pointer">
                                        Company
                                        <span v-if="sortBy === 'company'" :class="sortDirection === 'asc' ? '↑' : '↓'">{{ sortDirection === 'asc' ?
                                            '↑' : '↓' }}</span>
                                    </th>
                                    <th @click="sort('role')" class="!font-medium cursor-pointer">
                                        Role
                                        <span v-if="sortBy === 'role'" :class="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                    </th>
                                    <th @click="sort('email')" class="!font-medium cursor-pointer">
                                        Email
                                        <span v-if="sortBy === 'email'" :class="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                    </th>
                                    <th @click="sort('website')" class="!font-medium cursor-pointer">
                                        Website
                                        <span v-if="sortBy === 'website'" :class="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                    </th>
                                    <th @click="sort('status')" class="!font-medium cursor-pointer">
                                        Status
                                        <span v-if="sortBy === 'status'" :class="sortDirection === 'asc' ? '↑' : '↓'"></span>
                                    </th>
                                    <th class="!font-medium">Action</th>
                                </tr>

                                <!-- Table Rows -->
                                <template v-if="displayedContacts.length > 0">
                                    <tr v-for="(contact, index) in displayedContacts" :key="index">
                                        <td>
                                            <div class="flex items-center">
                                                <label :for="`contact${index}`" class="hidden input-check-label"></label>
                                                <input :id="`contact${index}`" class="input-check input-check-primary" type="checkbox" @click="toggleItem(contact)" :checked="selectedItems.includes(contact)" />
                                            </div>
                                        </td>
                                        <td>PEC-{{ contact?.contactID || 24151 + index }}</td>
                                        <td>
                                            <div class="flex items-center gap-2">
                                                <img :src="contact.image" alt="" class="rounded-full shrink-0 size-9" />
                                                <div class="overflow-hidden grow">
                                                    <h6 class="truncate">
                                                        <a href="#!" class="!text-current link link-primary">{{
                                                            contact.contactName }}</a>
                                                    </h6>
                                                    <p class="text-sm text-gray-500 truncate dark:text-dark-500">{{
                                                        contact.phoneNumber }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ contact.company }}</td>
                                        <td>{{ contact.role }}</td>
                                        <td>{{ contact.email }}</td>
                                        <td>
                                            <a href="#!" class="badge badge-gray">{{ contact.website }}</a>
                                        </td>
                                        <td>
                                            <span :class="{
                                                'badge badge-pink': contact.status === 'Customer',
                                                'badge badge-yellow': contact.status === 'Personal',
                                                'badge badge-sky': contact.status === 'Employee',
                                                'badge badge-purple': contact.status === 'Marketing'
                                            }">
                                                {{ contact.status }}
                                            </span>
                                        </td>
                                        <td>
                                            <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" menuIconCss="size-4" @handleAction="(option) => handleTableActivity(option, contact)" />

                                        </td>
                                    </tr>
                                </template>

                                <!-- No Data Available -->
                                <template v-if="displayedContacts.length === 0">
                                    <TableDataNotFount />
                                </template>
                            </tbody>
                        </table>
                        <!-- Pagination -->
                        <div class="grid items-center grid-cols-12 gap-space mt-space" v-show="contacts.length !== 0">
                            <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                                <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">
                                    Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ contacts.length
                                        }}</b> Results
                                </p>
                                <span v-show="selectedItems.length > 0">
                                    <b>{{ selectedItems.length }}</b> Row Selected
                                </span>
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <div class="flex justify-center md:justify-end pagination pagination-primary">
                                    <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4" />
                                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-4" />
                                        Prev
                                    </button>
                                    <template v-for="page in totalPages" :key="page">
                                        <button @click="gotoPage(page)" :class="{ 'active': currentPage === page }" class="pagination-item">
                                            <span>{{ page }}</span>
                                        </button>
                                    </template>
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
            </div>
        </div>

        <AddRowModule :showFormModule="showAddContactForm" :setFormModuleValue="setInsertModuleValue" :showEditProjectForm="showEditForm" :editDetails="editData!" :setEditProjectForm="setEditFormValue" />

        <OverviewModule :showModule="showOverviewModule" :setShowModuleValue="setOverviewModuleValue" :overviewData="selectedDetails" />
        <DeleteModal :showDeletePop="isDeleteModuleVisible" :setDeleteModal="setDeleteModuleValue" :delete-row="deleteContact" />

    </div>
</template>