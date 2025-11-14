//Basic
const basicRadialBarChart = () => {
  return {
    series: [70],
    chartOptions: {
      chart: {
        type: "radialBar",
        height: 300,
      },
      colors: getColorCodes(["bg-primary-500"]),
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["Cricket"],
    },
  };
};

//Multiple
const multipleRadialBarChart = () => {
  return {
    series: [44, 55, 67, 83],
    chartOptions: {
      chart: {
        type: "radialBar",
        height: 300,
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: () => 249, // Custom formatter for the total
            },
          },
        },
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
      ]),
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  };
};
//Custom Angle Circle
const customAngleRadialbarChart = () => {
  return {
    series: [76, 67, 61, 90],
    chartOptions: {
      chart: {
        type: "radialBar",
        height: 300,
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
      ]),
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: (seriesName: string, opts: any) => {
          return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`;
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    },
  };
};

//Gradient
const gradientRadialbarChart = () => {
  return {
    series: [75],
    chartOptions: {
      chart: {
        height: 300,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            position: "front",
          },
          track: {
            strokeWidth: "67%",
            margin: 0, // Margin in SRBThemes
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: (val: number) => parseInt(val.toString(), 10),
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      colors: getColorCodes(["bg-primary-500"]), // Fallback color
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Percent"],
    },
  };
};
import user1 from "@/assets/images/avatar/user-1.png";
import image1 from "@/assets/images/gallery/img-01.jpg";
import { getColorCodes } from "@/utils/reusable-functions";
const imageRadialbarChart = {
  series: [67],
  chartOptions: {
    chart: {
      height: 300,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
          image: user1,
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: false,
            color: "#fff",
          },
          value: {
            show: true,
            color: "#333",
            offsetY: 70,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      type: "image",
      image: {
        src: [image1],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Volatility"],
  },
};

const strokedGaugeRadialbarChart = () => {
  return {
    series: [75],
    chartOptions: {
      chart: {
        height: 300,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: "22px",
              color: undefined,
              formatter: (val: number) => {
                return val + "%";
              },
            },
          },
        },
      },
      colors: getColorCodes(["bg-primary-500"]), // Use dynamic colors if needed
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Median Ratio"],
    },
  };
};

const semiGaugeRadialbarChart = {
  series: [76],
  chartOptions: {
    chart: {
      height: 300,
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in SRBThemes
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    colors: [], // You can dynamically populate this with your color codes
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
  },
};

export {
  basicRadialBarChart,
  multipleRadialBarChart,
  customAngleRadialbarChart,
  gradientRadialbarChart,
  imageRadialbarChart,
  strokedGaugeRadialbarChart,
  semiGaugeRadialbarChart,
};
