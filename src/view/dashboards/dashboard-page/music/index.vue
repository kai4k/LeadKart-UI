<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import song1 from "@//assets/images/dashboards/music/square/img-01.jpg";
import { featuredSongs, popularSingers } from './music-data';
import { Play, Shuffle } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { RiPauseLargeLine, RiPlayLargeLine, RiTimeLine } from 'vue-remix-icons';
import simplebar from 'simplebar-vue';
interface MusicItem {
    image: string | URL | any;
    title: string;
    genre: string;
}
const musicItems = ref<MusicItem[]>([
    { image: new URL('@/assets/images/dashboards/music/img-01.jpg', import.meta.url).href, title: 'Urban Music', genre: 'EDM' },
    { image: new URL('@/assets/images/dashboards/music/img-02.jpg', import.meta.url).href, title: 'Feel The Music', genre: 'Love' },
    { image: new URL('@/assets/images/dashboards/music/img-03.jpg', import.meta.url).href, title: 'Make IT Real', genre: 'Remix' },
    { image: new URL('@/assets/images/dashboards/music/img-04.jpg', import.meta.url).href, title: 'Music Fast', genre: 'DJ Remix' },
    { image: new URL('@/assets/images/dashboards/music/img-05.jpg', import.meta.url).href, title: 'Harmony Wave', genre: 'Events' },
    { image: new URL('@/assets/images/dashboards/music/img-06.jpg', import.meta.url).href, title: 'Old is A Gold', genre: 'Jazz' },
    { image: new URL('@/assets/images/dashboards/music/img-07.jpg', import.meta.url).href, title: 'Electro Music', genre: 'Live Stream' },
    { image: new URL('@/assets/images/dashboards/music/img-06.jpg', import.meta.url).href, title: 'Jazz Concept', genre: 'Concept' },
    { image: new URL('@/assets/images/dashboards/music/img-07.jpg', import.meta.url).href, title: 'Electro Music', genre: 'Live Stream' },
]);
const currentTime = ref(0);
const duration = ref(0);
const isPlaying = ref(false);
const isMuted = ref(false);
const volume = ref(50);
const previousVolume = ref(volume.value);
const audio = ref<HTMLAudioElement | null>(null);
interface Song {
    id: number;
    title: string;
    artist: string;
    duration: string;
    image: string;
    musicID?: string; // Optional property for musicID
    audioSrc: any,
}
const currentSong = ref<Song>({
    id: 1,
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    duration: "4:12 min",
    image: song1,
    audioSrc: new URL('@/assets/images/dashboards/music/music.mp3', import.meta.url)
});

function setCurrentSong(song: any) {
    currentSong.value = song;
    isPlaying.value = true; // Start playing the new song
}
function togglePlaySongs(song: any) {
    if (currentSong.value.id !== song.id) {
        setCurrentSong(song);
    } else {
        isPlaying.value = !isPlaying.value; // Toggle play/pause
    }
}
interface ArtistsType {
    name: string,
    image: string | any,
}
const artists = ref<ArtistsType[]>([
    { name: 'Shakira', image: new URL('@/assets/images/avatar/user-9.png', import.meta.url) },
    { name: 'Katy Perry', image: new URL('@/assets/images/avatar/user-10.png', import.meta.url) },
    { name: 'Harry Styles', image: new URL('@/assets/images/avatar/user-11.png', import.meta.url) },
    { name: 'Rihanna', image: new URL('@/assets/images/avatar/user-13.png', import.meta.url) },
    { name: 'Michael Jackson', image: new URL('@/assets/images/avatar/user-14.png', import.meta.url) },
    { name: 'Alicia Keys', image: new URL('@/assets/images/avatar/user-15.png', import.meta.url) },
    { name: 'Celine Dion', image: new URL('@/assets/images/avatar/user-16.png', import.meta.url) },
    { name: 'Britney Spears', image: new URL('@/assets/images/avatar/user-17.png', import.meta.url) },
    { name: 'Bob Dylan', image: new URL('@/assets/images/avatar/user-3.png', import.meta.url) }
]);

