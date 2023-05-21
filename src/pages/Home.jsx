import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Col, Container, Row } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import Services from "../services/Services";

import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";
import useGetDate from "../hooks/useGetDate";

import "../styles/home.css";

const HomePage = () => {
  const { data: products, loading } = useGetDate("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (product) => product.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (product) => product.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (product) => product.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (product) => product.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (product) => product.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);

    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);

    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>

                <h2>Make Your Unterior More Minimalistic & Modern</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente doloremque, perferendis tempore voluptates voluptas
                  ex aperiam? Esse suscipit incidunt beatae?
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to={"/shop"}>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>

            {loading ? (
              <h2 className="fw-bold text-center">Loading ...</h2>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Best Sales</h2>
            </Col>

            {loading ? (
              <h2 className="fw-bold text-center">Loading ...</h2>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>

              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to={"/shop"}>Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>

            {loading ? (
              <h2 className="fw-bold text-center">Loading ...</h2>
            ) : (
              <ProductsList data={mobileProducts} />
            )}

            {loading ? (
              <h2 className="fw-bold text-center">Loading ...</h2>
            ) : (
              <ProductsList data={wirelessProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>

            {loading ? (
              <h2 className="fw-bold text-center">Loading ...</h2>
            ) : (
              <ProductsList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HomePage;
