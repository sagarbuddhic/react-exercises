import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import EditableTable from "../Edit/Editable-Table";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./Users.style";
import * as stylesW from "../../wrapperStyle.style";

function Users() {
  const { Header, Footer, Content } = Layout;
  return (
    <div css={stylesW.wrapper} className="App">
      <Layout>
        <Header style={{ height: "100px", backgroundColor: "grey" }}>
          <span css={styles.headerText}>Manage Users</span>
        </Header>
        <Layout>
          <Content
            style={{
              padding: "50px",
            }}
          >
            <EditableTable />
          </Content>
        </Layout>
        <Footer style={{ height: "100px", backgroundColor: "black" }}></Footer>
      </Layout>
    </div>
  );
}

export default Users;
