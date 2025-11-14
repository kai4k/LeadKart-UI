import { getColorCodes } from "@/utils/reusable-functions";

//Invitation Chart
const invitationChart = () => {
  return {
    series: [87], // Data series
    chartOptions: {
      chart: {
        type: "radialBar",
      },
      colors: getColorCodes(["bg-pink-500"]), // Will be updated on init
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
          dataLabels: {
            show: true,
            name: {
              fontWeight: "600",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: getColorCodes(["bg-primary-500"]),
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Accept Invitation"],
    },
  };
};

//Ticket sale Charts
const ticketSaleChart = () => {
  return {
    chartSeries: [{ name: "Ticket Sale", data: [10, 41, 35, 51, 49, 62, 69] }],
    chartOptions: {
      series: ["S", "M", "T", "W", "T", "F", "S"],
      chart: {
        defaultLocale: "en",
        height: 180,
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
        show: true,
        curve: "monotoneCubic",
        lineCap: "butt",
        width: 3,
        dashArray: 0,
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
      },
      yaxis: {
        show: false,
        tickAmount: 7,
      },
      tooltip: {
        x: {
          show: true,
        },
      },
      colors: getColorCodes(["bg-primary-500"]), // You can customize the color codes here
      grid: {
        padding: {
          top: -10,
          right: 0,
          bottom: 0,
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };
};

export { invitationChart, ticketSaleChart };
