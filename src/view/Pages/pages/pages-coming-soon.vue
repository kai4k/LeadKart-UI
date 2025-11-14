<script setup lang="ts">
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";
import SocialMediaIcon from "./SocialMediaIcon.vue";
// Countdown Functions
function getTimeRemaining(endTime: string) {
    const t = Date.parse(endTime) - Date.parse(new Date().toString());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days,
        hours,
        minutes,
        seconds,
    };
}

function initializeClock(id: string, endTime: string) {
    const clock = document.getElementById(id);
    if (!clock) return;

    const daysSpan = clock.querySelector(".days")!;
    const hoursSpan = clock.querySelector(".hours")!;
    const minutesSpan = clock.querySelector(".minutes")!;
    const secondsSpan = clock.querySelector(".seconds")!;

    function updateClock() {
        const t = getTimeRemaining(endTime);
        daysSpan.textContent = ("0" + t.days).slice(-2);
        hoursSpan.textContent = ("0" + t.hours).slice(-2);
        minutesSpan.textContent = ("0" + t.minutes).slice(-2);
        secondsSpan.textContent = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
}

// VanillaTilt
const tiltElement = ref<HTMLHeadingElement | null>(null);

onMounted(() => {
    const tiltElements: any = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach((tiltElement: any) => {
        VanillaTilt.init(tiltElement, {
            "max-glare": tiltElement.getAttribute('data-tilt-max-glare') || 0, // Get max glare from attribute or default to 0
            reverse: false,
        });
    });
    const deadline = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString(); // Countdown for 10 days
    initializeClock("clockdiv", deadline);
});
</script>
<template>
    <div
        class="relative flex items-center justify-center min-h-screen py-20 from-sky-500/10 ltr:bg-gradient-to-l rtl:bg-gradient-to-r via-green-500/5 to-pink-500/5">
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12 text-center lg:col-span-8 lg:col-start-3">
                    <h1 ref="tiltElement"
                        class="pb-5 text-4xl font-bold text-transparent drop-shadow-lg md:text-6xl lg:text-7xl ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-primary-500 vie-purple-500 to-pink-500 bg-clip-text"
                        data-tilt data-tilt-full-page-listening="true" max-glare>
                        We're Coming Soon
                    </h1>
                    <div id="clockdiv" class="flex items-center justify-center gap-5 mb-5">
                        <div class="w-24 p-2">
                            <h3 class="mb-1 days"></h3>
                            <div class="text-gray-500 dark:text-dark-500 smalltext">Days</div>
                        </div>
                        <div class="w-24 p-2">
                            <h3 class="mb-1 hours"></h3>
                            <div class="text-gray-500 dark:text-dark-500 smalltext">Hours</div>
                        </div>
                        <div class="w-24 p-2">
                            <h3 class="mb-1 minutes"></h3>
                            <div class="text-gray-500 dark:text-dark-500 smalltext">Minutes</div>
                        </div>
                        <div class="w-24 p-2">
                            <h3 class="mb-1 seconds"></h3>
                            <div class="text-gray-500 dark:text-dark-500 smalltext">Seconds</div>
                        </div>
                    </div>
                    <p class="max-w-2xl mx-auto mb-5 text-gray-500 dark:text-dark-500 text-16">
                        Receive the latest articles and business updates you need to know,
                        along with special weekly recommendations.
                    </p>
                    <form action="/" class="max-w-xl mx-auto">
                        <div class="relative">
                            <input type="email"
                                class="h-12 bg-transparent ltr:pr-32 rtl:pl-32 dark:bg-transparent form-input"
                                placeholder="Enter your email" required />
                            <button type="submit" class="absolute ltr:right-1 rtl:left-1 top-1 btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                        <p class="mt-4 text-gray-500 dark:text-dark-500">
                            Sign up now to receive early notifications about our launch date!
                        </p>
                    </form>
                    <SocialMediaIcon />
                </div>
            </div>
        </div>
    </div>
</template>