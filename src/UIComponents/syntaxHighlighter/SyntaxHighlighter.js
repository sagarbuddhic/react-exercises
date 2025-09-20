import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { format } from "sql-formatter";
import * as styleW from "../wrapperStyle.style";

let formatterVals = {
  snowflake: "snowflake",
  sql: "sql",
  oracle: "plsql",
  postgresql: "postgresql",
};

const SyntaxHighlight = (props) => {
  return (
    <div css={styleW.wrapper}>
      <h3>Syntax Highlighter</h3>
      <pre style={{ fontSize: "16px" }}>
        <SyntaxHighlighter
          children={format("select * from test where ta=true", {
            language: formatterVals["sql"],
          })}
          language="sql"
          style={dracula}
        />
      </pre>
    </div>
  );
};

export { SyntaxHighlight };
