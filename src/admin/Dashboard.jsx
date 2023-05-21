import { Col, Container, Row } from "reactstrap";

import useGetData from "../hooks/useGetDate";

import "../styles/dashboard.css";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Total Slaes</h5>
                <span>$7890</span>
              </div>
            </Col>

            <Col className="lg-3">
              <div className="orders__box">
                <h5>Orders</h5>
                <span>789</span>
              </div>
            </Col>

            <Col className="lg-3">
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>

            <Col className="lg-3">
              <div className="users__box">
                <h5>Total User</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
