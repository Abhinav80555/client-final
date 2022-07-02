import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/action/userAction";
import Spinner from "../components/Spinner";

export function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.AlertsReducer);
  function onFinish(values) {
    dispatch(userRegister(values));
    console.log(values);
  }

  return (
    <div className="login">
      {loading && <Spinner />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
            className="camimg"
            src="https://images.unsplash.com/photo-1516912926362-1da264f6c398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYSUyMHZpbnRhZ2V8ZW58MHx8MHx8&w=1000&q=80"
          />
          <h1 className="login-logo">TH RENTALS</h1>
        </Col>

        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="confirm password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Register</button>
            <br />

            <Link to="/login">Click here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
