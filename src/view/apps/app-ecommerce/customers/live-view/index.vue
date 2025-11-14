<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import AddNewData from './AddNewData.vue';
import { ChevronLeft, ChevronRight, Ellipsis, Plus, Search, Trash } from 'lucide-vue-next';
import TableDataNotFount from '../../Orders/list-view/TableDataNotFount.vue';
import DeleteModule from '@/view/apps/apps-email/apps-mailbox/DeleteModule.vue';
import PreviewData from './PreviewData.vue';
import { ref, computed } from 'vue';
import { customers } from './customer-data';
import type { Customer } from './customer-data';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '../../products/grid-view/grid-data-list';

// Reactive references
const selectedItems = ref<Array<Customer>>([]); // Selected customers for deletion
const searchTerm = ref(''); // Search term for filtering
const sortBy = ref('');
const sortDirection = ref('asc');
const selectAll = ref(false);
// Method to handle modal visibility
const showAddCustomerForm = ref(false);
const showEditCustomerForm = ref(false);
// Method to toggle modal visibility for adding a customer
const handleModal = (modal: 'showAddCustomerForm' | 'showEditCustomerForm') => {
    if (modal === 'showAddCustomerForm') {
        showAddCustomerForm.value = true;
        showEditCustomerForm.value = false;
    } else {
        showEditCustomerForm.value = true;
        showAddCustomerForm.value = false;
    }
};

const setShowAddCustomerForm = (data: Customer, state: boolean) => {
    showAddCustomerForm.value = state;
}

const toggleItem = (customer: Customer) => {
    const index = selectedItems.value.indexOf(customer);
    if (index === -1) {
        selectedItems.value.push(customer);
    } else {
        selectedItems.value.splice(index, 1);
    }
};

const toggleAll = () => {
    selectAll.value = !selectAll.value
    if (selectAll.value) {
        selectedItems.value = [...customers.value];
    } else {
        selectedItems.value = [];
    }
};

const deleteSelectedItems = () => {
    customers.value = customers.value.filter(contact => !selectedItems.value.includes(contact));
    selectedItems.value = [];
    selectAll.value = false;
};

const sort = (column: any) => {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
};

// Pagination of the table
const currentPage = ref(1);
const perPage = 10; // Number of rows per page

