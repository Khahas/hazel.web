import React, { useEffect } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function EmployeeShiftFormModal({ show, onClose, employeeShift, onSubmit }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      employeeId: "",
      shiftId: "",
      ...employeeShift,
    },
  });

  useEffect(() => {
    if (employeeShift) {
      reset(employeeShift);
    }
  }, [reset, employeeShift]);
  const shiftIdError = errors?.shiftId?.message;
  const employeeIdError = errors?.employeeId?.message;
  return (
    <Modal show={show && employeeShift} onExit={onClose} onHide={onClose}>
      <Form
        key={employeeShift?.id}
        onSubmit={handleSubmit((values) => {
          onSubmit(values);
          onClose();
        })}
      >
        <Modal.Body>
          <Form.Group>
            <Form.Label>Employee ID</Form.Label>

            <FormControl
              {...register("employeeId", {
                required: "field is required",
        
              })}
            />

            {employeeIdError && (
              <Form.Text className="text-danger">{employeeIdError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Shift Id</Form.Label>

            <FormControl
              {...register("shiftId", {
                required: "field is required",
              })}
            />

            {shiftIdError && (
              <Form.Text className="text-danger">{shiftIdError}</Form.Text>
            )}
          </Form.Group>
          
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" variant="link" onClick={onClose}>
            cancel
          </Button>

          <Button type="submit" disabled={!isValid}>
            save
          </Button>
        </Modal.Footer>

        <input type="hidden" {...register("id")} />
      </Form>
    </Modal>
  );
}
