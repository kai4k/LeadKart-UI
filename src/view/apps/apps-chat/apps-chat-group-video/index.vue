<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import PageHeading from '@/components/common/PageHeading.vue';
import simplebar from 'simplebar-vue';
import { users, pins, videoChat } from './video-data'
import { Captions, CaptionsOff, CirclePlus, Mic, PhoneMissed, Pin, SendHorizonal, Video, Volume1, Volume2 } from 'lucide-vue-next';
import user17 from "@/assets/images/avatar/user-17.png";
const showCaptions = ref(true);
const volume = ref(50);

// Methods to adjust volume
const decreaseVolume = () => {
    volume.value = Math.max(0, volume.value - 10);
};
const increaseVolume = () => {
    volume.value = Math.min(100, volume.value + 10);
};
// Toggle captions visibility
const toggleCaptions = () => {
    showCaptions.value = !showCaptions.value;
};
const currentTime = ref(0);
const formattedTime = ref('00:00:00');
const newPinText = ref('');

const startTimer = () => {
    setInterval(() => {
        currentTime.value++;
        formattedTime.value = formatTime(currentTime.value);
    }, 1000);
};

const formatTime = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
};
const addPin = () => {
    if (newPinText.value.trim() === '') return;
    pins.value.push({ time: formattedTime.value, text: newPinText.value });
    newPinText.value = '';
};
interface Message {
    avatar: string;
    name: string;
    message: string;
    time: string;
}
const messages = ref<Message[]>([]);
const newMessage = ref<string>('');
const init = () => {
    messages.value = videoChat;
    scrollToBottom();
};

