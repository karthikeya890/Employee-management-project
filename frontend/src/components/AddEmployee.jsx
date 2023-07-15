import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addEmployee } from "../features/Employees/employeeSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function AddEmployee() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const notify = (msg) => toast.success(msg);

  const [newEmployeeDetails, setNewEmployeeDetails] = useState({
    name: "",
    gmail: "",
    role: "",
    phoneNo: "",
    imageUrl: "",
  });

  return (
    <>
      <>
        <ToastContainer position="bottom-center" autoClose={1000} />
      </>
      <>
        <Button variant="primary" onClick={handleShow}>
          + Add Employee
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Employee Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNewEmployeeDetails((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }));
                  }}
                  value={newEmployeeDetails.name}
                  type="text"
                  placeholder="Employee Name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNewEmployeeDetails((prevState) => ({
                      ...prevState,
                      gmail: e.target.value,
                    }));
                  }}
                  value={newEmployeeDetails.gmail}
                  type="text"
                  placeholder="name@gmail.com."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNewEmployeeDetails((prevState) => ({
                      ...prevState,
                      role: e.target.value,
                    }));
                  }}
                  value={newEmployeeDetails.role}
                  type="text"
                  placeholder="Frontend Engineer,Backend Engineer etc..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNewEmployeeDetails((prevState) => ({
                      ...prevState,
                      phoneNo: e.target.value,
                    }));
                  }}
                  value={newEmployeeDetails.phoneNo}
                  type="text"
                  placeholder="+91 7*********2"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setNewEmployeeDetails((prevState) => ({
                      ...prevState,
                      imageUrl: e.target.value,
                    }));
                  }}
                  value={newEmployeeDetails.imageUrl}
                  type="text"
                  placeholder="image.url"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(
                  addEmployee({
                    name: newEmployeeDetails.name,
                    gmail: newEmployeeDetails.gmail,
                    role: newEmployeeDetails.role,
                    phoneNo: newEmployeeDetails.phoneNo,
                    imageUrl: newEmployeeDetails.imageUrl,
                  })
                );
                handleClose();
                setNewEmployeeDetails({
                  name: "",
                  gmail: "",
                  role: "",
                  phoneNo: "",
                  imageUrl: "",
                });
                notify("Employee Added Successfully");
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default AddEmployee;
