import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "aos/dist/aos.css";
import SimpleBar from "simplebar-vue";
import VueApexCharts from "vue3-apexcharts";
// @ts-ignore
import VueVectorMap from "vuevectormap";
import VueCompareImage from "vue3-compare-image";
import "jsvectormap/dist/maps/world.js";
import "swiper/css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueTheMask from "vue-the-mask";
import FullCalendar from "@fullcalendar/vue3";
import store from "./store/layout.d";
import "@/assets/css/plugins.css"
import "@/assets/css/icons.css"
import "@/assets/css/tailwind.css"

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store);
// @ts-ignore
app.use(VueTheMask);
app.use(VueCompareImage);
app.use(VueVectorMap, {
  map: "world",
});

app.use(VueApexCharts);
app.component("SimpleBar", SimpleBar);
app.component("v-select", vSelect);
app.component("ApexCharts", VueApexCharts);
app.component("FullCalendar", FullCalendar);
app.mount("#app");
