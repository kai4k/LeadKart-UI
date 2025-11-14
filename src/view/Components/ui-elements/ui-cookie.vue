<script setup lang="ts">
import { RiCloseLine } from 'vue-remix-icons';
import pageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';

const isCookie = ref(true);
const horizontalCookie = ref(true);
const bannerCookie = ref(true)
const policyCookie = ref(true);
const close = () => {
    isCookie.value = false;
};
const horizontalCookieClose = () => {
    horizontalCookie.value = false;
};
const accept = () => {
    isCookie.value = false;
};
const policyCookieAccept = () => {
    policyCookie.value = false;
}
const horizontalCookieAccept = () => {
    horizontalCookie.value = false;
}
const bannerCookieAccept = () => {
    bannerCookie.value = false;
}
const horizontalCookieIgnore = () => {
    horizontalCookie.value = false;
};



</script>
<template>
    <pageHeading title="Cookie Consent" sub-title="UI" />
    <div class="grid grid-cols-12 gap-x-space">
        <div class="col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Cookie Card</h6>
            </div>
            <div class="relative card-body min-h-72">
                <div v-if="isCookie"
                    class="absolute p-4 ltr:ml-5 rtl:mr-5 max-w-80 card ltr:right-5 rtl:left-5 bottom-5">
                    <div class="flex items-center gap-3 mb-3">
                        <img src="@/assets/images/cookie.png" alt="" class="h-6" />
                        <h6 class="grow">Cookie Policy</h6>
                        <button @click="close" class="link link-red">
                            <i data-lucide="x"></i>
                            <RiCloseLine class="size-5" />
                        </button>
                    </div>
                    <p class="mb-3 text-gray-500 dark:text-dark-500">
                        By visiting this site, you consent to the use of cookies, which are employed to enrich your
                        browsing experience.
                    </p>
                    <div>
                        <button @click="accept" type="button" class="btn btn-green">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 card">
        <div class="card-header">
            <h6 class="card-title">Cookie Horizontal Card</h6>
        </div>
        <div class="relative card-body min-h-96">
            <div v-if="horizontalCookie"
                class="absolute p-5 ltr:ml-5 rtl:mr-5 max-w-96 card ltr:right-5 rtl:left-5 bottom-5">
                <button @click="horizontalCookieClose" class="absolute top-5 link link-red ltr:right-5 rtl:left-5">
                    <RiCloseLine data-lucide="x" class="size-5" />
                </button>
                <img src="@/assets/images/cookie.png" alt="" class="h-9" />
                <h6 class="mt-4 mb-2">Here's another reminder about cookies!</h6>
                <p class="mb-3 text-gray-500 dark:text-dark-500">
                    By utilizing UI Design Daily, you acknowledge our use of cookies to enhance your experience and
                    agree to the data collection outlined in our
                    <a href="#!"
                        class="text-gray-500 underline transition duration-200 ease-linear hover:text-primary-500">Cookie
                        Policy</a>.
                </p>
                <div class="flex items-center gap-3 ltr:justify-end rtl:justify-start">
                    <button @click="horizontalCookieIgnore" type="button" class="btn btn-active-red">Ignore</button>
                    <button @click="horizontalCookieAccept" type="button" class="btn btn-primary">Accept</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 card">
        <div class="card-header">
            <h6 class="card-title">Cookie Consent Banner</h6>
        </div>
        <div class="relative card-body min-h-44">
            <div v-if="bannerCookie" class="absolute text-center inset-x-5 bottom-5">
                <div class="items-center gap-3 p-3 rounded-full ltr:pl-5 rtl:pr-5 sm:inline-flex card">
                    <p class="mb-0 text-gray-500 dark:text-dark-500">
                        This website utilizes cookies to enhance your browsing experience.
                    </p>
                    <div>
                        <button @click="bannerCookieAccept" type="button"
                            class="rounded-full btn btn-xs btn-gray">Accept
                            All</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 card">
        <div class="card-header">
            <h6 class="card-title">Cookie Policy</h6>
        </div>
        <div class="relative card-body min-h-48 md:min-h-32">
            <div v-if="policyCookie"
                class="absolute inset-x-0 bottom-0 p-3 mb-0 bg-gray-900 border-gray-900 rounded-none card dark:bg-dark-800 dark:border-dark-800">
                <div class="items-center gap-3 sm:flex">
                    <p class="mb-0 text-gray-200 dark:text-dark-200 grow">
                        Google utilizes cookies for analyzing traffic to this site and for displaying personalized
                        advertisements. Please refer to our
                        <a href="#!"
                            class="text-gray-200 transition duration-200 ease-linear hover:text-red-500">privacy
                            policy</a> for further details.
                    </p>
                    <div class="mt-3 shrink-0 sm:mt-0">
                        <button @click="policyCookieAccept" type="button"
                            class="rounded-full btn btn-xs btn-gray">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>