import {
  Box,
  Coins,
  GalleryVerticalEnd,
  Headset,
  ShoppingBag,
  Shuffle,
  TrendingDown,
  TrendingUp,
  Truck,
  UserRound,
} from "lucide-vue-next";
interface TransactionCard {
  title: string;
  color: string;
  prefix?: string;
  value: number;
  suffix?: string;
}

const transactionCard: TransactionCard[] = [
  {
    title: "Revenue",
    color: "primary",
    prefix: "$",
    value: 300.97,
    suffix: "M",
  },
  { title: "Orders", color: "green", value: 7000, suffix: "+" },
  { title: "Total Visitors", color: "red", value: 12496 },
  { title: "Total Customers", color: "yellow", value: 9831 },
  { title: "Average Sales", color: "sky", value: 3410 },
  {
    title: "Transaction",
    color: "red",
    prefix: "$",
    value: 137.68,
    suffix: "k",
  },
];

interface Card {
  title: string;
  icon: string | object;
  pending: number;
  success: number;
}

const cards: Card[] = [
  {
    title: "Superfast Delivery",
    icon: Truck,
    pending: 2477,
    success: 6013,
  },
  {
    title: "Flexible Payment",
    icon: GalleryVerticalEnd,
    pending: 392,
    success: 5789,
  },
  {
    title: "Premium Support",
    icon: Headset,
    pending: 1356,
    success: 3264,
  },
  {
    title: "14 Day Returns",
    icon: Shuffle,
    pending: 144,
    success: 231,
  },
];

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  amount: number;
  status: string;
  statusClass: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Martha Kingery",
    role: "Web Designer",
    avatar: new URL("@/assets/images/avatar/user-15.png", import.meta.url).href,
    amount: 469.99,
    status: "Pending",
    statusClass: "badge-sub-yellow",
  },
  {
    name: "Corina Rouse",
    role: "ASP.Net Developer",
    avatar: new URL("@/assets/images/avatar/user-18.png", import.meta.url).href,
    amount: 342.87,
    status: "Successfully",
    statusClass: "badge-sub-green",
  },
];

interface Stat {
  label: string;
  value: number;
  cardClass?: string;
  textClass?: string;
  valueClass?: string;
  icon: string | object;
  iconClass: string;
  iconBgClass: string;
  iconBorderClass: string;
  iconOutlineClass: string;
}

const dashboardStats: Stat[] = [
  {
    label: "Today Orders",
    value: 9736,
    textClass: "mb-1 text-sm text-gray-500 dark:text-dark-500",
    valueClass: "",
    icon: ShoppingBag,
    iconClass: "fill-primary-100/20 text-primary-50",
    iconBgClass: "bg-primary-500",
    iconBorderClass: "border-white dark:border-dark-900",
    iconOutlineClass: "outline-primary-500",
  },
  {
    label: "Total Customers",
    value: 9831,
    textClass: "mb-1 text-sm text-gray-500 dark:text-dark-500",
    valueClass: "",
    icon: UserRound,
    iconClass: "fill-green-100/20 text-green-50",
    iconBgClass: "bg-green-500",
    iconBorderClass: "border-white dark:border-dark-900",
    iconOutlineClass: "outline-green-500",
  },
  {
    label: "Products",
    value: 297,
    cardClass:
      "bg-indigo-100 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20",
    textClass: "mb-1 text-sm text-indigo-500",
    valueClass: "text-indigo-500",
    icon: Box,
    iconClass: "fill-indigo-100/20 text-indigo-50",
    iconBgClass: "bg-indigo-500",
    iconBorderClass: "border-indigo-100 dark:border-dark-900",
    iconOutlineClass: "outline-indigo-500",
  },
  {
    label: "Total Revenue",
    value: 9831,
    textClass: "mb-1 text-sm text-gray-500 dark:text-dark-500",
    valueClass: "",
    icon: Coins,
    iconClass: "fill-yellow-100/20 text-yellow-50",
    iconBgClass: "bg-yellow-500",
    iconBorderClass: "border-white dark:border-dark-900",
    iconOutlineClass: "outline-yellow-500",
  },
];

