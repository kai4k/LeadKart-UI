
import { ref } from "vue";

//Simple Pie Chart
const simplePieChart = {
  series: [44, 55, 13, 43, 22],
  chartOptions: {
    chart: {
      height: 300,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

//Simple Donut Chart
const simpleDonutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 300,
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

//Update Donut
const updateDonut = ref({
  series: [44, 55, 13, 33],
  chartOptions: {
    chart: {
      height: 300,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            show: true,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  },
});

const chartInstance = ref<ApexCharts | null>(null);
// Re-render chart on resize
const reloadChart = () => {
  if (chartInstance.value) {
    chartInstance.value.updateOptions(updateDonut.value.chartOptions);
  }
};
// Add a random series
const add = () => {
  updateDonut.value.series.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
  if (chartInstance.value) {
    chartInstance.value.updateSeries(updateDonut.value.series);
  }
};
// Remove the last series
const remove = () => {
  updateDonut.value.series.pop();
  if (chartInstance.value) {
    chartInstance.value.updateSeries(updateDonut.value.series);
  }
};
// Randomize the series
const randomize = () => {
  updateDonut.value.series = updateDonut.value.series.map(
    () => Math.floor(Math.random() * (100 - 1 + 1)) + 1
  );
  if (chartInstance.value) {
    chartInstance.value.updateSeries(updateDonut.value.series);
  }
};
// Reset the series to initial values
const reset = () => {
  updateDonut.value.series = [44, 55, 13, 33];
  if (chartInstance.value) {
    chartInstance.value.updateSeries(updateDonut.value.series);
  }
};

//Monochrome Pie Chart
const monochromePieChart = {
  series: [25, 15, 44, 55, 41, 17],
  chartOptions: {
    chart: {
      height: 340,
      type: "pie",
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    theme: {
      monochrome: {
        enabled: true,
      },
    },
    colors: ["#F59E0B"], // Monochrome color
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },
    title: {
      text: "Monochrome Pie",
    },
    dataLabels: {
      formatter(val: number, opts: any) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, `${val.toFixed(1)}%`];
      },
    },
    legend: {
      show: false,
    },
  },
};

//Gradient Donut Chart
const gradientDonutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 300,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter(val: string, opts: any) {
        return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
      },
    },
    title: {
      text: "Gradient Donut with custom Start-angle",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

//Semi Donut Chart
const semiDonutChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 300,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

//Donut with Pattern Chart
const donutWithPatternChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    chart: {
      height: 300,
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        blur: 3,
        opacity: 0.8,
      },
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines",
        ],
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    theme: {
      palette: "palette2",
    },
    title: {
      text: "Favourite Movie Type",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

export {
  simplePieChart,
  simpleDonutChart,
  updateDonut,
  add,
  remove,
  randomize,
  reset,
  reloadChart,
  monochromePieChart,
  gradientDonutChart,
  semiDonutChart,
  donutWithPatternChart,
};
