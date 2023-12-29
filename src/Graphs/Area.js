import areaObj from "./areaObj";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/exporting.js")(Highcharts);
require("highcharts/modules/export-data.js")(Highcharts);
require("highcharts/modules/no-data-to-display.js")(Highcharts);

const Area = () => {
  console.log("area obj", areaObj);

  return (
    <HighchartsReact
      immutable={true}
      highcharts={Highcharts}
      options={areaObj}
    />
  );
};

export default Area;
