import { Plus } from "react-bootstrap-icons";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ShiftTable } from "../components/ShiftTable";
import { useShiftFormModal, useShiftApi } from "../hooks/ShiftHook";

export default function Shifts() {
  const { data, handleCreate, handleDelete, handleUpdate } = useShiftApi();

  const handleFormSubmit = ({ id, ...data }) => {
    if (id !== "new") {
      return handleUpdate({ ...data, id });
    }

    return handleCreate(data);
  };
  console.log(data);

  const [{ handleOpenModal }, formModal] = useShiftFormModal({
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
                startDate: "",
                endDate: "",
                description: "",
              })
            }
          >
            <Plus /> Add Shift
          </Button>
        </Col>
      </Row>

      <Row className="mt-2">
        { data && <ShiftTable
          data={data}
          onEditShift={handleOpenModal}
          onDeleteShift={handleDelete}
        />}
      </Row>

      {formModal}
    </Container>
  );
}
