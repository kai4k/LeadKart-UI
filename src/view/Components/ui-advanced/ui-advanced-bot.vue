<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { nextTick, onMounted, ref } from 'vue';
import bot from '@/assets/images/others/bot.png'
import user from '@/assets/images/avatar/user-2.png'
import simplebar from 'simplebar-vue';
import { RiSendPlane2Line } from 'vue-remix-icons';
onMounted(() => {
    messages.value.push({ from: 'bot', text: 'Hello! I am a Domiex chatbot. How can I assist you today?' });
    chatMessages.value.push({ from: 'bot', text: 'Hello! I am a Domiex chatbot. How can I assist you today?' });
    chatMessagesThree.value.push({ from: 'bot', text: 'Hello! I am a Domiex chatbot. How can I assist you today?' });
    liveBotMessages.value.push({ from: 'bot', text: 'Hello! I am a Domiex chatbot. How can I assist you today?' })
    scrollToBottom();
});
function scrollToBottom() {
    nextTick(() => {
        if (messageContainer.value) {
            messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
        }
    });
}

const messages = ref<{ from: string; text: string }[]>([]);
const userInput = ref('');
const botTyping = ref(false);
const messageContainer = ref<HTMLElement | null>(null);
const botImg = bot; // Update with actual bot image path
const userImg = user; // Update with actual user image path
const defaultResponses = [
    "I am good! How about you?",
    "Pretty well, how are you?",
    "Fine... how are you?",
    "Doing great, thanks for asking!",
    "I'm here to help, how can I assist you?"
];

function getRandomResponse() {
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
}

function updateChat(inputElement: HTMLInputElement) {
    const inputText = userInput.value.trim();
    if (inputText) {
        messages.value.push({ from: 'user', text: inputText });
        userInput.value = ''; // Clear the input

        // Simulate bot response
        botTyping.value = true;
        setTimeout(() => {
            botTyping.value = false;
            // messages.value.push({ from: 'bot', text: ` ${inputText}` });
            if (inputText.toLowerCase().includes("how are you")) {
                messages.value.push({ from: 'bot', text: getRandomResponse() });
            } else {
                messages.value.push({ from: 'bot', text: ` ${inputText}` }); // Default reply for other messages
            }
            scrollToBottom();
        }, 1000); // Simulate delay for bot response
    }
}

// -----------------------------------------
const chatMessages = ref<{ from: string; text: string }[]>([]);
const currentInput = ref('');
const isBotTyping = ref(false);

const botAvatar = bot; // Update with actual bot image path
const userAvatar = user; // Update with actual user image path

function sendChat(inputElement: HTMLInputElement) {
    const messageText = currentInput.value.trim();
    if (messageText) {
        chatMessages.value.push({ from: 'user', text: messageText });
        currentInput.value = ''; // Clear the input
        // Simulate bot response
        isBotTyping.value = true;
        setTimeout(() => {
            isBotTyping.value = false;
            // chatMessages.value.push({ from: 'bot', text: ` ${messageText}` });
            if (messageText.toLowerCase().includes("how are you")) {
                chatMessages.value.push({ from: 'bot', text: getRandomResponse() });
            } else {
                chatMessages.value.push({ from: 'bot', text: ` ${messageText}` }); // Default reply for other messages
            }
        }, 1000); // Simulate delay for bot response
    }
}

// --------------------------------------------

const chatMessagesThree = ref<{ from: string; text: string }[]>([]);
const currentMessage = ref('');
const isBotTypingThree = ref(false);

const botImage = bot; // Update with actual bot image path
const userImage = user; // Update with actual user image path

function sendMessage(inputElement: HTMLInputElement) {
    const messageText = currentMessage.value.trim();
    if (messageText) {
        chatMessagesThree.value.push({ from: 'user', text: messageText });
        currentMessage.value = ''; // Clear the input
        // Simulate bot response
        isBotTypingThree.value = true;
        setTimeout(() => {
            isBotTypingThree.value = false;
            // chatMessagesThree.value.push({ from: 'bot', text: ` ${messageText}` });
            if (messageText.toLowerCase().includes("how are you")) {
                chatMessagesThree.value.push({ from: 'bot', text: getRandomResponse() });
            } else {
                chatMessagesThree.value.push({ from: 'bot', text: ` ${messageText}` }); // Default reply for other messages
            }
        }, 1000); // Simulate delay for bot response
    }
}

