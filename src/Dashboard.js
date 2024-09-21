import { useAuth } from "./contexts/Auth";
import { redirect, useNavigate } from "react-router-dom";
import React from "react";
import { Button, Col, Flex, Layout, Row } from "antd";
import { theme } from "./constants/theme";
import OutLet from "./components/OutLet";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
  height: "50%",
  flex: 1,
  flexDirection: "row",
};
const contentStyle = {
  textAlign: "center",
  color: "#fff",
  // backgroundColor: "#0958d9",
  backgroundColor: theme.lightBackground,
};
const siderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: theme.white,
  height: "100vh",
};

export function Dashboard() {
  const { user, signOut } = useAuth();
  // const navigate = useNavigate();
  // async function handleSignOut() {
  //   // @TODO: add sign out logic
  //   await signOut();
  //   navigate("/login");
  // }

  console.log("user=======", user);

  return (
    <OutLet>
      <div style={{ border: "2px solid red" }}>
        <h1 style={{ color: theme.dark }}>Home</h1>
      </div>
    </OutLet>
    // <Layout>
    //   <Header
    //     style={{
    //       textAlign: "center",
    //       // color: "#fff",
    //       backgroundColor: theme.white,
    //       height: "50%",
    //       padding: 0,
    //       display: "flex",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <Row
    //       style={{
    //         width: "100%",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Col span={3}>
    //         <h1>SUPOS</h1>
    //       </Col>
    //       <Col span={18}>
    //         <p>Welcome!</p>
    //       </Col>
    //       <Col span={3}>
    //         <Button type="primary" onClick={handleSignOut}>
    //           Sign out
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Header>
    //   <Layout>
    //     <Sider width="15%" style={siderStyle}>
    //       Sider
    //     </Sider>
    //     <Content style={contentStyle}>Content</Content>
    //   </Layout>
    // </Layout>
  );
}
