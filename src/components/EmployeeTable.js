import React from "react";
import { Button } from "react-bootstrap";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";

export function EmployeeTable({ data, onEditEmployee, onDeleteEmployee }) {
  const handleDeleteEmployee = async (id) => {
    if (!window.confirm("are you sure?")) {
      return;
    }

    return onDeleteEmployee(id);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Date Of Birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone number",
        accessor: "phoneNumber",
      },
      {
        Header: "Action ",
        Cell: ({ row }) => (
          <>
            <Button
              variant="danger"
              onClick={() => handleDeleteEmployee(row.original.id)}
            >
              delete
            </Button>

            <Button onClick={() => onEditEmployee(row.original)}>Edit</Button>
          </>
        ),
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
}
