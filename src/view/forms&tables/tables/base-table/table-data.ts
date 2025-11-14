import { ref } from "vue";

interface DataItem {
  name: string;
  age: number;
  date: string;
  address: string;
  salary: string;
}

const basicTableData = ref([
  {
    id: "SRB-871021506-01",
    name: "Alexandrine Grant",
    date: "28 Jan, 2025",
    status: "Pending",
    amount: "$8,563",
  },
  {
    id: "SRB-871021506-02",
    name: "Victor Edwards",
    date: "02 Feb, 2025",
    status: "Completed",
    amount: "$17,201",
  },
  {
    id: "SRB-871021506-03",
    name: "Maria Rodriguez",
    date: "15 Feb, 2025",
    status: "Pending",
    amount: "$3,245",
  },
  {
    id: "SRB-871021506-04",
    name: "James Wilson",
    date: "20 Feb, 2025",
    status: "Completed",
    amount: "$12,890",
  },
  {
    id: "SRB-871021506-05",
    name: "Sarah Johnson",
    date: "25 Feb, 2025",
    status: "Completed",
    amount: "$5,670",
  },
]);

const borderStyleData = ref<DataItem[]>([
  {
    name: "Joana Morar",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Fabian Gorczany",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Dale Willms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Lea Steuber",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "Freda Renner",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);
const borderTableData = ref<DataItem[]>([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const separateTableData = ref<DataItem[]>([
  {
    name: "Tatyana Weissnat",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Milford Nitzsche",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Carmela Marks",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Julianne Ruecker",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "Rosario Kertzmann",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const borderSpacingTableData = ref<DataItem[]>([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const captionTableData = ref([
  {
    name: '"Stone Cold" Steve Austin',
    address: "Stone Cold Stunner, Lou Thesz Press",
  },
  {
    name: 'Bret "The Hitman" Hart',
    address: "The Sharpshooter",
  },
  {
    name: "Razor Ramon",
    address: "Razor's Edge, Fallaway Slam",
  },
]);

const headingLight = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const hoverTableData = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const stripedEvenTableData = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const stripedOddTableData = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const coloredBorderTableData1 = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const stripedColoredTableData = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const loadingTableData = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: "$15,236",
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: "$8,563",
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: "$7,986",
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: "$36,322",
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: "$11,741",
  },
]);

const sortingTableData = ref([
  {
    name: "Jeremy McMullen",
    age: 37,
    date: "21 Jan, 2024",
    address: "United States",
    salary: 15236,
    editable: null,
  },
  {
    name: "Charles Fischer",
    age: 29,
    date: "28 Jan, 2024",
    address: "Romania",
    salary: 8563,
    editable: null,
  },
  {
    name: "Louise Harms",
    age: 32,
    date: "02 Feb, 2024",
    address: "Canada",
    salary: 7986,
    editable: null,
  },
  {
    name: "Henry Boyle",
    age: 34,
    date: "11 Feb, 2024",
    address: "Germany",
    salary: 36322,
    editable: null,
  },
  {
    name: "John Brown",
    age: 26,
    date: "20 Feb, 2024",
    address: "Mexico",
    salary: 11741,
    editable: null,
  },
]);
export {
  basicTableData,
  borderTableData,
  borderStyleData,
  separateTableData,
  borderSpacingTableData,
  captionTableData,
  headingLight,
  hoverTableData,
  stripedEvenTableData,
  stripedOddTableData,
  coloredBorderTableData1,
  stripedColoredTableData,
  loadingTableData,
  sortingTableData
};
