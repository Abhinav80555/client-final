import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../components/DefaultLayout";
import { getAllProducts, deleteProduct } from "../redux/action/RentalAction";
import { Row, Col, Popconfirm } from "antd";
import Spinner from "../components/Spinner";

export function Admin() {
  const { products } = useSelector((state) => state.RentalReducers);
  const { loading } = useSelector((state) => state.AlertsReducer);
  const [totalProducts, setTotalProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setTotalProducts(products);
  }, [products]);

  return (
    <DefaultLayout>
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-2">
              <u>Admin Panel</u>
            </h3>
            <Link to="/addproduct">
              <buuton className="btn1">ADD PRODUCT</buuton>
            </Link>
          </div>
        </Col>
      </Row>

      {loading == true && <Spinner />}

      <Row justify="center" gutter={16}>
        {totalProducts.map((product) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="product p-2 bs1">
                <img src={product.image} className="productimg" />
                <div className="product-content d-flex align-items-center justify-content-between">
                  <div>
                    <p>{product.name}</p>
                    <p>Rent= ₹{product.rentPerHour}/hr</p>
                  </div>

                  <div className="admin">
                    <Link to={`/editproduct/${product._id}`}>
                      <EditOutlined
                        style={{ color: "blue", cursor: "pointer" }}
                      ></EditOutlined>
                    </Link>

                    <Popconfirm
                      title="Are you sure to delete this Product?"
                      onConfirm={() => {
                        dispatch(deleteProduct({ productId: product._id }));
                      }}
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        className="m-3"
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}