const togglePlay = () => {
    if (audio.value) {
        if (isPlaying.value) {
            audio.value.pause();
        } else {
            audio.value.play();
        }
        isPlaying.value = !isPlaying.value;
    }
};
// Function to skip forward/backward
const skip = (seconds: number) => {
    if (audio.value) {
        audio.value.currentTime = Math.min(duration.value, Math.max(0, (audio.value.currentTime + seconds)));
        currentTime.value = audio.value.currentTime;
    }
};

// Function to seek the audio
const seek = (event: MouseEvent) => {
    if (audio.value) {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const offsetX = (event as MouseEvent).clientX - rect.left;
        const newTime = (offsetX / rect.width) * duration.value;
        audio.value.currentTime = Math.min(duration.value, Math.max(0, newTime));
        currentTime.value = audio.value.currentTime;
    }
};

// Function to toggle mute
const toggleMute = () => {
    if (isMuted.value) {
        volume.value = previousVolume.value; // Restore previous volume when unmuted
    } else {
        previousVolume.value = volume.value; // Store current volume before muting
        volume.value = 0; // Mute by setting volume to 0
    }
    isMuted.value = !isMuted.value; // Toggle mute state
    updateVolume(); // Update audio volume
};

const iconClass = computed(() => {
    if (isMuted.value || volume.value === 0) {
        return 'ri-volume-mute-line text-red-500';
    }
    return 'ri-volume-up-line';
});

// Computed property for volume
const computedVolume = computed(() => {
    return isMuted.value ? 0 : volume.value;
});

// Method to handle volume change
const handleVolumeChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    volume.value = parseInt(target.value);
    updateVolume();
};
// Function to update volume
const updateVolume = () => {
    if (isMuted.value && volume.value === 0) {
        // If muted, set volume to 0
        volume.value = 0;
    } else {
        // Update the audio volume as needed
        // Assuming you have a reference to your audio element
        const audioElement = document.querySelector('audio'); // Change this as per your actual audio element reference
        if (audioElement) {
            audioElement.volume = volume.value / 100;
        }
    }
};

// Function to update the current time
const updateTime = () => {
    if (audio.value) {
        currentTime.value = audio.value.currentTime;
    }
};

// Function to update the duration
const updateDuration = () => {
    if (audio.value) {
        duration.value = audio.value.duration;
    }
};

