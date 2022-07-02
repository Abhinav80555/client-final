import React from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Row, Col, Form } from "antd";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

export function About() {
  const { loading } = useSelector((state) => state.AlertsReducer);
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={17} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical">
            <h1>About Us</h1>
            <hr />
            <h5>
              RENT PROFESSIONAL CAMERAS OR CAMERA LENSES IN CHENNAI FOR CANON,
              NIKON, SONY
            </h5>
            <p>
              A Camera Rental with Small Business-Style Customer Service.
              threntals.com’s mission is to advance the photographic and
              cinematic dreams of our customers by delivering superior,
              cutting-edge gear and providing exceptional customer service.
              Rent, shoot, return – it’s as easy as that. You choose what you
              want, when you want to receive it, and for how long you want to
              rent it for. We rent the gear directly to you, or to one of our
              many convenient pick-up locations. Our entire rental process is
              done completely through our website but if you ever have a special
              request you can call us and talk to a real person working at one
              of our shops in Chennai
            </p>
            .
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}
