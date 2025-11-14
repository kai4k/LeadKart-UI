<script setup lang="ts">
import simplebar from 'simplebar-vue';
import PageHeading from '@/components/common/PageHeading.vue';
import SideBar from './SideBar.vue';
import recentMenuList from '@/view/dashboards/recent-menu-list.vue';
import CallingPage from '../../apps-crm/deal/CallingPage.vue';
import { displayChatlist, messages, contacts } from './chart-data';
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { AudioLines, ChevronsLeft, Ellipsis, Image, MicOff, Phone, PhoneMissed, Search, Send, Video, VideoOff, X } from 'lucide-vue-next';
import type { ChatType, ContactsType } from './chart-data';

import user17 from "@/assets/images/avatar/user-17.png";
import toCall from '@/assets/images/chat/video-1.png';
import fromCall from '@/assets/images/chat/video-2.png'
import { RiDeleteBinLine, RiReplyLine } from 'vue-remix-icons';
import TableDataNotFount from '../../app-ecommerce/Orders/list-view/TableDataNotFount.vue';
// --------------------------------------------

// Define reactive variables
const searchChat = ref('');
const showAddChatModal = ref(false);
const activeChat = ref(0)
const chatAvatar = ref(new URL('@/assets/images/avatar/user-13.png', import.meta.url).href);
const avatarText = ref<String>(''); // Placeholder for avatar text
const chatName = ref<String>('Dawn Teague');
// Reactive states
const showChatWrapper = ref(false);
const windowWidth = ref(window.innerWidth);


// Update windowWidth on resize
const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};
// Lifecycle hooks
onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});

const filteredChatlist = computed(() => {
    const searchTerm = searchChat.value.toLowerCase();
    return displayChatlist.value.filter(item => {
        return (
            item.name.toLowerCase().includes(searchTerm) ||
            (item.lastMessage && item.lastMessage.toLowerCase().includes(searchTerm))
        );
    });
});

const setActiveChat = (index: number, data: ChatType) => {
    activeChat.value = index
    chatName.value = data.name;
    chatAvatar.value = data.avatar
    avatarText.value = data.avatarText || ''
    // Show the chat-wrapper and hide the simplebar when the width is less than 1280
    if (windowWidth.value < 1280) {
        showChatWrapper.value = true;
    }
};
const isActiveChat = (index: number, data: object): boolean => {
    if (activeChat.value == index) {
        return true
    }
    return false; // Replace with actual condition
};

const backToChatList = () => {
    if (windowWidth.value < 1280) {
        showChatWrapper.value = false;
    }
};

// Message reply functionality
const message = ref('');
const isDropdownOpen = ref(false);
// Function to send message
const chatContainer = ref<InstanceType<typeof simplebar> | null>(null);
const setAutoScroll = () => {
    if (chatContainer.value) {
        const scrollableElement = chatContainer.value.$el.querySelector(
            ".simplebar-content-wrapper"
        );
        if (scrollableElement) {
            scrollableElement.scrollTop = scrollableElement.scrollHeight;
        }
    }
};
const sendMessage = () => {
    const trimmedMessage = message.value.trim();
    if (trimmedMessage) {
        // Add your logic to send the message
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // Push new message object into messages array
        messages.value.push({
            sender: "You",
            time: currentTime,
            text: trimmedMessage,
            avatar: user17, // Update with actual path
            avatarText: "U", // Added avatar text
            type: "sent",
        });

        message.value = ''; // Clear the input after sending
        nextTick(setAutoScroll)
    }
};

// Function to handle file upload
const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        // Add your logic to handle file upload
    }
};

// Function to send emoji
const sendEmoji = () => {
};

// Dropdown behavior
const toggleDropdownMessage = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdownMessage = () => {
    isDropdownOpen.value = false;
};

// Additional functions
const clearChat = () => {
};

const deleteMessages = () => {
};

// Dummy function for audio
const toggleAudio = () => {
};

// -------------------Add new Cart--------------------
const searchQuery = ref('');
// Computed property to filter contacts based on search query
const filteredContacts = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return contacts.value.filter(contact =>
        contact.name.toLowerCase().includes(query)
    );
});

// Functions to handle modal actions
const openChat = (contact: ContactsType) => {
    // Implement chat opening logic
    displayChatlist.value.unshift({
        ...contact,
        status: 'online',
        lastMessage: "new chat",
        timestamp: 'just now',
        unread: 0
    })
    const findIndex = contacts.value.findIndex(data => data.id == contact.id)
    contacts.value.splice(findIndex, 1)
};


const closeModal = () => {
    showVideoCallModal.value = false;
    showAddChatModal.value = false;
    callModalOpen.value = false
};

