import { getColorCodes } from "@/utils/reusable-functions";
import { computed } from "vue";

const basicChartData = computed(() => {
  return {
    series: [
      {
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-04").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime(),
            ],
          },
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 300,
        type: "rangeBar",
      },
      colors: getColorCodes(["bg-primary-500"]), // Example color
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        tickAmount: 9,
        type: "datetime",
      },
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
        },
      },
    },
  };
});

const advancedTimelineData = computed(() => {
  return {
    series: [
      {
        name: "Bob",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime(),
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-07").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-09").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-11").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-11").getTime(),
              new Date("2019-03-16").getTime(),
            ],
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-01").getTime(),
              new Date("2019-03-03").getTime(),
            ],
          },
        ],
      },
      {
        name: "Joe",
        data: [
          {
            x: "Design",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-05").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-06").getTime(),
              new Date("2019-03-16").getTime(),
            ],
            goals: [
              {
                name: "Break",
                value: new Date("2019-03-10").getTime(),
                strokeColor: "#CD2F2A",
              },
            ],
          },
          {
            x: "Code",
            y: [
              new Date("2019-03-03").getTime(),
              new Date("2019-03-07").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-20").getTime(),
              new Date("2019-03-22").getTime(),
            ],
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-16").getTime(),
            ],
          },
        ],
      },
      {
        name: "Dan",
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-10").getTime(),
              new Date("2019-03-17").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-05").getTime(),
              new Date("2019-03-09").getTime(),
            ],
            goals: [
              {
                name: "Break",
                value: new Date("2019-03-07").getTime(),
                strokeColor: "#CD2F2A",
              },
            ],
          },
        ],
      },
    ],
    chartOptions: {
      chart: {
        height: 300,
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%",
        },
      },
      xaxis: {
        type: "datetime",
      },
      stroke: {
        width: 1,
      },
      fill: {
        type: "solid",
        opacity: 0.6,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      colors: getColorCodes([
        "bg-primary-500",
        "bg-yellow-500",
        "bg-green-500",
      ]), // Example color array
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
        },
      },
    },
  };
});

export const multipleGroupTimelineData = {
  series: [
    // Example data for multiple figures in history (e.g., George Washington, John Adams, etc.)
    {
      name: "George Washington",
      data: [
        {
          x: "President",
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "John Adams",
      data: [
        {
          x: "President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Vice President",
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    {
      name: "Thomas Jefferson",
      data: [
        {
          x: "President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
        {
          x: "Vice President",
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: "Secretary of State",
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime(),
          ],
        },
      ],
    },
    // Aaron Burr
    {
      name: "Aaron Burr",
      data: [
        {
          x: "Vice President",
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
        },
      ],
    },
    // George Clinton
    {
      name: "George Clinton",
      data: [
        {
          x: "Vice President",
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
        },
      ],
    },
    // John Jay
    {
      name: "John Jay",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()],
        },
      ],
    },
    // Edmund Randolph
    {
      name: "Edmund Randolph",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()],
        },
      ],
    },
    // Timothy Pickering
    {
      name: "Timothy Pickering",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()],
        },
      ],
    },
    // Charles Lee
    {
      name: "Charles Lee",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()],
        },
      ],
    },
    // John Marshall
    {
      name: "John Marshall",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()],
        },
      ],
    },
    // Levi Lincoln
    {
      name: "Levi Lincoln",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()],
        },
      ],
    },
    // James Madison
    {
      name: "James Madison",
      data: [
        {
          x: "Secretary of State",
          y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()],
        },
      ],
    },
    // Add more historical figures with their data...
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        rangeBarGroupRows: true,
      },
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#3F51B5",
      "#546E7A",
      "#D4526E",
      "#8D5B4C",
      "#F86624",
      "#D7263D",
      "#1B998B",
      "#2E294E",
      "#F46036",
      "#E2C044",
    ],
    fill: {
      type: "solid",
    },
    xaxis: {
      type: "datetime",
    },
    legend: {
      position: "right",
    },
    tooltip: {
      custom: function (opts: any) {
        const fromYear = new Date(opts.y1).getFullYear();
        const toYear = new Date(opts.y2).getFullYear();
        const values = opts.ctx.rangeBar.getTooltipValues(opts);

        return (
          '<div class="apexcharts-tooltip-rangebar">' +
          '<div> <span class="series-name" style="color: ' +
          values.color +
          '">' +
          (values.seriesName ? values.seriesName : "") +
          "</span></div>" +
          '<div> <span class="category">' +
          values.ylabel +
          ' </span> <span class="value start-value">' +
          fromYear +
          '</span> <span class="separator">-</span> <span class="value end-value">' +
          toYear +
          "</span></div>" +
          "</div>"
        );
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};

// dumbbellTimelineData.ts
export const dumbbellTimelineData = {
  series: [
    {
      data: [
        {
          x: "Operations",
          y: [2800, 4500],
        },
        {
          x: "Customer Success",
          y: [3200, 4100],
        },
        {
          x: "Engineering",
          y: [2950, 7800],
        },
        {
          x: "Marketing",
          y: [3000, 4600],
        },
        {
          x: "Product",
          y: [3500, 4100],
        },
        {
          x: "Data Science",
          y: [4500, 6500],
        },
        {
          x: "Sales",
          y: [4100, 5600],
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
    },
    colors: getColorCodes(["bg-primary-500", "bg-green-500"]), // Sample color codes, adjust based on dynamic data
    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: getColorCodes(["bg-primary-500", "bg-green-500"]), // Same as colors above
      },
    },
    title: {
      text: "Paygap Disparity",
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Female", "Male"],
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#36BDCB"],
        inverseColors: false,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
      },
    },
  },
};

export { basicChartData, advancedTimelineData };
