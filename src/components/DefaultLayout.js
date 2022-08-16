import React from "react";
import { Button, Dropdown, Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";

export function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  let admin = false;
  const cred = JSON.parse(localStorage.getItem("user"));
  if (cred.username === "admin@gmail.com") {
    admin = true;
  } else {
    admin = false;
  }

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/">Home</Link>
        },
        {
          key: "2",
          label: <Link to="/userbookings">Bookings</Link>
        },
        {
          key: "3",
          label: admin && <Link to="/admin">Admin</Link>
        },
        {
          key: "4",

          label: (
            <li
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
            >
              Logout
            </li>
          )
        }
      ]}
    />
  );

  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between">
              <h1 className="title">
                <Link to="/">THIRD EYE RENTALS</Link>
              </h1>
              <div className="nav">
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>

                <Dropdown overlay={menu} placement="bottom">
                  <Button>🔹username : {user.username}</Button>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}
