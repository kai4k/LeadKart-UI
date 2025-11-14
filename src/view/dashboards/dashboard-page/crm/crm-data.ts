import { getColorCodes } from "@/utils/reusable-functions";
import {
  Coins,
  Feather,
  HandCoins,
  Shuffle,
  Sparkle,
  SquareMousePointer,
  UsersRound,
} from "lucide-vue-next";
import { ref } from "vue";

//Sales Analytics Chart
const salesAnalyticColor = [
  "bg-primary-500",
  "bg-pink-300",
  "bg-sky-300",
  "bg-slate-600",
];

const salesAnalyticsChart = () => {
  return {
    series: [
      {
        name: "Visitors",
        data: [154, 137, 41, 67, 43, 20, 41, 67, 20, 41, 32, 98],
      },
      {
        name: "Add Cart",
        data: [13, 23, 20, 35, 27, 16, 8, 13, 20, 41, 44, 67],
      },
      {
        name: "Check Out",
        data: [11, 54, 15, 21, 14, 24, 15, 21, 20, 41, 54, 35],
      },
      {
        name: "Favorites",
        data: [21, 19, 25, 22, 8, 19, 13, 22, 20, 41, 49, 33],
      },
    ],
    chartOptions: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: true },
      },
      dataLabels: { enabled: false },
      colors: getColorCodes(salesAnalyticColor), // You can replace this with your color function
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
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
        axisBorder: { show: false },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -5,
      },
      grid: {
        show: true,
        borderColor: "#90A4AE",
        strokeDashArray: 2,
        position: "back",
        padding: {
          top: 10,
          right: 0,
        },
        xaxis: {
          lines: { show: true },
        },
        yaxis: {
          lines: { show: true },
        },
      },
      fill: { opacity: 1 },
    },
  };
};

//Basic Donut chart
const basicDonutChart = {
  series: [87.6],
  chartOptions: {
    chart: {
      height: 300,
      type: "radialBar",
    },
    colors: ["#475569"], // Example usage, replace with actual data
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          background: "#475569", // Adjust to match your data
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 10,
            opacity: 0.02,
          },
        },
        dataLabels: {
          name: {
            fontSize: "15px",
          },
          value: {
            show: true,
            fontSize: "14px",
            fontWeight: 700,
            offsetY: 10,
            formatter: (val: number) => {
              return "$" + val + "k";
            },
          },
        },
      },
    },
    labels: ["This Month"],
  },
};

interface CardData {
  title: string;
  icon: string | any;
  value: number | string;
  percentageChange: number;
}

const cardData = ref<CardData[]>([
  {
    title: "Customers Visits",
    icon: UsersRound,
    value: 345121,
    percentageChange: 17.9,
  },
  {
    title: "Impressions",
    icon: Feather,
    value: 516871,
    percentageChange: 23.7,
  },
  {
    title: "Total Orders",
    icon: Shuffle,
    value: 14596,
    percentageChange: -1.6,
  },
  {
    title: "Wishlist",
    icon: Sparkle,
    value: 102450,
    percentageChange: 3.2,
  },
  {
    title: "Total Earning",
    icon: HandCoins,
    value: "$316M",
    percentageChange: 16.1,
  },
  {
    title: "Total Profit",
    icon: Coins,
    value: "$287M",
    percentageChange: 9.7,
  },
  {
    title: "Repeat Orders",
    icon: Coins,
    value: 53629,
    percentageChange: 9.7,
  },
  {
    title: "Conversion Rate",
    icon: SquareMousePointer,
    value: "70%",
    percentageChange: -0.8,
  },
]);

interface Lead {
  leadName: string;
  rating: string;
  date: string;
  contact: string;
  leadSource: string;
  leadStatus: string;
  totalBalance: string;
}

