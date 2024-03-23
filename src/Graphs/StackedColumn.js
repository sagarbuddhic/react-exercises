import options from "./stackedColumnSample";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/exporting.js")(Highcharts);
require("highcharts/modules/export-data.js")(Highcharts);
require("highcharts/modules/no-data-to-display.js")(Highcharts);
// require("highcharts-custom-events")(Highcharts);

const StackedColumn = () => {
  console.log("options", options);
  return (
    <HighchartsReact
      immutable={true}
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default StackedColumn;
