import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { editEmployee } from "../features/Employees/employeeSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const EditEmployee = (props) => {
  const { employeeDetails } = props;
  const { name, gmail, role, phone_no, image_url, id } = employeeDetails;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [editEmployeeDetails, setEditEmployeeDetails] = useState({
    id,
    name,
    gmail,
    role,
    phoneNo: phone_no,
    imageUrl: image_url,
  });

  return (
    <>
      <>
        <ToastContainer
          closeOnClick
          rtl={true}
          position="bottom-center"
          autoClose={1000}
        />
      </>
      <>
        <button className="card-btn" onClick={handleShow}>
          Edit
        </button>

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
                    setEditEmployeeDetails((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }));
                  }}
                  value={editEmployeeDetails.name}
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
                    setEditEmployeeDetails((prevState) => ({
                      ...prevState,
                      gmail: e.target.value,
                    }));
                  }}
                  value={editEmployeeDetails.gmail}
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
                    setEditEmployeeDetails((prevState) => ({
                      ...prevState,
                      role: e.target.value,
                    }));
                  }}
                  value={editEmployeeDetails.role}
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
                    setEditEmployeeDetails((prevState) => ({
                      ...prevState,
                      phoneNo: e.target.value,
                    }));
                  }}
                  value={editEmployeeDetails.phoneNo}
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
                    setEditEmployeeDetails((prevState) => ({
                      ...prevState,
                      imageUrl: e.target.value,
                    }));
                  }}
                  value={editEmployeeDetails.imageUrl}
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
                  editEmployee({
                    id: editEmployeeDetails.id,
                    name: editEmployeeDetails.name,
                    gmail: editEmployeeDetails.gmail,
                    role: editEmployeeDetails.role,
                    phoneNo: editEmployeeDetails.phoneNo,
                    imageUrl: editEmployeeDetails.imageUrl,
                  })
                );
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default EditEmployee;
