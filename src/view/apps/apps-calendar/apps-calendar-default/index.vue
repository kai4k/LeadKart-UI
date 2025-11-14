<script setup lang="ts">
import PageHeading from '@/components/common/PageHeading.vue';
import { CirclePlus } from 'lucide-vue-next';
import { defineEmits, ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import AddEvent from './AddEvent.vue';
import { events } from './evnet-data';
const showCalendarEvent = ref(false);
const setCalenderShowEventValue = (state: boolean) => {
    showCalendarEvent.value = state
}
const emit = defineEmits<{
    (event: 'openModal', type: string): void;
}>();

const openModal = (type: string) => {
    emit('openModal', type);
};

const onDragStart = (eventType: string) => {
};
const calendarOptions: object = {
    plugins: [dayGridPlugin, interactionPlugin,],
    editable: true,

    events: events.value,
    eventContent: (info: any) => {
        return { html: `<div class='font-bold'>${info.event.title}</div>` };
    },
}

</script>
<template>
    <PageHeading title="Default" sub-title="Calendar" />
    <div>
        <div class="flex flex-wrap items-center gap-2 mb-space" id="external-events">
            <div class="flex items-center gap-2 text-white grow" id='external-events'>
                <div class="block fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn !btn-purple"
                    draggable="true" @dragstart="onDragStart('Events')">
                    <div class="fc-event-main">Events</div>
                </div>
                <div class="block fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn !btn-primary"
                    draggable="true" @dragstart="onDragStart('Personal')">
                    <div class="fc-event-main">Personal</div>
                </div>
                <div class="block fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn !btn-green"
                    draggable="true" @dragstart="onDragStart('Meeting')">
                    <div class="fc-event-main">Meeting</div>
                </div>
                <div class="block fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event btn !btn-sky"
                    draggable="true" @dragstart="onDragStart('Festival Function')">
                    <div class="fc-event-main">Festival Function</div>
                </div>
            </div>

            <button type="button" class="btn btn-primary" id="newEvent" @click="setCalenderShowEventValue(true)"
                data-modal-target="addEventModal">
                <CirclePlus data-lucide="circle-plus" class="inline-block size-4 ltr:mr-1 rtl:ml-1"></CirclePlus> Add
                Event
            </button>
            <button class="hidden" id="editEvent" data-modal-target="addEventModal" @click="openModal('edit')"></button>
        </div>
        <div class="card">
            <div class="card-body">
                <FullCalendar :options="calendarOptions" />
            </div>
        </div>
    </div>
    <AddEvent :showModal="showCalendarEvent" :setModalValue="setCalenderShowEventValue" />
</template>