<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.min.css';
import user17 from '@/assets/images/avatar/user-17.png'
import user18 from '@/assets/images/avatar/user-18.png'
import simplebar from 'simplebar-vue';
import { Calendar, MoveRight, UserRound } from 'lucide-vue-next';
const props = defineProps({
    showModule: Boolean,
    setShowModuleValue: Function,
    getData: Object,
})
// const showTicketDetailsModal = ref(true);
const ticketDetails = ref<any>({
    id: 123,
    author: 'Mary Smith',
    status: 'Open',
    title: 'How to enable dark mode in Tailwind CSS?',
    description: 'How can you enable and use dark mode in Tailwind CSS?',
    avatar: user18
});
watch(() => props.getData, (newData) => {
    ticketDetails.value = { ...newData }
})
const replyMessages = ref<string[]>([

]);
const newMessage = ref<string>('');

const closeTicketDetailsModal = () => {
    // showTicketDetailsModal.value = false;
    if (props.setShowModuleValue) props.setShowModuleValue(false)
    // document.querySelector('.list').classList.remove('hidden');
};

const addMessage = (message: string) => {
    replyMessages.value.push(message);
};
onMounted(() => {
    Prism.highlightAll()
})

</script>
<template>
    <div class="ticket" v-show="showModule">
        <div class="flex items-center gap-5 mb-4">
            <div class="grow">
                <h5 class="mb-1"><a :href="'#!'">Ticket #{{ ticketDetails.id }}</a></h5>
                <div class="flex items-center gap-3">
                    <span class="text-gray-500 dark:text-dark-500">
                        <UserRound class="inline-block mr-1 size-4"></UserRound>
                        <a :href="'#!'">{{ ticketDetails.author }}</a>
                    </span>
                    <span class="text-gray-500 dark:text-dark-500">
                        <Calendar class="inline-block mr-1 size-4"></Calendar>
                        19 Feb, 2024
                    </span>
                    <span class="badge badge-sub-green">{{ ticketDetails.status }}</span>
                </div>
            </div>
            <div>
                <p class="text-gray-500 cursor-pointer dark:text-dark-500" @click="closeTicketDetailsModal">
                    Close
                </p>
            </div>
        </div>
        <div class="card">
            <simplebar data-simplebar class="h-[calc(100vh_-_17rem)]">
                <div class="p-5 space-y-4">
                    <div>
                        <h5 class="mb-1">{{ ticketDetails.title }}</h5>
                        <p class="text-gray-500 dark:text-dark-500">{{ ticketDetails.description }}</p>
                    </div>

                    <div class="flex gap-2">
                        <img :src="ticketDetails.avatar" alt="" class="rounded-md size-10">
                        <div class="space-y-2">
                            <p class="text-gray-500 dark:text-dark-500">
                                To enable dark mode in Tailwind CSS, update your
                                <span class="text-pink-500">tailwind.config.js</span> file with the
                                <span class="text-pink-500">darkMode</span> option.
                            </p>
                            <p class="text-gray-500 dark:text-dark-500">
                                Using <span class="text-pink-500">[data-mode="dark"]</span>, the dark mode is enabled
                                based on the user's operating system preference:
                            </p>
                            <pre>
<code  class="language-js">module.exports = {
    darkMode: ['[data-mode="dark"]'],
    // ...
}</code>
                            </pre>

                            <p class="text-gray-500 dark:text-dark-500">
                                Using <span class="text-pink-500">class</span>, the dark mode is enabled by adding a
                                <span class="text-pink-500">.dark</span> class to an ancestor element of your
                                components:
                            </p>
                            <pre class="relative"><code class="language-js">module.exports = {
    darkMode: ['class'],
    // ...
}</code>
</pre>
                            <p class="text-gray-500 dark:text-dark-500">
                                To apply styles for dark mode, simply prefix your utility classes with
                                <span class="text-pink-500">dark:</span> followed by the desired state variant, if any.
                            </p>
                            <p class="text-gray-500 dark:text-dark-500">
                                For example, if you want to change the background color of an element in dark mode, you
                                can use the following code:
                            </p>
                            <pre><code slot="code" class="language-js">&lt;div class=&quot;bg-white dark:bg-gray-800&quot;&gt;
    &lt;!-- Your content here --&gt;
&lt;/div&gt;</code>
                            </pre>
                        </div>
                    </div>
                </div>

                <template v-for="(reply, index) in replyMessages" :key="index">
                    <div class="flex gap-2 p-5">
                        <img :src="user17" alt="" class="rounded-md size-10">
                        <div class="space-y-2">
                            <p class="text-gray-500 dark:text-dark-500">{{ reply }}</p>
                        </div>
                    </div>
                </template>

                <form action="javascript:void(0);" class="p-5 pt-0">
                    <h5 class="mb-2">Comment</h5>

                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12">
                            <div class="mb-5">
                                <label for="textareaInput2" class="block mb-2 text-sm">Your Reply</label>
                                <textarea name="textareaInput2" id="textareaInput2" rows="3" class="h-auto form-input"
                                    placeholder="Enter your description" v-model="newMessage"></textarea>
                            </div>
                            <div class="ltr:text-right rtl:text-left">
                                <button class="btn btn-primary" @click="addMessage(newMessage); newMessage = ''">
                                    Reply Now <MoveRight class="inline-block ml-1 size-4"></MoveRight>
                                </button>
                            </div>
                        </div><!--end col-->
                    </div><!--end grid-->
                </form>
            </simplebar>
        </div>
    </div>
</template>