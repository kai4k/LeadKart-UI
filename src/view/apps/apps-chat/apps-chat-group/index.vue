<script setup lang="ts">
import brand27 from "@/assets/images/brands/img-27.png";
import PageHeading from '@/components/common/PageHeading.vue';
import simplebar from "simplebar-vue";
import GroupSideBar from './GroupSideBar.vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { groups, selectOptions, messages, members, attachments } from './group-data'
import type { Message } from './group-data'
import { AudioLines, ChevronsLeft, Download, Ellipsis, Image, Phone, Plus, Send, Video, X } from 'lucide-vue-next';
import importGroupImg from '@/assets/images/brands/img-08.png'
import userImage from "@/assets/images/avatar/user-17.png";
const groupImage = ref(importGroupImg)
const groupName = ref('Shopify Developers');
const insertGroupName = ref('')
const showGroupAddModal = ref(false);
const selected = ref<string[]>([]);
const activeBar = ref(0);
// Reactive states
const showChatWrapper = ref(false);
const windowWidth = ref(window.innerWidth);

// Update windowWidth on resize
const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};
onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});


function setActiveBar(data: any, state: number) {
    activeBar.value = state;
    groupName.value = data.name;
    groupImage.value = data.image;

}
function showGroupModel(state: boolean) {
    showGroupAddModal.value = state
}
const closeGroupModal = () => {
    showGroupAddModal.value = false
}

const createGroup = () => {
    if (!insertGroupName.value) return; // Validate group name
    const newGroup = {
        name: insertGroupName.value,
        image: brand27, // Fixed image value
        message: 'New group created', // Customize as needed
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
        badge: '',
        unread: false, // Set unread to false
        active: false, // Set active to false
    };
    groups.value.unshift(newGroup);
    resetForm();
    closeGroupModal()
};
// Method to reset form inputs
const resetForm = () => {
    insertGroupName.value = '';
    selected.value = [];
};

// ------------------ Message part ----------------

function showChart() {
    if (windowWidth.value < 1280) {
        showChatWrapper.value = true;
    }
}
function backToChatList() {
    if (windowWidth.value < 1280) {
        showChatWrapper.value = false;
    }
}
const isOpen = ref<number | null>(null);
const showReplayMenuButton = (index: number) => {
    isOpen.value = isOpen.value === index ? null : index;
};

const confirmDelete = (message: Message) => {
    // Logic for confirming deletion
};
const message = ref<string>('');

// Click outside directive (you can implement your own logic or use a library)
document.addEventListener('click', (event) => {
    if (openDropdown.value && buttonRef.value && !buttonRef.value.contains(event.target as Node) && dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        closeDropdown();
    }
});

// ------------------- Send Data push message data -------------------
const messagesPush = ref<Array<{ user: { name: string; avatar: string; status: string }; timestamp: string; message: string; type: string }>>([]);

const sendMessage = () => {
    const trimmedMessage = message.value.trim();
    if (trimmedMessage) {
        // Add your logic to send the message
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // Push new message object into messages array
        messages.value.push({
            user: {
                name: "User 17",
                avatar: userImage,
                status: "online",
            },
            timestamp: currentTime,
            message: trimmedMessage,
            type: "sent",
        });
        message.value = ''; // Clear the input after sending
    }
};
const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        const file = target.files[0];
        // Handle file upload logic here
    }
};
// Dropdown behavior
const openDropdown = ref<boolean>(false);
const buttonRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
    openDropdown.value = !openDropdown.value;
};

const closeDropdown = () => {
    openDropdown.value = false;
};

// Clear chat function
const clearChat = () => {
    messagesPush.value = []; // Clear messages array
};

// Function to open delete modal
const openDeleteModal = () => {
    // Implement logic to open delete modal here
};

function closeInsideMsg() {
    isOpen.value = null
}
// Click outside directive (you can implement your own logic or use a library)
document.addEventListener('click', (event) => {
    if (openDropdown.value && buttonRef.value && !buttonRef.value.contains(event.target as Node) && dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        closeDropdown();
        closeInsideMsg();
    }
});
// ---------------------------- Import avatar images -----------------------------

// Add any filtering logic if needed
const filteredMembers = computed(() => {
    return members.value;
});

