const areaObj = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "areaspline",
    borderWidth: 0,
    borderRadius: 0,
    borderColor: "#e5ebf5",
    backgroundColor: "#f5f6fa",
    style: {
      fontFamily: "Roboto",
    },
  },
  title: {
    text: "Title",
    style: {
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "rgb(51, 51, 51)",
    },
    align: "left",
  },
  xAxis: {
    categories: ["25 Nov", "26 Nov", "27 Nov", "28 Nov", "29 Nov", "30 Nov"],
    crosshair: true,
    title: {
      text: '<span style="font-size: 16px;">Date</span>',
    },
    labels: {
      style: {
        cursor: "pointer",
      },
      events: {},
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: '<span style="font-size: 16px;">Time</span>',
    },
    type: "linear",
    gridLineColor: "#d6dfef",
    labels: {},
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      borderRadius: 1,
      borderColor: "#D3D3D3",
      dataLabels: {
        enabled: true,
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
      name: "First",
      data: [23421, 20713, 56551, 54197, 65238, 62777],
      color: "#02b5e2",
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
      name: "Second",
      data: [14966, 14447, 14974, 72880, 61791, 15817],
      color: "#33d42a",
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
      name: "Third",
      data: [17525, 17461, 17771, 18288, 18174, 18758],
      color: "#7b29ff",
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
};

export default areaObj;
