import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { DefaultLayout } from "../components/DefaultLayout";
import { Input, Row, Col, Divider, Form, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/action/RentalAction";
import Spinner from "../components/Spinner";
import styled from "styled-components";
import { message } from "antd";

export function Contact() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.AlertsReducer);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_73530wc",
        "template_d2ftdws",
        form.current,
        "Fw657PXM7qw8HBTX5"
      )
      .then(
        (result) => {
          console.log(result.text);
          message.success("mail sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center justify-content-around"
      >
        <Col lg={10} sm={24} xs={24} className="p-5">
          <div className="p-50">
            <Divider style={{ borderColor: "black" }} type="horizontal">
              <h5>Location</h5>
            </Divider>
            <p>
              139, G 2 Arjay Apartment, Ground Floor Backside MGR street,
              Saligrammam, Opp from before located Location -
              https://g.co/kgs/ocrXAJ
            </p>
            <Divider style={{ borderColor: "black" }} type="horizontal">
              <h5>Phones</h5>
            </Divider>
            <p>+91 82484365, +91 95009113</p>
            <Divider style={{ borderColor: "black" }} type="horizontal">
              <h5>Email</h5>
            </Divider>
            <p>THrentals@gmail.com</p>
            <Divider style={{ borderColor: "black" }} type="horizontal">
              <h5>Hours</h5>
            </Divider>
            <p>6:00 am to 10:00 pm</p>
          </div>
        </Col>

        <Col lg={10}>
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required="required" />
              <label>Email</label>
              <input type="email" name="user_email" required="required" />
              <label>Message</label>
              <textarea name="message" required="required" />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </Col>
      </Row>
    </DefaultLayout>
  );
}
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
