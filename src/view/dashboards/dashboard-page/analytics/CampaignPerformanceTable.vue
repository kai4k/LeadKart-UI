<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { campaignListData } from "./analytics-data";
import TableDataNotFount from "@/view/apps/app-ecommerce/Orders/list-view/TableDataNotFount.vue";
import { ChevronLeft, ChevronRight, Download, Search } from "lucide-vue-next";
interface Campaign {
    campaignID?: String | number;
    campaignTitle: string | number;
    clickRate: number | string;
    deliveredRate: number | string;
    impressions: number | string;
    cpc: number | string;
    cr: number | string;
    revenue: number | string;
}

const campaigns = ref<Campaign[]>([]);
const filteredCampaigns = ref<Campaign[]>([]);
const searchTerm = ref("");
const sortBy = ref<keyof Campaign>("campaignTitle");
const sortDirection = ref<"asc" | "desc">("asc");
const currentPage = ref(1);
const itemsPerPage = 8;

// Headers mapping for table
const tableHeaders = {
    campaignTitle: "Campaigns",
    clickRate: "Clicks",
    deliveredRate: "Delivered Rate (%)",
    impressions: "Impressions",
    cpc: "CPC",
    cr: "CR",
    revenue: "Revenue",
};

// Fetch campaigns data and initialize
onMounted(() => {
    // Replace with your actual data fetching logic
    campaigns.value = campaignListData.value.map((campaign, index) => ({
        ...campaign,
        campaignID: `PEE-${1478 + index}`,
    }));
    filteredCampaigns.value =  [...campaigns.value];

    sort(sortBy.value);
});

const totalPages = computed(() =>
    Math.ceil(filteredCampaigns.value.length / itemsPerPage)
);
const displayedCampaigns = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredCampaigns.value.slice(start, start + itemsPerPage);
});
const showingStart = computed(() =>
    Math.min((currentPage.value - 1) * itemsPerPage + 1, filteredCampaigns.value.length)
);
const showingEnd = computed(() =>
    Math.min(currentPage.value * itemsPerPage, filteredCampaigns.value.length)
);

function filterCampaigns() {
    const term = searchTerm.value.toLowerCase();
    filteredCampaigns.value = campaigns.value.filter((campaign) =>
        Object.values(campaign)
            .join(" ")
            .toLowerCase()
            .includes(term)
    );
}

function sort(column: keyof Campaign) {
    if (sortBy.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
        sortBy.value = column;
        sortDirection.value = "asc";
    }
    filteredCampaigns.value.sort((a: any, b: any) => {
        const result =
            a[column] > b[column]
                ? 1
                : a[column] < b[column]
                    ? -1
                    : 0;
        return sortDirection.value === "asc" ? result : -result;
    });
}

function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
}

function gotoPage(page: number) {
    currentPage.value = page;
}

function exportTable() {
    const csvContent = [
        Object.keys(tableHeaders).join(","),
        ...campaigns.value.map((campaign) =>
            Object.values(campaign).join(",")
        ),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "campaigns.csv";
    link.click();
}
</script>
<template>
    <div class="col-span-12 card">
        <div class="grid items-center grid-cols-12 card-header gap-space">
            <div class="col-span-12 xl:col-span-3">
                <h6 class="card-title">Campaigns Performance</h6>
            </div>
            <div class="col-span-12 xl:col-start-9 xl:col-span-4">
                <div class="flex items-center gap-space">
                    <div class="relative group/form grow">
                        <input type="text" v-model="searchTerm"
                            class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4"
                            placeholder="Search for campaign etc..." @input="filterCampaigns" />
                        <button title="search-button"
                            class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search class="size-4"></Search>
                        </button>
                    </div>
                    <button @click="exportTable" class="btn btn-primary shrink-0">
                        <Download class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Download> Export
                    </button>
                </div>
            </div>
        </div>

        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table whitespace-nowrap">
                    <thead>
                        <tr>
                            <th v-for="(header, key) in tableHeaders" :key="key" class="cursor-pointer"
                                @click="sort(key)">
                                {{ header }}
                                <span v-if="sortBy === key">
                                    {{ sortDirection === 'asc' ? '↑' : '↓' }}
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(campaign, index) in displayedCampaigns" :key="index">
                            <td>{{ campaign.campaignTitle }}</td>
                            <td>{{ campaign.clickRate }}</td>
                            <td>{{ campaign.deliveredRate }}</td>
                            <td>{{ campaign.impressions }}</td>
                            <td>{{ campaign.cpc }}</td>
                            <td>{{ campaign.cr }}</td>
                            <td>{{ campaign.revenue }}</td>
                        </tr>
                        <tr v-if="!displayedCampaigns.length">
                            <TableDataNotFount />
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="grid grid-cols-12 gap-5 mt-5" v-if="displayedCampaigns.length > 0">
                <div class="col-span-12 text-center lg:col-span-6 ltr:lg:text-left rtl:lg:text-right">
                    <p class="text-gray-500 dark:text-dark-500">Showing <b>{{ showingStart }}</b> - <b>{{ showingEnd
                            }}</b> of
                        <b>{{ filteredCampaigns.length }}</b> Results
                    </p>
                </div>
                <div class="col-span-12 lg:col-span-6">
                    <div class="flex justify-center lg:justify-end pagination pagination-primary">
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-pre">
                            <ChevronLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></ChevronLeft>
                            <ChevronRight class="ml-1 rtl:inline-block ltr:hidden size-4"></ChevronRight>
                            Prev
                        </button>
                        <button v-for="page in totalPages" :key="page" @click="gotoPage(page)"
                            :class="{ active: currentPage === page }" class="pagination-item">
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