// --------------- video & call model ---------------
const showVideoCallModal = ref(false); // Control modal visibility, set to true to show the modal
const mainImage = ref(toCall); // Replace with the actual path
const swapVideoSrc = ref(fromCall); // Replace with the actual path
const callModalOpen = ref(false); // Control modal visibility
const isCalling = ref(true); // Indicate if the call is active
// Logic to swap the main video image with another source
const swapVideo = () => {
    const temp = mainImage.value;
    mainImage.value = swapVideoSrc.value;
    swapVideoSrc.value = temp;
};
const openCallModal = () => {
    callModalOpen.value = !callModalOpen.value
    setTimeout(() => {
        isCalling.value = false
    }, 3000);

};
const openVideoCallModal = () => {
    showVideoCallModal.value = !showVideoCallModal.value
};
// Function to toggle microphone state
const toggleMic = () => {
};
// Function to toggle video state
const toggleVideo = () => {
};

// Function to stop the call
const stopCall = (state: boolean) => {
    callModalOpen.value = state;

};

const messageMenuList = [
    {
        name: 'Reply',
        icon: RiReplyLine,
    },
    {
        name: 'Delete',
        icon: RiDeleteBinLine,
    },
]

const deleteMessage = (index: number) => {
    messages.value.splice(index, 1); // Remove the message at the specified index
    // alert('Message deleted');
};

const handleMenuAction = (option: any, messageIndex: number) => {
    if (option.name === 'Delete') {
        // Handle delete action
        deleteMessage(messageIndex);
    } else if (option.name === 'Reply') {
        // Handle reply action
        // alert('Reply action clicked'); // Replace with actual reply functionality
    }
};