// Function to format time
const formatTime = (time: number) => {
    if (isNaN(time)) {
        return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
</script>
<template>
    <div class="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-yellow-500/15 to-green-500/15"></div>
    <div class="relative" x-data="audioPlayer()">
        <PageHeading title="Music" sub-title="Dashboards" />
        <div class="grid grid-cols-12 gap-x-space">
            <div
                class="col-span-12 border-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-sky-400 via-purple-300 card to-pink-400">
                <div class="grid items-center grid-cols-12 px-10">
                    <div class="col-span-12 md:col-span-8 lg:col-span-7 xl:col-span-9">
                        <div class="lg:max-w-[400px] xl:max-w-[500px] py-10">
                            <h1 class="mb-3 text-white">Dream Top <span class="text-pink-400">10</span> Tracks</h1>
                            <p class="mb-6 text-primary-50">On March 24, 2025, Dream released his second song, entitled
                                "Mask", which garnered over 24.7 million views on YouTube.</p>
                            <button type="button"
                                 class="text-white rounded-lg !rounded-tl-3xl rounded-br-3xl py-2.5 hover:-translate-y-1.5 -tracking-tighter btn bg-white/20 !backdrop-blur-xl">
                                <Play data-lucide="play" class="inline-block ltr:mr-1 rtl:ml-1 size-4"></Play> Play All
                            </button>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-4 lg:col-span-5 xl:col-span-3">
                        <div class="mt-6 lg:-mt-8">
                            <img src="@/assets/images/dashboards/music/main.png" loading="lazy" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12">
                <div class="mb-space">
                    <div class="flex items-center mb-5">
                        <h6 class="text-15 grow">Weekly Top Tracks</h6>
                        <a href="#!" class="btn btn-primary"><i class="ri-add-circle-line ltr:mr-1 rtl:ml-1"></i> Add
                            Track</a>
                    </div>
                    <div class="grid grid-cols-3 lg:grid-cols-6 2xl:grid-cols-9 gap-space">
                        <div v-for="(music, index) in musicItems" :key="index" class="relative">
                            <img :src="music.image" loading="lazy" alt="" class="rounded-xl">
                            <div class="mt-3 text-center">
                                <h6 class="mb-1">
                                    <a href="#!" class="before:absolute before:inset-0">{{ music.title }}</a>
                                </h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ music.genre }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 row-span-2 md:col-span-6 2xl:col-span-4">
                <h6 class="mb-4 text-15">Featured Songs</h6>
                <div class="space-y-3">
                    <template v-for="song in featuredSongs" :key="song.id">
                        <div class="flex items-center gap-3">
                            <div class="relative group/items">
                                <img :src="song.image" alt="Banner" loading="lazy" title="Song Banner"
                                    class="rounded-md size-12">
                                <a href="#!" title="Song Play" @click="setCurrentSong(song)"
                                    class="absolute inset-0 flex items-center justify-center text-white transition duration-300 ease-linear rounded-md opacity-0 group-hover/items:opacity-100 bg-gray-950/30">
                                    <Play class="size-5"></Play>
                                </a>
                            </div>
                            <div class="grow">
                                <h6 class="mb-1.5">
                                    <a href="#!" v-text="song.title"></a>
                                </h6>
                                <div class="flex">
                                    <a href="#!" class="flex px-2 link hover:underline link-purple"
                                        v-text="song.artist"></a>
                                    <RiTimeLine class="w-[14px] ml-1 ri-time-line"/>
                                    <p class="px-1 text-gray-500 dark:text-dark-500" v-text="song.duration"></p>
                                </div>
                            </div>
                            <div class="shrink-0">
                                <a href="#!" title="Song Play"
                                    class="text-gray-500 dark:text-dark-500 hover:bg-white dark:hover:bg-dark-900 btn hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-dark-850 btn-icon"
                                    @click="togglePlaySongs(song)">
                                    <component
                                        :is="isPlaying && currentSong.id === song.id ? RiPauseLargeLine : RiPlayLargeLine"
                                        class="w-5 h-full mx-auto" />
                                </a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="col-span-12 row-span-2 md:col-span-6 2xl:col-span-4">
                <h6 class="mb-4 text-15">Popular Singers</h6>
                <div class="space-y-3">
                    <template v-for="singer in popularSingers" :key="singer.id">
                        <div class="flex items-center gap-3">
                            <div class="relative group/items shrink-0">
                                <img :src="singer.image" loading="lazy" alt="singer" title="Singer Images"
                                    class="rounded-md size-11" />
                                <a href="#!" title="Play btn"
                                    class="absolute inset-0 flex items-center justify-center text-white transition duration-300 ease-linear rounded-md opacity-0 group-hover/items:opacity-100 bg-gray-950/30">
                                    <i data-lucide="play" class="size-5"></i>
                                </a>
                            </div>
                            <div class="grow">
                                <h6 class="mb-1">
                                    <a href="#!" v-text="singer.name"></a>
                                </h6>
                                <p class="text-gray-500 dark:text-dark-500 line-clamp-1" v-text="singer.description">
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-6 2xl:col-span-4 mb-space">
                <h6 class="mb-4 text-15">Monthly Top Artists</h6>
                <simplebar data-simplebar class="pb-3">
                    <div class="flex gap-3 *:shrink-0">
                        <a v-for="artist in artists" :key="artist.name" href="#!" title="Artists Images"
                            class="relative inline-block">
                            <img :src="artist.image" loading="lazy" alt=""
                                class="border-4 rounded-full shadow-lg border-white/10 shadow-gray-200 dark:shadow-dark-850 size-14"
                                :title="artist.name" aria-describedby="tippy-1" />
                        </a>
                    </div>
                </simplebar>
            </div>
            <div
                class="relative col-span-12 xl:col-span-6 2xl:col-span-4 card ltr:bg-gradient-to-tr rtl:bg-gradient-to-tl from-sky-500/15 via-purple-500/15 to-primary-500/15">
                <img src="@/assets/images/dashboards/music/upgrade.png" loading="lazy" alt=""
                    class="absolute top-0 opacity-75 ltr:right-5 rtl:left-5">
                <div class="relative card-body">
                    <div class="max-w-52">
                        <h5 class="mb-2 capitalize">Check the power Of Domiex</h5>
                        <p class="mb-3 text-gray-500 dark:text-dark-500">Immerse yourself in a world where music comes
                            alive.</p>
                    </div>
                    <button type="button" class="btn btn-primary">Upgrade Now</button>
                </div>
            </div>
        </div>
    </div>
    <div
        class="fixed ltr:right-0 rtl:left-0 ltr:left-sidebar rtl:right-sidebar group-data-[sidebar=small]:ltr:left-sidebar-small group-data-[sidebar=small]:rtl:right-sidebar-small group-data-[sidebar=medium]:ltr:left-sidebar-medium group-data-[sidebar=medium]:rtl:right-sidebar-medium bottom-0 bg-white/30 dark:bg-dark-900/50 backdrop-blur-lg border-t z-[1020] p-3 border-gray-200 dark:border-dark-800">
        <div class="flex items-center gap-3">
            <img :src="currentSong.image" loading="lazy" alt="Music" class="rounded-md size-10 shrink-0" />
            <div class="w-64 shrink-0">
                <h6 class="mb-1">{{ currentSong.title }}</h6>
                <p class="text-gray-500 dark:text-dark-300">{{ currentSong.artist }}</p>
            </div>
            <div class="flex items-center gap-2 mx-auto grow">
                <audio ref="audio" :src="currentSong.audioSrc" @timeupdate="updateTime" @loadedmetadata="updateDuration"
                    preload="metadata" controls class="hidden"></audio>
                <a href="#!" title="Skip Icon" @click="skip(-10)"
                    class="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                    <i class="ri-skip-back-line"></i>
                </a>
                <a href="#!" title="Play Icon" @click="togglePlay"
                    class="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                    <i :class="isPlaying ? 'ri-pause-line' : 'ri-play-line'"></i>
                </a>
                <a href="#!" title="Skip Forward Icon" @click="skip(10)"
                    class="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                    <i class="ri-skip-forward-line"></i>
                </a>
                <div class="grow">
                    <div class="relative flex items-center gap-3">
                        <div class="w-full h-2 overflow-hidden bg-gray-200 rounded-full cursor-pointer dark:bg-dark-800"
                            @click="seek($event)">
                            <div class="h-full bg-primary-500" :style="{ width: (currentTime / duration) * 100 + '%' }">
                            </div>
                        </div>
                        <div class="flex justify-end text-sm">
                            <span>{{ formatTime(currentTime) }}</span>
                            <span class="mx-1">/</span>
                            <span>{{ formatTime(duration) }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <a href="#!" title="Muted Icon" @click="toggleMute"
                        class="flex items-center justify-center text-xl size-10 link hover:text-gray-800 dark:hover:text-dark-50">
                        <i :class="iconClass"></i>
                    </a>
                    <input type="range" aria-label="volume Range Input"
                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-dark-700"
                        min="0" max="100" step="1" :value="computedVolume" @input="handleVolumeChange" />
                </div>
            </div>
            <div class="shrink-0">
                <a href="#!" title="shuffle Icon">
                    <Shuffle data-lucide="shuffle" class="size-5">
                    </Shuffle>
                </a>
            </div>
        </div>
    </div>
</template>