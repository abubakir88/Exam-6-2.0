import { useEffect, useState } from "react";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
// import ModalForm from "../../components/Modal";
import "./home.scss";
import axios from "axios";

///// MODAL /////
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
/////

// LOADER //////
import ScaleLoader from "react-spinners/ScaleLoader";
// LOADER //////
const Home = () => {
  /// MODAL //////
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  ///

  const [panel, setPanel] = useState([]);

  // DELETE start //////////////////////////////////

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setPanel(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchItems();
  };
  // DELETE finish //////////////////////////////////

  // SEARCH start //////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");

  // SEARCH finish //////////////////////////////////

  // LOADER START //////////////////////////////////
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // LOADER FINISH //////////////////////////////////

  useEffect(() => {
    const fetchPanel = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const Data = await res.json();
        setPanel(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPanel();
  }, []);
  return (
    <>
      <Sidebar />
      <Header />

      {loading ? (
        <ScaleLoader
          className="text-center mt-5 pt-5 "
          color={"plum"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="for_bg">
          <div className="content mt-4 w-75">
            <div className="d-flex justify-content-between bg-white p-4  ">
              <h3>Все товары ({panel.length})</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="text-body-tertiary text-start" scope="col">
                    Наименование
                  </th>
                  <th className="text-body-tertiary" scope="col">
                    Артикул
                  </th>
                  <th className="text-body-tertiary" scope="col">
                    Бренд
                  </th>
                  <th className="text-body-tertiary" scope="col">
                    Цена
                  </th>
                  <th className="text-body-tertiary" scope="col">
                    Цена со скидкой
                  </th>
                  <th className="text-body-tertiary" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* <tbody> */}
              {panel.length > 0 && (
                <tbody>
                  {panel
                    // .filter((panel) =>
                    //   panel.brand
                    //     .toLowerCase()
                    //     .includes(searchTerm.toLowerCase())
                    // )
                    .map((panel) => (
                      <>
                        <tr>
                          <th className="text-start"> Товар {panel.id}</th>
                          <th className="fw-normal">{panel.rating}</th>
                          <th className="fw-normal">{panel.brand}</th>
                          <th className="fw-normal">{panel.price}</th>
                          <th className="fw-normal">{panel.stock}</th>
                          <th className="d-flex gap-1">
                            <button className="btn btn-primary">Edit</button>
                            <Button
                              variant="danger "
                              onClick={() =>
                                confirm("Are you sure you want to?")
                                  ? deleteItem(panel.id)
                                  : false
                              }
                            >
                              Delete
                            </Button>
                          </th>
                        </tr>
                      </>
                    ))}
                </tbody>
              )}
              {/* </tbody> */}
            </table>
          </div>
          <Link to="/Add">
            <Button variant="primary" className="btn btn-success mt-5 ">
              + Новый товар
            </Button>
          </Link>
          {/* <Modal backdrop="static" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Артикул</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Артикул"
                    autoFocus
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Бренд</Form.Label>
                  <Form.Control
                    type="brand"
                    placeholder="Artel milliy brand"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Цена</Form.Label>
                  <Form.Control
                    as="input"
                    type="number"
                    rows={3}
                    placeholder="Цена"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Цена со скидкой</Form.Label>
                  <Form.Control
                    as="input"
                    type="number"
                    rows={3}
                    placeholder="Цена со скидкой"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      )}
    </>
  );
};

export default Home;
