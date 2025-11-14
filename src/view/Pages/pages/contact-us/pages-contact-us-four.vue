<script setup lang="ts">
import { CornerUpLeft, CornerUpRight, MoveLeft, MoveRight } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
// Define the form data structure
const form = ref({
    projectName: '',
    description: '',
    links: '',
    files: [] as File[], // TypeScript type for files
});

// Handle file upload
const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
        form.value.files = Array.from(input.files);
    }
};

// Simulate form submission
const handleSubmit = () => {
};

// Navigate forward (placeholder for navigation logic)
const goForward = () => {
    router.push('pages-contact-us-five')
};

const AdditionalFile = [
    { name: 'Description of your project' },
    { name: 'Wireframes or functional sketches' },
    { name: 'Visual identification materials' },
]

</script>
<template>
    <div class="grid grid-cols-12 gap-0 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <!-- Left Section: Form Inputs -->
        <div class="col-span-12 xl:col-span-7">
            <div class="flex items-center py-10 border-gray-200 xl:py-0 xl:h-screen ltr:border-r rtl:border-l dark:border-dark-800">
                <div class="px-10 md:px-20 grow">
                    <h1 class="mb-8 leading-normal xl:w-2/3">Let's now concentrate on the fundamental aspects of your
                        projects.</h1>
                    <form @submit.prevent="handleSubmit" class="mb-6 xl:w-2/3">
                        <div class="grid grid-cols-12 gap-5">
                            <div class="col-span-12">
                                <label for="projectInput" class="form-label">Project Name</label>
                                <input type="text" id="projectInput" v-model="form.projectName" class="bg-transparent form-input dark:bg-transparent" />
                            </div>
                            <div class="col-span-12">
                                <label for="textareaInput2" class="form-label">Description</label>
                                <textarea id="textareaInput2" rows="3" v-model="form.description" class="h-auto bg-transparent form-input dark:bg-transparent"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label for="filesInput" class="form-label">Please send us any additional files you want
                                    to send us below</label>
                                <input type="file" id="filesInput" class="form-file" multiple @change="handleFileUpload" />
                            </div>
                            <div class="col-span-12">
                                <label for="linksInput" class="form-label">You can also upload links to your content,
                                    such as Google Docs or Dropbox</label>
                                <input type="url" id="linksInput" v-model="form.links" class="bg-transparent form-input dark:bg-transparent" />
                            </div>
                        </div>
                    </form>
                    <div class="flex flex-wrap gap-2">
                        <router-link to="pages-contact-us-three" class="btn btn-outline-gray">
                            <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></MoveLeft>
                            <MoveRight class="ml-1 ltr:hidden rtl:inline-block size-4">
                            </MoveRight>
                            Back
                        </router-link>
                        <button @click="goForward" class="btn btn-primary">
                            Go Forward
                            <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                            <MoveLeft class="mr-1 ltr:hidden rtl:inline-block size-4"></MoveLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Section: Additional Information -->
        <div class="col-span-12 xl:col-span-5">
            <div class="flex flex-col justify-center w-full px-10 py-10 md:px-20 xl:py-0 xl:h-screen">
                <div>
                    <h5 class="mb-3">Send Additional Files</h5>
                    <p class="mb-5 text-gray-500 dark:text-dark-500">Please provide any supplementary materials (files
                        or links) that will assist us in formulating the estimate.</p>
                    <ul class="space-y-2 mb-7">
                        <template v-for="(list, index) in AdditionalFile" :key="index">
                            <li>
                                <CornerUpRight class="mr-1 text-green-500 ltr:inline-block rtl:hidden size-4">
                                </CornerUpRight>
                                <CornerUpLeft class="ml-1 text-green-500 ltr:hidden rtl:inline-block size-4">
                                </CornerUPLeft>
                                {{ list.name }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>