import { getColorCodes } from "@/utils/reusable-functions";
import { ref } from "vue";
const categories = ref([
  "1/11/2024",
  "2/11/2024",
  "3/11/2024",
  "4/11/2024",
  "5/11/2024",
  "6/11/2024",
  "7/11/2024",
  "8/11/2024",
  "9/11/2024",
  "10/11/2024",
  "11/11/2024",
  "12/11/2024",
  "1/11/2025",
  "2/11/2025",
  "3/11/2025",
  "4/11/2025",
  "5/11/2025",
  "6/11/2025",
]);
//Working Hours Charts.
const workingHoursChart = () => {
  return {
    // Series data
    series: [
      {
        name: "Hours",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 16, 2, 7, 8],
      },
    ],
    // Computed chart options
    chartOptions: {
      chart: {
        defaultLocale: "en",
        height: 300,
        type: "line",
        zoom: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.15,
        },
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: categories.value,
        tickAmount: 10,
        labels: {
          formatter: (value: any, timestamp: number, opts: any) => {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: getColorCodes(["bg-primary-500"]),
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      colors: getColorCodes(["bg-purple-500"]),
      grid: {
        padding: {
          top: 0,
          right: 5,
          bottom: 0,
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };
};

//Column with Data Labels Chart
const taskActivityChart = () => {
  return {
    series: [
      {
        name: "Total Task",
        data: [3, 4, 8, 2, 6, 10, 8],
      },
    ],

    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    chartOptions: {
      chart: {
        height: 300,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        tickAmount: 10,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      colors: getColorCodes(["bg-primary-500"]),
      title: {
        text: "Monthly Tasks Overview",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };
};

export { taskActivityChart, workingHoursChart };
