import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import useGetDate from "../hooks/useGetDate";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetDate("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  if (loading) {
    return <h3 className="py-5 text-center fw-bold">Loading .....</h3>;
  }

  if (productsData.length === 0 || productsData === null) {
    return <h1 className="text-center fw-bold py-5">No Data Found</h1>;
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {productsData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgUrl} alt="" />
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={deleteProduct.bind(null, item.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
