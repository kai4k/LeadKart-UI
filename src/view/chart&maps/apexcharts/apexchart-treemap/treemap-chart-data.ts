// basiTreepmapData.ts
const basiTreepmapData = {
  series: [
    {
      data: [
        { x: "New Delhi", y: 218 },
        { x: "Kolkata", y: 149 },
        { x: "Mumbai", y: 184 },
        { x: "Ahmedabad", y: 55 },
        { x: "Bengaluru", y: 84 },
        { x: "Pune", y: 31 },
        { x: "Chennai", y: 70 },
        { x: "Jaipur", y: 30 },
        { x: "Surat", y: 44 },
        { x: "Hyderabad", y: 68 },
        { x: "Lucknow", y: 28 },
        { x: "Indore", y: 19 },
        { x: "Kanpur", y: 29 },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    title: {
      text: "Basic Treemap",
    },
  },
};

const multipleTreemapData = {
  series: [
    {
      name: "Desktops",
      data: [
        { x: "ABC", y: 10 },
        { x: "DEF", y: 60 },
        { x: "XYZ", y: 41 },
      ],
    },
    {
      name: "Mobile",
      data: [
        { x: "ABCD", y: 10 },
        { x: "DEFG", y: 20 },
        { x: "WXYZ", y: 51 },
        { x: "PQR", y: 30 },
        { x: "MNO", y: 20 },
        { x: "CDE", y: 30 },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    title: {
      text: "Multi-dimensional Treemap",
      align: "center",
    },
  },
};

const colorRangeTreemapData = {
  series: [
    {
      data: [
        { x: "INTC", y: 1.2 },
        { x: "GS", y: 0.4 },
        { x: "CVX", y: -1.4 },
        { x: "GE", y: 2.7 },
        { x: "CAT", y: -0.3 },
        { x: "RTX", y: 5.1 },
        { x: "CSCO", y: -2.3 },
        { x: "JNJ", y: 2.1 },
        { x: "PG", y: 0.3 },
        { x: "TRV", y: 0.12 },
        { x: "MMM", y: -2.31 },
        { x: "NKE", y: 3.98 },
        { x: "IYT", y: 1.67 },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    title: {
      text: "Treemap with Color scale",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      formatter: function (text: string, op: any) {
        return [text, op.value];
      },
      offsetY: -4,
    },
    colors: ["#FF5733", "#36BDCB"], // Example color codes
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            { from: -6, to: 0, color: "#CD363A" },
            { from: 0.001, to: 6, color: "#52B12C" },
          ],
        },
      },
    },
  },
};

const distributedTreemapData = {
  series: [
    {
      data: [
        { x: "New Delhi", y: 218 },
        { x: "Kolkata", y: 149 },
        { x: "Mumbai", y: 184 },
        { x: "Ahmedabad", y: 55 },
        { x: "Bangaluru", y: 84 },
        { x: "Pune", y: 31 },
        { x: "Chennai", y: 70 },
        { x: "Jaipur", y: 30 },
        { x: "Surat", y: 44 },
        { x: "Hyderabad", y: 68 },
        { x: "Lucknow", y: 28 },
        { x: "Indore", y: 19 },
        { x: "Kanpur", y: 29 },
      ],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    title: {
      text: "Distributed Treemap (different color for each cell)",
      align: "center",
    },
    colors: ["#FF5733", "#36BDCB", "#FFD700", "#800080", "#87CEEB", "#FF6347"], // Example color codes
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
  },
};

export {
  basiTreepmapData,
  multipleTreemapData,
  colorRangeTreemapData,
  distributedTreemapData,
};
