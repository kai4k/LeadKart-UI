<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { ref, onMounted } from 'vue';
import GridTable from './GridTable.vue';
import { eventGridData } from './grid-data';
import { Plus, SlidersHorizontal } from 'lucide-vue-next';
import AddGridEventForm from './AddGridEventForm.vue';
// Data/State
const dropdownOpen = ref(false);
const showModal = ref(false);

const setModuleValue = (state: boolean) => {
    showModal.value = state
}

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
    dropdownOpen.value = false;
};

// Sorting logic
const sortList = (field: any, order = 'asc') => {
};

// Modal handling
const openModal = () => {
    showModal.value = true;
};
onMounted(() => {
    eventGridData.value.forEach((data, index) => {
        data.Id = 1 + index;
    })
})
</script>
<template>
    <PageHeading title="Grid View" sub-title="Events" />
    <div>
        <div class="flex flex-wrap items-center gap-5">
            <!-- Event Listings Header -->
            <h6 class="grow">Event Listings (<span>{{ eventGridData.length }}</span>)</h6>

            <!-- Controls (Dropdown and Add New Event Button) -->
            <div class="flex items-center gap-2 shrink-0">
                <!-- Dropdown -->
                <div class="dropdown shrink-0" :class="{ open: dropdownOpen }">
                    <button ref="button" @click="toggleDropdown" @keydown.escape.prevent.stop="closeDropdown"
                        :aria-controls="'dropdown-button'" type="button"
                        class="btn btn-sub-gray btn-icon btn-icon-text">
                        <SlidersHorizontal class="size-4"></SlidersHorizontal>
                    </button>

                    <!-- Dropdown Menu -->
                    <div v-show="dropdownOpen" ref="panel" class="p-2 !w-52 dropdown-menu dropdown-right"
                        @click.outside="closeDropdown">
                        <ul>
                            <li>
                                <a href="#!" @click="sortList(null)" class="dropdown-item">
                                    No Sorting
                                </a>
                            </li>
                            <li>
                                <a href="#!" @click="sortList('name')" class="dropdown-item">
                                    Alphabetical (A -> Z)
                                </a>
                            </li>
                            <li>
                                <a href="#!" @click="sortList('name', 'desc')" class="dropdown-item">
                                    Reverse Alphabetical (Z -> A)
                                </a>
                            </li>
                            <li>
                                <a href="#!" @click="sortList('status')" class="dropdown-item">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Add New Event Button -->
                <button class="btn btn-primary shrink-0" @click="openModal">
                    <Plus class="inline-block size-4"></Plus>
                    <span class="align-baseline">Add New Event</span>
                </button>
            </div>
        </div>
        <GridTable />
        <AddGridEventForm :showModule="showModal" :setModuleValue="setModuleValue" />
    </div>
</template>