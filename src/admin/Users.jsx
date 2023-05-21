import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import useGetData from "../hooks/useGetDate";

const Users = () => {
  const { data: userData, loading } = useGetData("users");

  if (loading) {
    return <h1 className="fw-bold pt-5 text-center">Loading....</h1>;
  }

  if (userData.length === 0 || userData === null) {
    return <h1 className="text-center fw-bold py-5">No User Found</h1>;
  }

  const deleteUserHendler = async (id) => {
    await deleteDoc(doc(db, "users", id)); // delete user from firestore

    toast.success("Deleted!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {userData.map((user) => (
                  <tr key={user.uid}>
                    <td>
                      <img src={user.photoURL} alt="" />
                    </td>
                    <td>{user.displayName}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={deleteUserHendler.bind(null, user.uid)}
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

export default Users;
