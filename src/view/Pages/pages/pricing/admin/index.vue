<script setup lang="ts">
import { ref, computed } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import AdminPlanCard from './AdminPlanCard.vue';
import { totalData } from './admin-data';
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-vue-next';
import RecentMenuList from '@/view/dashboards/recent-menu-list.vue';
import { dropdownOption } from '@/view/apps/app-ecommerce/products/grid-view/grid-data-list';
// Pagination logic
const currentPage = ref(1);
const itemsPerPage = 10;

const pageNumbers = computed(() => {
    const totalPages = Math.ceil(totalData.value.length / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
});

const totalPages = computed(() => Math.ceil(totalData.value.length / itemsPerPage));

const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    return totalData.value.slice(startIndex, startIndex + itemsPerPage);
});

// Change the page
function changePage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}
</script>
<template>
    <PageHeading title="Pricing" sub-title="Pages" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-space">
        <AdminPlanCard :growth="35.9" title="Active Plan" :users="9725" bgColor="fill-green-500/20" />
        <AdminPlanCard :growth="-6.4" title="UnActive Plan" :users="1020" bgColor="fill-red-500/20" />
        <AdminPlanCard :growth="6.3" title="Regular Plan" :users="1450" bgColor="fill-primary-500/20" />
        <AdminPlanCard :growth="10.7" title="Professional Plan" :users="4784" bgColor="fill-purple-500/20" />
        <AdminPlanCard :growth="9.6" title="Enterprise Plan" :users="2647" bgColor="fill-yellow-500/20" />
    </div>
    <h6 class="mt-2 mb-5">All Users</h6>
    <div class="overflow-x-auto">
        <table class="table bordered">
            <thead>
                <tr>
                    <th class="whitespace-nowrap">User ID</th>
                    <th class="whitespace-nowrap">Name</th>
                    <th class="whitespace-nowrap">Start Date</th>
                    <th class="whitespace-nowrap">End Date</th>
                    <th class="whitespace-nowrap">Plan Type</th>
                    <th class="whitespace-nowrap">Total Payment</th>
                    <th class="whitespace-nowrap">Status</th>
                    <th class="whitespace-nowrap">Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through data and display rows -->
                <tr v-for="(user, index) in paginatedData" :key="index">
                    <td class="whitespace-nowrap"><a href="#!">{{ user.id }}</a></td>
                    <td class="whitespace-nowrap">{{ user.name }}</td>
                    <td class="whitespace-nowrap">{{ user.startDate }}</td>
                    <td class="whitespace-nowrap">{{ user.endDate }}</td>
                    <td class="whitespace-nowrap">{{ user.planType }}</td>
                    <td class="whitespace-nowrap">{{ user.totalPayment }}</td>
                    <td class="whitespace-nowrap">
                        <span class="badge"
                            :class="{ 'badge-green': user.status === 'Successfully', 'badge-red': user.status === 'Failed', 'badge-yellow': user.status === 'Pending' }">
                            {{ user.status }}
                        </span>
                    </td>
                    <td class="whitespace-nowrap">
                        <RecentMenuList :title="Ellipsis" :showArrow="false" className="" extraClass="set-position"
                            :arrayList="dropdownOption" mainCss="" iconCss="size-5" menuIconCss="size-4" />
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Pagination -->
        <div class="my-5">
            <div class="items-center md:flex">
                <p class="text-gray-500 dark:text-dark-500 grow">
                    Showing <b>{{ paginatedData.length }}</b> of <b>{{ totalData.length }}</b> Results
                </p>
                <div class="flex shrink-0 mt-2.5 md:mt-0 pagination pagination-primary">
                    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="pagination-pre">
                        <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-5"></ChevronLeft>
                        <ChevronRight class="ml-1 ltr:hidden rtl:inline-block size-5"></ChevronRight> Prev
                    </button>

                    <button v-for="page in pageNumbers" :key="page"
                        :class="['pagination-item', { active: page === currentPage }]" @click="changePage(page)">
                        {{ page }}
                    </button>

                    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="pagination-next">
                        Next <ChevronRight data-lucide="chevron-right" class="ml-1 rtl:hidden size-5 ltr:inline-block">
                        </ChevronRight>
                        <ChevronLeft data-lucide="chevron-left" class="mr-1 rtl:inline-block ltr:hidden size-5">
                        </ChevronLeft>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>