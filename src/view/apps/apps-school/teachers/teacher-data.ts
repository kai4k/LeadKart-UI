// Time Spend in Lecture Chert

import { getColorCodes } from "@/utils/reusable-functions";

const timeSpendInLectureChert = {
  series: [
    {
      name: "Total Hours",
      data: [142, 139, 159, 149, 162, 187, 160, 154, 122],
    },
  ],

  // Reactive chart options
  chartOptions: {
    chart: {
      height: 260,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
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
        ["Jan"],
        ["Feb"],
        ["Mar"],
        ["Apr"],
        ["May"],
        ["Jun"],
        ["Jul"],
        ["Aug"],
        ["Sep"],
      ],
    },
    yaxis: {
      tickAmount: 10,
    },
    grid: {
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
      },
    },
  },
};

export { timeSpendInLectureChert };
