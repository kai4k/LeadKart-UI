//Basic Pie
const basicPieChart = {
  color: [
    "#358FFC", // Primary color
    "#22C55E", // Green
    "#FACC15", // Yellow
    "#C084FC", // Purple
    "#FB923C", // Orange
    "#95a5a6", // Gray
    "#34495e", // Dark Gray
  ],
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
    textStyle: {
      color: "#6B7280", // Dark Gray for text color
    },
  },
  grid: {
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      label: {
        color: "#6B7280", // Dark Gray for label color
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

//Doughnut Chart with Rounded Corner
const doughnutRoundedPieApp = (borderColor: string) => ({
  color: [
    "#a0c4ff", // Primary color
    "#a5d6a7", // Green
    "#f8bbd0", // Pink
    "#d1c4e9", // Purple
    "#ffcc80", // Orange
    "#f0f0f0", // Gray
    "#2c3e50", // Dark Gray
    "#ffffff", // White
  ],
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "0%",
    left: "center",
    textStyle: {
      color: "#6B7280", // Dark Gray for text color
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: borderColor, // White border
        borderWidth: 2,
      },
      label: {
        show: true, // Show the labels
        position: "outside", // Position the labels outside the pie slices
        color: "#6B7280", // Dark Gray for label color
        fontSize: 12, // Adjust font size if needed
        fontWeight: "normal", // Font weight for the labels
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: "bold",
        },
      },
      labelLine: {
        // show: true,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
});

//Doughnut Chart
const doughnutPieChart = {
  color: ["#37A2DA", "#67E0E3", "#FFDB5C", "#FF9F7F", "#E062AE"],
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
    textStyle: {
      color: "#6B7280", // Dark Gray color for legend text
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

//Half Doughnut Chart
const halfDouglasNutApp = {
  color: ["#37A2DA", "#67E0E3", "#FFDB5C", "#FF9F7F", "#E062AE"],
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
    textStyle: {
      color: "#6B7280", // Dark Gray color for legend text
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "70%"],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      label: {
        color: "#6B7280", // Dark Gray color for label text
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],

      color: ["#37A2DA", "#67E0E3", "#FFDB5C", "#FF9F7F", "#E062AE"],
    },
  ],
};

export {
  basicPieChart,
  doughnutRoundedPieApp,
  doughnutPieChart,
  halfDouglasNutApp,
};
