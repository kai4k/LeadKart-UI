<script setup lang="ts">
import pageHeading from '@/components/common/PageHeading.vue';
import { RiCloseLine } from 'vue-remix-icons';
import { ref } from 'vue';
import simplebar from 'simplebar-vue';

let isDrawerOpen = ref<boolean>(false);
let isLargeDrawerOpen = ref<boolean>(false)
let isHalfDrawerOpen = ref<boolean>(false)
const imageIsOpen = ref(false);

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};

const closeDrawer = () => {
    isDrawerOpen.value = false;
};

const drawerList = ref([
    { id: 'drawerEnd', position: 'right-0', buttonText: 'End Drawer', header: 'End Drawer Heading', isOpen: false },
    { id: 'drawerStart', position: 'left-0', buttonText: 'Start Drawer', header: 'Start Drawer Heading', isOpen: false },
    { id: 'drawerTop', position: 'top-0 w-full left-0 h-80', buttonText: 'Top Drawer', header: 'Top Drawer Heading', isOpen: false },
    { id: 'drawerBottom', position: 'w-full h-80 left-0 set-bottom bottom-0 right-0', buttonText: 'Bottom Drawer', header: 'Bottom Drawer Heading', isOpen: false },
]);

const toggleListDrawer = (index: number) => {
    drawerList.value[index].isOpen = !drawerList.value[index].isOpen;
};

const closeListDrawer = (index: number) => {
    drawerList.value[index].isOpen = false;
};

const users = ref([
    { avatar: new URL('@/assets/images/avatar/user-4.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-5.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-6.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-11.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-8.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-12.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-13.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-14.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-15.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-17.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-18.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-19.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-20.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-21.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-22.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-24.png', import.meta.url).href },
    { avatar: new URL('@/assets/images/avatar/user-25.png', import.meta.url).href },
]);

function imgToggle() {
    imageIsOpen.value = !imageIsOpen.value;
}
function imgClose() {
    imageIsOpen.value = false
}

const largeDrawerToggle = () => {
    isLargeDrawerOpen.value = !isLargeDrawerOpen.value
}
const closeLargeDrawer = () => {
    isLargeDrawerOpen.value = false
}

const halfScreenToggle = () => {
    isHalfDrawerOpen.value = !isHalfDrawerOpen.value
}

