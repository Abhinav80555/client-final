import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DefaultLayout } from "../components/DefaultLayout";
import { getAllBookings } from "../redux/action/bookingAction";
import { Button, Row, Col, Divider, DatePicker, Modal } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";

export function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.AlertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <h3 className="text-center mt-2">my bookings</h3>

      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings
            .filter((o) => o.user == user._id)
            .map((booking) => {
              return (
                <Row
                  gutter={16}
                  justify="center"
                  className="bs1 mt-3 text-left"
                >
                  <Col lg={6} sm={24}>
                    <p>
                      <b>{booking.product.name}</b>
                    </p>
                    <p>
                      Total hours : <b>{booking.totalHours}</b>
                    </p>
                    <p>
                      Rent Per Hour : <b>{booking.product.rentPerHour}</b>
                    </p>
                    <p>
                      Total Amount : <b>{booking.totalAmount}</b>
                    </p>
                  </Col>

                  <Col lg={12} sm={24}>
                    <p>
                      Transaction ID : <b>{booking.transactionId}</b>
                    </p>
                    <p>
                      From : <b>{booking.bookedTimeSlots.from}</b>
                    </p>
                    <p>
                      To : <b>{booking.bookedTimeSlots.to}</b>
                    </p>
                    <p>
                      Date of Booking :{" "}
                      <b>{moment(booking.createdAt).format("MMM DD YYYY")}</b>
                    </p>
                  </Col>
                  <Col lg={6} sm={24} className="text-right">
                    <img
                      style={{ borderRadius: 5 }}
                      src={booking.product.image}
                      height="130"
                      width="auto"
                      className="p-1"
                    />
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    </DefaultLayout>
  );
}
