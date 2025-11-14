<script setup lang="ts">
import { ref, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import simplebar from 'simplebar-vue';
import leadsData from './lead-data';
import AddRowModule from './AddRowModule.vue';
import type { ContactForm } from './lead-data';
const newList = ref<any>(leadsData.value.filter(item => item.status.toLowerCase() === 'new'));
const hotList = ref(leadsData.value.filter(item => item.status.toLowerCase() === 'hot'));
const pendingList = ref(leadsData.value.filter(item => item.status.toLowerCase() === 'pending'));
const lostList = ref<any>(leadsData.value.filter(item => item.status.toLowerCase() === 'lost'));

watch(leadsData.value, () => {
    newList.value = leadsData.value.filter(item => item.status.toLowerCase() === 'new');
    hotList.value = leadsData.value.filter(item => item.status.toLowerCase() === 'hot');
    pendingList.value = leadsData.value.filter(item => item.status.toLowerCase() === 'pending');
    lostList.value = leadsData.value.filter(item => item.status.toLowerCase() === 'lost');
})

const showEditContactForm = ref<boolean>(false);
const selectedDetails = ref<ContactForm>()
const setEditModuleValue = (state: boolean, data?: ContactForm) => {
    showEditContactForm.value = state
    selectedDetails.value = data
}

const deleteContact = (data: ContactForm) => {
    const findIndex = leadsData.value.findIndex(item => item.id === data.id);
    leadsData.value.splice(findIndex, 1);
}

</script>
<template>
    <simplebar>
        <div class="flex space-x-4">
            <div class="w-[350px] shrink-0 bg-gray-100 p-5 rounded-md dark:bg-dark-850">
                <h6 class="mb-4">New <span class="badge badge-sky ltr:ml-1 rtl:mr-1">{{ newList.length }}</span></h6>
                <simplebar class="max-h-[calc(100vh_-_25.1rem)] -mx-5 px-5">
                    <VueDraggable v-model="newList" :animation="150" group="leads" class="h-full space-y-2" id="in-progress">
                        <template v-for="lead in newList" :key="lead.id">
                            <div class="p-3 bg-white border border-white rounded dark:bg-dark-900 dark:border-dark-900 bg-primary-500/15 border-primary-500/20">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="rounded-full size-12">
                                        <img :src="lead.image" alt="" class="object-cover w-full h-full rounded-full">
                                    </div>
                                    <div class="grow">
                                        <h6 x-text="lead.name" class="mb-1">{{ lead.name }}</h6>
                                        <p class="text-sm text-gray-500 dark:text-dark-500"><i class="ri-time-line"></i> <span x-text="lead.date">{{ lead.date }}</span> at <span x-text="lead.time">{{ lead.time }}</span></p>
                                    </div>
                                </div>
                                <p class="mb-2"><i class="ltr:mr-1 rtl:ml-1 ri-mail-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.email">{{ lead.email
                                }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-phone-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.phoneNumber">{{
                                    lead.phoneNumber
                                        }}</span></p>
                                <div class="flex items-center gap-3 mt-3">
                                    <a href="#!" data-modal-target="leadCreateModal" @click="setEditModuleValue(true, lead)" class="link link-primary">Edit</a>
                                    <a href="#!" data-modal-target="deleteModal" @click="deleteContact(lead)" class="link link-red">Delete</a>
                                </div>
                            </div>
                        </template>
                    </VueDraggable>

                </simplebar>
            </div>
            <div class="w-[350px] shrink-0 bg-gray-100 p-5 rounded-md dark:bg-dark-850">
                <h6 class="mb-4">Hot <span class="badge badge-red ltr:ml-1 rtl:mr-1">{{ hotList.length }}</span></h6>
                <simplebar class="max-h-[calc(100vh_-_25.1rem)] -mx-5 px-5">
                    <VueDraggable v-model="hotList" group="leads" :animation="150" class="h-full space-y-2" id="in-progress">
                        <template v-for="lead in hotList" :key="lead.id">
                            <div class="p-3 bg-white border border-white rounded dark:bg-dark-900 dark:border-dark-900 bg-primary-500/15 border-primary-500/20">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="rounded-full size-12">
                                        <img :src="lead.image" alt="" class="object-cover w-full h-full rounded-full">
                                    </div>
                                    <div class="grow">
                                        <h6 x-text="lead.name" class="mb-1">{{ lead.name }}</h6>
                                        <p class="text-sm text-gray-500 dark:text-dark-500"><i class="ri-time-line"></i> <span x-text="lead.date">{{ lead.date }}</span> at <span x-text="lead.time">{{ lead.time }}</span></p>
                                    </div>
                                </div>
                                <p class="mb-2"><i class="ltr:mr-1 rtl:ml-1 ri-mail-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.email">{{ lead.email
                                }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-phone-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.phoneNumber">{{
                                    lead.phoneNumber
                                        }}</span></p>
                                <div class="flex items-center gap-3 mt-3">
                                    <a href="#!" data-modal-target="leadCreateModal" @click="setEditModuleValue(true, lead)" class="link link-primary">Edit</a>
                                    <a href="#!" data-modal-target="deleteModal" @click="deleteContact(lead)" class="link link-red">Delete</a>
                                </div>
                            </div>
                        </template>
                    </VueDraggable>
                </simplebar>
            </div>
            <div class="w-[350px] shrink-0 bg-gray-100 p-5 rounded-md dark:bg-dark-850">
                <h6 class="mb-4">Pending <span class="badge badge-green ltr:ml-1 rtl:mr-1">{{ pendingList.length
                }}</span>
                </h6>
                <simplebar class="max-h-[calc(100vh_-_25.1rem)] -mx-5 px-5">
                    <VueDraggable v-model="pendingList" :animation="150" group="leads" class="h-full space-y-2" id="in-progress">
                        <template v-for="lead in pendingList" :key="lead.id">
                            <div class="p-3 bg-white border border-white rounded dark:bg-dark-900 dark:border-dark-900 bg-primary-500/15 border-primary-500/20">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="rounded-full size-12">
                                        <img :src="lead.image" alt="" class="object-cover w-full h-full rounded-full">
                                    </div>
                                    <div class="grow">
                                        <h6 x-text="lead.name" class="mb-1">{{ lead.name }}</h6>
                                        <p class="text-sm text-gray-500 dark:text-dark-500"><i class="ri-time-line"></i> <span x-text="lead.date">{{ lead.date }}</span> at <span x-text="lead.time">{{ lead.time }}</span></p>
                                    </div>
                                </div>
                                <p class="mb-2"><i class="ltr:mr-1 rtl:ml-1 ri-mail-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.email">{{ lead.email
                                }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-phone-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.phoneNumber">{{
                                    lead.phoneNumber
                                        }}</span></p>
                                <div class="flex items-center gap-3 mt-3">
                                    <a href="#!" data-modal-target="leadCreateModal" @click="setEditModuleValue(true, lead)" class="link link-primary">Edit</a>
                                    <a href="#!" data-modal-target="deleteModal" @click="deleteContact(lead)" class="link link-red">Delete</a>
                                </div>
                            </div>
                        </template>
                    </VueDraggable>

                </simplebar>
            </div>
            <div class="w-[350px] shrink-0 bg-gray-100 p-5 rounded-md dark:bg-dark-850">
                <h6 class="mb-4">Lost <span class="badge badge-purple ltr:ml-1 rtl:mr-1">{{ lostList.length }}</span>
                </h6>
                <simplebar class="max-h-[calc(100vh_-_25.1rem)] -mx-5 px-5">
                    <VueDraggable v-model="lostList" group="leads" :animation="150" class="flex flex-col gap-2" id="in-progress">
                        <template v-for="lead in lostList" :key="lead.id">
                            <div class="p-3 bg-white rounded-sm opacity-75 cursor-pointer dark:bg-dark-900 dark:border-dark-900">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="rounded-full size-12">
                                        <img :src="lead.image" alt="" class="object-cover w-full h-full rounded-full">
                                    </div>
                                    <div class="grow">
                                        <h6 x-text="lead.name" class="mb-1">{{ lead.name }}</h6>
                                        <p class="text-sm text-gray-500 dark:text-dark-500"><i class="ri-time-line"></i> <span x-text="lead.date">{{ lead.date }}</span> at <span x-text="lead.time">{{ lead.time }}</span></p>
                                    </div>
                                </div>
                                <p class="mb-2"><i class="ltr:mr-1 rtl:ml-1 ri-mail-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.email">{{ lead.email
                                }}</span></p>
                                <p><i class="ltr:mr-1 rtl:ml-1 ri-phone-line"></i> <span class="text-gray-500 dark:text-dark-500" x-text="lead.phoneNumber">{{
                                    lead.phoneNumber
                                        }}</span></p>
                                <div class="flex items-center gap-3 mt-3">
                                    <a href="#!" data-modal-target="leadCreateModal" @click="setEditModuleValue(true, lead)" class="link link-primary">Edit</a>
                                    <a href="#!" data-modal-target="deleteModal" @click="deleteContact(lead)" class="link link-red">Delete</a>
                                </div>
                            </div>
                        </template>
                    </VueDraggable>
                </simplebar>
            </div>
        </div>
    </simplebar>

    <AddRowModule :show-edit-module="showEditContactForm" :set-edit-module-value="setEditModuleValue" :getData="selectedDetails" />
</template>