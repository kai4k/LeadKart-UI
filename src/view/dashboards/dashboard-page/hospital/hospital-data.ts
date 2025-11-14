import { ref } from "vue";
import { getColorCodes } from "@/utils/reusable-functions";
//Patient visit Chart
const patientVisitChart = () => {
  return {
    series: [
      {
        name: "Net Profit",
        data: [32, 39, 43, 49, 52, 58, 63, 60, 66],
      },
    ],
    chartOptions: {
      chart: {
        height: 320,
        type: "bar",
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-yellow-500",
      ]), // Example colors
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
      fill: { opacity: 1 },
      yaxis: {
        tickAmount: 10,
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: -30,
          right: 0,
          bottom: -12,
          left: 0,
        },
      },
      tooltip: {
        y: {
          formatter: (val: number) => `$ ${val}k`,
        },
      },
    },
  };
};

//Patient Visit by Department Chart
const patientVisitByDepartmentChart = () => {
  return {
    series: [44, 55, 41, 18],
    chartOptions: {
      labels: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
      chart: {
        type: "donut",
        height: 250,
        width: "350",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: { enabled: false },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-yellow-500",
      ]), // Example colors
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: (val: string, opts: any) => {
          return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
              height: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
};

export const patientSeries = [44, 55, 41, 18];
export const chartOptions = {
  labels:  ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
  chart: {
    type: "donut",
    width: "350",
    height: 250,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  fill: {
    type: "gradient",
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    formatter: function (val: string, opts: any) {
      return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
          height: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

//Basic Charts
const patientsHistoryChart = () => {
  return {
    series: [
      {
        name: "Inject Patients",
        data: [24, 32, 28, 62, 67, 80, 96, 106],
      },
      {
        name: "Surgery Patients",
        data: [5, 14, 19, 27, 35, 44, 22, 49],
      },
    ],
    chartOptions: {
      chart: {
        defaultLocale: "en",
        height: 195,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
        lineCap: "butt",
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
      },
      yaxis: {
        tickAmount: 6,
        labels: {
          formatter: (val: number) => Math.round(val),
        },
      },
      tooltip: {
        x: {
          show: true,
        },
      },
      colors: getColorCodes(["bg-primary-500", "bg-purple-500"]), // Use your own color codes here
      grid: {
        strokeDashArray: 4,
        position: "back",
        padding: {
          top: -20,
          right: 0,
          bottom: 0,
        },
      },
    },
  };
};

//Hospital Birth & Death Chart
const hospitalBirthDeathChart = () => {
  return {
    series: [
      {
        name: "Birth Case",
        data: [80, 50, 30, 70, 99, 36],
      },
      {
        name: "Death Case",
        data: [10, 14, 28, 16, 34, 87],
      },
      {
        name: "Accident Case",
        data: [44, 98, 54, 46, 34, 22],
      },
    ],
    chartOptions: {
      chart: {
        height: 340,
        type: "radar",
      },
      colors: ["#1E90FF", "#FF6347", "#32CD32"], // Customize colors as needed
      stroke: {
        width: 1,
      },
      fill: {
        opacity: 0.1,
      },
      grid: {
        padding: {
          top: -25,
        },
      },
      xaxis: {
        categories: ["2019", "2020", "2021", "2022", "2023", "2024"],
      },
      yaxis: {
        tickAmount: 10,
      },
    },
  };
};

interface RoomData {
  title: string;
  description: string;
  usage: string;
  image: URL | any;
}
const roomData = ref<RoomData[]>([
  {
    title: "VIP Rooms",
    description: "Average usage of VIP Rooms",
    usage: "36.7%",
    image: new URL(
      "@/assets/images/dashboards/hospital/vip.png",
      import.meta.url
    ),
  },
  {
    title: "Private Rooms",
    description: "Average usage of Private Rooms",
    usage: "61.6%",
    image: new URL(
      "@/assets/images/dashboards/hospital/hospital-bed.png",
      import.meta.url
    ),
  },
  {
    title: "General Rooms",
    description: "Average usage of General Rooms",
    usage: "77.9%",
    image: new URL(
      "@/assets/images/dashboards/hospital/hospital.png",
      import.meta.url
    ),
  },
  {
    title: "ICU Rooms",
    description: "Average usage of ICU Rooms",
    usage: "24.1%",
    image: new URL(
      "@/assets/images/dashboards/hospital/emergency-room.png",
      import.meta.url
    ),
  },
  {
    title: "Waiting Area",
    description: "Average usage of Waiting Area",
    usage: "89.4%",
    image: new URL(
      "@/assets/images/dashboards/hospital/waiting-area.png",
      import.meta.url
    ),
  },
  {
    title: "Staff Rooms",
    description: "Average usage of Staff Rooms",
    usage: "99.9%",
    image: new URL(
      "@/assets/images/dashboards/hospital/meeting.png",
      import.meta.url
    ),
  },
]);

interface Doctor {
  name: string;
  specialty: string;
  treatments: number;
  image: URL;
}

const doctors = ref<Doctor[]>([
  {
    name: "Dr. Mariana Grandon",
    specialty: "Endocrinologist",
    treatments: 2154,
    image: new URL("@/assets/images/avatar/user-25.png", import.meta.url),
  },
  {
    name: "Dr. Sydney Toor",
    specialty: "Hematology",
    treatments: 879,
    image: new URL("@/assets/images/avatar/user-27.png", import.meta.url),
  },
  {
    name: "Dr. Dante Ditto",
    specialty: "Radiologist",
    treatments: 643,
    image: new URL("@/assets/images/avatar/user-26.png", import.meta.url),
  },
  {
    name: "Dr. Marcus Welton",
    specialty: "Nephrologist",
    treatments: 5412,
    image: new URL("@/assets/images/avatar/user-28.png", import.meta.url),
  },
  {
    name: "Dr. Jennifer Maune",
    specialty: "Cardiologist",
    treatments: 1874,
    image: new URL("@/assets/images/avatar/user-29.png", import.meta.url),
  },
  {
    name: "Dr. Antonio Ligler",
    specialty: "Neurologist",
    treatments: 1195,
    image: new URL("@/assets/images/avatar/user-30.png", import.meta.url),
  },
]);

interface Patient {
  patientName: string;
  age: string;
  phone: string;
  email: string;
  condition: string;
  medications: string;
  lastVisit: string;
  patientID?: string;
}
const patientListData = ref<Patient[]>([
  {
    patientName: "Dorothy Daley",
    age: "45",
    phone: "+1 0123 4567",
    email: "dorothy.daley@example.com",
    condition: "Hypertension",
    medications: "Lisinopril, Amlodipine",
    lastVisit: "12 Jan, 2024",
  },
  {
    patientName: "Richard Roe",
    age: "38",
    phone: "+1 0987 6543",
    email: "richard.roe@example.com",
    condition: "Diabetes",
    medications: "Metformin",
    lastVisit: "05 Feb, 2024",
  },
  {
    patientName: "Alice Smith",
    age: "29",
    phone: "+1 0234 5678",
    email: "alice.smith@example.com",
    condition: "Asthma",
    medications: "Albuterol",
    lastVisit: "18 Mar, 2024",
  },
  {
    patientName: "Bob Johnson",
    age: "52",
    phone: "+1 0345 6789",
    email: "bob.johnson@example.com",
    condition: "Hyperlipidemia",
    medications: "Atorvastatin",
    lastVisit: "25 Apr, 2024",
  },
  {
    patientName: "Carol White",
    age: "47",
    phone: "+1 0456 7890",
    email: "carol.white@example.com",
    condition: "Arthritis",
    medications: "Ibuprofen",
    lastVisit: "30 May, 2024",
  },
  {
    patientName: "David Black",
    age: "33",
    phone: "+1 0567 8901",
    email: "david.black@example.com",
    condition: "Depression",
    medications: "Sertraline",
    lastVisit: "15 Jun, 2024",
  },
  {
    patientName: "Eve Green",
    age: "41",
    phone: "+1 0678 9012",
    email: "eve.green@example.com",
    condition: "Anxiety",
    medications: "Alprazolam",
    lastVisit: "10 Jul, 2024",
  },
  {
    patientName: "Frank Brown",
    age: "36",
    phone: "+1 0789 0123",
    email: "frank.brown@example.com",
    condition: "Back Pain",
    medications: "Acetaminophen",
    lastVisit: "20 Aug, 2024",
  },
  {
    patientName: "Grace Miller",
    age: "50",
    phone: "+1 0890 1234",
    email: "grace.miller@example.com",
    condition: "Thyroid Disorder",
    medications: "Levothyroxine",
    lastVisit: "01 Sep, 2024",
  },
  {
    patientName: "Henry Wilson",
    age: "28",
    phone: "+1 0901 2345",
    email: "henry.wilson@example.com",
    condition: "Migraine",
    medications: "Sumatriptan",
    lastVisit: "15 Oct, 2024",
  },
  {
    patientName: "Irene Martinez",
    age: "60",
    phone: "+1 1012 3456",
    email: "irene.martinez@example.com",
    condition: "Osteoporosis",
    medications: "Alendronate",
    lastVisit: "20 Nov, 2024",
  },
  {
    patientName: "Jack Davis",
    age: "34",
    phone: "+1 1123 4567",
    email: "jack.davis@example.com",
    condition: "Gastroesophageal Reflux Disease",
    medications: "Omeprazole",
    lastVisit: "05 Dec, 2024",
  },
  {
    patientName: "Karen Taylor",
    age: "42",
    phone: "+1 1234 5678",
    email: "karen.taylor@example.com",
    condition: "Chronic Fatigue Syndrome",
    medications: "Modafinil",
    lastVisit: "20 Dec, 2024",
  },
]);

export {
  patientVisitChart,
  patientVisitByDepartmentChart,
  patientsHistoryChart,
  hospitalBirthDeathChart,
  roomData,
  doctors,
  patientListData,
};
