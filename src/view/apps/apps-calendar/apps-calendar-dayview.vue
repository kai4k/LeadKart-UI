<script setup lang="ts">
import dayGridPlugin from '@fullcalendar/daygrid'
import PageHeading from '@/components/common/PageHeading.vue';
import { ref } from 'vue';
const calendarOptions = ref({
    timeZone: 'America/New_York',
    plugins: [
        dayGridPlugin,
    ],
    initialView: 'dayGridWeek',
    headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridWeek,dayGridDay' // user can switch between the two
    }

})
</script><template>
    <PageHeading title="Day Grid View" sub-title="Calendar" />
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>