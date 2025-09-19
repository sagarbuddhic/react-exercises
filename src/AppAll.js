import Users from "./Users";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./App.style";
import MorphSVG from "./MorphSVG";
import ErrorBoundary from "./Error-boundary";
import Indicate from "./Indicate";
import AutoCompleteText from "./AutoComplete";
import Slide from "./Slide";
import { SyntaxHighlight } from "./syntaxHighlighter/SyntaxHighlighter";
import Columns from "./Graphs/Columns";
import Area from "./Graphs/Area";
import TableChart from "./Graphs/TableChart";
import BreadCrumbsWrapper from "./BreadCrumbButton/BreadCrumbsWrapper";
import DateRange from "./DateRangePicker/index";
import DropDownIcon from "./DropDown/DropDownIcon";
import ZoomAnimation from "./ZoomAnimation/index";
import FileUpload from "./UploadFile/FileUpload";
import StackedColumn from "./Graphs/StackedColumn";
import TreeViewTable from "./TreeTable";
import data from "./TreeTable/data.json";
import StructuredBlocks from "./StructuredBlocks";
import HeatmapMonthly from "./HeatmapMonthly";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ReduxApp from "./Redux/reduxApp";
import Sample from "./Sample";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingBottom: "40px",
          }}
        >
          <ZoomAnimation />
          <FileUpload />
          <MorphSVG />
          <Slide />
          <Indicate text="test" />
          <AutoCompleteText />
          <SyntaxHighlight></SyntaxHighlight>
          <Columns />
          <Area />
          <TableChart />
          <BreadCrumbsWrapper />
          <DropDownIcon />
          <StackedColumn />
          {/* <DateRange /> */}
          {/* <HeatmapGraph /> */}
          {/* <Users /> */}
          <TreeViewTable
            nodes={data.nodes}
            expandedkeys={data.expandedkeys}
            columns={data.columns}
          />
          <StructuredBlocks />
          <HeatmapMonthly />
          <ReduxApp />
          <span>sample</span>
          <Sample title="Bikes" optionVals={["yamaha", "hyundai"]} />
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
