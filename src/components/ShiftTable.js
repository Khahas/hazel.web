import { Button } from "react-bootstrap";
import React from "react";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";

export function ShiftTable({ data, onEditShift, onDeleteShift }) {
  const handleDeleteShift = async (id) => {
    if (!window.confirm("are you sure?")) {
      return;
    }

    return onDeleteShift(id);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "End Date",
        accessor: "endDate",
      },
      {
        Header: "Description",
        accessor: "description",
      },

      {
        Header: "Action ",
        Cell: ({ row }) => (
          <>
            <Button
              variant="danger"
              onClick={() => handleDeleteShift(row.original.id)}
            >
              delete
            </Button>

            <Button onClick={() => onEditShift(row.original)}>Edit</Button>
          </>
        ),
      },
    ],
    []
  );
  

  return <Table columns={columns} data={data} />;
}