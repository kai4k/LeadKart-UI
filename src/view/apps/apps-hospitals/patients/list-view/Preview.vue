<script setup lang="ts">
import { Ambulance, BriefcaseMedical, Building2, Gem, Mail, Pencil, Phone, X } from 'lucide-vue-next';
const props = defineProps({
    overviewItem: Object,
    setModuleValue: Function
})

// Methods to control modal actions
const bookAppointment = () => {
    // Implement the logic for booking an appointment
    alert('Appointment booked!');
};

const closeModal = () => {
    if (props.setModuleValue) props.setModuleValue();
};
</script>
<template>
    <!-- Patient Overview Modal -->
    <div v-if="overviewItem" class="modal ">
        <div class="modal-wrap modal-center">
            <div class="p-2 modal-content">
                <div
                    class="h-24 p-5 rounded-t ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500/20 via-pink-500/20 to-green-500/20">
                </div>
                <div class="p-4">
                    <div class="flex">
                        <!-- Patient Image -->
                        <div class="relative inline-block -mt-16 rounded-md ltr:mr-auto rtl:ml-auto shrink-0">
                            <img :src="overviewItem.image" alt="" class="rounded-md size-24">
                        </div>
                        <div class="shrink-0">
                            <button type="button" class="btn btn-red" @click="bookAppointment">Book Appointment</button>
                        </div>
                    </div>

                    <!-- Patient Name and Date -->
                    <h6 class="mt-3 mb-1">{{ overviewItem.name }}</h6>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">Appointment Date: <span>{{ overviewItem.date
                            }}</span></p>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">Overview</p>

                    <!-- Patient Info -->
                    <div class="space-y-3">
                        <div class="flex items-center gap-2">
                            <div class="w-48 font-medium shrink-0">
                                <BriefcaseMedical
                                    class="inline-block mr-1 text-gray-500 dark:text-dark-500 size-4 ri-briefcase-medical">
                                </BriefcaseMedical>
                                <span class="align-baseline">Doctor Name</span>
                            </div>
                            <p>{{ overviewItem.doctorName }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-48 font-medium shrink-0">
                                <Building2 class="inline-block text-gray-500 dark:text-dark-500 size-4 ri-building-2">
                                </Building2> <span class="align-baseline">Treatment Type</span>
                            </div>
                            <p>{{ overviewItem.treatmentType }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-48 font-medium shrink-0">
                                <Mail class="inline-block text-gray-500 dark:text-dark-500 size-4 ri-mail">
                                </Mail> <span class="align-baseline">Email</span>
                            </div>
                            <p><a :href="'mailto:' + overviewItem.email">{{ overviewItem.email }}</a></p>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-48 font-medium shrink-0">
                                <Phone class="inline-block text-gray-500 dark:text-dark-500 size-4 ri-phone">
                                </Phone> <span class="align-baseline">Phone Number</span>
                            </div>
                            <p><a href="#!">{{ overviewItem.phoneNumber }}</a></p>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-48 font-medium shrink-0">
                                <Ambulance
                                    class="inline-block mr-1 text-gray-500 dark:text-dark-500 size-4 ri-ambulance" />
                                <span class="align-baseline">Insurance</span>
                            </div>
                            <p>{{ overviewItem.insurance }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-48 font-medium shrink-0">
                                <Gem class="inline-block text-gray-500 dark:text-dark-500 size-4 "></Gem> <span
                                    class="align-baseline">Status</span>
                            </div>
                            <p class="badge badge-primary">Old</p>
                        </div>
                    </div>

                    <!-- Modal Actions -->
                    <div class="flex items-center justify-end gap-2 mt-6">
                        <button type="button" class="btn btn-active-red" @click="closeModal">
                            <X class="inline-block size-4 ri-x"></X> <span>Close</span>
                        </button>
                        <a href="apps-hospital-patients-create" class="btn btn-primary">
                            <Pencil class="inline-block mr-1 size-4 ri-pencil"></Pencil> Edit Patient
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs"></div>
    </div>
</template>