interface AnalyticStat {
  title: string;
  period: string;
  subtitle: string;
  value: number;
  trendIcon: string | object;
  trendClass: string;
  trendDescription: string;
  badgeCssClass?: string;
}

const analyticsStats: AnalyticStat[] = [
  {
    title: "Website Visitors",
    period: "Last 30 Days",
    badgeCssClass: "badge-sub-red",
    subtitle: "Today Orders",
    value: 9736,
    trendIcon: TrendingUp,
    trendClass: "text-green-500",
    trendDescription: "Increased by 30% compared to the previous period.",
  },
  {
    title: "SEO Unique Users",
    period: "Last 30 Days",
    badgeCssClass: "badge-sub-purple",
    subtitle: "Today Orders",
    value: 419,
    trendIcon: TrendingDown,
    trendClass: "text-red-500",
    trendDescription: "Decreased by 2.8% compared to the previous period.",
  },
];

interface ProfileList {
  name: string;
  role: string;
  avatar: string;
}

const profileList: ProfileList[] = [
  {
    name: "Jennifer Kingston",
    role: "Content Writer",
    avatar: new URL("@/assets/images/avatar/user-8.png", import.meta.url).href,
  },
  {
    name: "James Fallon",
    role: "Marketing Lead",
    avatar: new URL("@/assets/images/avatar/user-10.png", import.meta.url).href,
  },
  {
    name: "Thurman Northup",
    role: "Sr. React Dev.",
    avatar: new URL("@/assets/images/avatar/user-11.png", import.meta.url).href,
  },
  {
    name: "Marshall Oliver",
    role: "Sr. PHP Dev.",
    avatar: new URL("@/assets/images/avatar/user-12.png", import.meta.url).href,
  },
  {
    name: "Brenda Gibson",
    role: "Product Manager",
    avatar: new URL("@/assets/images/avatar/user-13.png", import.meta.url).href,
  },
  {
    name: "David Turner",
    role: "Sr. Laravel Dev.",
    avatar: new URL("@/assets/images/avatar/user-14.png", import.meta.url).href,
  },
];

interface InternsDoctor {
  image: string;
}

const internDoctors: InternsDoctor[] = [
  {
    image: new URL("@/assets/images/avatar/user-15.png", import.meta.url).href,
  },
  {
    image: new URL("@/assets/images/avatar/user-16.png", import.meta.url).href,
  },
  {
    image: new URL("@/assets/images/avatar/user-21.png", import.meta.url).href,
  },
  {
    image: new URL("@/assets/images/avatar/user-17.png", import.meta.url).href,
  },
  {
    image: new URL("@/assets/images/avatar/user-18.png", import.meta.url).href,
  },
  {
    image: new URL("@/assets/images/avatar/user-22.png", import.meta.url).href,
  },
  {
    image: new URL("@/assets/images/avatar/user-20.png", import.meta.url).href,
  },
];

interface Patient {
  name: string;
  time: string;
  image: string;
}

const patients: Patient[] = [
  {
    name: "Colette R. Mejias",
    time: "20 May | 9 AM - 10 AM",
    image: new URL("@/assets/images/avatar/user-14.png", import.meta.url).href,
  },
  {
    name: "Danny S. Lacroix",
    time: "20 May | 10 AM - 11 AM",
    image: new URL("@/assets/images/avatar/user-16.png", import.meta.url).href,
  },
  {
    name: "Louis K. Jacks",
    time: "21 May | 2 PM - 3 PM",
    image: new URL("@/assets/images/avatar/user-18.png", import.meta.url).href,
  },
];

export {
  transactionCard,
  cards,
  teamMembers,
  dashboardStats,
  analyticsStats,
  profileList,
  internDoctors,
  patients,
};