const memberCount = computed(() => members.value.length);
</script>
<template>
    <PageHeading title="Group Chat" sub-title="Chats" />
    <div class="grid grid-cols-12 gap-x-space" x-data="groupChatComponent()" x-init="init()">
        <GroupSideBar :showGroupModel="showGroupModel" :filteredGroups="groups" :activeStatus="setActiveBar"
            @showChart="() => showChart()" :showChart="showChatWrapper" />

        <div class="col-span-12 overflow-hidden 2xl:col-span-6 card" id="chat-wrapper"
            v-show="windowWidth >= 1280 || showChatWrapper">
            <!-- messages -->
            <simplebar class="max-h-[calc(100vh_-_19rem)] min-h-[calc(100vh_-_19rem)] relative" data-simplebar>
                <div
                    class="sticky inset-x-0 top-0 z-50 flex items-center gap-3 border-b border-gray-200 card-body bg-white/30 dark:bg-dark-900/60 dark:border-dark-800 backdrop-blur-lg">
                    <div class="xl:hidden shrink-0">
                        <button class="btn btn-sub-gray btn-icon" @click="backToChatList">
                            <ChevronsLeft data-lucide="chevrons-left" class="size-5"></ChevronsLeft>
                        </button>
                    </div>
                    <div
                        class="relative flex items-center justify-center p-2 font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-11 shrink-0">
                        <img :src="groupImage" alt="Group Avatar" class="rounded-full" />
                    </div>
                    <div class="grow">
                        <h6>
                            <a href="#!">{{ groupName }}</a>
                        </h6>
                        <p class="text-gray-500 dark:text-dark-500">Active</p>
                    </div>
                    <button title="phone call btn" class="btn btn-active-gray btn-icon shrink-0">
                        <Phone data-lucide="phone" class="size-5"></Phone>
                    </button>
                    <button title="video call btn" class="btn btn-active-gray btn-icon shrink-0">
                        <Video data-lucide="video" class="size-5"></Video>
                    </button>
                </div>
                <div class="pb-0 card-body">
                    <div class="flex flex-col justify-end min-h-[calc(100vh_-_24rem)] gap-5" id="groupchat-messages">
                        <template v-for="(message, index) in messages" :key="index">
                            <div class="flex items-end max-w-xl gap-3 ltr:[&.right]:ml-auto rtl:[&.right]:mr-auto group/chat"
                                :class="{ 'right': message.type === 'sent' }">
                                <div
                                    class="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 dark:bg-dark-850 rounded-full size-8 shrink-0 group-[&.right]/chat:order-2">
                                    <img :src="message.user.avatar" alt="" class="rounded-full">
                                    <span
                                        class="absolute bottom-0 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full ltr:right-0 rtl:left-0 size-2.5"></span>
                                </div>
                                <div class="grow *:mb-3">
                                    <div class="flex items-end gap-2 last:mb-0" x-text="message.timestamp">
                                        <div class="grow">
                                            <p class="ltr:group-[&.right]/chat:text-right rtl:group-[&.right]/chat:text-left text-gray-500 dark:text-dark-500 mb-1 text-xs"
                                                x-text="message.timestamp">{{
                                                    message.timestamp }}</p>
                                            <div
                                                class="px-4 py-2.5 last:mb-0 bg-gray-100 rounded-xl dark:bg-dark-850 ltr:rounded-bl-none rtl:rounded-br-none group-[&.right]/chat:order-1 ltr:group-[&.right]/chat:rounded-bl-lg rtl:group-[&.right]/chat:rounded-br-lg ltr:group-[&.right]/chat:rounded-br-none rtl:group-[&.right]/chat:rounded-bl-none">
                                                {{ message.message }}
                                            </div>
                                        </div>
                                        <div x-data="dropdownBehavior()" class="dropdown shrink-0">
                                            <button @click="showReplayMenuButton(index)" title="dropdown btn"
                                                type="button" class="flex items-center text-gray-500">
                                                <i class="ri-more-2-fill"></i>
                                            </button>
                                            <div v-show="isOpen === index" @click.outside="closeDropdown"
                                                class="p-2 dropdown-menu setPosition"
                                                :class="messages.length - 1 == index ? 'lastElement' : ''">
                                                <ul>
                                                    <li>
                                                        <a href="#!"
                                                            class="flex items-center px-4 py-1.5 text-gray-500 hover:text-primary-500">
                                                            <i class="align-middle ltr:mr-2 rtl:ml-2 ri-reply-line"></i>
                                                            <span>Reply</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!" @click="confirmDelete(message)"
                                                            class="flex items-center px-4 py-1.5 text-gray-500 hover:text-red-500">
                                                            <i
                                                                class="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </simplebar>
            <!-- send messsge div -->
            <div class="card-body">
                <div class="flex items-center gap-2 p-2 border border-gray-200 rounded-md dark:border-dark-800">
                    <button title="voice audio" class="btn btn-active-gray btn-icon shrink-0">
                        <AudioLines data-lucide="audio-lines" class="size-5"></AudioLines>
                    </button>
                    <input type="text" class="border-0 form-input grow" placeholder="Type something ..."
                        v-model="message" @keydown.enter.prevent="sendMessage" />
                    <button title="submit" type="submit" @click="sendMessage"
                        class="btn btn-active-primary btn-icon shrink-0">
                        <Send data-lucide="send" class="size-5"></Send>
                    </button>
                    <div class="shrink-0">
                        <label for="sendImages" class="btn btn-active-gray btn-icon">
                            <Image data-lucide="image" class="size-5"></Image>
                        </label>
                        <input title="Images upload" type="file" id="sendImages" class="hidden"
                            @change="handleFileUpload" />
                    </div>
                    <button title="emoji" class="text-lg btn btn-active-gray btn-icon shrink-0">
                        😊
                    </button>
                    <div class="dropdown" @keydown.escape.prevent.stop="closeDropdown" ref="dropdownRef">
                        <button ref="buttonRef" @click="toggleDropdown" title="dropdown btn"
                            :aria-expanded="openDropdown" type="button"
                            class="text-lg btn btn-active-gray btn-icon shrink-0">
                            <Ellipsis data-lucide="ellipsis" class="size-5"></Ellipsis>
                        </button>
                        <div v-show="openDropdown" class="!fixed p-2 dropdown-menu" dropdown-position="right"
                            @click.outside="closeDropdown">
                            <ul>
                                <li>
                                    <a href="#!" class="dropdown-item" @click.prevent="clearChat">
                                        <i class="align-middle ltr:mr-2 rtl:ml-2 ri-chat-4-line">
                                        </i>
                                        <span>Clear Chat</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" data-modal-target="deleteModal" class="dropdown-item"
                                        @click.prevent="openDeleteModal">
                                        <i class="align-middle ltr:mr-2 rtl:ml-2 ri-delete-bin-line"></i>
                                        <span>Delete</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-12 2xl:col-span-3 card">
            <div class="card-body">
                <div class="text-center">
                    <div
                        class="relative flex items-center justify-center p-4 font-semibold transition duration-200 ease-linear bg-green-500/10 rounded-full size-24 mx-auto shrink-0 group-[&.unread]/item:bg-white dark:group-[&.unread]/item:bg-dark-900">
                        <img :src="groupImage" alt="" class="rounded-full">
                    </div>
                    <h6 class="mt-3" x-text="groupName">{{ groupName }}</h6>
                    <p class="text-gray-500 dark:text-dark-500">Create by admin</p>
                </div>
                <div>
                    <div class="flex items-center mt-5 mb-1">
                        <h6 class="grow">Member (<span>{{ memberCount }}</span>)</h6>
                        <a href="#!" class="link link-primary">
                            <Plus data-lucide="plus" class="inline-block size-4"></Plus> Add
                        </a>
                    </div>

                    <simplebar class="px-5 -mx-5 max-h-72" data-simplebar>
                        <div class="space-y-4">
                            <template v-for="member in filteredMembers" :key="member.id">
                                <a href="#!" class="flex items-center gap-2">
                                    <div
                                        class="flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 shrink-0 size-6">
                                        <img :src="member.avatar" alt="" class="rounded-full" />
                                    </div>
                                    <h6 class="grow">{{ member.name }}</h6>
                                    <p class="text-gray-500 dark:text-dark-500">{{ member.role }}</p>
                                </a>
                            </template>
                        </div>
                    </simplebar>

                    <div class="mt-5">
                        <h6 class="mb-2">Attachments</h6>
                        <simplebar class="px-5 -mx-5 max-h-36" data-simplebar>
                            <div class="space-y-3">
                                <div v-for="file in attachments" :key="file.name"
                                    class="flex items-center gap-2 p-2 transition duration-300 ease-linear border border-gray-200 border-dashed rounded-md dark:border-dark-800 hover:border-gray-300 dark:hover:border-dark-700 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850">
                                    <div
                                        class="flex items-center justify-center font-semibold text-gray-500 transition duration-200 ease-linear bg-gray-100 rounded-full shrink-0 size-10 dark:bg-dark-850">
                                        <component :is="file.icon" class="size-4"></component>
                                    </div>
                                    <div class="grow">
                                        <h6>{{ file.name }}</h6>
                                        <p class="text-sm text-gray-500 dark:text-dark-500">{{ file.size }}</p>
                                    </div>
                                    <div class="shrink-0">
                                        <Download data-lucide="download"
                                            class="text-gray-500 dark:text-dark-500 size-5 fill-gray-200 dark:fill-dark-850">
                                        </Download>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                    </div>
                </div>
            </div>
        </div>

        <!--Add Group Modals-->
        <div v-if="showGroupAddModal" id="createGroupModal" class="modal">
            <div class="modal-wrap modal-center">
                <div class="modal-header">
                    <h6>New Group</h6>
                    <button class="link link-red">
                        <X data-lucide="x" class="size-5" @click="closeGroupModal"></X>
                    </button>
                </div>
                <div class="modal-content">
                    <form @submit.prevent="createGroup">
                        <div class="mb-5">
                            <label for="basicInput1" class="form-label">Group Name</label>
                            <input type="text" id="basicInput1" v-model="insertGroupName" class="form-input" required
                                placeholder="Enter group title" />
                        </div>
                        <div class="mb-5">
                            <label for="addMemberSelect" class="form-label">Add Contacts</label>
                                <select name="" id=""  class="form-select">
                                    <option value="volvo">Select options</option>
                                    <template v-for="(option, index) in selectOptions" :key="index">
                                        <option :value="option.value">{{ option.label }}</option>
                                    </template>
                                </select>

                        </div>
                        <div class="flex items-center justify-end gap-2">
                            <button type="button" class="btn btn-sub-gray" @click="closeGroupModal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Create Group</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="backdrop-overlay backdrop-blur-xs" @click="closeGroupModal"></div>
        </div>

    </div>
</template>

<style scoped>
.setPosition {
    left: -145px;
}

.lastElement {
    top: -90px;
}
</style>