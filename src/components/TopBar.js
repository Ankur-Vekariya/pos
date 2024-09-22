import { Button, Col, Layout, Row } from "antd";
import React, { useState } from "react";
import { theme } from "../constants/theme";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import RightDrawer from "./RightDrawer";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;

export default function TopBar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function handleSignOut() {
    // @TODO: add sign out logic
    await signOut();
    navigate("/login");
  }
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header
      style={{
        textAlign: "center",
        backgroundColor: theme.white,
        height: "50%",
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Row
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Col span={3}>
          <h1>SUPOS</h1>
        </Col>
        <Col span={18}>
          <p>Welcome!</p>
        </Col>
        <Col span={3} style={{ gap: 20 }}>
          <Button type="primary" onClick={handleSignOut}>
            Sign out
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            type="default"
            onClick={showDrawer}
          >
            <ShoppingCartOutlined />
          </Button>
          <RightDrawer open={open} onClose={onClose} />
        </Col>
      </Row>
    </Header>
  );
}
