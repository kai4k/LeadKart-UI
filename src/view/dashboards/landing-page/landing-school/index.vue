<script setup lang="ts">
import Header from './SchoolHeader.vue';
import HeroSection from './HeroSection.vue';
import FeatureCard from './FeatureCard.vue';
import StartStepCard from './StartStepCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
const modules = [Pagination, Autoplay, Navigation];
import { advantages, slides, instructors, blogs } from './school-date';
import { Calendar, CalendarClock, Crown, GraduationCap, HandMetal, MoveLeft, MoveRight, UserRound, Users } from 'lucide-vue-next';
import SchoolFooter from './SchoolFooter.vue';
import ThemeButton from '../landing-ecommerce/ThemeButton.vue';
const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
};

</script>
<template>
    <div class="flex items-center justify-center h-10 text-center bg-pink-400 dark:bg-pink-700 text-pink-50 dark:text-pink-200">
        <div class="container">
            <p>Join new friends and embark on a New Year learning experience. <a href="#!" class="underline transition duration-300 ease-linear hover:text-white">Click on the student
                    list!</a></p>
        </div>
    </div>
    <Header />
    <!-- Hero Section -->
    <HeroSection />

    <section class="relative pt-12 md:pb-20">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <span class="!px-5 mb-4 badge badge-sub-orange !text-15 !py-1.5 !rounded-full">Our Featured</span>
                <h2 class="mb-3 leading-normal capitalize">Top Education Offered by Domiex School</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">Our dedicated team of educators and comprehensive
                    curriculum are designed to foster academic excellence and personal growth in every student. </p>
            </div>
            <FeatureCard />
        </div>
    </section>

    <!-- About Us Section -->
    <section class="relative py-14 md:py-24" id="about-us">
        <div class="hidden md:block size-[400px] lg:size-[480px] xl:size-[650px] border rounded-md border-orange-500 blur-sm absolute">
        </div>
        <div class="container">
            <div class="grid items-center grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-start-2">
                    <div class="relative before:absolute before:inset-0 before:bg-orange-500/10 before:backdrop-blur-lg before:rounded-md before:top-20 thumbnail">
                        <span class="absolute text-2xl font-bold tracking-wide uppercase -rotate-90 text-orange-500/30 -left-3 bottom-14">Domiex</span>
                        <img src="@/assets/images/school/landing/img-05.png" alt="" class="max-h-[36rem] relative mx-auto">
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6 2xl:col-span-4 2xl:col-start-8">
                    <p class="mb-3 font-medium text-orange-500 text-16">About Us</p>
                    <h2 class="mb-6 leading-normal capitalize">We are the best school and offer numerous advantages.
                    </h2>

                    <div class="space-y-4">
                        <div v-for="(advantage, index) in advantages" :key="index" class="flex items-center gap-4 p-3 rounded-lg shadow-2xl shadow-gray-100 dark:shadow-dark-800/50">
                            <div class="flex items-center justify-center rounded-full size-12 bg-primary-500/10 text-primary-500">
                                <component :is="advantage.icon" class="size-6">
                                </component>
                            </div>
                            <h6>{{ advantage.text }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Start Step section -->
    <section class="relative py-14 md:py-24" id="courses">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <h2 class="mb-3 leading-normal capitalize">How to get Started</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">Starting an e-learning process involves several
                    steps to ensure a smooth transition and effective learning experience for students. Here's a
                    comprehensive guide to get you started:</p>
            </div>
            <div>
                <StartStepCard number="1" :icon="UserRound" title="Create an Account" description="By creating an account, you can easily connect with others, whether it's through direct messaging on social media or email communication through a registered email account." iconStyle="text-purple-500" />
                <StartStepCard number="2" :icon="HandMetal" title="Select Class" description="The Select class in Selenium provides methods to interact with dropdown lists. Using these methods, you can easily automate interactions with dropdown lists on web pages using Selenium, making it easier to test." :right="true" cardDirection="ltr:ml-auto rtl:mr-auto" iconStyle="text-red-500" />
                <StartStepCard number="3" :icon="Crown" title="Select Your Courses" description="You can start by choosing a field that you are interested in, and from there, think of a course that will match your skills, values and personality type. You are in a better position to figure out what courses will suit you." iconStyle="text-green-500" />
                <StartStepCard number="4" :icon="Users" title="Select Your Teachers" description="Know your principles and priorities and compare them to the person/system you want to learn from. You will want to find a teacher who aligns with your principles and priorities." :right="true" cardDirection="ltr:ml-auto rtl:mr-auto" iconStyle="text-sky-500" />
                <StartStepCard number="5" :icon="CalendarClock" title="Set Class Time" description="By creating an account, you can easily connect with others, whether it's through direct messaging on social media or email communication through a registered email account." iconStyle="text-primary-500" />
                <StartStepCard number="6" :icon="GraduationCap" title="Now You Can Start" description="By creating an account, you can easily connect with others, whether it's through direct messaging on social media or email communication through a registered email account." :right="true" cardDirection="ltr:ml-auto rtl:mr-auto" iconStyle="text-pink-500" />
            </div>
        </div>
    </section>
    <!-- View All Reviews -->
    <section class="relative pt-14 md:py-24 bg-gradient-to-b from-orange-500/10">
        <div class="container px-4 mx-auto">
            <div class="grid items-center grid-cols-12 gap-5">
                <div class="col-span-12 md:col-span-6">
                    <h2 class="mb-4 leading-normal capitalize">What Our Beloved Students Say About</h2>
                    <p class="mb-5 text-gray-500 dark:text-dark-500 text-16">These testimonials reflect the profound
                        impact our school has on its students, fostering an environment and achieve their dreams. Our
                        students' experiences speak volumes about the impact of our school. Here are some heartfelt
                        testimonials from those who have thrived in our community:</p>
                    <a href="#!" class="text-orange-500 underline link hover:text-orange-600">
                        View All Reviews
                        <MoveRight data-lucide="move-right" class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                        <MoveLeft data-lucide="move-left" class="mr-1 rtl:inline-block ltr:hidden size-4"></MoveLeft>
                    </a>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="p-3 swiper swiper-container mySwiper group/swiper" dir="ltr">
                        <swiper :modules="modules" :navigation="navigation" class="swiper-wrapper" :loop="true" :autoplay="true">
                            <swiper-slide v-for="(slide, index) in slides" :key="index">
                                <div class="card">
                                    <div class="p-8 card-body">
                                        <img :src="slide.image" alt="" class="rounded-modern size-20">
                                        <div class="mt-5 text-lg text-gray-500 dark:text-dark-500">
                                            <i v-for="star in 5" :key="star" class="text-yellow-500 ri-star-fill"></i>
                                        </div>
                                        <h6 class="mt-3 mb-3">{{ slide.title }}</h6>
                                        <p class="text-gray-500 text-16 dark:text-dark-500">{{ slide.text }}</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-next after:font-remix after:text-2xl after:text-orange-500 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea6e']">
                            </div>
                            <div class="swiper-button-prev after:font-remix after:text-2xl after:text-orange-500 opacity-0 group-hover/swiper:opacity-100 transition ease-linear duration-300 after:content-['\ea64']">
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- mentors Section -->
    <section class="relative py-14 md:py-24" id="mentors">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <h2 class="mb-3 leading-normal capitalize">Meet with our mentors</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">Ask your potential mentor if he or she can make time
                    for an hour meeting with you. You don't want to be rushed, and you want for the ask you questions
                    about your goals, etc.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8">
                <div v-for="(instructor, index) in instructors" :key="index" class="relative bg-transparent !border-0 shadow-none dark:bg-transparent card thumbnail">
                    <div class="relative pb-0 card-body before:absolute before:inset-x-0 before:bottom-0 before:bg-gray-100 dark:before:bg-gray-900/40 before:h-[80%] before:rounded-t-full">
                        <img :src="instructor.image" alt="" class="relative mx-auto max-h-80" ref="parallaxImages">
                    </div>
                    <div class="text-center card-body">
                        <h6 class="mb-1 text-16">{{ instructor.name }}</h6>
                        <p class="text-gray-500 dark:text-dark-500">{{ instructor.position }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Blogs Section -->
    <section class="relative py-12 md:pb-24" id="blogs">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto mb-12 text-center">
                <h2 class="mb-3 leading-normal capitalize">Latest Blogs</h2>
                <p class="text-gray-500 dark:text-dark-500 text-16">The state of blogs now. Short answer: yes. A recent
                    survey found that over 60% of all internet users read blogs, while another found that 77% of
                    internet users read blogs daily.</p>
            </div>
            <div class="grid grid-cols-1 space-y-6 lg:grid-cols-2 md:gap-8 md:space-y-0">
                <div v-for="(post, index) in blogs" :key="index" class="grid items-center grid-cols-12 md:gap-8">
                    <div class="col-span-12 md:col-span-4">
                        <img :src="post.image" alt="" class="rounded-md">
                    </div>
                    <div class="col-span-12 mt-5 md:col-span-8 md:mt-0">
                        <p class="mb-2 text-gray-500 dark:text-dark-500">
                            <Calendar data-lucide="calendar" class="inline-block align-middle ltr:mr-1 rtl:ml-1 size-4">
                            </Calendar>
                            {{ post.date }}
                        </p>
                        <h5 class="mb-1">
                            <a href="#!" class="text-current link hover:text-primary-500 dark:hover:text-primary-500 dark:text-current">{{
                                post.title }}</a>
                        </h5>
                        <p class="mb-3 text-gray-500 dark:text-dark-500 line-clamp-2">{{ post.excerpt }}</p>
                        <a href="#!" class="font-medium text-orange-500 link hover:text-orange-600">
                            Read More
                            <MoveRight class="ml-1 ltr:inline-block rtl:hidden size-4"></MoveRight>
                            <MoveLeft class="mr-1 rtl:inline-block ltr:hidden size-4"></MoveLeft>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-14 md:py-24 bg-primary-500" id="contact-us">
        <div class="container px-4 mx-auto">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="mb-5 leading-normal capitalize text-primary-50">Come join Us and Achieve your dreams Here at
                    the best School</h1>
                <a href="#!" class="rounded-full btn btn-orange">Get Started</a>
            </div>
        </div>
    </section>
    <SchoolFooter />
    <ThemeButton className="bg-orange-500" />
</template>
