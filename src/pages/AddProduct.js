import React from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Input, Row, Col, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/action/RentalAction";
import Spinner from "../components/Spinner";

export function AddProduct() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.AlertsReducer);

  function onFinish(values) {
    values.bookedTimeSlots = [];
    dispatch(addProduct(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Add New Product</h3>
            <hr />
            <Form.Item
              name="name"
              label="product name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="image url"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="rentPerHour"
              label="Rent Per Hour"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="lens" label="Lens" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="Type"
              label="Product Type"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <div className="text-right">
              <button className="btn1">ADD PRODUCT</button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}
