import { Drawer } from "antd";
import React from "react";

export default function RightDrawer({ onClose, open }) {
  return (
    <Drawer
      title="Cart"
      placement="right"
      closable={true}
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