onMounted(() => {
    setAutoScroll()
})
</script>
<template>
    <PageHeading title="Default Chat" sub-title="Chats" />
    <div class="grid grid-cols-12 gap-x-space" x-data="contactListComponent">
        <SideBar />
        <div class="col-span-12 xl:col-span-4 2xl:col-span-3 card" id="chat-list">
            <div class="card-body">
                <div class="relative group/form">
                    <input type="text" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." v-model="searchChat" />
                    <button title="search btn" class="absolute inset-y-0 flex items-center text-gray-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                        <Search data-lucide="search" class="size-4"></Search>
                    </button>
                </div>
                <div class="py-4">
                    <button type="button" @click="showAddChatModal = true" data-modal-target="addNewChatModals" class="w-full btn btn-primary">
                        Start New Chat
                    </button>
                </div>
                <simplebar v-show="windowWidth >= 1280 || !showChatWrapper" class="max-h-[calc(100vh_-_22.5rem)] -mx-space" data-simplebar>
                    <ul class="space-y-3">
                        <template v-if="filteredChatlist.length > 0">
                            <template v-for="(item, index) in filteredChatlist" :key="item.name">
                                <li>
                                    <a href="#!" class="flex items-center gap-2 px-space py-2.5 hover:bg-gray-50 dark:hover:bg-dark-850 [&.active]:bg-primary-500/10 transition ease-linear duration-300 group/item unread" @click="setActiveChat(index, item)" :class="{ active: isActiveChat(index, item) }">
                                        <div class="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-10 shrink-0">
                                            <img :src="item.avatar" alt="" class="rounded-full" />
                                            <span v-if="!item.avatar" v-text="item.avatarText"></span>
                                            <span class="absolute bottom-0 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full ltr:right-0.5 rtl:left-0.5 size-2.5"></span>
                                        </div>
                                        <div class="overflow-hidden grow">
                                            <h6 class="mb-0.5" v-text="item.name"></h6>
                                            <p class="text-sm group-[&.unread]/item:font-medium truncate group-[&.unread]/item:text-gray-950 text-gray-500 dark:text-dark-500 dark:group-[&.unread]/item:text-gray-50 unread">
                                                {{ item.lastMessage }}</p>
                                        </div>
                                        <div class="ltr:text-right rtl:text-left shrink-0">
                                            <p class="mb-1 text-xs text-gray-500 dark:text-dark-500">
                                            </p>
                                            <span class="badge-sub-red badge-square size-5" v-if="item.unread > 0" v-text="item.unread"></span>
                                        </div>
                                    </a>
                                </li>
                            </template>
                        </template>
                        <template v-else>
                            <div class="flex justify-center">
                                <TableDataNotFount />
                            </div>
                        </template>
                    </ul>
                </simplebar>
            </div>
        </div>
        <div class="col-span-12 overflow-hidden xl:col-span-8 card" id="chat-wrapper" v-show="windowWidth >= 1280 || showChatWrapper">
            <simplebar class="max-h-[calc(100vh_-_19rem)] min-h-[calc(100vh_-_19rem)] relative chat-body" tabindex="1" ref="chatContainer">
                <div class="sticky inset-x-0 top-0 z-50 flex items-center gap-3 border-b border-gray-200 card-body bg-white/30 dark:bg-dark-900/90 dark:border-dark-800 backdrop-blur-lg">
                    <div class="xl:hidden shrink-0">
                        <button class="border border-red-500 btn btn-sub-gray btn-icon" title="back btn" @click="backToChatList">
                            <ChevronsLeft class="size-5"></ChevronsLeft>
                        </button>
                    </div>
                    <div class="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-10 shrink-0">
                        <img :src="chatAvatar" alt="" class="rounded-full" />
                        <span v-if="!chatAvatar" v-text="avatarText"></span>
                    </div>
                    <div class="grow">
                        <h6 class="mb-0.5">
                            <a href="#!" v-text="chatName"></a>
                        </h6>
                        <p class="text-gray-500 dark:text-dark-500">Last seen 2 hr</p>
                    </div>
                    <button title="call btn" class="btn btn-active-gray btn-icon shrink-0" @click="openCallModal">
                        <Phone data-lucide="phone" class="size-5"></Phone>
                    </button>
                    <button title="video call btn" class="btn btn-active-gray btn-icon shrink-0" @click="openVideoCallModal">
                        <Video data-lucide="video" class="size-5"></Video>
                    </button>
                </div>
                <div class="pb-0 card-body">
                    <div class="flex flex-col justify-end min-h-[calc(100vh_-_24rem)] gap-5" id="chat-messages">
                        <template v-for="(msg, index) in messages" :key="index">
                            <div class="messages flex items-end max-w-xl gap-3 ltr:[&.right]:ml-auto rtl:[&.right]:mr-auto group/chat" :class="msg.type === 'sent' ? 'right' : ''">
                                <div class="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 dark:bg-dark-850 rounded-full size-8 shrink-0 group-[&.right]/chat:order-2">
                                    <img v-if="msg.avatar" :src="msg.sender == 'You' ? msg.avatar : chatAvatar" alt="" class="rounded-full" />
                                    <span v-if="avatarText" class="" v-text="msg.sender !== 'You' ? avatarText : ''"></span>
                                    <span class="absolute bottom-0 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full ltr:right-0 rtl:left-0 size-2.5"></span>
                                </div>
                                <div class="grow *:mb-3">
                                    <div class="flex items-end gap-2 last:mb-0">
                                        <div class="grow">
                                            <p class="ltr:group-[&.right]/chat:text-right rtl:group-[&.right]/chat:text-left text-gray-500 dark:text-dark-500 mb-1 text-xs" v-text="msg.time">
                                            </p>
                                            <div class="px-4 py-2.5 last:mb-0 bg-gray-100 dark:bg-dark-850 rounded-xl ltr:rounded-bl-none rtl:rounded-br-none group-[&.right]/chat:order-1 ltr:group-[&.right]/chat:rounded-bl-lg rtl:group-[&.right]/chat:rounded-br-lg ltr:group-[&.right]/chat:rounded-br-none rtl:group-[&.right]/chat:rounded-bl-none" x-text="msg.time">
                                                <div v-html="msg.text"></div>
                                            </div>
                                        </div>
                                        <recentMenuList :title="Ellipsis" className="rotate-90 size-4" :showArrow="false" :arrayList="messageMenuList" :handleAction="(option: string) => handleMenuAction(option, index)" extraClass="chart-menu-position shadow-lg " />
                                    </div>
                                    <div v-if="msg.images" class="last:mb-0 ">
                                        <div class="grid grid-cols-12 gap-4">
                                            <template v-for="img in msg.images">
                                                <div class="col-span-3">
                                                    <a href="#!" title="Gallery Images"><img :src="img" alt="" class="rounded-md" /></a>
                                                </div>
                                            </template>
                                            <a href="#!" class="flex items-center justify-center col-span-3 p-3 bg-gray-100 rounded-md dark:bg-dark-850">
                                                <h6 v-text="msg.extraImagesCount"></h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </simplebar>
            <div class="card-body">
                <div class="flex items-center gap-2 p-2 border border-gray-200 rounded-md dark:border-dark-800">
                    <button class="btn btn-active-gray btn-icon shrink-0" @click="toggleAudio">
                        <AudioLines data-lucide="audio-lines" class="size-5"></AudioLines>
                    </button>
                    <input type="text" class="border-0 form-input grow" placeholder="Type something ..." v-model="message" @keydown.enter.prevent="sendMessage" />
                    <button type="submit" class="btn btn-active-primary btn-icon shrink-0" @click="sendMessage">
                        <Send data-lucide="send" class="size-5"></Send>
                    </button>
                    <div class="hidden shrink-0 md:flex">
                        <label for="sendImages" class="btn btn-active-gray btn-icon">
                            <Image data-lucide="image" class="size-5"></Image>
                        </label>
                        <input type="file" id="sendImages" class="hidden" @change="handleFileUpload" />
                    </div>
                    <button class="text-lg btn btn-active-gray btn-icon shrink-0" @click="sendEmoji">
                        😊
                    </button>
                    <div x-data="dropdownBehavior()" @keydown.escape.prevent.stop="closeDropdownMessage" class="relative dropdown">
                        <button type="button" class="text-lg btn btn-active-gray btn-icon shrink-0" @click="toggleDropdownMessage" :aria-expanded="isDropdownOpen">
                            <Ellipsis data-lucide="ellipsis" class="size-5"></Ellipsis>
                        </button>
                        <div v-if="isDropdownOpen" class="absolute z-10 p-2 dropdown-menu setPosition">
                            <ul>
                                <li>
                                    <a href="#!" class="dropdown-item" @click="clearChat">
                                        <i class="align-middle ltr:mr-2 rtl:ml-2 ri-chat-4-line"></i>
                                        <span>Clear Chat</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="dropdown-item" @click="deleteMessages">
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

        <!-- add newChat modal -->
        <div v-if="showAddChatModal" class="modal " id="addNewChatModals">
            <div class="modal-wrap modal-center">
                <div class="modal-header">
                    <h6>Add New Chat</h6>
                    <button @click="closeModal" class="link link-red">
                        <X data-lucide="x" class="size-5"></X>
                    </button>
                </div>
                <div class="modal-content">
                    <div class="relative mb-4 group/form">
                        <input type="text" v-model="searchQuery" class="ltr:pl-9 rtl:pr-9 form-input ltr:group-[&.right]/form:pr-9 rtl:group-[&.right]/form:pl-9 ltr:group-[&.right]/form:pl-4 rtl:group-[&.right]/form:pr-4" placeholder="Search for ..." />
                        <button class="absolute inset-y-0 flex items-center text-gray-500 dark:text-dark-500 ltr:left-3 rtl:right-3 ltr:group-[&.right]/form:right-3 rtl:group-[&.right]/form:left-3 ltr:group-[&.right]/form:left-auto rtl:group-[&.right]/form:right-auto focus:outline-none">
                            <Search data-lucide="search" class="size-4"></Search>
                        </button>
                    </div>
                    <simplebar class="max-h-72" data-simplebar>
                        <div class="space-y-4">
                            <template v-for="contact in filteredContacts" :key="contact.id">
                                <div class="flex items-center gap-2">
                                    <div class="flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 shrink-0 size-6">
                                        <img :src="contact.avatar" alt="" class="rounded-full" />
                                    </div>
                                    <h6 class="grow">{{ contact.name }}</h6>
                                    <a href="#!" class="btn-xs btn btn-sub-gray shrink-0" @click="openChat(contact)">
                                        Send <i class="align-middle ri-send-plane-2-line ltr:ml-1 rtl:mr-1"></i>
                                    </a>
                                </div>
                            </template>
                        </div>
                    </simplebar>
                    <template v-if="filteredContacts.length === 0">
                        <div class="text-center text-gray-500 dark:text-dark-500">
                            <i class="text-lg ri-search-2-line"></i>
                            <p class="mt-2">No contact available</p>
                        </div>
                    </template>
                </div>
            </div>
            <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal" id="backDropDiv"></div>
        </div>

        <!-- add Video call modal -->
        <div v-if="showVideoCallModal" class="modal" id="videoCallModal">
            <div class="modal-wrap modal-lg modal-center">
                <div class="modal-content">
                    <div class="relative overflow-hidden rounded-md">
                        <img :src="mainImage" alt="" class="main-image" />
                        <a href="#!" @click="swapVideo" class="absolute inline-block right-5 bottom-5">
                            <img :src="swapVideoSrc" alt="" class="h-24 rounded-md" />
                        </a>
                    </div>
                    <div class="flex items-center justify-center gap-2 pt-5">
                        <button class="btn btn-sub-gray btn-icon" @click="toggleMic">
                            <MicOff data-lucide="mic-off" class="size-5"></MicOff>
                        </button>
                        <button class="btn btn-red btn-icon" @click="closeModal">
                            <PhoneMissed data-lucide="phone-missed" class="size-5"></PhoneMissed>
                        </button>
                        <button class="btn btn-sub-gray btn-icon" @click="toggleVideo">
                            <VideoOff data-lucide="video-off" class="size-5"></VideoOff>
                        </button>
                    </div>
                </div>
            </div>
            <div class="backdrop-overlay backdrop-blur-xs" @click="closeModal" id="backDropDiv"></div>
        </div>

        <!-- Call modal -->
        <CallingPage :showModule="callModalOpen" :setModuleValue="stopCall" :callingTo="{ image: chatAvatar, patientName: chatName }" />
    </div>
</template>

<style scoped>
.setPosition {
    left: -150px !important;
}
</style>