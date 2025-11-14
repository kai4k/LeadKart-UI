import {
  Bell,
  Gem,
  ListTree,
  LogOut,
  ShieldCheck,
  UserRound,
  MonitorSmartphone,
  Smartphone,
  //@ts-ignore
} from "lucide-vue-next";

interface Tab {
  name: string;
  label: string;
  icon: string | Function;
  link: string;
}
import { ref } from "vue";
// List of tabs
const tabs: Tab[] = [
  {
    name: "account",
    label: "Account",
    icon: UserRound,
    link: "pages-account-settings",
  },
  {
    name: "security",
    label: "Security",
    icon: ShieldCheck,
    link: "pages-account-security",
  },
  {
    name: "billingAndPlans",
    label: "Billing & Plans",
    icon: Gem,
    link: "pages-account-billing-plan",
  },
  {
    name: "notification",
    label: "Notification",
    icon: Bell,
    link: "pages-account-notification",
  },
  {
    name: "statement",
    label: "Statements",
    icon: ListTree,
    link: "pages-account-statements",
  },
  {
    name: "logs",
    label: "Logs",
    icon: LogOut,
    link: "pages-account-logs",
  },
];

// Define types for device
interface Device {
  id: number;
  name: string;
  status: string;
  location: string;
  ip: string;
  icon: string | object;
}
// Sample devices array (can be fetched dynamically)
const devices = ref<Device[]>([
  {
    id: 1,
    name: "Apple Mac 12.5.1",
    status: "Online",
    location: "London, United Kingdom.",
    ip: "81.64.22.98",
    icon: MonitorSmartphone,
  },
  {
    id: 2,
    name: "Apple iPhone iOS 14.8.5",
    status: "Offline",
    location: "Berlin, Germany.",
    ip: "225.222.152.154",
    icon: Smartphone,
  },
  {
    id: 3,
    name: "Samsung Phone s24",
    status: "Offline",
    location: "Paris, France.",
    ip: "225.222.152.154",
    icon: Smartphone,
  },
  {
    id: 4,
    name: "Apple iPhone iOS 14.8.5",
    status: "Offline",
    location: "Berlin, Germany.",
    ip: "225.222.152.154",
    icon: Smartphone,
  },
  {
    id: 5,
    name: "Samsung Phone s24",
    status: "Offline",
    location: "Paris, France.",
    ip: "225.222.152.154",
    icon: Smartphone,
  },
]);
export { tabs, devices };