const sendMessage = () => {
    if (newMessage.value.trim() === '') return;
    messages.value.push({
        avatar: user17, // Replace with user's avatar path
        name: 'Sophia Mia', // Replace with user's name
        message: newMessage.value,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    newMessage.value = '';
    scrollToBottom();
};

const scrollToBottom = () => {
    nextTick(() => {
        const chat = document.getElementById('chat-messages');
        if (chat) {
            const lastMessage = chat.lastElementChild;
            lastMessage?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    });
};

// Initialize the chat when the component is mounted
onMounted(init);
// Start timer when the component is mounted
onMounted(() => {
    startTimer();
});
</script>

<template>
    <PageHeading title="Group Video" sub-title="Chats" />
    <simplebar data-simplebar>
        <div class="flex items-center gap-x-space">
            <a v-for="user in users" :key="user.id" href="#!" class="relative block w-64 overflow-hidden card shrink-0">
                <div class="absolute flex items-center gap-2 bottom-3 left-3">
                    <div
                        class="rounded-full btn bg-gray-900/40 [&.active]:bg-red-500 text-white flex items-center justify-center p-0 size-9">
                        <Mic data-lucide="mic" class="size-4"></Mic>
                    </div>
                    <div class="px-3 py-2 text-xs leading-none text-white rounded-full bg-gray-900/40">
                        {{ user.name }}
                    </div>
                </div>
                <img :src="user.image" :alt="user.name" />
            </a>
        </div>
    </simplebar>
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 overflow-hidden xl:col-span-8 card">
            <div class="relative">
                <div class="absolute flex items-center gap-3 top-5 left-4">
                    <button title="mic btn"
                        class="rounded-full btn bg-gray-900/30 [&.active]:bg-red-500 text-white btn-icon">
                        <Mic data-lucide="mic" class="size-4"></Mic>
                    </button>
                    <div class="px-4 py-3 leading-none text-white rounded-full bg-gray-900/30">
                        John Powers
                    </div>
                </div>
                <img src="@/assets/images/chat/video-1.png" alt="" class="object-cover w-full" />
                <div v-if="showCaptions"
                    class="absolute max-w-2xl px-4 py-2.5 mx-auto font-medium leading-none transform -translate-x-1/2 rounded-full bg-gray-900/15 left-1/2 bottom-5">
                    Hello, Shopia Mia
                </div>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center justify-between gap-5">
                    <div class="inline-flex items-center gap-2 px-3 bg-gray-100 dark:bg-dark-850 btn shrink-0">
                        <button title="volume - btn" @click="decreaseVolume"
                            class="p-1 bg-white rounded dark:bg-dark-900">
                            <Volume1 data-lucide="volume-1" class="text-gray-500 size-4 dark:text-dark-500"></Volume1>
                        </button>
                        <div class="w-24 bg-white dark:bg-dark-900 progress-bar progress-1">
                            <div :style="{ width: volume + '%' }"
                                class="h-2 text-white rounded progress-bar-wrap bg-primary-500"></div>
                        </div>
                        <button title="volume + btn" @click="increaseVolume"
                            class="p-1 bg-white rounded dark:bg-dark-900">
                            <Volume2 data-lucide="volume-2" class="text-gray-500 dark:text-dark-500 size-4"></Volume2>
                        </button>
                    </div>
                    <div class="flex items-center gap-2">
                        <button title="mic btn" class="rounded-full btn btn-sub-gray btn-icon">
                            <Mic data-lucide="mic" class="size-4"></Mic>
                        </button>
                        <button title="video btn" class="rounded-full btn btn-sub-gray btn-icon">
                            <Video data-lucide="video" class="size-4"></Video>
                        </button>
                        <button title="captions btn" class="rounded-full btn btn-sub-gray btn-icon"
                            @click="toggleCaptions">
                            <Captions v-if="showCaptions" data-lucide="captions" class="size-4"></Captions>
                            <CaptionsOff v-else data-lucide="captions-off" class="size-4"></CaptionsOff>
                        </button>
                        <button title="added btn" class="rounded-full btn btn-sub-gray btn-icon">
                            <CirclePlus data-lucide="circle-plus" class="size-4"></CirclePlus>
                        </button>
                    </div>
                    <button title="leave call" class="btn btn-red">
                        <PhoneMissed data-lucide="phone-missed" class="inline-block mr-1 size-4"></PhoneMissed> Leave
                        Call
                    </button>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4">
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Key Moments</h6>
                </div>
                <div class="card-body">
                    <simplebar class="max-h-28 -mx-space px-space" data-simplebar>
                        <div class="space-y-2">
                            <template v-for="pin in pins" :key="pin.time">
                                <a href="#!" title="text pin"
                                    class="flex items-center gap-3 text-gray-500 dark:text-dark-500">
                                    <p class="w-28">{{ pin.time }}</p>
                                    <p>{{ pin.text }}</p>
                                </a>
                            </template>
                        </div>
                    </simplebar>
                    <div class="flex items-center gap-2 mt-5">
                        <p class="font-medium text-green-500 shrink-0">{{ formattedTime }}</p>
                        <label for="newPinText" class="hidden">newPinText</label>
                        <input type="text" class="form-input" id="newPinText" v-model="newPinText"
                            @keydown.enter="addPin" />
                        <button @click="addPin" title="add pin btn" class="btn btn-sub-red btn-icon shrink-0">
                            <Pin data-lucide="pin" class="size-4"></Pin>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h6 class="card-title">Group Chat</h6>
                </div>
                <div class="card-body">
                    <simplebar class="max-h-64 -mx-space px-space" data-simplebar ref="chatContainer">
                        <div class="space-y-2" id="chat-messages">
                            <template v-for="(message, index) in messages" :key="index">
                                <div class="flex gap-2">
                                    <div
                                        class="relative flex items-center justify-center font-semibold transition duration-200 ease-linear bg-gray-100 rounded-full dark:bg-dark-850 size-10 shrink-0">
                                        <img :src="message.avatar" alt="" class="rounded-full">
                                    </div>
                                    <div class="grow">
                                        <h6 class="mb-1">{{ message.name }}</h6>
                                        <p class="text-gray-500 dark:text-dark-500">{{ message.message }}</p>
                                    </div>
                                    <div class="self-end ml-3 text-gray-500 dark:text-dark-500 shrink-0">
                                        {{ message.time }}
                                    </div>
                                </div>
                            </template>
                        </div>
                    </simplebar>
                </div>
                <div class="flex items-center gap-2 pt-0 card-body">
                    <label for="sendMessage" class="hidden">sendMessage</label>
                    <input type="text" id="sendMessage" class="form-input" placeholder="Type something ..."
                        v-model="newMessage" @keydown.enter="sendMessage" />
                    <button title="send btn" class="btn btn-primary btn-icon shrink-0" @click="sendMessage">
                        <SendHorizonal data-lucide="send-horizontal" class="size-4"></SendHorizonal>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
