import { ref } from "vue";
import { getColorCodes } from "@/utils/reusable-functions";
//Gradient Donut Chart
const courseDonutChart = {
  series: [44, 55],
  chartOptions: {
    chart: {
      height: 175,
      type: "donut",
    },
    legend: {
      show: true,
      position: "bottom",
      offsetY: 7,
    },
    labels: ["Process", "In Process"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
  },
};

//Students charts
const studentChartColor = getColorCodes(["bg-primary-500", "bg-red-500"]);
const studentsCharts = {
  series: [
    {
      data: [
        { x: "2018", y: [241, 100] },
        { x: "2019", y: [150, 41] },
        { x: "2020", y: [210, 100] },
        { x: "2021", y: [200, 10] },
        { x: "2022", y: [100, 10] },
        { x: "2023", y: [190, 120] },
        { x: "2024", y: [154, 241] },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 290,
      type: "rangeBar",
      zoom: { enabled: false },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [[studentChartColor[1], studentChartColor[0]]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "center",
      customLegendItems: ["New Students", "Leave Students"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: [studentChartColor[1]],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    colors: studentChartColor,
    grid: {
      padding: { bottom: -10, right: 0 },
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
    xaxis: {
      tickPlacement: "on",
    },
  },
};

// Define the event type
interface Event {
  title: string;
  date: string;
}
// Create the events array
const events: Event[] = [
  { title: "World Braille Day", date: "04 Jan, 2024" },
  { title: "Earth Hour", date: "23 March 2024" },
  { title: "Software Freedom Day", date: "15 Sep 2024" },
  { title: "Inventors Day", date: "29 Sep 2024" },
  { title: "World Teacher's Day", date: "05 Oct 2024" },
  { title: "Human Rights Day", date: "10 Dec 2024" },
];

interface Notice {
  title: string;
  author: string;
  image: string | URL | any;
}
// Create the notices array
const notices: Notice[] = [
  {
    title: "Beginning or end of the school year",
    author: "By Erwin Legros",
    image: new URL("@/assets/images/school/blog/img-05.jpg", import.meta.url),
  },
  {
    title: "Motivational or inspirational quotes",
    author: "By Ardith Bode",
    image: new URL("@/assets/images/school/blog/img-03.jpg", import.meta.url),
  },
  {
    title: "Examination & Parent - Teacher Meeting",
    author: "By Gerhard Boyle",
    image: new URL("@/assets/images/school/blog/img-04.jpg", import.meta.url),
  },
  {
    title: "Elementary school student activities",
    author: "By Maci Crist",
    image: new URL("@/assets/images/school/blog/img-02.jpg", import.meta.url),
  },
  {
    title: "Random acts of kindness board compare and contrast",
    author: "By Ruthie Blanda",
    image: new URL("@/assets/images/school/blog/img-01.jpg", import.meta.url),
  },
  {
    title: "A Book a Day Keeps the Monsters Away",
    author: "By Magnus Miller",
    image: new URL("@/assets/images/school/blog/img-06.jpg", import.meta.url),
  },
  {
    title: "Student Work Coming Bulletin Board",
    author: "By Jeremie Thiel",
    image: new URL("@/assets/images/school/blog/img-07.jpg", import.meta.url),
  },
  {
    title: "Add a Little Sunshine to Someone’s Day",
    author: "By Treva Trantow",
    image: new URL("@/assets/images/school/blog/img-08.jpg", import.meta.url),
  },
];

interface UpcomingTestDataType {
  title: string;
  class: string;
  date: string;
  image: string; // URL as a string
  bgColor: string; // Tailwind CSS background color class
}
const upcomingTestData = ref<UpcomingTestDataType[]>([
  {
    title: "Basic Computer",
    class: "Class 9",
    date: "26 Dec",
    image: new URL("@/assets/images/school/computer.png", import.meta.url).href,
    bgColor: "bg-orange-500/15",
  },
  {
    title: "Science Part 2 Test",
    class: "Class 11",
    date: "21 Dec",
    image: new URL("@/assets/images/school/chemical.png", import.meta.url).href,
    bgColor: "bg-red-500/15",
  },
  {
    title: "English Grammar",
    class: "Class 12",
    date: "15 Dec",
    image: new URL("@/assets/images/school/dictionary.png", import.meta.url)
      .href,
    bgColor: "bg-red-500/15",
  },
  {
    title: "Science Part 1 Test",
    class: "Class 11",
    date: "03 Dec",
    image: new URL("@/assets/images/school/chemical.png", import.meta.url).href,
    bgColor: "bg-primary-500/15",
  },
  {
    title: "Management",
    class: "Class 12",
    date: "24 Nov",
    image: new URL(
      "@/assets/images/school/change-management.png",
      import.meta.url
    ).href,
    bgColor: "bg-purple-500/15",
  },
]);

interface ScoreType {
  studentsName: string;
  marks: number;
  resultDate: string;
  grade: string;
  passFail: "Pass" | "Fail";
}

const ScoreData = ref<ScoreType[]>([
  {
    studentsName: "Dorothy Daley",
    marks: 498,
    resultDate: "12 Jan, 2024",
    grade: "A",
    passFail: "Pass",
  },
  {
    studentsName: "Silvia Hoover	",
    marks: 140,
    resultDate: "12 Jan, 2024",
    grade: "D",
    passFail: "Fail",
  },
  {
    studentsName: "Jonathan Davis",
    marks: 450,
    resultDate: "12 Jan, 2024",
    grade: "A",
    passFail: "Pass",
  },
  {
    studentsName: "Martha Stewart",
    marks: 320,
    resultDate: "12 Jan, 2024",
    grade: "B",
    passFail: "Pass",
  },
  {
    studentsName: "Harold Finch",
    marks: 275,
    resultDate: "12 Jan, 2024",
    grade: "C",
    passFail: "Pass",
  },
  {
    studentsName: "Anna Kendrick",
    marks: 495,
    resultDate: "12 Jan, 2024",
    grade: "A",
    passFail: "Pass",
  },
  {
    studentsName: "Brian Johnson",
    marks: 180,
    resultDate: "12 Jan, 2024",
    grade: "D",
    passFail: "Fail",
  },
  {
    studentsName: "Laura Palmer",
    marks: 360,
    resultDate: "12 Jan, 2024",
    grade: "B",
    passFail: "Pass",
  },
  {
    studentsName: "David Bowie",
    marks: 290,
    resultDate: "12 Jan, 2024",
    grade: "C",
    passFail: "Pass",
  },
  {
    studentsName: "Olivia Brown",
    marks: 470,
    resultDate: "12 Jan, 2024",
    grade: "A",
    passFail: "Pass",
  },
]);

interface Video {
  src: string;
  title: string;
  category: string;
}
const videos = ref<Video[]>([
  {
    src: "https://www.youtube.com/embed/_x9lsSPW4rA?si=dldJWZYL7u6URBi5",
    title: "Domiex - Admin & Dashboard Template Introduction",
    category: "Domiex Intro",
  },
  {
    src: "https://www.youtube.com/embed/mSC6GwizOag?si=Dqcl3RgGrfRyqmHo",
    title: "What's new in Tailwind CSS v3.0?",
    category: "TailwindCSS",
  },
  {
    src: "https://www.youtube.com/embed/RZ9cWr3tY9w?si=J6KavpQC6n9gaC64",
    title: "Controlling Stacking Contexts with Isolation Utilities",
    category: "TailwindCSS",
  },
]);
export {
  courseDonutChart,
  events,
  notices,
  studentsCharts,
  upcomingTestData,
  ScoreData,
  videos,
};