const displayedCustomers = computed(() => {
    // Step 1: Filter by search term
    let filtered = customers.value.filter(customer => {
        return Object.values(customer).some(value =>
            value.toString().toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    });

    // Step 2: Sort the filtered data
    if (sortBy.value) {
        filtered.sort((a: any, b: any) => {
            const fieldA = a[sortBy.value];
            const fieldB = b[sortBy.value];
            // Ensure we handle undefined or non-comparable fields
            if (fieldA === undefined || fieldB === undefined) return 0;
            if (typeof fieldA === 'string' && typeof fieldB === 'string') {
                return (fieldA.localeCompare(fieldB)) * (sortDirection.value === 'asc' ? 1 : -1);
            } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
                return (fieldA - fieldB) * (sortDirection.value === 'asc' ? 1 : -1);
            }
            return 0;
        });
    }

    // Step 3: Paginate the sorted and filtered data
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return filtered.slice(start, end);
});
const totalPages = computed(() => {
    const filteredCustomers = customers.value.filter(customer => {
        return Object.values(customer).some(value =>
            value.toString().toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    });
    return Math.ceil(filteredCustomers.length / perPage);
});

const showingStart = computed(() => {
    const start = (currentPage.value - 1) * perPage + 1;
    return start > customers.value.length ? customers.value.length : start;
});

const showingEnd = computed(() => {
    const end = currentPage.value * perPage;
    return end > customers.value.length ? customers.value.length : end;
});

const filterCustomer = computed(() => customers.value); // Apply filtering logic if needed

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const gotoPage = (page: number) => {
    currentPage.value = page;
};
// ------------------------- Table Activity------------------------------
const selectedData = ref<Customer>()
const showDeleteModule = ref(false);
const showEditModule = ref(false);
const showViewModule = ref(false);

const setDeleteModuleValue = (state: boolean, data?: Customer) => {
    showDeleteModule.value = state;
    selectedData.value = data
}
const setEditModuleValue = (state: boolean, data?: Customer) => {
    showEditModule.value = state;
    selectedData.value = data

}
const setViewModuleValue = (state: boolean, data?: Customer) => {
    showViewModule.value = state;
    selectedData.value = data;
}

const deleteCustomersRowValue = () => {
    const findIndex = customers.value.findIndex(data => data.customersID == selectedData.value?.customersID);
    customers.value.splice(findIndex, 1)
}

const handleTableActivity = (option: string, data?: Customer) => {
    const activity = option.toLowerCase()
    if (activity == 'edit') {
        setEditModuleValue(true, data)
    }
    if (activity == 'overview') {
        setViewModuleValue(true, data)
    }
    if (activity == 'delete') {
        setDeleteModuleValue(true, data!)
    }
}
</script>
<template>
    <PageHeading title="List View" sub-title="Customers" />
    <div>
        <div class="grid items-center grid-cols-12 gap-5 mb-3">
            <!-- Title Section -->
            <div class="col-span-12 xl:col-span-8">
                <h6 class="card-title">Customer List</h6>
            </div>

            <!-- Action Buttons and Search Bar Section -->
            <div class="flex flex-wrap justify-end col-span-12 gap-3 xl:col-span-4">
                <!-- Delete Button (Visible if items are selected) -->
                <button class="btn btn-red btn-icon" v-if="selectedItems.length > 0" @click="deleteSelectedItems">
                    <Trash data-lucide="trash" class="inline-block size-4"></Trash>
                </button>

                <!-- Search Input -->
                <div class="relative group/form">
                    <input type="email" class="ltr:pl-9 rtl:pr-9 form-input" placeholder="Search name, email, gender, etc..." v-model="searchTerm" />
                    <span class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3">
                        <Search data-lucide="search" class="size-4"></Search>
                    </span>
                </div>

                <!-- New Customer Button -->
                <button class="btn btn-primary" @click="handleModal('showAddCustomerForm')">
                    <Plus data-lucide="plus" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Plus>
                    New Customer
                </button>
            </div>
        </div>
        <div>
            <div class="overflow-x-auto">
                <table class="table border-separate hovered flush border-spacing-y-2 whitespace-nowrap">
                    <thead>
                        <tr class="text-gray-500 bg-gray-100 dark:bg-dark-800 dark:text-dark-500">
                            <th class="!font-medium">
                                <div class="input-check-group">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input id="checkboxAll" class="input-check input-check-primary" type="checkbox" v-model="selectAll" @click="toggleAll" />
                                </div>
                            </th>
                            <th @click="sort('customersID')" class="!font-medium cursor-pointer">ID
                                <span v-if="sortBy === 'customersID'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('customersName')" class="!font-medium cursor-pointer">Name
                                <span v-if="sortBy === 'customersName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('email')" class="!font-medium cursor-pointer">Email
                                <span v-if="sortBy === 'email'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('phoneNumber')" class="!font-medium cursor-pointer">Phone Number
                                <span v-if="sortBy === 'phoneNumber'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('subscriber')" class="!font-medium cursor-pointer">Subscriber
                                <span v-if="sortBy === 'subscriber'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('gender')" class="!font-medium cursor-pointer">Gender
                                <span v-if="sortBy === 'gender'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('location')" class="!font-medium cursor-pointer">Location
                                <span v-if="sortBy === 'location'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th @click="sort('status')" class="!font-medium cursor-pointer">status
                                <span v-if="sortBy === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
                            </th>
                            <th class="!font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody class="*:bg-gray-50 dark:*:bg-dark-900 *:rounded-md">
                        <template v-if="displayedCustomers.length > 0">
                            <tr v-for="(customer, index) in displayedCustomers" :key="index">
                                <td>
                                    <div class="input-check-group">
                                        <label :for="'customer' + customer.customersID" class="hidden input-check-label"></label>
                                        <input :id="'customer' + customer.customersID" class="input-check input-check-primary" type="checkbox" @click="toggleItem(customer)" :checked="selectedItems.includes(customer)" />
                                    </div>
                                </td>
                                <td>PEC-{{ customer.customersID }}</td>
                                <td>
                                    <div class="flex items-center gap-2">
                                        <img :src="customer.image" alt="" class="rounded-full shrink-0 size-8">
                                        <a href="#!" class="!text-current link link-primary grow">{{
                                            customer.customersName }}</a>
                                    </div>
                                </td>
                                <td>{{ customer.email }}</td>
                                <td>{{ customer.phoneNumber }}</td>
                                <td>{{ customer.subscriber }}</td>
                                <td>{{ customer.gender }}</td>
                                <td>{{ customer.location }}</td>
                                <td>
                                    <span :class="{
                                        'badge badge-green': customer.status === 'Active',
                                        'badge badge-red': customer.status === 'Inactive'
                                    }">
                                        {{ customer.status }}
                                    </span>
                                </td>
                                <td>
                                    <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position" :arrayList="dropdownOption" mainCss="" iconCss="rotate-90 size-4" @handleAction="(option) => handleTableActivity(option, customer)" />
                                </td>
                            </tr>
                        </template>
                        <tr v-if="displayedCustomers.length === 0">
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pagination -->
            <div class="grid items-center grid-cols-12 gap-5 my-5" v-if="displayedCustomers.length !== 0">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of <b>{{ filterCustomer.length
                            }}</b> Results
                    </p>
                    <span v-if="selectedItems.length > 0">
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
        <AddNewData :setShowAddCustomerForm="setShowAddCustomerForm" :showAddCustomerForm="showAddCustomerForm" :set-edit-customer-form="setEditModuleValue" :show-edit-customer-form="showEditModule" :get-data="selectedData" />
        <DeleteModule :show-delete-pop="showDeleteModule" :set-delete-modal="setDeleteModuleValue" :delete-row="deleteCustomersRowValue" />
    </div>

    <PreviewData :showModule="showViewModule" :set-module-visible-value="setViewModuleValue" :getData="selectedData" />
</template>