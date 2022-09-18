import React, { useEffect } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function EmployeeFormModal({ show, onClose, employee, onSubmit }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phoneNumber:"",
      ...employee,
    },
  });

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [reset, employee]);

  const lastNameError = errors?.lastName?.message;
  const firstNameError = errors?.firstName?.message;
  const dateOfBirthError = errors?.dateOfBirth?.message;
  const emailError = errors?.email?.message;
  const phoneNumberError = errors?.firstName?.message;

  return (
    <Modal show={show && employee} onExit={onClose} onHide={onClose}>
      <Form
        key={employee?.id}
        onSubmit={handleSubmit((values) => {
          onSubmit(values);
          onClose();
        })}
      >
        <Modal.Body>
          <Form.Group>
            <Form.Label>firstname</Form.Label>

            <FormControl
              {...register("firstName", {
                required: "field is required",
                minLength: { value: 3, message: "min length is 3" },
                maxLength: { value: 20, message: "max length is 20" },
              })}
            />

            {firstNameError && (
              <Form.Text className="text-danger">{firstNameError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>lastname</Form.Label>

            <FormControl
              {...register("lastName", {
                required: "field is required",
                minLength: { value: 3, message: "min length is 3" },
                maxLength: { value: 20, message: "max length is 20" },
              })}
            />

            {lastNameError && (
              <Form.Text className="text-danger">{lastNameError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>dateOfBirth</Form.Label>

            <FormControl type="date"
              {...register("dateOfBirth", {
                required: "field is required",
              })}
            />

            {dateOfBirthError && (
              <Form.Text className="text-danger">{dateOfBirthError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>

            <FormControl
              {...register("email", {
                required: "field is required",
                minLength: { value: 3, message: "min length is 3" },
                maxLength: { value: 40, message: "max length is 40" },
              })}
            />

            {emailError && (
              <Form.Text className="text-danger">{emailError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>phoneNumber</Form.Label>

            <FormControl
              {...register("phoneNumber", {
                required: "field is required",
                minLength: { value: 3, message: "min length is 3" },
                maxLength: { value: 20, message: "max length is 20" },
              })}
            />

            {phoneNumberError && (
              <Form.Text className="text-danger">{phoneNumberError}</Form.Text>
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
