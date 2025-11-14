import {
  CalendarDays,
  PanelBottomDashed,
  PencilRuler,
  Route,
} from "lucide-vue-next";

//Basic Charts
const basicLineApp = {
  chartSeries: [
    {
      name: "Series name",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  chartOptions: {
    chart: {
      defaultLocale: "en",
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
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
      min: 0, // Set the minimum value for the Y-axis
      max: 160, // Set the maximum value for the Y-axis
      tickAmount: 8, // Adjust this value based on the desired number of ticks
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: (val: number) =>
          "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
      },
    },
    colors: ["#9333EA"], // You might need to define this function
    grid: {
      strokeDashArray: 2,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
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
  },
};

const pricingPlans = [
  {
    icon: "Flower",
    title: "Lite Plan",
    description: "Free account with limited features",
    price: "$9.99",
    buttonText: "Get Started",
    buttonStyle: "btn-sub-purple",
    features: {
      included: [
        "30 Products & Projects",
        "Custom Permissions",
        "Some Basic Integration",
        "Up to 50 Team Members",
      ],
      notIncluded: [
        "Advanced Security",
        "Permissions & Workflows",
        "24/7 Support",
      ],
    },
    highlight: "",
  },
  {
    icon: "Flower",
    title: "Professional Plan",
    description: "Free account with limited features",
    price: "$19.99",
    buttonText: "Get Started",
    buttonStyle: "btn-purple",
    features: {
      included: [
        "30 Products & Projects",
        "Custom Permissions",
        "Some Basic Integration",
        "Up to 50 Team Members",
        "Advanced Security",
      ],
      notIncluded: ["Permissions & Workflows", "24/7 Support"],
    },
    highlight: "Most Popular",
  },
  {
    icon: "Flower",
    title: "Business Plan",
    description: "Free account with limited features",
    price: "$29.99",
    buttonText: "Get Started",
    buttonStyle: "btn-sub-purple",
    features: {
      included: [
        "30 Products & Projects",
        "Custom Permissions",
        "Some Basic Integration",
        "Up to 50 Team Members",
        "Advanced Security",
        "Permissions & Workflows",
        "24/7 Support",
      ],
      notIncluded: [],
    },
    highlight: "",
  },
];

const featureDetails = [
  {
    icon: PencilRuler,
    title: "Customized invoicing",
    description:
      "Invoicing is the basic thing without which a business cannot work. Every business needs to issue an invoice according to their requirements.",
  },
  {
    icon: PanelBottomDashed,
    title: "Recurring invoices",
    description:
      "Invoices record the essential data to preparing tax filings. When the company records all its invoices meticulously, that data can be extracted to make tax filings.",
  },
  {
    icon: Route,
    title: "Automatic payment reminders",
    description:
      "Send digital invoices in seconds via email, SMS, or a shareable link. Your customers can pay instantly with just one click using their preferred method.",
  },
  {
    icon: CalendarDays,
    title: "Invoice date",
    description:
      "What should an invoice include? If you want to issue an invoice, then the word “invoice” must appear on it. This tells you that it is an official document that confirms.",
  },
];
export { basicLineApp, pricingPlans, featureDetails };
