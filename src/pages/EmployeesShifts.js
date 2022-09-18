import { Plus } from "react-bootstrap-icons";
import { Button, Col, Container, Row } from "react-bootstrap";
import { EmployeeShiftTable } from "../components/EmployeeShiftTable";
import {
  useEmployeeShiftFormModal,
  useEmployeeShiftApi,
} from "../hooks/EmployeeShiftHooks";

export default function EmployeeShifts() {
  const { data, handleCreate, handleDelete, handleUpdate } =
    useEmployeeShiftApi();

  const handleFormSubmit = ({ id, ...data }) => {
    if (id !== "new") {
      return handleUpdate({ ...data, id });
    }

    return handleCreate(data);
  };
  console.log(data);

  const [{ handleOpenModal }, formModal] = useEmployeeShiftFormModal({
    onSubmit: handleFormSubmit,
  });

  return (
    <Container className="App">
      <Row className="mt-2">
        <Col className="col-auto ms-auto">
          <Button
            variant="secondary"
            onClick={() =>
              handleOpenModal({
                id: "new",
                firstName: "",
                lastName: "",
                startDate: "",
                endDate: "",
                description: "",
              })
            }
          >
            <Plus /> Add employeeShift
          </Button>
        </Col>
      </Row>

      <Row className="mt-2">
        { data && <EmployeeShiftTable
          data={data}
          onEditEmployeeShift={handleOpenModal}
          onDeleteEmplyeeShift={handleDelete}
        />}
      </Row>

      {formModal}
    </Container>
  );
}