// -------------------------------
const liveBotMessages = ref<{ from: string; text: string }[]>([]);
const liveBotUserInput = ref('');
const liveBotBotTyping = ref(false);
const liveBotShowChatbox = ref(false);

// const liveBotBotImg = 'path/to/bot/image'; // Update with actual bot image path
// const liveBotUserImg = 'path/to/user/image'; // Update with actual user image path

function liveBotUpdateChat(inputElement: HTMLInputElement) {
    const inputText = liveBotUserInput.value.trim();
    if (inputText) {
        liveBotMessages.value.push({ from: 'user', text: inputText });
        liveBotUserInput.value = ''; // Clear the input

        // Simulate bot response
        liveBotBotTyping.value = true;
        setTimeout(() => {
            liveBotBotTyping.value = false;

            if (inputText.toLowerCase().includes("how are you")) {
                liveBotMessages.value.push({ from: 'bot', text: getRandomResponse() });
            } else {
                liveBotMessages.value.push({ from: 'bot', text: `${inputText}` });
            }
        }, 1000); // Simulate delay for bot response
    }
}

</script>
<template>
    <pageHeading title="Bot" sub-title="UI Advanced" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Default ChatBot</h6>
            </div>
            <div class="grid items-center grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 card-body">
                <div>
                    <div
                        class="flex flex-col rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
                        <div class="p-4 text-white bg-gradient-to-tr from-primary-500 to-purple-500 rounded-t-md">
                            <div>
                                <h6 class="mb-1 text-16">ChatBot</h6>
                                <p class="text-xs text-white/75">Online</p>
                            </div>
                        </div>
                        <simplebar class="p-4 h-80" data-simplebar>
                            <div id="messages" class="flex flex-col gap-y-4">
                                <div v-for="(message, key) in messages" :key="key">
                                    <div class="flex items-end" :class="message.from === 'bot' ? '' : 'justify-end'">
                                        <div class="flex flex-col max-w-sm space-y-2 text-sm"
                                            :class="message.from === 'bot' ? 'order-2 items-start rtl:mr-2 ltr:ml-2' : 'order-1 items-end ltr:mr-2 rtl:ml-2'">
                                            <div>
                                                <span class="inline-block px-3 py-2 rounded-md"
                                                    :class="message.from === 'bot' ? 'ltr:rounded-bl-none rtl:rounded-br-none bg-gray-100 dark:bg-dark-850' : 'ltr:rounded-br-none rtl:rounded-bl-none bg-primary-500 text-white'"
                                                    v-html="message.text"></span>
                                            </div>
                                        </div>
                                        <img v-if="message.from === 'bot'" :src="botImg" alt=""
                                            class="order-1 rounded-full size-6" />
                                        <img v-if="message.from !== 'bot'" :src="userImg" alt=""
                                            class="order-2 rounded-full size-6" />
                                    </div>
                                </div>
                                <div v-if="botTyping">
                                    <div class="flex items-end">
                                        <div class="flex flex-col items-start order-2 mx-2 space-y-2 text-sm">
                                            <div class="flex items-end">
                                                <img :src="botImg" alt="" class="rounded-full size-6" />
                                                <div class="flex items-center justify-center space-x-1">
                                                    <span class="sr-only">Loading...</span>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]">
                                                    </div>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]">
                                                    </div>
                                                    <div class="rounded-full bg-primary-500 size-2 animate-bounce">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                        <div class="p-4">
                            <div class="relative flex">
                                <input type="text" placeholder="Say something..." autocomplete="off" autofocus
                                    @keydown.enter="updateChat($refs.input as HTMLInputElement)"
                                    class="rounded-full ltr:pr-10 rtl:pl-10 form-input" v-model="userInput"
                                    ref="input" />
                                <div class="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
                                    <button type="button"
                                        class="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-full size-8 bg-primary-500 hover:bg-primary-600 focus:outline-none"
                                        @click.prevent="updateChat($refs.input as HTMLInputElement)">
                                        <RiSendPlane2Line class="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class="flex flex-col rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
                        <div class="p-4 text-white bg-gradient-to-br from-green-500 to-sky-500 rounded-t-md">
                            <div>
                                <h6 class="mb-1 text-16">ChatBot</h6>
                                <p class="text-xs text-white/75">Online</p>
                            </div>
                        </div>
                        <simplebar class="p-4 h-80" data-simplebar>
                            <div id="chatMessages" class="flex flex-col gap-y-4">
                                <div v-for="(chatMessage, index) in chatMessages" :key="index">
                                    <div class="flex items-end"
                                        :class="chatMessage.from === 'bot' ? '' : 'justify-end'">
                                        <div class="flex flex-col max-w-sm space-y-2 text-sm"
                                            :class="chatMessage.from === 'bot' ? 'order-2 items-start rtl:mr-2 ltr:ml-2' : 'order-1 items-end mr-2'">
                                            <div>
                                                <span class="inline-block px-3 py-2 rounded-md"
                                                    :class="chatMessage.from === 'bot' ? 'ltr:rounded-bl-none rtl:rounded-br-none bg-gray-100 dark:bg-dark-850' : 'ltr:rounded-br-none rtl:rounded-bl-none bg-primary-500 text-white'"
                                                    v-html="chatMessage.text"></span>
                                            </div>
                                        </div>
                                        <img v-if="chatMessage.from === 'bot'" :src="botAvatar" alt=""
                                            class="order-1 rounded-full size-6" />
                                        <img v-if="chatMessage.from !== 'bot'" :src="userAvatar" alt=""
                                            class="order-2 rounded-full size-6" />
                                    </div>
                                </div>
                                <div v-if="isBotTyping">
                                    <div class="flex items-end">
                                        <div class="flex flex-col items-start order-2 mx-2 space-y-2 text-sm">
                                            <div class="flex items-end">
                                                <img :src="botAvatar" alt="" class="rounded-full size-6" />
                                                <div class="flex items-center justify-center space-x-1">
                                                    <span class="sr-only">Loading...</span>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]">
                                                    </div>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]">
                                                    </div>
                                                    <div class="rounded-full bg-primary-500 size-2 animate-bounce">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                        <div class="p-4">
                            <div class="relative flex">
                                <input type="text" placeholder="Say something..." autocomplete="off" autofocus
                                    @keydown.enter="sendChat($refs.chatInput as HTMLInputElement)"
                                    class="rounded-full form-input ltr:pr-10 rtl:pl-10" v-model="currentInput"
                                    ref="chatInput" />
                                <div class="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
                                    <button type="button"
                                        class="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-full size-8 bg-primary-500 hover:bg-primary-600 focus:outline-none"
                                        @click.prevent="sendChat($refs.chatInput as HTMLInputElement)">
                                        <RiSendPlane2Line class="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        class="flex flex-col bg-white rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
                        <div
                            class="p-4 bg-gradient-to-br from-primary-500/20 via-green-500/20 to-purple-500/20 rounded-t-md">
                            <div>
                                <h6 class="mb-1 text-16">ChatBot</h6>
                                <p class="text-xs text-gray-500 dark:text-dark-500">Online</p>
                            </div>
                        </div>
                        <simplebar class="p-4 h-80" data-simplebar>
                            <div id="chatMessages" class="flex flex-col gap-y-4">
                                <div v-for="(chatMessage, index) in chatMessagesThree" :key="index">
                                    <div class="flex items-end"
                                        :class="chatMessage.from === 'bot' ? '' : 'justify-end'">
                                        <div class="flex flex-col max-w-sm space-y-2 text-sm"
                                            :class="chatMessage.from === 'bot' ? 'order-2 items-start rtl:mr-2 ltr:ml-2' : 'order-1 items-end mr-2'">
                                            <div>
                                                <span class="inline-block px-3 py-2 rounded-md"
                                                    :class="chatMessage.from === 'bot' ? 'ltr:rounded-bl-none rtl:rounded-br-none bg-gray-100 dark:bg-dark-850' : 'ltr:rounded-br-none rtl:rounded-bl-none bg-primary-500 text-white'"
                                                    v-html="chatMessage.text"></span>
                                            </div>
                                        </div>
                                        <img v-if="chatMessage.from === 'bot'" :src="botImage" alt=""
                                            class="order-1 rounded-full size-6" />
                                        <img v-if="chatMessage.from !== 'bot'" :src="userImage" alt=""
                                            class="order-2 rounded-full size-6" />
                                    </div>
                                </div>
                                <div v-if="isBotTypingThree">
                                    <div class="flex items-end">
                                        <div class="flex flex-col items-start order-2 mx-2 space-y-2 text-sm">
                                            <div class="flex items-end">
                                                <img :src="botImage" alt="" class="rounded-full size-6" />
                                                <div class="flex items-center justify-center space-x-1">
                                                    <span class="sr-only">Loading...</span>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]">
                                                    </div>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]">
                                                    </div>
                                                    <div class="rounded-full bg-primary-500 size-2 animate-bounce">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                        <div class="p-4">
                            <div class="relative flex">
                                <input type="text" placeholder="Say something..." autocomplete="off" autofocus
                                    @keydown.enter="sendMessage($refs.chatInput as HTMLInputElement)"
                                    class="rounded-full form-input ltr:pr-10 rtl:pl-10" v-model="currentMessage"
                                    ref="chatInput" />
                                <div class="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
                                    <button type="button"
                                        class="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-full size-8 bg-primary-500 hover:bg-primary-600 focus:outline-none"
                                        @click.prevent="sendMessage($refs.chatInput as HTMLInputElement)">
                                        <!-- <i data-lucide="send-horizontal" class="size-4"></i> -->
                                        <RiSendPlane2Line class="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Live ChatBot</h6>
            </div>
            <div class="flex items-center gap-5 card-body">
                <button type="button"
                    class="text-white btn bg-primary-500 border-primary-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 focus:bg-primary-600 focus:text-white focus:border-primary-600"
                    @click="liveBotShowChatbox = true">
                    Live Chatbox
                </button>
                <div v-if="liveBotShowChatbox"
                    class="fixed z-drawer ltr:right-5 rtl:left-5 ltr:md:right-8 rtl:md:left-8 bottom-8 md:w-96">
                    <div
                        class="flex flex-col bg-white rounded-md shadow-lg shadow-gray-200 dark:shadow-dark-800 dark:bg-dark-900">
                        <div class="p-4 text-white bg-gradient-to-tr from-primary-500 to-purple-500 rounded-t-md">
                            <div>
                                <h6 class="mb-1 text-16">ChatBot</h6>
                                <p class="text-xs text-white/75">Online</p>
                            </div>
                        </div>
                        <simplebar class="p-4 h-80" data-simplebar>
                            <div id="messages" class="flex flex-col gap-y-4">
                                <template v-for="(message, key) in liveBotMessages" :key="key">
                                    <div>
                                        <div class="flex items-end"
                                            :class="message.from === 'bot' ? '' : 'justify-end'">
                                            <div class="flex flex-col max-w-sm space-y-2 text-sm"
                                                :class="message.from === 'bot' ? 'order-2 items-start rtl:mr-2 ltr:ml-2' : 'order-1 items-end mr-2'">
                                                <div>
                                                    <span class="inline-block px-3 py-2 rounded-md"
                                                        :class="message.from === 'bot' ? 'ltr:rounded-bl-none rtl:rounded-br-none bg-gray-100 dark:bg-dark-850' : 'ltr:rounded-br-none rtl:rounded-bl-none bg-primary-500 text-white'"
                                                        v-html="message.text"></span>
                                                </div>
                                            </div>
                                            <img :src="message.from === 'bot' ? botImg : userImg" alt=""
                                                class="rounded-full size-6"
                                                :class="message.from === 'bot' ? 'order-1' : 'order-2'" />
                                        </div>
                                    </div>
                                </template>
                                <div v-if="botTyping">
                                    <div class="flex items-end">
                                        <div class="flex flex-col items-start order-2 mx-2 space-y-2 text-sm">
                                            <div class="flex items-end">
                                                <img :src="botImg" alt="" class="rounded-full size-6" />
                                                <div class="flex items-center justify-center space-x-1">
                                                    <span class="sr-only">Loading...</span>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]">
                                                    </div>
                                                    <div
                                                        class="size-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]">
                                                    </div>
                                                    <div class="rounded-full bg-primary-500 size-2 animate-bounce">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </simplebar>
                        <div class="p-4">
                            <div class="relative flex">
                                <input type="text" placeholder="Say something..." autocomplete="off" autofocus="true"
                                    @keydown.enter="liveBotUpdateChat($refs.input as HTMLInputElement)"
                                    class="rounded-full form-input ltr:pr-10 rtl:pl-10" v-model="liveBotUserInput"
                                    ref="input" />
                                <div class="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
                                    <button type="button"
                                        class="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-full size-8 bg-primary-500 hover:bg-primary-600 focus:outline-none"
                                        @click.prevent="liveBotUpdateChat($refs.input as HTMLInputElement)">
                                        <RiSendPlane2Line data-lucide="send-horizontal" class="size-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>