const closeHalfScreen = () => {
    isHalfDrawerOpen.value = false
}
</script>
<template>
    <pageHeading title="Drawer" sub-title="UI" />

    <div class="grid grid-cols-12 gap-x-space ">
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <button @click="toggleDrawer" type="button" class="btn btn-primary">Default Drawer</button>
                <div v-if="isDrawerOpen" class="right-0 drawer " drawer-end @click.self="closeDrawer">
                    <div class="drawer-header">
                        <h6>Drawer Heading</h6>
                        <button @click="closeDrawer">
                            <RiCloseLine class="w-5 link link-red" />
                        </button>
                    </div>
                    <div class="drawer-content text-15">
                        <h6 class="mb-4">Drawer Content</h6>
                        <p class="text-slate-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or neutral, exotic or graphic.
                        </p>
                    </div>
                    <div class="drawer-footer">
                        <h6>Drawer Footer</h6>
                    </div>
                </div>
                <div v-if="isDrawerOpen" class="backdrop-overlay backdrop-blur-xs inset-shadow" id="backDropDiv" @click="closeDrawer">
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 card">
            <div class="card-header">
                <h6 class="card-title">Drawer Position</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <button v-for="(drawer, index) in drawerList" :key="drawer.id" type="button"
                        class="btn btn-sub-gray" @click="toggleListDrawer(index)">
                        {{ drawer.buttonText }}
                    </button>
                </div>

                <div v-for="(drawer, index) in drawerList" :key="drawer.id">
                    <div v-if="drawer.isOpen" :id="drawer.id"
                        :class="`${drawer.position} drawer show transform transition-all bottom-0 duration-800s ease-in-out`">
                        <div class="drawer-header">
                            <h6>{{ drawer.header }}</h6>
                            <button @click="closeListDrawer(index)">
                                <RiCloseLine class="w-5 link link-red" />
                            </button>
                        </div>
                        <div class="drawer-content">
                            <h6 class="mb-4 text-15">Drawer Content</h6>
                            <p class="text-slate-500 dark:text-dark-500">
                                They all have something to say beyond the words on the page. They can come across as
                                casual or neutral, exotic or graphic.
                            </p>
                        </div>
                        <div class="drawer-footer">
                            <h6>Drawer Footer</h6>
                        </div>
                    </div>
                    <div v-if="drawer.isOpen" class="backdrop-overlay backdrop-blur-xs inset-shadow" @click="closeListDrawer(index)">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-12 card">
            <div class="card-header">
                <h6 class="card-title">Size Drawer</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <button data-drawer-target="smallDrawer" type="button" class="btn btn-sub-gray"
                        v-on:click="imgToggle">Extra small</button>
                    <button data-drawer-target="largeDrawer" type="button" class="btn btn-sub-gray"
                        @click="largeDrawerToggle">Large</button>
                    <button data-drawer-target="halfScreenDrawer" type="button" class="btn btn-sub-gray"
                        v-on:click="halfScreenToggle">Half
                        Screen</button>
                </div>
                <div>
                    <div id="smallDrawer" drawer-end class="right-0 drawer drawer-sm" v-if="imageIsOpen">
                        <simplebar class="drawer-content" data-simplebar>
                            <div class="relative block space-y-3 rounded-full">
                                <a v-for="(user, index) in users" :key="index" href="#!">
                                    <img :src="user.avatar" alt="" class="mx-auto rounded-full size-14" />
                                    <div
                                        class="absolute bottom-0 bg-green-500 border-2 border-white rounded-full dark:border-dark-900 size-4 right-0.5">
                                    </div>
                                </a>
                            </div>
                        </simplebar>
                    </div>
                    <div v-if="imageIsOpen" class="backdrop-overlay backdrop-blur-xs inset-shadow" v-on:click="imgClose"></div>
                </div>
                <div>
                    <div v-if="isLargeDrawerOpen" id="largeDrawer" class="right-0 w-96 drawer " drawer-end
                        @click.self="closeLargeDrawer">
                        <div class="drawer-header">
                            <h6>Large Drawer</h6>
                            <button @click="closeDrawer">
                                <RiCloseLine class="w-5 link link-red" />
                            </button>
                        </div>
                        <div class="drawer-content text-15">
                            <h6 class="mb-4 ">Drawer Content</h6>
                            <p class="text-slate-500 dark:text-dark-500">
                                They all have something to say beyond the words on the page. They can come across as
                                casual
                                or neutral, exotic or graphic.
                            </p>
                        </div>
                        <div class="drawer-footer">
                            <h6>Drawer Footer</h6>
                        </div>
                    </div>
                    <div v-if="isLargeDrawerOpen" class="backdrop-overlay backdrop-blur-xs inset-shadow" id="backDropDiv"
                        @click="closeLargeDrawer">
                    </div>
                </div>
                <div>
                    <div v-if="isHalfDrawerOpen" id="largeDrawer" class="left-0 w-1/2 drawer show " drawer-end
                        @click.self="closeHalfScreen">
                        <div class="drawer-header">
                            <h6>Half Drawer</h6>
                            <button @click="closeHalfScreen">
                                <RiCloseLine class="w-5 link link-red" />
                            </button>
                        </div>
                        <div class="drawer-content text-15">
                            <h6 class="mb-4 ">Drawer Content</h6>
                            <p class="text-slate-500 dark:text-dark-500">
                                They all have something to say beyond the words on the page. They can come across as
                                casual
                                or neutral, exotic or graphic.
                            </p>
                        </div>
                        <div class="drawer-footer">
                            <h6>Drawer Footer</h6>
                        </div>
                    </div>
                    <div v-if="isHalfDrawerOpen" class="backdrop-overlay backdrop-blur-xs inset-shadow" id="backDropDiv"
                        @click="closeHalfScreen">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.inset-shadow {
    box-shadow: inset 0 4px 8px rgba(255, 255, 255, 255);
    /* Adjust values as needed */
}

.scroll-hidden {
    scrollbar-width: none;
}

.set-bottom {
    bottom: 0;
    top: calc(100vh - 320px);
}
</style>