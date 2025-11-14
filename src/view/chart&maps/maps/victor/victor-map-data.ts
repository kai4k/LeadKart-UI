import pinImg from "@/assets/images/others/pin.png";
const imageMarkersMap = {
  markers: [
    {
      name: "Egypt",
      coords: [26.8206, 30.8025],
      style: {
        initial: {
          image: pinImg, // Add a marker image for this particular marker.
        },
      },
    },
    {
      name: "United States",
      coords: [37.0902, -95.7129],
      style: {
        initial: {
          image: pinImg, // Add a marker image for this particular marker.
        },
      },
    },
    {
      name: "United Kingdom",
      coords: [55.3781, 3.436],
      style: {
        initial: {
          image: pinImg, // Add a marker image for this particular marker.
        },
      },
    },
  ],
};

const lineStyleMap = {
  markers: [
    {
      name: "Brazil",
      coords: [-14.235, -51.9253], // Brazil coordinates
      style: { fill: "red" },
    },
    {
      name: "Greenland",
      coords: [71.7069, -42.6043],
      style: { fill: "green" },
    },
    {
      name: "Egypt",
      coords: [26.8206, 30.8025],
      style: { fill: "blue" },
    },
    {
      name: "United States",
      coords: [37.0902, -95.7129],
      style: { fill: "purple" },
    },
    {
      name: "Norway",
      coords: [60.472, 8.4689],
      style: { fill: "yellow" },
    },
  ],
  addLines: [
    { from: "Brazil", to: "Greenland" },
    { from: "Greenland", to: "Egypt" },
    { from: "Egypt", to: "United States" },
    { from: "United States", to: "Norway" },
    { from: "Norway", to: "Brazil" },
  ],
};

const dataSeriesMap = {
  markers: [
    { coords: [61, 105] },
    { coords: [72, -42] },
    { coords: [56, -106] },
    { coords: [31.5, 34.8] },
    { coords: [-14.235, -51.9253] },
    { coords: [35.8617, 104.1954] },
  ],
  series: {
    markers: [
      {
        attribute: "fill",
        legend: {
          title: "Something (marker)",
          style: {
            fill: "red",
            backgroundColor: "none",
          },
        },
        scale: {
          mScale1: "#ffc371",
          mScale2: "#c79efd",
        },
        values: {
          // Notice: the key must be a number of the marker.
          0: "mScale1",
          1: "mScale2",
          2: "mScale2",
        },
      },
    ],
  },
};
export { imageMarkersMap, lineStyleMap, dataSeriesMap };
