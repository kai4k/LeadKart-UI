import user14 from "@/assets/images/avatar/user-14.png";
import user16 from "@/assets/images/avatar/user-16.png";
import user18 from "@/assets/images/avatar/user-18.png";
import user23 from "@/assets/images/avatar/user-23.png";
import user12 from "@/assets/images/avatar/user-12.png";
import user20 from "@/assets/images/avatar/user-20.png";
import user19 from "@/assets/images/avatar/user-19.png";
import user13 from "@/assets/images/avatar/user-13.png";
import user21 from "@/assets/images/avatar/user-21.png";
import user22 from "@/assets/images/avatar/user-22.png";
import user24 from "@/assets/images/avatar/user-24.png";
import user15 from "@/assets/images/avatar/user-15.png";
import user25 from "@/assets/images/avatar/user-25.png";
import user11 from "@/assets/images/avatar/user-11.png";
import user30 from "@/assets/images/avatar/user-30.png";
import user29 from "@/assets/images/avatar/user-29.png";
import user26 from "@/assets/images/avatar/user-26.png";
import user28 from "@/assets/images/avatar/user-28.png";
import user27 from "@/assets/images/avatar/user-27.png";
import { computed, ref } from "vue";
import { CircleCheckBig, Cross, Dessert, Hourglass } from "lucide-vue-next";
const tasksData = ref([
  {
    taskName: "Data Source Identification and Access",
    createDate: "15 June, 2024",
    assignees: [user14, user16],
    priority: "High",
    status: "New",
  },
  {
    taskName: "Data Transformation",
    createDate: "08 April, 2024",
    assignees: [user18, user23, user12],
    priority: "Low",
    status: "Pending",
  },
  {
    taskName: "Cleaned and Transformed Datasets",
    createDate: "11 Feb, 2024",
    assignees: [user16],
    priority: "Low",
    status: "New",
  },
  {
    taskName: "Data Quality Assurance",
    createDate: "22 May, 2024",
    assignees: [user14, user20, user19],
    priority: "High",
    status: "Completed",
  },
  {
    taskName: "Database Schema Design",
    createDate: "01 March, 2024",
    assignees: [user13, user21],
    priority: "Low",
    status: "New",
  },
  {
    taskName: "Data Integration",
    createDate: "12 July, 2024",
    assignees: [user22, user24, user15],
    priority: "High",
    status: "Completed",
  },
  {
    taskName: "ETL Process Implementation",
    createDate: "30 April, 2024",
    assignees: [user25, user11],
    priority: "Low",
    status: "Pending",
  },
  {
    taskName: "Performance Tuning",
    createDate: "18 March, 2024",
    assignees: [user14, user23],
    priority: "High",
    status: "New",
  },
  {
    taskName: "Security and Compliance Checks",
    createDate: "05 May, 2024",
    assignees: [user18, user20, user19],
    priority: "High",
    status: "Completed",
  },
  {
    taskName: "User Access Management",
    createDate: "10 August, 2024",
    assignees: [user30, user29],
    priority: "High",
    status: "Pending",
  },
  {
    taskName: "Data Backup and Recovery",
    createDate: "02 September, 2024",
    assignees: [user26, user28],
    priority: "Low",
    status: "Pending",
  },
  {
    taskName: "Data Archival Strategy",
    createDate: "20 March, 2024",
    assignees: [user21, user27, user30],
    priority: "Low",
    status: "New",
  },
  {
    taskName: "Data Visualization",
    createDate: "15 July, 2024",
    assignees: [user25, user18],
    priority: "High",
    status: "Pending",
  },
  {
    taskName: "Machine Learning Model Training",
    createDate: "28 August, 2024",
    assignees: [user19, user14, user16],
    priority: "High",
    status: "New",
  },
]);

const NewTaskCount = computed<number>((): number => {
  return tasksData.value.filter((task) => task.status === "New").length;
});
const PendingTaskCount = computed<number>(() => {
  return tasksData.value.filter((task) => task.status === "Pending").length;
});

const CompletedTaskCount = computed<number>(() => {
  return tasksData.value.filter((task) => task.status === "Completed").length;
});
// Define an array of task objects
interface task {
  label: string;
  count: number | any;
  icon: object;
  bgColor: string;
  iconColor: string;
}
const tasks = ref<task[]>([
  {
    label: "Total Task",
    count: tasksData.value.length,
    icon: Dessert, // Using Lucide icon names
    bgColor: "bg-primary-500/20", // Background color for blur effect
    iconColor: "text-primary-500 fill-primary-500/10", // Icon color
  },
  {
    label: "New Task",
    count: NewTaskCount,
    icon: Cross,
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-500 fill-purple-500/10",
  },
  {
    label: "Pending Task",
    count: PendingTaskCount,
    icon: Hourglass,
    bgColor: "bg-yellow-500/20",
    iconColor: "text-yellow-500 fill-yellow-500/10",
  },
  {
    label: "Completed Task",
    count: CompletedTaskCount,
    icon: CircleCheckBig,
    bgColor: "bg-green-500/20",
    iconColor: "text-green-500 fill-green-500/10",
  },
]);

const todoTasksData = [
  {
    text: "Define Data Requirements",
    completed: true,
    editing: false,
    date: "today",
  },
  {
    text: "Identify Data Sources",
    completed: false,
    editing: false,
    date: "today",
  },
  {
    text: "Setup Initial Infrastructure",
    completed: false,
    editing: false,
    date: "today",
  },
  {
    text: "Initial Data Cleaning",
    completed: false,
    editing: false,
    date: "yesterday",
  },
  {
    text: "Data Profiling",
    completed: false,
    editing: false,
    date: "yesterday",
  },
  {
    text: "Data Transformation",
    completed: false,
    editing: false,
    date: "yesterday",
  },
];
export { tasksData, tasks, todoTasksData };
