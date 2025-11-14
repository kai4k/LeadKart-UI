import { ref } from "vue";
import {
  getColorCodes,
  getColorCodesHash,
} from "@/utils/reusable-functions";
const updateCounter = (target: number, counterRef: any) => {
  const duration = 1500;
  const start = performance.now();

  const animate = (timestamp: number) => {
    const progress = timestamp - start;
    const increment = Math.min(progress / duration, 1);
    counterRef.value = Math.round(increment * target);

    if (increment < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const lineWithLabelsChart = {
  series: [
    {
      name: "Sent",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Opened",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ],
  options: {
    chart: {
      type: "area",
      defaultLocale: "en",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        right: 0,
        top: -20,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  },
};

const gradientDonutChartOptions =  {
  series:[33, 57],
  options:{
    labels: ["Open Rate", "Click Rate"],
    chart: {
      height: 200,
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
    // ❌ Removed `colors` here — dynamic with getColorCodesHash
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val: string, opts: any) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
            height: 180,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  }
};

//Column with Data Labels Chart
const columnWithDataLabelsChartOptions = () => {
  return {
    series: [
      {
        name: "Inflation",
        data: [5, 4, 7, 9, 2, 6, 10, 6, 3, 7, 9, 5],
      },
    ],
    chartOptions: {
      chart: {
        height: 100,
        type: "bar",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: getColorCodes(["bg-primary-200"]), // Replace with your color codes as needed
    },
  };
};

//Mail Statistic Charts
const mailStatisticChartOptions = () => {
  return {
    series: [
      {
        name: "Sent",
        data: [
          { x: "Jan", y: 43 },
          { x: "Feb", y: 58 },
        ],
      },
      {
        name: "Pending",
        data: [
          { x: "Jan", y: 33 },
          { x: "Feb", y: 38 },
        ],
      },
      {
        name: "Cancel",
        data: [
          { x: "Jan", y: 55 },
          { x: "Feb", y: 21 },
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 335,
        type: "line",
      },
      stroke: {
        curve: "smooth",
      },
      plotOptions: {
        line: {
          isSlopeChart: true,
        },
      },
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: getColorCodes(["bg-primary-500", "bg-green-500", "bg-red-500"]), // Replace with your color codes as needed
    },
  };
};

//Time Spending Charts
const timeSpendingChart = {
  series: [
    {
      name: "Total Spend",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: "Sales",
      data: [62, 69, 91, 54, 10, 41, 35, 51, 49],
    },
  ],
  chartOptions: {
    chart: {
      defaultLocale: "en",
      height: 120,
      type: "line",
      zoom: {
        enabled: true,
      },
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "straight",
      width: 1,
    },
    xaxis: {
      title: {
        text: "Xaxis",
      },
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
    },
    yaxis: {
      tickAmount: 15,
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: (val: number) =>
          "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "k",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      offsetY: 8,
    },
    grid: {
      padding: {
        top: 0,
        right: 5,
        bottom: 20,
      },
    },
    colors: getColorCodes(["bg-primary-500", "bg-green-500"]), // Replace with your color codes as needed
  },
};

interface EmailListType {
  emailID?: String | number;
  emailName: string | number;
  publishDate: number | string;
  sent: number | string;
  clickRate: number | string;
  deliveredRate: number | string;
  spamReport: number | string;
}

const emailListData = ref<EmailListType[]>([
  {
    emailName: "Financial Services",
    publishDate: "03 May, 2024",
    sent: "4",
    clickRate: "3.47%",
    deliveredRate: "7.89%",
    spamReport: "0.14%",
  },
  {
    emailName: "Healthcare Update",
    publishDate: "10 May, 2024",
    sent: "5",
    clickRate: "4.12%",
    deliveredRate: "8.45%",
    spamReport: "0.20%",
  },
  {
    emailName: "Retail Newsletter",
    publishDate: "15 May, 2024",
    sent: "6",
    clickRate: "2.98%",
    deliveredRate: "7.65%",
    spamReport: "0.10%",
  },
  {
    emailName: "Tech Insights",
    publishDate: "20 May, 2024",
    sent: "7",
    clickRate: "5.21%",
    deliveredRate: "9.12%",
    spamReport: "0.30%",
  },
  {
    emailName: "Travel Deals",
    publishDate: "25 May, 2024",
    sent: "3",
    clickRate: "6.34%",
    deliveredRate: "8.79%",
    spamReport: "0.25%",
  },
  {
    emailName: "Education Weekly",
    publishDate: "30 May, 2024",
    sent: "8",
    clickRate: "3.89%",
    deliveredRate: "8.23%",
    spamReport: "0.18%",
  },
  {
    emailName: "Automotive Trends",
    publishDate: "04 June, 2024",
    sent: "4",
    clickRate: "4.50%",
    deliveredRate: "7.95%",
    spamReport: "0.12%",
  },
  {
    emailName: "Fashion Bulletin",
    publishDate: "09 June, 2024",
    sent: "5",
    clickRate: "5.78%",
    deliveredRate: "9.34%",
    spamReport: "0.15%",
  },
  {
    emailName: "Real Estate News",
    publishDate: "14 June, 2024",
    sent: "6",
    clickRate: "2.45%",
    deliveredRate: "7.54%",
    spamReport: "0.22%",
  },
  {
    emailName: "Entertainment Update",
    publishDate: "19 June, 2024",
    sent: "7",
    clickRate: "3.76%",
    deliveredRate: "8.65%",
    spamReport: "0.17%",
  },
  {
    emailName: "Sports Highlights",
    publishDate: "24 June, 2024",
    sent: "3",
    clickRate: "6.80%",
    deliveredRate: "8.88%",
    spamReport: "0.19%",
  },
  {
    emailName: "Food and Recipes",
    publishDate: "29 June, 2024",
    sent: "8",
    clickRate: "4.33%",
    deliveredRate: "9.01%",
    spamReport: "0.14%",
  },
  {
    emailName: "Fitness Tips",
    publishDate: "04 July, 2024",
    sent: "4",
    clickRate: "3.67%",
    deliveredRate: "7.77%",
    spamReport: "0.16%",
  },
  {
    emailName: "Lifestyle Guide",
    publishDate: "09 July, 2024",
    sent: "5",
    clickRate: "5.10%",
    deliveredRate: "9.20%",
    spamReport: "0.11%",
  },
]);

export {
  updateCounter,
  lineWithLabelsChart,
  gradientDonutChartOptions,
  columnWithDataLabelsChartOptions,
  mailStatisticChartOptions,
  timeSpendingChart,
  emailListData,
};
