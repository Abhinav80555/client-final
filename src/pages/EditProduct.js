import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Input, Row, Col, Divider, Form, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addProduct,
  getAllProducts,
  editProduct
} from "../redux/action/RentalAction";
import Spinner from "../components/Spinner";

export function EditProduct() {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.RentalReducers);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.AlertsReducer);
  const [product, setProduct] = useState();
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    if (products.length == 0) {
      dispatch(getAllProducts());
    } else {
      setTotalProducts(products);
      setProduct(products.find((o) => o._id == `${productId}`));
    }
  }, [products]);

  function onFinish(values) {
    values._id = product._id;
    dispatch(editProduct(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          {totalProducts.length > 0 && (
            <Form
              initialValues={product}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Product</h3>
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
                <button className="btn1">EDIT PRODUCT</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout>
  );
}
