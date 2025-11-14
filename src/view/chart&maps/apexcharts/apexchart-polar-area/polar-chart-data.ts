import { getColorCodes } from "@/utils/reusable-functions";

//Basic Chart
const basicPolarChart = () => {
  return {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        height: 300,
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-red-500",
        "bg-red-500",
      ]),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
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

const monochromePolarChart = {
  series: [42, 47, 52, 58, 65],
  options: {
    chart: {
      height: 300,
      type: "polarArea",
    },
    labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  },
};
export { basicPolarChart, monochromePolarChart };
