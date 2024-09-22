import { Button, Input, InputNumber, message, Upload } from "antd";
import React, { useState } from "react";
import OutLet from "./components/OutLet";
import { theme } from "./constants/theme";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const createProduct = async () => {
    if (
      !productDetails.name ||
      !productDetails.price ||
      !productDetails.quantity ||
      !productDetails.image ||
      !productDetails.description
    ) {
      alert("Please enter all details");
      return;
    } else {
      const { error } = await supabase
        .from("products")
        .insert({ ...productDetails });
      if (error) {
        console.log("product create error", error);
      } else {
        navigate("/products");
      }
    }
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    console.log("info-------", info);

    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  console.log("imageUrl-------", imageUrl);

  const uploadButton = (
    <input
      type="file"
      onChange={async (e) => {
        console.log("e--------", e.target.files[0]);
        const { data, error } = await supabase.storage
          .from("products")
          .upload(`/${new Date().getTime()}.png`, e.target.files[0], {
            contentType: "image/*",
            cachesControl: "3600",
            upsert: false,
          });
        console.log("Data----------------", data);
        console.log("error----------------", error);
        if (error) {
          alert("Image upload error");
        } else {
          setProductDetails({ ...productDetails, image: data.path });
        }
      }}
    />
  );

  return (
    <OutLet>
      <div
        style={{
          backgroundColor: theme.white,
          padding: "5px",
          height: "100%",
          borderRadius: "10px",
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
            }}
          />
        ) : (
          uploadButton
        )}

        {/* <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          multiple={false}
          // onChange={(file) => {
          //   handleChange(file);
          // }}
          customRequest={(file) => {
            console.log("file======", file);
            getBase64(file.file, async (url) => {
              setLoading(false);
              // setImageUrl(url);
              const { data, error } = await supabase.storage
                .from("products")
                .upload(`/${new Date().getTime()}.png`, url, {
                  contentType: "image/*",
                  cachesControl: "3600",
                  upsert: false,
                });
              console.log("Data----------------", data);
              console.log("error----------------", error);
              if (error) {
                alert("Image upload error");
              } else {
                setProductDetails({ ...productDetails, image: data.path });
              }
            });
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload> */}
        {/* <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          maxCount={1}
          multipl={false}
          beforeUpload={beforeUpload}
          customRequest={(file) => {
            console.log("----file----", file);
            getBase64(file.file, async (url) => {
              setLoading(false);
              setImageUrl(url);
              const { data, error } = await supabase.storage
                .from("products")
                .upload(`/images/${new Date().getTime()}.png`, url, {
                  contentType: "image/*",
                  cachesControl: "3600",
                  upsert: false,
                });
              console.log("Data----------------", data);
              console.log("error----------------", error);
              if (error) {
                alert("Image upload error");
              } else {
                setProductDetails({ ...productDetails, image: data.path });
              }
            });
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload> */}
        <div style={{ backgroundColor: theme.lightBackground, padding: "5px" }}>
          <p style={{ fontWeight: "bold" }}>Product Name</p>
          <Input
            placeholder="Product Name"
            onChange={(value) => {
              setProductDetails({
                ...productDetails,
                name: value.target.value,
              });
            }}
          />
        </div>
        <div style={{ backgroundColor: theme.lightBackground, padding: "5px" }}>
          <p style={{ fontWeight: "bold" }}>Description</p>
          <Input
            placeholder="Description"
            onChange={(value) => {
              setProductDetails({
                ...productDetails,
                description: value.target.value,
              });
            }}
          />
        </div>
        <div style={{ backgroundColor: theme.lightBackground, padding: "5px" }}>
          <p style={{ fontWeight: "bold" }}>Price</p>
          <InputNumber
            min={1}
            // max={10}
            defaultValue={1}
            onChange={(value) => {
              setProductDetails({
                ...productDetails,
                price: value,
              });
            }}
          />
        </div>
        <div style={{ backgroundColor: theme.lightBackground, padding: "5px" }}>
          <p style={{ fontWeight: "bold" }}>Quantity</p>
          <InputNumber
            min={1}
            // max={10}
            defaultValue={1}
            onChange={(value) => {
              setProductDetails({
                ...productDetails,
                quantity: value,
              });
            }}
          />
        </div>
        <Button onClick={createProduct} type="primary">
          Create
        </Button>
      </div>
    </OutLet>
  );
}
