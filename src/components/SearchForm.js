import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";

export function SearchForm({ employee, onSubmit }) {

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
      phoneNumber: "",
      ...employee,
    },
  });

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [reset, employee]);


  
  return (
    <Form
      key={employee?.id}
      onSubmit={(values) => 
        {onSubmit(values)
          console.log(values)
        }}
    >
      <Row className="align-items-center">
        <Col>
          <Form.Control
            type="text"
            {...register("firstName")}
            placeholder="Enter search query"
            aria-label="Search query"
          />
        </Col>

        <Col xs="auto">
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
