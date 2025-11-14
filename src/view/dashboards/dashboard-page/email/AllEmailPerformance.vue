<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { emailListData } from './email-data';
import { ChevronLeft, ChevronRight, Download, Search, Trash } from 'lucide-vue-next';
import TableDataNotFount from '@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue';
import { exportTable } from '@/utils/reusable-functions';
const emails = ref(emailListData);
const filteredEmails = ref([...emailListData.value]);
const searchTerm = ref('');
const selectedItems = ref<any[]>([]);
const selectAll = ref(false);
const sortBy = ref('emailName');
const sortDirection = ref<'asc' | 'desc'>('desc');
const currentPage = ref(1);
const itemsPerPage = 8;

const totalPages = computed(() =>
    Math.ceil(filteredEmails.value.length / itemsPerPage)
);

const displayedEmails = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredEmails.value.slice(start, start + itemsPerPage);
});

const showingStart = computed(() =>
    Math.min((currentPage.value - 1) * itemsPerPage + 1, filteredEmails.value.length)
);

const showingEnd = computed(() =>
    Math.min(currentPage.value * itemsPerPage, filteredEmails.value.length)
);

function filterEmails() {
    const term = searchTerm.value.trim().toLowerCase();
    filteredEmails.value = emails.value.filter((email) =>
        Object.values(email).some((val) =>
            val.toString().toLowerCase().includes(term)
        )
    );
}

function toggleAll() {
    selectedItems.value = selectAll.value ? [...filteredEmails.value] : [];
}

function deleteSelectedItems() {
    emails.value = emails.value.filter(
        (email) => !selectedItems.value.includes(email)
    );
    filterEmails();
    selectedItems.value = [];
    selectAll.value = false;
}

function sort(column: string) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = column;
        sortDirection.value = 'asc';
    }
    emails.value.sort((a: any, b: any) => {
        const valA = a[column];
        const valB = b[column];
        return sortDirection.value === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
    });
    filterEmails();
}

function sortIndicator(column: string) {
    return sortBy.value === column ? (sortDirection.value === 'asc' ? '↑' : '↓') : '';
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

watch(searchTerm, filterEmails);

onMounted(()=>{
    sort(sortBy.value);
})
</script>
<template>
    <div class="col-span-12 card">
        <div class="grid items-center grid-cols-12 card-header gap-space">
            <div class="col-span-12 lg:col-span-3">
                <h6 class="card-title grow">All Email Performance</h6>
            </div>
            <div class="col-span-12 lg:col-span-4 xl:col-start-9">
                <div class="flex items-center gap-space">
                    <button class="btn btn-red btn-icon" v-if="selectedItems.length !== 0" @click="deleteSelectedItems">
                        <Trash class="mx-auto size-4"></Trash>
                    </button>
                    <div class="relative group/form grow">
                        <input type="text"
                            class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                            placeholder="Search ..." v-model="searchTerm" @input="filterEmails" />
                        <button title="search-button"
                            class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search class="size-4"></Search>
                        </button>
                    </div>
                    <button type="button" @click="exportTable(emails)" class="btn btn-primary shrink-0">
                        <Download class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Download> Export
                    </button>
                </div>
            </div>
        </div>

        <div class="pt-0 card-body">
            <div class="overflow-x-auto table-box">
                <table class="table whitespace-nowrap">
                    <thead>
                        <tr class="text-gray-500 bg-gray-100 dark:text-dark-500 dark:bg-dark-850">
                            <th class="!font-medium">
                                <div class="input-check-group">
                                    <label for="checkboxAll" class="hidden input-check-label"></label>
                                    <input type="checkbox" class="input-check input-check-primary" v-model="selectAll"
                                        @change="toggleAll" />
                                </div>
                            </th>
                            <th @click="sort('emailName')" class="!font-medium cursor-pointer">
                                Title <span>{{ sortIndicator('emailName') }}</span>
                            </th>
                            <th @click="sort('publishDate')" class="!font-medium cursor-pointer">
                                Publish Date <span>{{ sortIndicator('publishDate') }}</span>
                            </th>
                            <th @click="sort('sent')" class="!font-medium cursor-pointer">
                                Sent <span>{{ sortIndicator('sent') }}</span>
                            </th>
                            <th @click="sort('clickRate')" class="!font-medium cursor-pointer">
                                Click Rate (%) <span>{{ sortIndicator('clickRate') }}</span>
                            </th>
                            <th @click="sort('deliveredRate')" class="!font-medium cursor-pointer">
                                Delivered Rate <span>{{ sortIndicator('deliveredRate') }}</span>
                            </th>
                            <th @click="sort('spamReport')" class="!font-medium cursor-pointer">
                                Span Report Rate <span>{{ sortIndicator('spamReport') }}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(email, index) in displayedEmails" :key="index">
                            <td>
                                <div class="input-check-group">
                                    <label :for="`mail${index}`" class="hidden input-check-label"></label>
                                    <input type="checkbox" class="input-check input-check-primary" :value="email"
                                        v-model="selectedItems" />
                                </div>
                            </td>
                            <td>{{ email.emailName }}</td>
                            <td>{{ email.publishDate }}</td>
                            <td>{{ email.sent }}</td>
                            <td>{{ email.clickRate }}</td>
                            <td>{{ email.deliveredRate }}</td>
                            <td>{{ email.spamReport }}</td>
                        </tr>
                        <tr v-if="displayedEmails.length === 0">
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="grid items-center grid-cols-12 gap-5 mt-3" v-if="filteredEmails.length > 0">
                <div class="flex flex-wrap justify-center col-span-12 md:col-span-6 md:justify-start">
                    <p class="text-gray-500 dark:text-dark-500 ltr:pr-1 rtl:pl-1">
                        Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd }}</b> of
                        <b>{{ filteredEmails.length }}</b> Results
                    </p>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <div class="flex justify-center lg:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4">
                            </ChevronLeft>
                            <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4">
                            </ChevronRight>Prev
                        </button>
                        <button v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }"
                            @click="currentPage = page" class="pagination-item">
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