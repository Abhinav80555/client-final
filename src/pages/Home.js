import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../components/DefaultLayout";
import { getAllProducts } from "../redux/action/RentalAction";
import { Button, Row, Col, Divider, DatePicker } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
const { RangePicker } = DatePicker;

export function Home() {
  const { products } = useSelector((state) => state.RentalReducers);
  const { loading } = useSelector((state) => state.AlertsReducer);
  const [totalProducts, setTotalProducts] = useState([]);
  const [duplicateproducts, setduplicateproducts] = useState();
  const [searchkey, setsearchkey] = useState("");
  const [type, settype] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setTotalProducts(products);
  }, [products]);

  useEffect(() => {
    setduplicateproducts(products);
  }, [products]);

  function setFilter(values) {
    var selectedFrom = moment(values[0], "MMM-DD-YYYY HH:mm");
    var selectedTo = moment(values[1], "MMM-DD-YYYY HH:mm");
    var temp = [];

    for (var product of products) {
      if (product.bookedTimeSlots.length == 0) {
        temp.push(product);
      } else {
        for (var booking of product.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(product);
          }
        }
      }
    }
    setTotalProducts(temp);
  }

  function filterByType(e) {
    settype(e);
    if (e !== "all") {
      const temp = duplicateproducts.filter(
        (product) => product.Type.toLowerCase() === e.toLowerCase()
      );
      setTotalProducts(temp);
    } else {
      setTotalProducts(duplicateproducts);
    }
  }

  function filterBySearch() {
    const temp = duplicateproducts.filter((product) =>
      product.name.toLowerCase().includes(searchkey.toLowerCase())
    );
    setTotalProducts(temp);
  }

  return (
    <DefaultLayout>
      <Row className="mt-3" justify="center">
        <Col lg={8} sm={24} className="d-flex justify-content-left">
          <RangePicker
            className="btn1"
            showTime={{ format: "HH:mm" }}
            format="MMM-DD-YYYY HH:mm"
            onChange={setFilter}
          />
        </Col>

        <Col lg={8} sm={24}>
          <div className="d-flex justify-content-center mt-2">
            <input
              type="text"
              className="form-control btn1 pr-7"
              placeholder="Search Product"
              value={searchkey}
              onKeyUp={filterBySearch}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
            />
          </div>
        </Col>

        <Col lg={5} sm={24}>
          <select
            className="form-control m-2 btn1"
            value={type}
            onChange={(e) => {
              filterByType(e.target.value);
            }}
          >
            <option value="all">👁‍🗨 All Products</option>
            <option value="camera">camera</option>
            <option value="lens">lens</option>
            <option value="accessories">accessories</option>
          </select>
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

                  <div>
                    <Link to={`/booking/${product._id}`}>
                      <button className="btn1 mr-2">🛒Rent Now</button>
                    </Link>
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
