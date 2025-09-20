let options = {
  credits: {
    enabled: false,
  },
  chart: {
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
    text: "Compare Data",
    style: {
      fontFamily: "Roboto",
      fontSize: "16px",
      color: "rgb(51, 51, 51)",
    },
    align: "left",
  },
  xAxis: {
    categories: ["First", "Second", "Third"],
    crosshair: true,
    title: {
      text: '<span style="font-size: 16px;">Parameters</span>',
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
      text: '<span style="font-size: 16px;">Values</span>',
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
      name: "Values",
      data: [100, 98, 97],
      color: "#1f9da6",
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

export default options;
