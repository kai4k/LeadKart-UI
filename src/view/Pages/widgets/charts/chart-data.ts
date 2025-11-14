import { getColorCodes } from "@/utils/reusable-functions";

const adsRevenueChart = {
  series: [
    {
      name: "Total Revenue",
      data: [2, 77, 44, 3, 63, 94, 99],
    },
  ],
  chartOptions: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    chart: {
      defaultLocale: "en",
      height: 140,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
      dashArray: [10],
    },
    legend: {
      tooltipHoverFormatter: (val: string, opts: any) => {
        return `${val} - <strong>${
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]
        }</strong>`;
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 5,
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 7,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      show: false,
    },
    colors: ["#f44336", "#e57373", "#ef9a9a", "#ffcdd2"], // Example color codes
  },
};
//Column with Data Labels Chart
const columnWithLabels = {
  chartSeries: [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 1.3, 1.9, 2.8],
    },
  ],
  chartOptions: {
    chart: {
      height: 268,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        borderRadius: 5,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
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
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: (val: number) => `${val}%`, // Append % to y-axis values
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -10,
        right: 1,
        bottom: 0,
        left: 0,
      },
    },
    colors: getColorCodes(["bg-primary-500"]), // Replace with a dynamic color if needed
  },
};

//Semi Donut Chart
const viewPerformanceChart = {
  chartSeries: [48, 98],
  chartOptions: {
    chart: {
      height: 260,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 20,
      },
    },
    legend: {
      show: false,
    },
    colors: getColorCodes(["bg-primary-500", " bg-pink-400"]), // Replace with dynamic color logic if needed
    grid: {
      padding: {
        top: -20,
        bottom: -80,
      },
    },
  },
};
export { adsRevenueChart, columnWithLabels, viewPerformanceChart };
