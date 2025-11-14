<script setup lang="ts">
import { nextTick, ref } from 'vue';
import mainUser from "@/assets/images/avatar/user-15.png";
import receiverImage from "@/assets/images/avatar/user-14.png";
import { ChevronLeft, Phone, SendHorizonal } from 'lucide-vue-next';
const props = defineProps({
    setModelViewValue: Function,
    showModule: Boolean
})
// State variables
const currentChat = ref({
    userImage: mainUser,  // Replace with actual image path
    agentImage: receiverImage,  // Replace with actual agent image
    userName: 'Sophia Mia',
    status: 'Active',
    messages: [
        { sender: 'user', text: 'Hello, how are you?' },
        { sender: 'agent', text: 'I am good, how can I assist you?' },
        // Add more sample messages if needed
    ],
});
const newMessage = ref('');

// Method to send a new message
const sendMessage = () => {
    if (newMessage.value.trim()) {
        currentChat.value.messages.push({
            sender: 'user',
            text: newMessage.value.trim(),
        });
        newMessage.value = ''; // Reset the input field
        nextTick(() => {
            const chatContainer: any = document.querySelector('[data-simplebar]');
            chatContainer.scrollTop = chatContainer.scrollHeight;
        });
    }
};

const closeMessageModal = () => {
    if (props.setModelViewValue) props.setModelViewValue(false);

};

</script>
<template>
    <div v-if="showModule" class="modal">
        <div class="modal-wrap modal-sm modal-br">
            <div class="modal-content">
                <div class="flex items-center gap-2 p-2 bg-gray-100 rounded-md dark:bg-dark-850">
                    <button @click="closeMessageModal"
                        class="p-0 text-gray-500 dark:text-dark-500 btn btn-icon-text size-10 hover:text-gray-800 dark:hover:text-dark-50 shrink-0">
                        <ChevronLeft data-lucide="chevron-left"></ChevronLEft>
                    </button>
                    <img :src="currentChat.userImage" alt="" class="rounded-full size-10" />
                    <div class="grow">
                        <h6>{{ currentChat.userName }}</h6>
                        <p class="text-xs text-gray-500 dark:text-dark-500">
                            <span
                                class="inline-block bg-green-500 size-1.5 rounded-full ltr:mr-0.5 rtl:ml-0.5 align-middle"></span>
                            Active
                        </p>
                    </div>
                    <button type="button" class="p-0 btn btn-sub-red shrink-0 btn-icon-text size-10">
                        <Phone data-lucide="phone" class="size-5"></Phone>
                    </button>
                </div>

                <div class="px-5 mt-4 -mx-5 min-h-72 max-h-72" data-simplebar>
                    <div class="space-y-3">
                        <div v-for="(message, index) in currentChat.messages" :key="index">
                            <div class="flex gap-2" :class="{ 'justify-end': message.sender === 'user' }">
                                <div class="rounded-full size-9" :class="{ 'order-2': message.sender === 'user' }">
                                    <img :src="message.sender === 'user' ? currentChat.userImage : currentChat.agentImage"
                                        alt="" class="rounded-full" />
                                </div>
                                <div class="px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-md dark:bg-dark-850 max-w-64 dark:text-dark-500"
                                    :class="{
                                        'bg-primary-100 text-primary-500 order-1 rounded-bl-none': message.sender === 'user',
                                        'bg-gray-100 text-gray-500 order-1 rounded-br-none': message.sender === 'agent'
                                    }">
                                    {{ message.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative flex mt-4">
                    <input type="text" placeholder="Say something..." v-model="newMessage" @keydown.enter="sendMessage"
                        autocomplete="off" autofocus class="ltr:pr-12 rtl:pl-12 form-input" ref="input" />
                    <div class="absolute inset-y-0 items-center hidden ltr:right-1 rtl:left-1 sm:flex">
                        <button type="button" @click="sendMessage"
                            class="inline-flex items-center justify-center text-white transition duration-200 ease-in-out rounded-md size-8 bg-primary-500 hover:bg-primary-600 focus:outline-none">
                            <SendHorizonal class="size-4"></SendHorizonal>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" @click="closeMessageModal" id="backDropDiv"></div>
    </div>
</template>