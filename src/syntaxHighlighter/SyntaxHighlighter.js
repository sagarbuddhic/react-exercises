import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styleW from "../wrapperStyle.style";

const SyntaxHighlight = (props) => {
  return (
    <div css={styleW.wrapper}>
      <h3>Syntax Highlighter</h3>
      <pre style={{ fontSize: "16px" }}>
        <SyntaxHighlighter
          children={"select * from test"}
          language="sql"
          style={dracula}
        />
      </pre>
    </div>
  );
};

export { SyntaxHighlight };
