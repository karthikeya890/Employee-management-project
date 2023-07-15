import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { fetchEmployees } from "../features/Employees/employeeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="">
        <Navbar.Brand href="#">Employees</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          className="d-flex justify-content-end"
          id="navbarScroll"
        >
          <Form className="d-flex">
            <Form.Control
              value={searchText}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setSearchText(event.target.value)}
            />
            <Button
              onClick={() => dispatch(fetchEmployees(searchText))}
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
