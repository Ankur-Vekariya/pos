import { useRef, useState } from "react";
import { useAuth } from "./contexts/Auth";
import { useNavigate } from "react-router-dom";
import { Button, Carousel, Checkbox, Col, Form, Input, Row } from "antd";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password });

    if (error) {
      alert("error signing in");
    } else {
      navigate("/");
      // Redirect user to Dashboard
      //    history.push('/')
    }
  }

  const onFinish = async (values) => {
    console.log("Success:", values);
    // Get email and password input values
    // const email = values.email;
    // const password = values.password;
    const email = "test@gmail.com";
    const password = "test@123";
    const { error } = await signIn({ email, password });

    if (error) {
      alert("error signing in");
    } else {
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Row
        style={{
          height: "100%",
          // border: "2px solid orange"
        }}
      >
        <Col
          span={12}
          style={{
            // border: "2px solid red",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img src={require("./assets/login.png")} />
        </Col>
        <Col
          span={12}
          style={{
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              // border: "2px solid green",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <h1>SUPOS</h1>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input value={"test@gmail.com"} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password value={"test@123"} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
    // <Row style={{ height: "100vh", borderWidth: "2px", borderColor: "red" }}>
    //   <Col
    //     span={12}
    //     style={{ height: "100vh", borderWidth: "2px", borderColor: "red" }}
    //   >
    //     <Carousel
    //       autoplay
    //       style={{
    //         height: "100vh",
    //         borderWidth: "2px",
    //         borderColor: "red",
    //         margin: 0,
    //         padding: 0,
    //       }}
    //     >
    //       <div>
    //         <h3
    //           style={{
    //             height: "100vh",
    //             color: "#fff",
    //             textAlign: "center",
    //             background: "#364d79",
    //           }}
    //         >
    //           1
    //         </h3>
    //       </div>
    //       <div>
    //         <h3
    //           style={{
    //             height: "100vh",
    //             color: "#fff",
    //             textAlign: "center",
    //             background: "#364d79",
    //           }}
    //         >
    //           2
    //         </h3>
    //       </div>
    //     </Carousel>
    //   </Col>
    //   <Col
    //     span={12}
    //     style={{ height: "100%", borderWidth: "2px", borderColor: "red" }}
    //   >
    //     <Form
    //       name="basic"
    //       labelCol={{
    //         span: 8,
    //       }}
    //       wrapperCol={{
    //         span: 16,
    //       }}
    //       style={{
    //         maxWidth: 600,
    //       }}
    //       initialValues={{
    //         remember: true,
    //       }}
    //       onFinish={onFinish}
    //       onFinishFailed={onFinishFailed}
    //       autoComplete="off"
    //     >
    //       <Form.Item
    //         label="Email"
    //         name="email"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your Email!",
    //           },
    //         ]}
    //       >
    //         <Input />
    //       </Form.Item>

    //       <Form.Item
    //         label="Password"
    //         name="password"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your password!",
    //           },
    //         ]}
    //       >
    //         <Input.Password />
    //       </Form.Item>

    //       <Form.Item
    //         wrapperCol={{
    //           offset: 8,
    //           span: 16,
    //         }}
    //       >
    //         <Button type="primary" htmlType="submit">
    //           Submit
    //         </Button>
    //       </Form.Item>
    //     </Form>
    //   </Col>
    // </Row>
  );
}
