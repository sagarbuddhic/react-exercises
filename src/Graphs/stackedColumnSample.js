let options = {
  credits: {
    enabled: false,
  },
  chart: {
    zoomType: "None",
    type: "column",
    borderWidth: 0,
    borderRadius: 0,
    borderColor: "#e5ebf5",
    backgroundColor: "#f5f6fa",
    style: {
      fontFamily: "Roboto",
    },
  },
  title: {
    text: "Metric Data",
    style: {
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "rgb(51, 51, 51)",
    },
    align: "left",
  },
  xAxis: {
    categories: [
      "3978374a2f6c9823232f0dffcd73e56d",
      "d4a6f0749f0bc58a9354a4c4069e15ab",
      "2586a1c72296ba3fd88ff75fde026bb8",
      "03ca21beaa8c35ea7f28f542bc84cdf8",
      "7a96d4fc17402cf976dd6e8107a16f00",
      "757f2e340f128eadc12a1770888d1371",
      "392770d0b0e7bd9788ce4396e3b9a526",
      "1711912e09763f9014b621dbfe10ccfa",
      "2364d9074b70929261e0b97091f9bf50",
      "1414d3bb94d54a2162eb469ee7e289c4",
    ],
    labels: {
      style: {
        cursor: "pointer",
      },
      events: {},
    },
    crosshair: true,
    title: {
      text: '<span style="font-size: 16px;">Query</span>',
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: '<span style="font-size: 16px;">secs</span>',
    },
    type: "linear",
    gridLineColor: "#d6dfef",
    labels: { enabled: true },
    stackLabels: {
      enabled: false,
    },
  },
  plotOptions: {
    column: {
      stacking: "normal",
      pointPadding: 0.2,
      borderWidth: 0,
      borderRadius: 1,
      borderColor: "#D3D3D3",
      dataLabels: {
        enabled: false,
        style: {
          fontSize: "12px",
        },
      },
      enableMouseTracking: true,
    },
    line: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
      },
      enableMouseTracking: true,
    },
    areaspline: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
      },
      enableMouseTracking: true,
      fillOpacity: 0.2,
    },
    series: {
      events: {},
    },
  },
  series: [
    {
      name: "Client:ClientRead",
      data: [
        0.0000083333333333334,
        null,
        null,
        null,
        null,
        null,
        null,
        0.000006944444444444445,
        null,
        null,
      ],
      events: {},
      point: {
        events: {},
      },
      customEvents: {
        series: {},
        point: {},
      },
    },
    {
      name: "IO:DataFileRead",
      data: [
        0.0000083333333333334,
        null,
        null,
        null,
        null,
        null,
        null,
        0.000006944444444444445,
        null,
        null,
      ],
      events: {},
      point: {
        events: {},
      },
      customEvents: {
        series: {},
        point: {},
      },
    },
  ],
  exporting: {
    enabled: false,
    showTable: false,
  },
  tooltip: {},
  colors: [
    "#7abaff",
    "#FFA502",
    "#2B568C",
    "#C96424",
    "#d9a7a7",
    "#d4c44e",
    "#adadad",
    "#02b5e2",
    "#33d42a",
    "#7b29ff",
    "#fc6f6f",
    "#aae03d",
    "#C96424",
    "#A36969",
    "#82BAFF",
    "#BBA135",
    "#2B568C",
  ],
};

export default options;
