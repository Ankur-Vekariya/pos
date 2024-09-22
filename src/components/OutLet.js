import React, { useState } from "react";
import { Button, Col, Flex, Layout, Menu, Row } from "antd";
import { theme } from "../constants/theme";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const { Footer, Sider, Content } = Layout;

const siderStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: theme.white,
  height: "100vh",
};

export default function OutLet({ children }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [stateOpenKeys, setStateOpenKeys] = useState(["1"]);
  const items = [
    {
      key: "1",
      //   icon: <MailOutlined />,
      label: "Products",
      children: [
        {
          key: "11",
          label: "List",
          route: "/products",
        },
        {
          key: "12",
          label: "Add",
          route: "/edit-products",
        },
        // {
        //   key: "13",
        //   label: "Option 3",
        // },
        // {
        //   key: "14",
        //   label: "Option 4",
        // },
      ],
    },
    {
      key: "2",
      //   icon: <AppstoreOutlined />,
      label: "Navigation Two",
      children: [
        {
          key: "21",
          label: "Option 1",
        },
        {
          key: "22",
          label: "Option 2",
        },
        {
          key: "23",
          label: "Submenu",
          children: [
            {
              key: "231",
              label: "Option 1",
            },
            {
              key: "232",
              label: "Option 2",
            },
            {
              key: "233",
              label: "Option 3",
            },
          ],
        },
        {
          key: "24",
          label: "Submenu 2",
          children: [
            {
              key: "241",
              label: "Option 1",
            },
            {
              key: "242",
              label: "Option 2",
            },
            {
              key: "243",
              label: "Option 3",
            },
          ],
        },
      ],
    },
    {
      key: "3",
      //   icon: <SettingOutlined />,
      label: "Navigation Three",
      children: [
        {
          key: "31",
          label: "Option 1",
        },
        {
          key: "32",
          label: "Option 2",
        },
        {
          key: "33",
          label: "Option 3",
        },
        {
          key: "34",
          label: "Option 4",
        },
      ],
    },
  ];

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Layout>
      <TopBar />
      <Layout>
        <Sider width="15%" style={siderStyle}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["231"]}
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            // style={{
            //   width: 256,
            // }}
            items={items}
            onClick={(data) => {
              console.log("data==============", data);
              navigate(
                items
                  .filter((value) => data.keyPath[1] === value.key)[0]
                  .children.filter((value) => data.key === value.key)[0].route
              );
              //   let parent = ;
              //   console.log("parent==============", parent[0]);
            }}
          />
        </Sider>
        <Content
          style={{ backgroundColor: theme.lightBackground, padding: "10px" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
