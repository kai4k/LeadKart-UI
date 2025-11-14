import { getColorCodes } from "@/utils/reusable-functions";

//Basic Charts
const basicChart = () => {
  return {
    chartSeries: [
      {
        name: "Series name",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chartOptions: {
      chart: {
        type: "line",
        height: 300,
        zoom: { enabled: true },
        defaultLocale: "en",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 5,
          bottom: 0,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        title: { text: "Xaxis" },
      },
      yaxis: {
        tickAmount: 8,
      },
      tooltip: {
        x: { show: true },
        y: {
          formatter: (val: number) => `$${val.toLocaleString()}`,
        },
      },
      colors: getColorCodes(["bg-primary-500"]), // Customize as needed
    },
  };
};

//Line with Data Labels Charts
const lineWithDataChart = () => {
  return {
    chartSeries: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    chartOptions: {
      chart: {
        type: "line",
        height: 300,
        defaultLocale: "en",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        padding: {
          top: -20,
          right: 0,
          bottom: 0,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Temperature",
        },
        min: 5,
        max: 40,
      },
      colors: getColorCodes(["bg-primary-500", "bg-gray-300"]), // Custom color values
    },
  };
};
//Zoomable Timeseries Charts
const zoomableTimeSeriesChart = {
  chartSeries: [
    {
      name: "XYZ MOTORS",
      data: [
        { x: new Date("2024-06-12").getTime(), y: 140 },
        { x: new Date("2024-06-13").getTime(), y: 147 },
        { x: new Date("2024-06-14").getTime(), y: 150 },
        { x: new Date("2024-06-15").getTime(), y: 154 },
        { x: new Date("2024-06-16").getTime(), y: 160 },
        { x: new Date("2024-06-17").getTime(), y: 165 },
        { x: new Date("2024-06-18").getTime(), y: 162 },
        { x: new Date("2024-06-20").getTime(), y: 159 },
        { x: new Date("2024-06-21").getTime(), y: 164 },
        { x: new Date("2024-06-22").getTime(), y: 160 },
        { x: new Date("2024-06-23").getTime(), y: 165 },
        { x: new Date("2024-06-24").getTime(), y: 169 },
        { x: new Date("2024-06-25").getTime(), y: 172 },
        { x: new Date("2024-06-26").getTime(), y: 177 },
        { x: new Date("2024-06-27").getTime(), y: 173 },
        { x: new Date("2024-06-28").getTime(), y: 169 },
        { x: new Date("2024-06-29").getTime(), y: 163 },
        { x: new Date("2024-06-30").getTime(), y: 158 },
        { x: new Date("2024-07-01").getTime(), y: 153 },
        { x: new Date("2024-07-02").getTime(), y: 149 },
        { x: new Date("2024-07-03").getTime(), y: 144 },
        { x: new Date("2024-07-05").getTime(), y: 150 },
        { x: new Date("2024-07-06").getTime(), y: 155 },
        { x: new Date("2024-07-07").getTime(), y: 159 },
        { x: new Date("2024-07-08").getTime(), y: 163 },
        { x: new Date("2024-07-09").getTime(), y: 156 },
        { x: new Date("2024-07-11").getTime(), y: 151 },
        { x: new Date("2024-07-12").getTime(), y: 157 },
        { x: new Date("2024-07-13").getTime(), y: 161 },
        { x: new Date("2024-07-14").getTime(), y: 150 },
        { x: new Date("2024-07-15").getTime(), y: 154 },
        { x: new Date("2024-07-16").getTime(), y: 160 },
        { x: new Date("2024-07-17").getTime(), y: 165 },
        { x: new Date("2024-07-18").getTime(), y: 162 },
        { x: new Date("2024-07-20").getTime(), y: 159 },
        { x: new Date("2024-07-21").getTime(), y: 164 },
        { x: new Date("2024-07-22").getTime(), y: 160 },
        { x: new Date("2024-07-23").getTime(), y: 165 },
        { x: new Date("2024-07-24").getTime(), y: 169 },
        { x: new Date("2024-07-25").getTime(), y: 172 },
        { x: new Date("2024-07-26").getTime(), y: 177 },
        { x: new Date("2024-07-27").getTime(), y: 173 },
        { x: new Date("2024-07-28").getTime(), y: 169 },
        { x: new Date("2024-07-29").getTime(), y: 163 },
        { x: new Date("2024-07-30").getTime(), y: 162 },
        { x: new Date("2024-08-01").getTime(), y: 158 },
        { x: new Date("2024-08-02").getTime(), y: 152 },
        { x: new Date("2024-08-03").getTime(), y: 147 },
        { x: new Date("2024-08-05").getTime(), y: 142 },
        { x: new Date("2024-08-06").getTime(), y: 147 },
        { x: new Date("2024-08-07").getTime(), y: 151 },
        { x: new Date("2024-08-08").getTime(), y: 155 },
        { x: new Date("2024-08-09").getTime(), y: 159 },
        { x: new Date("2024-08-11").getTime(), y: 162 },
        { x: new Date("2024-08-12").getTime(), y: 157 },
        { x: new Date("2024-08-13").getTime(), y: 161 },
        { x: new Date("2024-08-14").getTime(), y: 166 },
        { x: new Date("2024-08-15").getTime(), y: 169 },
        { x: new Date("2024-08-16").getTime(), y: 172 },
        { x: new Date("2024-08-17").getTime(), y: 177 },
        { x: new Date("2024-08-18").getTime(), y: 181 },
        { x: new Date("2024-08-20").getTime(), y: 178 },
        { x: new Date("2024-08-21").getTime(), y: 173 },
        { x: new Date("2024-08-22").getTime(), y: 169 },
        { x: new Date("2024-08-23").getTime(), y: 163 },
        { x: new Date("2024-08-24").getTime(), y: 159 },
        { x: new Date("2024-08-25").getTime(), y: 164 },
        { x: new Date("2024-08-26").getTime(), y: 168 },
        { x: new Date("2024-08-27").getTime(), y: 172 },
        { x: new Date("2024-08-28").getTime(), y: 169 },
        { x: new Date("2024-08-29").getTime(), y: 163 },
        { x: new Date("2024-08-30").getTime(), y: 162 },
        { x: new Date("2024-09-01").getTime(), y: 158 },
        { x: new Date("2024-09-02").getTime(), y: 152 },
        { x: new Date("2024-09-03").getTime(), y: 147 },
        { x: new Date("2024-09-05").getTime(), y: 142 },
        { x: new Date("2024-09-06").getTime(), y: 147 },
        { x: new Date("2024-09-07").getTime(), y: 151 },
        { x: new Date("2024-09-08").getTime(), y: 155 },
        { x: new Date("2024-09-09").getTime(), y: 159 },
        { x: new Date("2024-09-11").getTime(), y: 162 },
        { x: new Date("2024-09-12").getTime(), y: 157 },
        { x: new Date("2024-09-13").getTime(), y: 161 },
        { x: new Date("2024-09-14").getTime(), y: 166 },
        { x: new Date("2024-09-15").getTime(), y: 169 },
        { x: new Date("2024-09-16").getTime(), y: 172 },
        { x: new Date("2024-09-17").getTime(), y: 177 },
        { x: new Date("2024-09-18").getTime(), y: 181 },
        { x: new Date("2024-09-20").getTime(), y: 178 },
        { x: new Date("2024-09-21").getTime(), y: 173 },
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "area",
      height: 300,
      stacked: false,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    title: {
      text: "Stock Price Movement",
      align: "left",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: (val: any) => (val / 1_000_000).toFixed(0),
      },
      title: {
        text: "Price",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: (val: any) => (val / 1_000_000).toFixed(0),
      },
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    colors: ["#0284C7"], // Sky blue for the chart line
  },
};

//stepline Charts
const steplineChart = {
  chartSeries: [
    {
      data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
  ],
  chartOptions: {
    chart: {
      type: "line",
      height: 300,
      zoom: {
        enabled: true,
      },
    },
    stroke: {
      curve: "stepline", // Stepline style for the line chart
    },
    title: {
      text: "Stepline Chart",
      align: "left",
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
    },
    colors: ["#22C55E"], // Green color
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        top: 0,
        right: 5,
        bottom: 0,
      },
    },
  },
};

//Gradient Charts
const gradientChart = () => {
  return {
    chartSeries: [
      {
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    chartOptions: {
      chart: {
        type: "line",
        height: 300,
        zoom: {
          enabled: true,
        },
      },
      forecastDataPoints: {
        count: 7, // Number of forecast data points
      },
      stroke: {
        width: 5,
        curve: "smooth", // Smooth line curve
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value: number, timestamp: any, opts: any) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM"); // Custom date format
          },
        },
      },
      title: {
        text: "Forecast",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"], // Gradient color to yellow
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40, // Y-axis range
      },
      colors: getColorCodes(["bg-primary-500", "bg-primary-600"]), // Example gradient colors
      grid: {
        padding: {
          top: 0,
          right: 5,
          bottom: 0,
        },
      },
    },
  };
};

//Dashed Charts
const dashedCharts = {
  chartSeries: [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  chartOptions: {
    chart: {
      type: "line",
      height: 300,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5], // Line widths for the different series
      curve: "straight", // Straight line curve
      dashArray: [0, 8, 5], // Dashed lines for the second and third series
    },
    title: {
      text: "Page Statistics",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val: any, opts: any) {
        return `${val} - <strong>${
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
        }</strong>`;
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val: any) {
              return `${val} (mins)`;
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return `${val} per session`;
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val;
            },
          },
        },
      ],
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
    },
    colors: ["#1E88E5", "#22C55E", "#E5E7EB"], // Example color for the lines
  },
};
export {
  basicChart,
  lineWithDataChart,
  zoomableTimeSeriesChart,
  steplineChart,
  gradientChart,
  dashedCharts,
};
