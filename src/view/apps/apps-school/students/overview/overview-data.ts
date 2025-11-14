import { ref } from "vue";

const labels = ref([
  ["Mathematics"],
  ["Physics"],
  ["Chemistry"],
  ["Biology"],
  ["CS"],
  ["English"],
]);
const series = [
  {
    name: "Performance",
    data: [69, 78, 49, 63, 54, 86],
  },
];
//Test Marks (Subject) Chart
const marksChart = {
  series: series,
  chartOptions: {
    chart: {
      type: "bar",
      height: 260,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        distributed: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.2,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 30],
      },
    },
    dataLabels: {
      enabled: false,
      formatter(val: number) {
        return `${val}%`;
      },
    },
    xaxis: {
      categories: labels.value,
    },
    yaxis: {
      tickAmount: Math.ceil(Math.max(...series[0].data) / 10),
      labels: {
        formatter(val: number) {
          return `${val}%`;
        },
      },
    },
    colors: ["#90CDFF", "#D8B4FE", "#7DD3FC", "#86EFAC", "#FECACA", "#FED7AA"],
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    legend: {
      show: false,
    },
  },
};

export { marksChart };
