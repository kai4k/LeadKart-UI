import user22 from "@/assets/images/avatar/user-22.png";
import user23 from "@/assets/images/avatar/user-23.png";
import { ref } from "vue";
//Distributed Columns Chart
const employeeChart = {
  series: [
    {
      name: "Employee",
      data: [21, 22, 19, 10, 10, 28, 16],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        distributed: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.2,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 30],
        colorStops: [],
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Radiology"],
        ["Orthopedics"],
        ["Neurology"],
        ["Cardiology"],
        ["Pediatrics"],
        ["Nurse"],
        ["Others"],
      ],
    },
    colors: [
      "#ff4560",
      "#00e396",
      "#feb019",
      "#ff6f61",
      "#775dd0",
      "#29b6f6",
      "#ff9800",
    ],
  },
};

export interface Department {
  departmentID?: string;
  departmentName: string;
  doctor: string;
  totalEmployee: string;
  headOfDepartment: string;
  status: string;
  image?: string;
  avatarText?: string;
}
const departmentData = ref<Department[]>([
  {
    departmentName: "Cardiology",
    doctor: "Dr. Mark Thompson",
    totalEmployee: "08",
    headOfDepartment: "Dr. Sarah Patel",
    status: "Active",
  },
  {
    departmentName: "Orthopedics",
    image: user22,
    doctor: "Dr. Michael Chang",
    totalEmployee: "10",
    headOfDepartment: "Dr. Emily Johnson",
    status: "Active",
  },
  {
    departmentName: "Pediatrics",
    doctor: "Dr. Jennifer Ramirez",
    totalEmployee: "12",
    headOfDepartment: "Dr. Daniel Smith",
    status: "Active",
  },
  {
    departmentName: "Neurology",
    doctor: "Dr. Rebecca Evans",
    totalEmployee: "07",
    headOfDepartment: "Dr. Andrew Clark",
    status: "Active",
  },
  {
    departmentName: "Ophthalmology",
    image: user23,
    doctor: "Dr. Sophia Lee",
    totalEmployee: "06",
    headOfDepartment: "Dr. David Wong",
    status: "Unactive",
  },
  {
    departmentName: "Gastroenterology",
    doctor: "Dr. Kevin Patel",
    totalEmployee: "09",
    headOfDepartment: "Dr. Emma Rodriguez",
    status: "Active",
  },
  {
    departmentName: "Obstetrics and Gynecology",
    doctor: "Dr. Rachel Anderson",
    totalEmployee: "11",
    headOfDepartment: "Dr. James Wilson",
    status: "Active",
  },
  {
    departmentName: "Dermatology",
    doctor: "Dr. Emily Chen",
    totalEmployee: "07",
    headOfDepartment: "Dr. Benjamin Davis",
    status: "Active",
  },
  {
    departmentName: "Urology",
    doctor: "Dr. Christopher Carter",
    totalEmployee: "08",
    headOfDepartment: "Dr. Lauren Taylor",
    status: "Active",
  },
]);

export { employeeChart, departmentData };
