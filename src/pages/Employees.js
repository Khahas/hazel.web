import { Plus } from "react-bootstrap-icons";
import { Button, Col, Container, Row } from "react-bootstrap";
import { EmployeeTable } from "../components/EmployeeTable";
import { useEmployeeFormModal, useEmployeeApi } from "../hooks/EmployeeHooks";
import { SearchForm } from "../components/SearchForm";

export default function Employees() {
  const { data, handleCreate, handleDelete, handleUpdate } = useEmployeeApi();

  const handleFormSubmit = ({ id, ...data }) => {
    if (id !== "new") {
      return handleUpdate({ ...data, id });
    }

    return handleCreate(data);
  };
  console.log(data);

  const [{ handleOpenModal }, formModal] = useEmployeeFormModal({
    onSubmit: handleFormSubmit,
  });

  return (
    <Container className="App">
      <SearchForm />
      <Row className="mt-2">
        <Col className="col-auto ms-auto">
          <Button
            variant="secondary"
            onClick={() =>
              handleOpenModal({
                id: "new",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                email: "",
                phoneNumber: "",
              })
            }
          >
            <Plus /> Add employee
          </Button>
        </Col>
      </Row>

      <Row className="mt-2">
       { data && <EmployeeTable
          data={data}
          onEditEmployee={handleOpenModal}
          onDeleteEmployee={handleDelete}
        />}
      </Row>

      {formModal}
    </Container>
  );
}
