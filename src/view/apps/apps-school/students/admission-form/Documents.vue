<script setup lang="ts">
import { MoveLeft, MoveRight, Upload } from 'lucide-vue-next';
import { ref } from 'vue';
const props = defineProps({
    goNextTag: Function
})
// Reactive state for the file inputs and errors
const passportImageUrl = ref<string | null>(null);
const transcriptImageUrl = ref<string | null>(null);

const passportError = ref<string | null>(null);
const transcriptError = ref<string | null>(null);


// Function to handle file input change for passport photo and transcript
const handleFileChosen = (type: string, event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (file) {
        const fileReader = new FileReader();

        // Check for valid file type
        if (type === 'passportPhoto' && file.type.startsWith('image')) {
            fileReader.onload = () => {
                passportImageUrl.value = fileReader.result as string;
                passportError.value = null;
            };
        } else if (type === 'transcript' && (file.type === 'application/pdf' || file.type === 'image/png')) {
            fileReader.onload = () => {
                transcriptImageUrl.value = fileReader.result as string;
                transcriptError.value = null;
            };
        } else {
            if (type === 'passportPhoto') passportError.value = 'Please upload a valid image file.';
            if (type === 'transcript') transcriptError.value = 'Please upload a valid PDF or PNG file.';
        }

        fileReader.readAsDataURL(file);
    }
};

// Validate and save function
const validateAndSave = () => {
    if (!passportImageUrl.value) {
        passportError.value = 'Passport photo is required.';
    }
    if (!transcriptImageUrl.value) {
        transcriptError.value = 'High school transcript is required.';
    }

    // If no errors, move to the next tab
    if (!passportError.value && !transcriptError.value) {
        if (props.goNextTag) props.goNextTag(5)
    }
};
</script>
<template>
    <div>
        <form>

            <!-- Passport-sized Photograph Section -->
            <h6 class="mb-3">Passport-sized Photograph</h6>
            <div class="mb-5">
                <label for="passportPhotoInput">
                    <div class="flex items-center justify-center overflow-hidden bg-gray-100 border border-gray-200 rounded cursor-pointer dark:bg-dark-850 dark:border-dark-800 size-36">
                        <img v-if="passportImageUrl" :src="passportImageUrl" class="object-cover w-full h-full" />
                        <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                            <Upload />
                            <div class="mt-2 mb-1">Passport Size</div>
                            <p>144 x 144</p>
                        </div>
                    </div>
                </label>
                <label class="block">
                    <input type="file" name="passportPhoto" id="passportPhotoInput" @change="handleFileChosen('passportPhoto', $event)" class="hidden" accept="image/*" />
                </label>
                <p v-if="passportError" class="mt-1 text-sm text-red-500">{{ passportError }}</p>
            </div>

            <!-- High School Transcript Section -->
            <h6 class="mb-3">High School Transcript</h6>
            <div>
                <label for="transcriptInput">
                    <div class="flex items-center justify-center p-4 overflow-hidden bg-gray-100 border border-gray-200 rounded cursor-pointer dark:bg-dark-850 dark:border-dark-800 h-28">
                        <img v-if="transcriptImageUrl" :src="transcriptImageUrl" class="object-cover w-full h-full" />
                        <div v-else class="flex flex-col items-center text-gray-500 dark:text-dark-500">
                            <Upload />
                            <div class="mt-2 mb-1">Drag and drop your certificate</div>
                            <p>Only allowed PDF, PNG files.</p>
                        </div>
                    </div>
                </label>
                <label class="block">
                    <input type="file" name="transcript" id="transcriptInput" @change="handleFileChosen('transcript', $event)" class="hidden" accept="application/pdf, image/png" />
                </label>
                <p v-if="transcriptError" class="mt-1 text-sm text-red-500">{{ transcriptError }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-2 mt-5 ltr:justify-end rtl:justify-start">
                <button type="button" class="btn btn-sub-gray">
                    <MoveLeft class="mr-1 ltr:inline-block rtl:hidden size-4"></MoveLEft>
                    Previous
                </button>
                <button type="button" class="btn btn-primary" @click="validateAndSave">
                    Save to Next
                    <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                </button>
            </div>
        </form>
    </div>
</template>