const leadsListData: Lead[] = [
  {
    leadName: "Dorothy Daley",
    rating: "4.3",
    date: "12 Jan, 2024",
    contact: "dorothy@example.com",
    leadSource: "Online Source",
    leadStatus: "New",
    totalBalance: "$15,000",
  },
  {
    leadName: "John Smith",
    rating: "4.7",
    date: "5 Feb, 2024",
    contact: "john@example.com",
    leadSource: "Referral",
    leadStatus: "Contacted",
    totalBalance: "$12,500",
  },
  {
    leadName: "Jane Doe",
    rating: "3.9",
    date: "20 Mar, 2024",
    contact: "jane@example.com",
    leadSource: "Online Source",
    leadStatus: "Interested",
    totalBalance: "$8,000",
  },
  {
    leadName: "Michael Johnson",
    rating: "4.5",
    date: "18 Apr, 2024",
    contact: "michael@example.com",
    leadSource: "Trade Show",
    leadStatus: "Negotiation",
    totalBalance: "$20,000",
  },
  {
    leadName: "Emily Brown",
    rating: "4.2",
    date: "10 May, 2024",
    contact: "emily@example.com",
    leadSource: "Website",
    leadStatus: "Closed",
    totalBalance: "$25,000",
  },
  {
    leadName: "David Wilson",
    rating: "3.5",
    date: "30 May, 2024",
    contact: "wilson@example.com",
    leadSource: "Email Campaign",
    leadStatus: "Closed",
    totalBalance: "$5,000",
  },
  {
    leadName: "Jessica Davis",
    rating: "4.0",
    date: "15 Jun, 2024",
    contact: "davis@example.com",
    leadSource: "Cold Call",
    leadStatus: "New",
    totalBalance: "$10,000",
  },
  {
    leadName: "Thomas Martinez",
    rating: "3.8",
    date: "25 Jun, 2024",
    contact: "thomas@example.com",
    leadSource: "Referral",
    leadStatus: "Contacted",
    totalBalance: "$7,500",
  },
  {
    leadName: "Sarah Miller",
    rating: "4.6",
    date: "1 Jul, 2024",
    contact: "sarah@example.com",
    leadSource: "Trade Show",
    leadStatus: "Interested",
    totalBalance: "$18,000",
  },
  {
    leadName: "Daniel Garcia",
    rating: "3.7",
    date: "8 Jul, 2024",
    contact: "daniel@example.com",
    leadSource: "Online Source",
    leadStatus: "Negotiation",
    totalBalance: "$9,000",
  },
];

interface dealDataType {
  closingDate: string;
  title: string;
  avatar: string | any;
  user: string;
  amount: string;
  status: string;
}
const dealDataList = ref<dealDataType[]>([
  {
    closingDate: "20 Jul, 2024",
    title: "Financial Work History",
    avatar: new URL("@/assets/images/avatar/user-18.png", import.meta.url),
    user: "Donna Berlin",
    amount: "$87,000",
    status: "Contract sent",
  },
  {
    closingDate: "18 Jul, 2024",
    title: "Domiex Admin Role",
    avatar: new URL("@/assets/images/avatar/user-11.png", import.meta.url),
    user: "Willian Brim",
    amount: "$49,599",
    status: "Contract sent",
  },
  {
    closingDate: "10 Jul, 2024",
    title: "API & Employee Statistic",
    avatar: new URL("@/assets/images/avatar/user-15.png", import.meta.url),
    user: "Marla Ramos",
    amount: "$34,999",
    status: "Contract sent",
  },
]);

// Card Data
const goals = ref([
  { name: "Marketing", current: 15498, target: 80000 },
  { name: "Sales Revenue", current: 44000, target: 100000 },
  { name: "Ads Revenue", current: 82578, target: 150000 },
  { name: "Digital Marketing", current: 157000, target: 200000 },
]);

const avatars = ref<any>([
  new URL("@/assets/images/avatar/user-17.png", import.meta.url),
  new URL("@/assets/images/avatar/user-18.png", import.meta.url),
  new URL("@/assets/images/avatar/user-14.png", import.meta.url),
]);
export {
  salesAnalyticsChart,
  basicDonutChart,
  cardData,
  leadsListData,
  dealDataList,
  goals,
  avatars,
};
