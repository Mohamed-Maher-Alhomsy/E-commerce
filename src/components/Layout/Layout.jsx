import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AdminNav from "../../admin/AdminNav";

const Layout = (props) => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
