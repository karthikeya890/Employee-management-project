import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchEmployees,
  deleteEmployee,
} from "./features/Employees/employeeSlice";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/editEmployee";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { data: employeesList, responseMsg } = useSelector(
    (state) => state.employees
  );

  const [showCanvas, setCanvas] = useState({ status: false, details: {} });

  const notify = (msg) => toast.error(msg);

  const handleClose = () =>
    setCanvas((prevState) => ({ ...prevState, status: false }));

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const renderEmployeesCards = employeesList.map((employee) => {
    return (
      <div
        key={employee.id}
        className=" d-flex justify-content-center col-xs-12 col-sm-6 col-md-4 col-lg-3"
      >
        <Card style={{ width: "16rem" }} className="mb-5 text-center">
          <Dropdown style={{ touchAction: "none" }} className="align-self-end">
            <Dropdown.Toggle variant="dark"></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-3">
                <button
                  className="card-btn"
                  onClick={() => {
                    dispatch(deleteEmployee(employee.id));
                    notify("Employee Deleted Successfully");
                  }}
                >
                  Delete
                </button>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <EditEmployee employeeDetails={employee} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* ----------------------------------------------------------------------------- */}
          <button
            className="card-btn"
            onClick={() => {
              setCanvas({ status: true, details: employee });
            }}
          >
            <Card.Body className="text-center">
              <Card.Img
                style={{ width: "150px", borderRadius: "75px" }}
                src={employee.image_url}
              />
              <Card.Title className="mt-3">{employee.name}</Card.Title>
            </Card.Body>
            <Card.Footer
              style={{ backgroundColor: "transparent" }}
              className="text-center"
            >
              {employee.role}
            </Card.Footer>
          </button>
          {/* ----------------------------------------------------------------------------- */}
        </Card>
      </div>
    );
  });

  return (
    <div className="container-fluid border">
      <div className="d-flex justify-content-between m-4">
        <Button variant="dark">
          People <Badge bg="dark">{employeesList.length}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <AddEmployee className="align-self-end" />
      </div>
      <div className="row flex-wrap">{renderEmployeesCards}</div>
      {showCanvas && (
        <>
          <Offcanvas show={showCanvas.status} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Full Details :</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="text-center">
              <img
                style={{ width: "13rem", borderRadius: "100px" }}
                src={showCanvas.details.image_url}
              />
              <h3 className="mt-3">{showCanvas.details.name}</h3>
              <p>{showCanvas.details.gmail}</p>
              <p>{showCanvas.details.phone_no}</p>
              <p>{showCanvas.details.role}</p>
            </Offcanvas.Body>
          </Offcanvas>
          <ToastContainer position="bottom-center" autoClose={1000} />
        </>
      )}
    </div>
  );
}

export default App;
