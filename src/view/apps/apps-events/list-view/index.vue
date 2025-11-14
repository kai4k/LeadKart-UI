<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import EventTable from './EventTable.vue';
import AddRowModule from './AddRowModule.vue';
import { Plus, SlidersHorizontal } from 'lucide-vue-next';
import { ref } from 'vue';
import { eventsListData } from './event-data';

// State
const dropdownOpen = ref(false);
const sortedBy = ref<string>('')
const showAddEventForm = ref(false); // Toggle between Add and Edit forms
const setAddEventModuleValue = (state: boolean) => {
    showAddEventForm.value = state
}

// Handle dropdown behavior
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
    dropdownOpen.value = false;
};

const handleSort = (sortBy: string) => {
    sortedBy.value = sortBy
};

</script>
<template>
    <PageHeading title="List View" sub-title="Events" />
    <div>
        <div class="flex flex-wrap items-center gap-5">
            <h6 class="grow">
                Event Listings (<span>{{ eventsListData.length }}</span>)
            </h6>
            <div class="flex flex-wrap items-center gap-2 shrink-0">
                <div x-data="dropdownBehavior()" @keydown.escape.prevent.stop="closeDropdown" x-init="calculatePosition()" class="dropdown shrink-0">
                    <button ref="button" @click="toggleDropdown" class="btn btn-sub-gray btn-icon btn-icon-text" title="dropdown-button">
                        <SlidersHorizontal class="size-4"></SlidersHorizontal>
                    </button>

                    <div v-if="dropdownOpen" class="fixed p-2 dropdown-menu !w-64" @click.outside="closeDropdown">
                        <ul>
                            <li>
                                <a href="#!" @click="handleSort('')" class="dropdown-item">
                                    No Sorting
                                </a>
                            </li>
                            <li>
                                <a href="#!" @click="handleSort('eventName')" class="dropdown-item">
                                    Alphabetical (A -> Z)
                                </a>
                            </li>
                            <li>
                                <a href="#!" @click="handleSort('eventDate')" class="dropdown-item">
                                    Reverse Alphabetical (Z -> A)
                                </a>
                            </li>
                            <li>
                                <a href="#!" @click="handleSort('status')" class="dropdown-item">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <button class="btn btn-primary shrink-0" data-modal-target="addEventModal" @click="showAddEventForm = true">
                    <Plus data-lucide="plus" class="inline-block size-4" /> <span class="align-baseline">Add New Event</span>
                </button>
            </div>
        </div>
        <EventTable :columnSortBy="sortedBy" />
        <AddRowModule :showModule="showAddEventForm" :setModuleValue="setAddEventModuleValue" />
    </div>
</template>