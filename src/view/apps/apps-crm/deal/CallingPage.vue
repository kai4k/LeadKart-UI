<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import userImage from "@/assets/images/avatar/user-15.png"
import { Disc, Mic, MicOff, Pause, Phone, Settings } from 'lucide-vue-next';
// Props to simulate data passed to the component (can be replaced by actual props or API data)

const props = defineProps({
    setModuleValue: Function,
    showModule: Boolean,
    callingTo: Object
})

const selectedDeal = ref<any>({
    image: userImage,// Example image path
    patientName: 'Project XYZ',
})

watch(() => props.callingTo, (newData) => {
    if (newData) {
        selectedDeal.value.image = newData.image
        selectedDeal.value.patientName = newData.patientName
    }
})
const isMuted = ref(false);
const isCalling = ref(false);
const callDuration = ref(0);
const intervalId = ref<number | null | any>(null);
const timeoutId = ref<number | null | any>(null);
const callModalOpen = computed(() => {
    return props.showModule
})

// Format call duration in mm:ss format
const formatDuration = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};
// Toggles mute state
const toggleMute = () => {
    isMuted.value = !isMuted.value
}

// Start the call, reset state and start a timer after 4 seconds
const startCall = () => {
    resetCall();  // Reset previous call state
    isCalling.value = true;

    timeoutId.value = setTimeout(() => {
        if (isCalling.value) {
            isCalling.value = false; // End calling state
            startTimer(); // Start the call timer
        }
    }, 4000); // Simulate call waiting time (4 seconds)
};

// Start the call duration timer
const startTimer = () => {
    intervalId.value = setInterval(() => {
        callDuration.value++;
    }, 1000);
};
// Stop the call and reset state
const stopCall = () => {
    if (props.setModuleValue) props.setModuleValue(false)
    stopTimer();  // Stop the timer
    clearTimeout(timeoutId.value);  // Clear the timeout
    resetCall();  // Reset the call duration and states
};

// Reset the call duration and flags
const resetCall = () => {
    callDuration.value = 0;
    isCalling.value = false;
};

// Stop the call timer
const stopTimer = () => {
    clearInterval(intervalId.value);
    intervalId.value = null;
};

// Watch callModalOpen to handle call state
watch(callModalOpen, (newVal) => {
    if (newVal) {
        startCall(); // Start the call when modal opens
    } else {
        stopCall(); // Stop the call when modal closes
    }
});
onBeforeUnmount(() => {
    stopCall(); // Make sure the call is stopped when component is destroyed
});
</script>
<template>
    <div id="callModal" v-if="callModalOpen" class="modal">
        <div class="modal-wrap modal-xs modal-br">
            <!-- Conditionally start or stop the call -->
            <template v-if="callModalOpen">
                <div v-if="callModalOpen">
                    <div class="modal-content">
                        <div>
                            <div class="flex items-center gap-2">
                                <div
                                    class="p-2 border border-gray-200 rounded-md dark:border-dark-800 size-12 shrink-0">
                                    <img v-if="selectedDeal.image" :src="selectedDeal.image" alt="" />
                                    <span v-else
                                        class="flex items-center justify-center w-full h-full bg-gray-300 rounded-full">
                                        {{ selectedDeal?.patientName?.[0] || '' }}
                                    </span>
                                </div>

                                <div>
                                    <h6>{{ selectedDeal.patientName }}</h6>
                                    <p class="text-sm text-gray-500 dark:text-dark-500">
                                        {{ isCalling ? 'Calling ...' : formatDuration(callDuration) }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3 mt-5">
                                <!-- Mute Button -->
                                <button type="button" @click="toggleMute"
                                    class="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                                    <MicOff v-show="isMuted" data-lucide="mic-off" class="size-5"></MicOff>
                                    <Mic v-show="!isMuted" data-lucide="mic" class="size-5"></Mic>
                                </button>
                                <!-- Pause Button -->
                                <button type="button" class="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                                    <Pause data-lucide="pause" class="size-5"></Pause>
                                </button>
                                <!-- Record Button -->
                                <button type="button" class="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                                    <Disc data-lucide="disc" class="size-5"></Disc>
                                </button>
                                <!-- End Call Button -->
                                <button type="button" @click="stopCall"
                                    class="btn btn-active-red shrink-0 btn-icon-text btn-icon">
                                    <Phone data-lucide="phone" class="size-5"></Phone>
                                </button>
                                <!-- Settings Button -->
                                <button type="button" class="btn btn-active-gray shrink-0 btn-icon-text btn-icon">
                                    <Settings data-lucide="settings" class="size-5"></Settings>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="backdrop-overlay backdrop-blur-xs" id="backDropDiv" @click="stopCall"></div>
    </div>
</template>