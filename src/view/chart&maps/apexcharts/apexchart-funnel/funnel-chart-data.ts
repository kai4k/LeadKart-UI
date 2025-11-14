//Funnel Chart

import { getColorCodes } from "@/utils/reusable-functions";

const funnelChart = {
  series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ],

  chartOptions: {
    labels: [
      "Sourced",
      "Screened",
      "Assessed",
      "HR Interview",
      "Technical",
      "Verify",
      "Offered",
      "Hired",
    ],
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number, opt: any) {
        return `${opt.w.globals.labels[opt.dataPointIndex]}: ${val}`;
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: "Recruitment Funnel",
      align: "middle",
    },
    xaxis: {},
    legend: {
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};

const pyramidChart = {
  series: [
    {
      name: "",
      data: [200, 330, 548, 740, 880, 990, 1100, 1380],
    },
  ],
  chartOptions: {
    labels: [
      "Sweets",
      "Processed Foods",
      "Healthy Fats",
      "Meat",
      "Beans & Legumes",
      "Dairy",
      "Fruits & Vegetables",
      "Grains",
    ],
    chart: {
      height: 300,
      type: "bar",
      animations: {
        speed: 500,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    colors: [
      "#F44F5E",
      "#E55A89",
      "#D863B1",
      "#CA6CD8",
      "#B57BED",
      "#8D95EB",
      "#62ACEA",
      "#4BC3E6",
    ],
    dataLabels: {
      enabled: true,
      formatter: (val: number, opt: any) => {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: "Pyramid Chart",
      align: "middle",
    },
    xaxis: {},
    legend: {
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};
export { funnelChart, pyramidChart };
