import { Container, Row } from "reactstrap";
import useAuth from "../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

import "../styles/admin-nav.css";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },

  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },

  {
    display: "Orders",
    path: "/dashboard/orders",
  },

  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const { loggedIn } = useAuth();

  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <Link to={"/"}>
                  <h2>X-Shop</h2>
                </Link>
              </div>

              <div className="search__box">
                <input type="text" placeholder="Search..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={loggedIn.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li key={index} className="admin__menu-item">
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "active__admin-menu" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
