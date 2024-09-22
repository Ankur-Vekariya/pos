import React, { useEffect, useState } from "react";
import OutLet from "./components/OutLet";
import { Card, Col, Row } from "antd";
import { REACT_APP_SUPABASE_URL, supabase } from "./supabase";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

export default function Products() {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const { data, error } = await supabase.from("products").select();
    console.log("data-----", data);

    if (error) {
      alert("get product error");
    } else {
      setProductList(data);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <OutLet>
      <h4>Products</h4>
      <Row>
        {productList.length > 0 &&
          productList.map((item, index) => {
            return (
              <Col span={6} key={index}>
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      style={{ maxHeight: "200px" }}
                      alt="example"
                      src={`https://mbwtlxqesprrfazjeows.supabase.co/storage/v1/object/public/products/${item.image}`}
                    />
                  }
                  actions={[
                    <p>{item.price}</p>,
                    <EditOutlined key="edit" />,
                    <p>{item.quantity}</p>,
                  ]}
                >
                  <Meta
                    // avatar={
                    //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                    // }
                    title={item.name}
                    description={item.description}
                  />
                </Card>
                {/* <Card
                  hoverable
                  style={{
                    width: 300,
                    height: 350,
                  }}
                  cover={
                    <img
                      style={{ maxHeight: "200px" }}
                      alt="example"
                      src={`https://mbwtlxqesprrfazjeows.supabase.co/storage/v1/object/public/products/${item.image}`}
                    />
                  }
                >
                  <Meta title={item.name} description={item.description} />
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                </Card> */}
              </Col>
            );
          })}
      </Row>
    </OutLet>
  );
}
