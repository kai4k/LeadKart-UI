import { computed, ref, watch } from "vue";
import { getColorCodes } from "@/utils/reusable-functions";

const salesRevenueChart = {
    series: [
      {
        name: "Total Revenue",
        data: [31, 40, 28, 51, 42, 119, 100],
      },
    ],
    chartOptions: {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
      chart: {
        defaultLocale: "en",
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
    },
};

//ads revenue Charts
const adsRevenueChart = {
  series: [
    {
      name: "Total Revenue",
      data: [31, 77, 44, 31, 63, 94, 109],
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
        tickAmount: 30,
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      show: false,
    },
  },
};

// Average Online Sales Chart
const averageOnlineSalesChart = {
  series: [
    {
      name: "Total Sales",
      data: [44, 55, 41, 67, 22, 43, 21, 33],
    },
  ],
  chartOptions: {
    chart: {
      height: 160,
      type: "bar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    colors: ["#38bdf8"], // Example color code, replace with your logic
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Pears"],
      tickPlacement: "on",
    },
    yaxis: {
      tickAmount: 10,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  },
};

// Average Weekly Sales Chart
const averageOnlineWeeklyChart = {
  series: [
    {
      name: "Total Sales",
      data: [22, 43, 21, 44, 55, 33, 41],
    },
  ],
  chartOptions: {
    chart: {
      height: 160,
      type: "bar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    colors: ["#38bdf8"], // Example color code, replace with your logic
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      tickPlacement: "on",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  },
};

//Web Analytics Charts
const webAnalyticsApp = {
    series: [
      {
        name: "Referral",
        data: [
          { x: "Aug", y: 43 },
          { x: "Sep", y: 58 },
          { x: "Oct", y: 66 },
          { x: "Nov", y: 44 },
        ],
      },
      {
        name: "Direct",
        data: [
          { x: "Aug", y: 33 },
          { x: "Sep", y: 43 },
          { x: "Oct", y: 34 },
          { x: "Nov", y: 53 },
        ],
      },
      {
        name: "Ads",
        data: [
          { x: "Jan", y: 55 },
          { x: "Feb", y: 33 },
          { x: "Oct", y: 54 },
          { x: "Nov", y: 65 },
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 315,
        type: "line",
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      plotOptions: {
        line: {
          isSlopeChart: true,
        },
      },
      dataLabels: {
        background: {
          enabled: true,
        },
        formatter(val: any, opts: any) {
          const seriesName = opts.w.config.series[opts.seriesIndex].name;
          return val !== null ? seriesName : "";
        },
      },
      legend: {
        show: false,
        position: "bottom",
        horizontalAlign: "center",
      },
      grid: {
        padding: {
          bottom: -15,
          right: 0,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-purple-500",
      ]), // Example color codes, replace with your logic
    },
};

//Stacked Columns Chart
const followersAppChart =  {
    series: [
      {
        name: "Followers",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Unfollow",
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    chartOptions: {
      chart: {
        height: 360,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          horizontal: false,
          borderRadius: 13,
        },
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      legend: {
        position: "bottom",
      },
      grid: {
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
        padding: {
          top: -20,
          right: 0,
          bottom: 0,
        },
      },
      yaxis: {
        tickAmount: 8,
      }
    },

};

//Visit Browsers Chart
const visitBrowsersAppChart = {
    series: [44, 55, 41],
    chartOptions: {
      chart: {
        height: 125,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      labels: ["Chrome", "Safari", "Edge"],
      fill: {
        type: "gradient",
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      legend: {
        position: "bottom",
        offsetY: 20,
      },
    },
};

//Traffic Source Chart
const trafficSourceApp = () => {
  return {
    series: [
      {
        name: "Direct Traffic",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Search Engine Traffic",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    chartOptions: {
      chart: {
        height: 145,
        type: "bar",
        sparkline: { enabled: true },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "start",
        offsetY: -3,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: getColorCodes(["bg-primary-500", "bg-gray-200"]), // Replace with your getColorCodes function or use hardcoded colors
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        tickAmount: 10
      },
      grid: {
        padding: {
          top: 4,
          right: 0,
          left: 0,
        },
      },
      tooltip: {
        y: {
          formatter(val: number) {
            return "$" + val + "k";
          },
        },
      },
    },
  };
};

const data = ref([
  {
    name: "Jeremy McMullen",
    status: "Success",
    date: "21 Jan, 2024",
    price: "$154",
  },
  {
    name: "Charles Fischer",
    status: "Cancel",
    date: "28 Jan, 2024",
    price: "$150",
  },
  {
    name: "Louise Harms",
    status: "Success",
    date: "02 Feb, 2024",
    price: "$255",
  },
  {
    name: "Henry Boyle",
    status: "Success",
    date: "11 Feb, 2024",
    price: "$347",
  },
  {
    name: "Isabella Smith",
    status: "Success",
    date: "15 Feb, 2024",
    price: "$398",
  },
  {
    name: "Ethan Johnson",
    status: "Cancel",
    date: "20 Feb, 2024",
    price: "$495",
  },
  {
    name: "Marina Bashirian",
    status: "Success",
    date: "18 Mar, 2025",
    price: "$174",
  },
]);

interface Campaign {
  campaignID?: String | number;
  campaignTitle: string | number;
  clickRate: number | string;
  deliveredRate: number | string;
  impressions: number | string;
  cpc: number | string;
  cr: number | string;
  revenue: number | string;
}
const campaignListData = ref<Campaign[]>([
  {
    campaignTitle: "Summer Sale",
    clickRate: "4.5%",
    deliveredRate: "98%",
    impressions: "15000",
    cpc: "$0.25",
    cr: "2.3%",
    revenue: "$850",
  },
  {
    campaignTitle: "Winter Promotion",
    clickRate: "3.8%",
    deliveredRate: "95%",
    impressions: "12000",
    cpc: "$0.30",
    cr: "1.8%",
    revenue: "$650",
  },
  {
    campaignTitle: "Spring Discount",
    clickRate: "5.2%",
    deliveredRate: "99%",
    impressions: "18000",
    cpc: "$0.20",
    cr: "2.5%",
    revenue: "$900",
  },
  {
    campaignTitle: "Autumn Offer",
    clickRate: "4.0%",
    deliveredRate: "97%",
    impressions: "14000",
    cpc: "$0.28",
    cr: "2.0%",
    revenue: "$750",
  },
  {
    campaignTitle: "Holiday Special",
    clickRate: "5.0%",
    deliveredRate: "96%",
    impressions: "16000",
    cpc: "$0.22",
    cr: "2.4%",
    revenue: "$800",
  },
  {
    campaignTitle: "Back to School",
    clickRate: "4.3%",
    deliveredRate: "97%",
    impressions: "13000",
    cpc: "$0.27",
    cr: "2.1%",
    revenue: "$720",
  },
  {
    campaignTitle: "Black Friday",
    clickRate: "6.0%",
    deliveredRate: "95%",
    impressions: "20000",
    cpc: "$0.18",
    cr: "3.0%",
    revenue: "$1000",
  },
  {
    campaignTitle: "Cyber Monday",
    clickRate: "5.5%",
    deliveredRate: "94%",
    impressions: "19000",
    cpc: "$0.20",
    cr: "2.9%",
    revenue: "$950",
  },
  {
    campaignTitle: "New Year Bash",
    clickRate: "4.7%",
    deliveredRate: "98%",
    impressions: "17000",
    cpc: "$0.23",
    cr: "2.2%",
    revenue: "$880",
  },
  {
    campaignTitle: "Valentine's Day",
    clickRate: "5.1%",
    deliveredRate: "97%",
    impressions: "16000",
    cpc: "$0.21",
    cr: "2.6%",
    revenue: "$820",
  },
  {
    campaignTitle: "Easter Surprise",
    clickRate: "4.6%",
    deliveredRate: "96%",
    impressions: "14000",
    cpc: "$0.24",
    cr: "2.0%",
    revenue: "$700",
  },
  {
    campaignTitle: "4th of July Blast",
    clickRate: "5.3%",
    deliveredRate: "95%",
    impressions: "18000",
    cpc: "$0.19",
    cr: "2.7%",
    revenue: "$920",
  },
  {
    campaignTitle: "Labor Day Savings",
    clickRate: "3.9%",
    deliveredRate: "94%",
    impressions: "12000",
    cpc: "$0.29",
    cr: "1.9%",
    revenue: "$660",
  },
  {
    campaignTitle: "Halloween Spooktacular",
    clickRate: "4.8%",
    deliveredRate: "97%",
    impressions: "16000",
    cpc: "$0.23",
    cr: "2.3%",
    revenue: "$780",
  },
  {
    campaignTitle: "Thanksgiving Treats",
    clickRate: "4.4%",
    deliveredRate: "96%",
    impressions: "15000",
    cpc: "$0.26",
    cr: "2.2%",
    revenue: "$750",
  },
]);

export {
  salesRevenueChart,
  adsRevenueChart,
  averageOnlineSalesChart,
  averageOnlineWeeklyChart,
  webAnalyticsApp,
  followersAppChart,
  visitBrowsersAppChart,
  trafficSourceApp,
  data,
  campaignListData,
};
