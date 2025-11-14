<script setup lang="ts">

defineProps({
    title: String,
    number: Number,
    className: String,
    bgColor: String,
    sign: String
})
</script>
<template>
    <div class="relative col-span-12 p-5 overflow-hidden rounded-md md:col-span-6 xl:col-span-3" :class="bgColor">
        <svg class="absolute top-0 left-16 size-52" viewBox="0 0 1422 800">
            <g shape-rendering="crispEdges" stroke-linejoin="round" fill="none" stroke-width="2" :class="className">
                <polygon points="1066.5,200 1066.5,0 1422,200"></polygon>
                <polygon points="1066.5,100 1066.5,0 888.75,100"></polygon>
                <polygon points="711,0 888.75,100 711,100"></polygon>
                <polygon points="888.75,100 711,100 711,200"></polygon>
                <polygon points="977.625,150 1066.5,100 1066.5,150"></polygon>
                <polygon points="888.75,150 977.625,100 888.75,100"></polygon>
                <polygon points="888.75,200 977.625,150 977.625,200"></polygon>
                <polygon points="1066.5,200 977.625,150 1066.5,150"></polygon>
                <polygon points="977.625,200 1066.5,200 1066.5,250"></polygon>
                <polygon points="977.625,250 888.75,250 977.625,200"></polygon>
                <polygon points="977.625,250 888.75,300 977.625,300"></polygon>
                <polygon points="1066.5,250 977.625,300 1066.5,300"></polygon>
                <polygon points="888.75,200 888.75,300 711,300"></polygon>
                <polygon points="888.75,400 888.75,300 711,300"></polygon>
                <polygon points="888.75,300 1066.5,400 1066.5,300"></polygon>
                <polygon points="1244.25,300 1422,200 1244.25,200"></polygon>
                <polygon points="1244.25,300 1066.5,300 1066.5,200"></polygon>
                <polygon points="1066.5,400 1244.25,400 1244.25,300"></polygon>
                <polygon points="1422,400 1422,300 1244.25,400"></polygon>
                <polygon points="533.25,100 533.25,0 711,100"></polygon>
                <polygon points="533.25,0 533.25,100 355.5,0"></polygon>
                <polygon points="355.5,100 533.25,100 533.25,200"></polygon>
                <polygon points="711,100 533.25,100 711,200"></polygon>
                <polygon points="355.5,0 355.5,200 0,200"></polygon>
                <polygon points="355.5,300 177.75,300 355.5,200"></polygon>
                <polygon points="177.75,300 177.75,200 0,200"></polygon>
                <polygon points="177.75,300 177.75,400 0,400"></polygon>
                <polygon points="177.75,400 177.75,300 355.5,300"></polygon>
                <polygon points="711,300 533.25,300 711,200"></polygon>
                <polygon points="533.25,250 444.375,200 533.25,200"></polygon>
                <polygon points="444.375,250 355.5,200 444.375,200"></polygon>
                <polygon points="355.5,300 444.375,250 355.5,250"></polygon>
                <polygon points="533.25,250 444.375,250 444.375,300"></polygon>
                <polygon points="355.5,400 533.25,400 355.5,300"></polygon>
                <polygon points="533.25,400 533.25,300 711,400"></polygon>
                <polygon points="533.25,500 533.25,400 711,500"></polygon>
                <polygon points="533.25,500 533.25,400 355.5,500"></polygon>
                <polygon points="533.25,500 444.375,550 444.375,500"></polygon>
                <polygon points="444.375,500 444.375,550 355.5,550"></polygon>
                <polygon points="355.5,550 444.375,550 444.375,600"></polygon>
                <polygon points="533.25,550 444.375,600 533.25,600"></polygon>
                <polygon points="711,500 622.125,500 622.125,550"></polygon>
                <polygon points="533.25,550 622.125,500 533.25,500"></polygon>
                <polygon points="622.125,550 622.125,600 533.25,550"></polygon>
                <polygon points="711,550 622.125,550 622.125,600"></polygon>
                <polygon points="355.5,400 355.5,500 177.75,400"></polygon>
                <polygon points="0,400 177.75,400 0,500"></polygon>
                <polygon points="177.75,600 0,500 0,600"></polygon>
                <polygon points="355.5,500 355.5,600 177.75,500"></polygon>
                <polygon points="0,800 355.5,600 355.5,800"></polygon>
                <polygon points="533.25,700 711,600 711,700"></polygon>
                <polygon points="355.5,700 533.25,600 355.5,600"></polygon>
                <polygon points="533.25,700 533.25,800 355.5,700"></polygon>
                <polygon points="533.25,800 711,700 533.25,700"></polygon>
                <polygon points="1422,400 1422,500 1244.25,500"></polygon>
                <polygon points="1244.25,500 1066.5,500 1244.25,400"></polygon>
                <polygon points="1244.25,600 1244.25,500 1066.5,500"></polygon>
                <polygon points="1422,500 1422,600 1244.25,600"></polygon>
                <polygon points="1066.5,400 888.75,500 888.75,400"></polygon>
                <polygon points="888.75,450 888.75,400 799.875,400"></polygon>
                <polygon points="711,400 799.875,450 799.875,400"></polygon>
                <polygon points="799.875,500 711,450 799.875,450"></polygon>
                <polygon points="799.875,500 799.875,450 888.75,450"></polygon>
                <polygon points="888.75,550 799.875,550 888.75,500"></polygon>
                <polygon points="711,550 799.875,500 799.875,550"></polygon>
                <polygon points="799.875,600 799.875,550 711,600"></polygon>
                <polygon points="799.875,600 888.75,550 888.75,600"></polygon>
                <polygon points="888.75,600 888.75,500 1066.5,600"></polygon>
                <polygon points="1066.5,600 888.75,700 1066.5,700"></polygon>
                <polygon points="888.75,600 711,700 888.75,700"></polygon>
                <polygon points="888.75,800 711,800 888.75,700"></polygon>
                <polygon points="888.75,700 1066.5,800 1066.5,700"></polygon>
                <polygon points="1066.5,800 1422,600 1422,800"></polygon>
            </g>
        </svg>
        <div class="relative">
            <p class="mb-12 text-gray-500 dark:text-dark-500">{{ title }}</p>

            <h5><span x-init="updateCounter">{{
                number }}</span>{{ sign }}</h5>
            <p class="mt-1 text-gray-500 dark:text-dark-500">Last 28 days</p>
        </div>
    </div>
</template>