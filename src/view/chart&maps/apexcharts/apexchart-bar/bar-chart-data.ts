import { getColorCodes } from "@/utils/reusable-functions";

//basic bar Chart
const basicBarChart = () => {
  return {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chartOptions: {
      labels: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        tickAmount: 7,
      },
      yaxis: {},
      colors: getColorCodes(["bg-primary-500"]),
      grid: {
        padding: {
          right: 0,
          bottom: -10,
        },
      },
    },
  };
};

//Grouped bar Chart
const groupedBarChart = () => {
  return {
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    chartOptions: {
      labels: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      chart: {
        type: "bar",
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      colors: getColorCodes(["bg-primary-500", "bg-sky-500"]),
      xaxis: {
        tickAmount: 7,
      },
      grid: {
        padding: {
          right: 0,
          bottom: -10,
        },
      },
    },
  };
};

//Stacked bar Chart
const stackedBarChartOptions = () => {
  return {
    series: [
      { name: "Marine Sprite", data: [44, 55, 41, 37, 22, 43, 21] },
      { name: "Striking Calf", data: [53, 32, 33, 52, 13, 43, 32] },
      { name: "Tank Picture", data: [12, 17, 11, 9, 15, 11, 20] },
      { name: "Bucket Slope", data: [9, 7, 5, 8, 6, 9, 4] },
      { name: "Reborn Kid", data: [25, 12, 19, 32, 25, 24, 10] },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "Fiction Books Sales",
      },
      xaxis: {
        tickAmount: 8,
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
        labels: {
          formatter: (val: any) => `${val}K`,
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: (val: any) => `${val}K`,
        },
      },
      fill: {
        opacity: 1,
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-red-500",
        "bg-purple-500",
        "bg-sky-500",
      ]),
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
      grid: {
        padding: {
          right: 0,
          bottom: -10,
        },
      },
    },
  };
};

//Stacked bar 100 Chart
const stackedBar100Chart = () => {
  return {
    series: [
      { name: "Marine Sprite", data: [44, 55, 41, 37, 22, 43, 21] },
      { name: "Striking Calf", data: [53, 32, 33, 52, 13, 43, 32] },
      { name: "Tank Picture", data: [12, 17, 11, 9, 15, 11, 20] },
      { name: "Bucket Slope", data: [9, 7, 5, 8, 6, 9, 4] },
      { name: "Reborn Kid", data: [25, 12, 19, 32, 25, 24, 10] },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        stackType: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-orange-500",
        "bg-green-500",
        "bg-indigo-500",
        "bg-sky-500",
      ]),
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "100% Stacked Bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      tooltip: {
        y: {
          formatter: (val: any) => `${val}K`,
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
      grid: {
        padding: {
          right: 0,
          bottom: -10,
        },
      },
    },
  };
};

//Grouped Stacked Bars Chart
const groupedStackedBarsChart = () => {
  return {
    series: [
      {
        name: "Q1 Budget",
        group: "budget",
        data: [44000, 55000, 41000, 67000, 22000],
      },
      {
        name: "Q1 Actual",
        group: "actual",
        data: [48000, 50000, 40000, 65000, 25000],
      },
      {
        name: "Q2 Budget",
        group: "budget",
        data: [13000, 36000, 20000, 8000, 13000],
      },
      {
        name: "Q2 Actual",
        group: "actual",
        data: [20000, 40000, 25000, 10000, 12000],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      dataLabels: {
        formatter: (val: any) => `${val / 1000}K`,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: [
          "Online advertising",
          "Sales Training",
          "Print advertising",
          "Catalogs",
          "Meetings",
        ],
        labels: {
          formatter: (val: any) => `${val / 1000}K`,
        },
      },
      fill: {
        opacity: 1,
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-primary-300",
        "bg-green-400",
      ]),
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      grid: {
        padding: {
          right: 0,
          bottom: -10,
        },
      },
    },
  };
};

//Bar with Negative Values Bars Chart
const barWithNegativeValuesBarsChart = {
  series: [
    {
      name: "Males",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ],
    },
    {
      name: "Females",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      stacked: true,
      height: 300,
    },
    colors: ["#63B3ED", "#5A67D8"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        right: 0,
        bottom: -10,
      },
    },
    yaxis: {
      min: -5,
      max: 5,
    },
    tooltip: {
      shared: false,
      x: {
        formatter: (val: any) => val,
      },
      y: {
        formatter: (val: any) => `${Math.abs(val)}%`,
      },
    },
    title: {
      text: "Mauritius Population Pyramid 2011",
    },
    xaxis: {
      tickAmount: 10,
      categories: [
        "85+",
        "80-84",
        "75-79",
        "70-74",
        "65-69",
        "60-64",
        "55-59",
        "50-54",
        "45-49",
        "40-44",
        "35-39",
        "30-34",
        "25-29",
        "20-24",
        "15-19",
        "10-14",
        "5-9",
        "0-4",
      ],
      title: {
        text: "Percent",
      },
      labels: {
        formatter: (val: any) => `${Math.abs(Math.round(val))}%`,
      },
    },
  },
};

//Bar with Markers Chart
const barWithMarkersChart = () => {
  return {
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "2011",
            y: 12,
            goals: [
              {
                name: "Expected",
                value: 14,
                strokeWidth: 2,
                strokeDashArray: 2,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2012",
            y: 44,
            goals: [
              {
                name: "Expected",
                value: 54,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2013",
            y: 54,
            goals: [
              {
                name: "Expected",
                value: 52,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2014",
            y: 66,
            goals: [
              {
                name: "Expected",
                value: 61,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2015",
            y: 81,
            goals: [
              {
                name: "Expected",
                value: 66,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: "round",
                strokeColor: "#775DD0",
              },
            ],
          },
          {
            x: "2016",
            y: 67,
            goals: [
              {
                name: "Expected",
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: "#775DD0",
              },
            ],
          },
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 300,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ["#00E396", "#775DD0"],
      dataLabels: {
        formatter: (val: number, opt: any) => {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual", "Expected"],
        markers: {
          fillColors: ["#00E396", "#775DD0"],
        },
      },
      grid: {
        padding: {
          right: 0,
          bottom: -10,
        },
      },
    },
  };
};

//Reversed Bar Chart
const reversedBarChart = () => {
  return {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690],
      },
    ],
    chartOptions: {
      chart: {
        height: 300,
        type: "bar",
      },
      annotations: {
        xaxis: [
          {
            x: 500,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "X annotation",
            },
          },
        ],
        yaxis: [
          {
            y: "July",
            y2: "September",
            label: {
              text: "Y annotation",
            },
          },
        ],
      },
      colors: getColorCodes(["bg-primary-500"]),
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        tickAmount: 7,
        categories: [
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true,
        },
      },
    },
  };
};

//Patterned Bar Chart
const patternedBarChart = () => {
  return {
    series: [
      {
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
    ],
    chartOptions: {
      chart: {
        height: 300,
        type: "bar",
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      title: {
        text: "Compare Sales Strategy",
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-red-500",
        "bg-purple-500",
      ]),
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val: any) {
            return val + "K";
          },
        },
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          style: [
            "circles",
            "slantedLines",
            "verticalLines",
            "horizontalLines",
          ],
        },
      },
      states: {
        hover: {
          filter: "none",
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
    },
  };
};
export {
  basicBarChart,
  groupedBarChart,
  stackedBarChartOptions,
  stackedBar100Chart,
  groupedStackedBarsChart,
  barWithNegativeValuesBarsChart,
  barWithMarkersChart,
  reversedBarChart,
  patternedBarChart,
};
