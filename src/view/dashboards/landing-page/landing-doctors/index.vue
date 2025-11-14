<script setup lang="ts">
import { CalendarRange, MoveLeft, MoveRight, Phone, Quote, Star } from 'lucide-vue-next';
import DoctorHeader from './DoctorHeader.vue';
import HeroSection from './HeroSection.vue';
import Appointment from './Appointment.vue';
import { services, features, specialties, doctors, testimonials } from './doctor-date';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { ref } from 'vue';
import DoctorFooter from './DoctorFooter.vue';

interface FormData {
    name: string;
    phone: string | number; // phone can be string to accommodate leading zeros
    email: string;
    date: string;
    doctor: string;
    notes: string;
}

const formData = ref<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    doctor: '',
    notes: '',
});

const handleSubmit = () => {
    // Handle form submission logic here
    // You can add further processing like API calls here
};
const modules = [Pagination]
</script>
<template>
    <DoctorHeader />
    <HeroSection />
    <section class="pt-14">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-space">
                <a v-for="(service, index) in services" :key="index" href="#!" class="block text-center card bg-sky-100 dark:bg-sky-500/10 dark:border-sky-500/20 border-sky-200">
                    <div class="card-body">
                        <div class="flex items-center justify-center mx-auto mb-5 bg-white rounded-full size-16 dark:bg-dark-850 text-sky-500">
                            <component :is="service.icon" class="fill-sky-500/10 size-6"></component>
                        </div>
                        <h6>{{ service.title }}</h6>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <section class="relative py-14 md:py-28" id="about-us">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
                <div>
                    <div class="relative thumbnail before:absolute before:border ltr:before:-right-4 rtl:before:-left-4 before:size-full before:-bottom-4 before:border-sky-300 after:absolute after:size-full after:border ltr:after:-right-5 rtl:after:-left-5 after:-bottom-5 after:border-sky-300">
                        <img src="@/assets/images/hospital/landing/about.jpg" alt="" class="relative z-10 rounded-xl">
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <h1 class="mb-2 text-4xl leading-normal capitalize xl:text-4xl md:text-5xl">Professional Doctors
                        with <span class="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">15+
                            Years</span> of Experience</h1>
                    <p class="mb-5 text-gray-500 dark:text-dark-500 text-16">Dr Shopia Mia net worth has grown 68% this
                        year, from $2.2 billion (₹18,295 crore) in 2024, making him the richest doctor in USA.
                        Comparative data indicates Dr Shopia is also the fastest-growing non-resident on the list.</p>
                    <div class="grid grid-cols-1 gap-5 mb-6 sm:grid-cols-2 fs-16">
                        <div v-for="(item, index) in features" :key="index" class="relative flex gap-3">
                            <component :is="item.icon" class="mt-1 text-sky-500 size-5 shrink-0"></component>
                            <div>
                                <h6 class="mb-1">{{ item.title }}</h6>
                                <p class="text-gray-500 dark:text-dark-500">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <button type="button" class="py-3 btn btn-sky">
                            Learn More
                            <MoveRight data-lucide="move-right" class="inline-block ml-1 rtl:hidden size-4"></MoveRight>
                            <MoveLeft data-lucide="move-left" class="hidden mr-1 rtl:inline-block size-4"></MoveLeft>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Service Section -->
    <section class="relative py-14 md:py-28 bg-gray-50 dark:bg-dark-900/30" id="services">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="max-w-2xl mx-auto mb-12 text-center">
                <h2 class="mb-2 text-4xl leading-normal capitalize md:text-5xl">Service for <span class="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">your
                        Health</span></h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">Here is the complete slideshow for introducing our
                    services. You can also use it for the value section.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space">
                <div v-for="(specialty, index) in specialties" :key="index" class="p-5 transition duration-300 ease-linear rounded-lg hover:bg-white dark:hover:bg-dark-950 hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-200/75 dark:hover:shadow-dark-850">
                    <div :class="['flex items-center justify-center rounded-md', specialty.bgClass, 'size-12']">
                        <component :is="specialty.icon" :class="[specialty.color, 'fill-' + specialty.color + '/20']">
                        </component>
                    </div>
                    <h5 class="mt-4 mb-2">{{ specialty.title }}</h5>
                    <p class="mb-3 text-gray-500 dark:text-dark-500 text-16">{{ specialty.description }}</p>
                    <a href="#!" class="font-medium link link-sky">
                        Read More
                        <MoveRight data-lucide="move-right" class="inline-block ml-1 rtl:hidden size-4"></MoveRight>
                        <MoveLeft data-lucide="move-left" class="hidden mr-1 rtl:inline-block size-4"></MoveLeft>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="relative py-14 md:py-28" id="doctors">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="max-w-2xl mx-auto mb-12 text-center">
                <h2 class="mb-2 text-4xl leading-normal capitalize md:text-5xl">Meet our <span class="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">Doctors</span>
                </h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">Discover the expertise and compassion of our
                    dedicated doctors at Meet. Your health is in caring hands with us.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-space">
                <div v-for="doctor in doctors" :key="doctor.id" class="relative overflow-hidden transition duration-300 ease-linear card hover:-translate-y-2">
                    <span class="absolute !rounded-sm ltr:-left-0.5 rtl:-right-0.5 top-6 badge badge-sub-orange !text-13 !px-5 !py-1.5">
                        <Star data-lucide="star" class="inline-block ltr:mr-1 rtl:ml-1 size-3"></Star> {{ doctor.rating
                        }}
                    </span>
                    <div class="p-8">
                        <div class="mx-auto mt-6 overflow-hidden rounded-full shadow-lg size-24 ring-1 shadow-slate-200 ring-offset-2 ring-sky-500/20 dark:shadow-dark-800 dark:ring-offset-dark-900">
                            <img :src="doctor.image.href" alt="">
                        </div>
                        <div class="mt-5 text-center">
                            <h6 class="mb-1"><a href="#!" class="link link-sky !text-slate-800 dark:!text-dark-100">{{ doctor.name }}</a>
                            </h6>
                            <p class="mb-3 text-gray-500 dark:text-dark-500">{{ doctor.location }}</p>
                            <span class="rounded-sm min-w-32 badge badge-sky !text-13">{{ doctor.specialty }}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 border-t border-gray-200 dark:border-dark-800">
                        <div class="p-4 text-center">
                            <a href="#!" class="link link-sky">
                                <CalendarRange data-lucide="calendar-range" class="inline-block ltr:mr-1 rtl:ml-1 size-4 mb-0.5"></CalendarRange> Availability
                            </a>
                        </div>
                        <div class="p-4 text-center border-l border-gray-200 dark:border-dark-800">
                            <a href="#!" class="link link-sky">
                                <Phone data-lucide="phone" class="inline-block ltr:mr-1 rtl:ml-1 size-4 mb-0.5"></Phone>
                                Book
                                Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 text-center">
                <button type="button" class="btn btn-sky">
                    View All Doctors
                    <MoveRight data-lucide="move-right" class="inline-block ml-1 rtl:hidden size-4"></MoveRight>
                    <MoveLeft data-lucide="move-left" class="hidden mr-1 rtl:inline-block size-4"></MoveLeft>
                </button>
            </div>
        </div>
    </section>

    <section class="relative py-14 md:py-28 bg-slate-50 dark:bg-dark-900/30" id="feedback">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="max-w-4xl mx-auto mb-12 text-center">
                <h2 class="mb-2 text-4xl leading-normal capitalize md:text-5xl">Check what our
                    <span class="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">
                        Clients are saying
                    </span>
                </h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">
                    Discover the expertise and compassion of our dedicated doctors at Meet. Your health is in caring hands with us.
                </p>
            </div>
        </div>
        <div class="!py-2 swiper mySwiper">
            <swiper class="!py-6 swiper-wrapper" :modules="modules" :pagination="{clickable: true}" :slidesPerView="4" :spaceBetween="30" :centeredSlides="true">
                <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id" class="relative !p-6 !mb-0 !border-0 card">
                    <Quote data-lucide="quote" class="absolute stroke-1 size-12 text-sky-400 fill-sky-500/15 ltr:right-5 rtl:left-5 top-5"></Quote>
                    <div class="flex gap-4">
                        <div class="flex items-center gap-2 overflow-hidden rounded-md size-12 shrink-0">
                            <img :src="testimonial.image" alt="" />
                        </div>
                        <div class="grow">
                            <h6 class="mb-1">{{ testimonial.name }}</h6>
                            <p class="mb-4 text-gray-500 dark:text-dark-500">{{ testimonial.location }}</p>
                            <p class="text-17"><q>{{ testimonial.review }}</q></p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <section class="relative pt-14 md:pt-28">
        <div class="container px-4 mx-auto xl:px-20">
            <div class="max-w-2xl mx-auto mb-12 text-center">
                <h2 class="mb-2 text-4xl leading-normal capitalize md:text-5xl">Get Your <span class="underline decoration-dashed decoration-2 underline-offset-4 decoration-sky-300 font-roboto-slab text-sky-500">Appointment</span>
                </h2>
                <p class="text-gray-500 text-16 dark:text-dark-500">Discover the expertise and compassion of our
                    dedicated doctors at Meet. Your health is in caring hands with us.</p>
            </div>
            <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-20">
                <div>
                    <form @submit.prevent="handleSubmit">
                        <div class="grid items-center grid-cols-12 gap-space">
                            <div class="col-span-12 md:col-span-6">
                                <input v-model="formData.name" type="text" class="h-12 border-t-0 rounded-none border-x-0 dark:bg-transparent form-input focus:border-b-sky-500" placeholder="Your name" required />
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <input v-model="formData.phone" type="number" class="h-12 border-t-0 rounded-none border-x-0 dark:bg-transparent form-input focus:border-b-sky-500" placeholder="Your phone number" required />
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <input v-model="formData.email" type="email" class="h-12 border-t-0 rounded-none border-x-0 dark:bg-transparent form-input focus:border-b-sky-500" placeholder="Your email address" required />
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <input v-model="formData.date" type="date" class="h-12 border-t-0 rounded-none border-x-0 dark:bg-transparent form-input focus:border-b-sky-500" required />
                            </div>
                            <div class="col-span-12">
                                <input v-model="formData.doctor" type="text" class="h-12 border-t-0 rounded-none border-x-0 dark:bg-transparent form-input focus:border-b-sky-500" placeholder="Doctor name" required />
                            </div>
                            <div class="col-span-12">
                                <textarea v-model="formData.notes" class="h-auto border-t-0 rounded-none border-x-0 dark:bg-transparent form-input focus:border-b-sky-500" rows="3" placeholder="Notes" required></textarea>
                            </div>
                            <div class="col-span-12 md:col-span-6">
                                <p class="text-gray-500">
                                    Please Call Us:
                                    <a href="#!" class="font-medium text-sky-500">+241 01234 567 89</a>
                                </p>
                            </div>
                            <div class="col-span-12 text-right md:col-span-6">
                                <button type="submit" class="btn btn-sky">Book Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div class="relative mt-8 lg:ml-12 lg:mt-0">
                        <div class="absolute left-10 sm:left-40 lg:left-0 xl:left-42 2xl:left-48 bottom-1/2 size-52 md:size-96 bg-sky-500/15 blur-3xl">
                        </div>
                        <img src="@/assets/images/hospital/landing/contact.png" alt="" class="relative mx-auto">
                    </div>
                </div>
            </div>
            <Appointment />
        </div>
    </section>
    <DoctorFooter />
</template>