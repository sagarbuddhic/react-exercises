import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import Tooltip from "@material-ui/core/Tooltip";
import "./tree.css";

const TreeViewTable = (props) => {
  const { nodes, columns, expandedKeys } = props;

  const actionBodyTemplate = (rawData, val) => {
    console.log("inside action", rawData);
    let stringConverted = rawData?.data[val?.field]?.toString();
    let formattedString =
      stringConverted?.length > 20
        ? `${stringConverted?.slice(0, 20)}..`
        : stringConverted;

    return (
      <Tooltip
        title={
          <span style={{ fontSize: "12px" }}>{rawData?.data[val?.field]}</span>
        }
        placement="top"
        arrow={true}
      >
        <span>{formattedString}</span>
      </Tooltip>
    );
  };

  return (
    <div class="tree-view-wrapper">
      <TreeTable value={nodes} expandedKeys={expandedKeys}>
        {columns?.map((column, index) => {
          return (
            <Column
              field={column}
              header={column?.replaceAll("_", " ")}
              expander={index === 0 ? true : false}
              frozen={index === 0 ? true : false}
              body={index === 0 ? undefined : actionBodyTemplate}
              style={{
                minWidth: "auto",
                width: "auto",
                whiteSpace: "nowrap",
                maxWidth: index === 0 ? "450px" : "200px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                // overflowWrap: "break-word",
                // wordWrap: "break-word",
                // wordBreak: "break-word",
              }}
            ></Column>
          );
        })}
      </TreeTable>
    </div>
  );
};

export default TreeViewTable;
