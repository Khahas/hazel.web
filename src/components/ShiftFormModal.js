import React, { useEffect } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function ShiftFormModal({ show, onClose, shift, onSubmit }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      startDate: "",
      endDate: "",
      description: "",
      ...shift,
    },
  });

  useEffect(() => {
    if (shift) {
      reset(shift);
    }
  }, [reset, shift]);

  const startDateError = errors?.startDate?.message;
  const endDateError = errors?.endDate?.message;
  const descriptionError = errors?.description?.message;

  return (
    <Modal show={show && shift} onExit={onClose} onHide={onClose}>
      <Form
        key={shift?.id}
        onSubmit={handleSubmit((values) => {
          onSubmit(values);
          onClose();
        })}
      >
        <Modal.Body>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>

            <FormControl
              type="date"
              {...register("startDate", {
                required: "field is required",
              })}
            />

            {startDateError && (
              <Form.Text className="text-danger">{startDateError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>End Date</Form.Label>

            <FormControl
              type="date"
              {...register("endDate", {
                required: "field is required",
              })}
            />

            {endDateError && (
              <Form.Text className="text-danger">{endDateError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>

            <FormControl
              {...register("description", {
                required: "field is required",
                minLength: { value: 3, message: "min length is 3" },
                maxLength: { value: 40, message: "max length is 40" },
              })}
            />

            {descriptionError && (
              <Form.Text className="text-danger">{descriptionError}</Form.Text>
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
