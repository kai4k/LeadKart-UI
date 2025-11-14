<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
    showModule: Boolean,
    setModuleVisibleValue: Function,
    getData: Object,
})

// Filtered data for display
const filteredCustomerData = computed(() => ({
    Name: props.getData?.customersName,
    Email: props.getData?.email,
    'Phone Number': props.getData?.phoneNumber,
    Subscriber: props.getData?.subscriber,
    Location: props.getData?.location,
}));

// Methods
function closeModal() {
    // isModalVisible.value = false; // Hide the modal
    if (props.setModuleVisibleValue) props.setModuleVisibleValue(false)
}

function editCustomer() {
    if (props.getData?.customersID) {
        // edit login here
    }
}
</script>
<template>
    <div id="overviewCustomerModals" v-show="showModule" class=" modal">
        <div class="modal-wrap modal-center">
            <div class="p-0 modal-content">
                <!-- Modal Header -->
                <div class="h-20 bg-gray-100 dark:bg-dark-850 rounded-t-md"></div>
                <div class="modal-content">
                    <!-- Image -->
                    <div class="relative inline-block -mt-16 rounded-full">
                        <img :src="getData?.image" alt="" class="rounded-full size-24" />
                        <div
                            class="absolute bottom-1.5 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full size-4 ltr:right-2 rtl:left-2">
                        </div>
                    </div>
                    <!-- Table -->
                    <div class="mt-5">
                        <div class="overflow-x-auto">
                            <table class="table flush">
                                <tbody>
                                    <tr v-for="(item, kay) in filteredCustomerData" :key="kay" class="*:!py-1.5">
                                        <th :class="'!border-0 w-40'" v-text="kay"></th>
                                        <td v-text="item"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Buttons -->
                    <div class="flex justify-end gap-2 mt-5">
                        <button type="button" @click="closeModal" class="btn btn-sub-gray">
                            Cancel
                        </button>
                        <button type="submit" class="btn btn-primary" @click="editCustomer()">
                            Edit Customer
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal"></div>
    </div>
</template>