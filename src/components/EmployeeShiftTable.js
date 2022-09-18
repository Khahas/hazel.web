import { Button } from "react-bootstrap";
import React from "react";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";

export function EmployeeShiftTable({
  data,
  onEditEmployeeShift,
  onDeleteEmplyeeShift,
}) {
  const handleDeleteEmployeeShift = async (id) => {
    if (!window.confirm("are you sure?")) {
      return;
    }

    return onDeleteEmplyeeShift(id);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID employee",
        accessor: "employeeId",
      },
      {
        Header: "ID shift",
        accessor: "shiftId",
      },
      {
        Header: "Fist Name",
        accessor: "employee.firstName",
      },
      {
        Header: "Last Name",
        accessor: "employee.lastName",
      },

      {
        Header: "Action ",
        Cell: ({ row }) => (
          <>
            <Button
              variant="danger"
              onClick={() => handleDeleteEmployeeShift(row.original.id)}
            >
              delete
            </Button>

            <Button onClick={() => onEditEmployeeShift(row.original)}>
              Edit
            </Button>
          </>
        ),
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
}
