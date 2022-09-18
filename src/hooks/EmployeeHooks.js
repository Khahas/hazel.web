import { useState } from "react";
import { useMutation, useQuery } from "react-query";

import { EmployeeFormModal } from "../components/EmployeeFormModal";
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../services/API";

export function useEmployeeApi() {
  const { data, refetch } = useQuery(["getEmployees"], getEmployees);

  const { mutateAsync: handleDelete } = useMutation(
    ["deleteEmployee"],
    deleteEmployee,
    {
      onSuccess() {
        refetch();
      },
      onError() {
        alert("delete failed");
      },
    }
  );

  const { mutateAsync: handleUpdate } = useMutation(
    ["updateEmployee"],
    updateEmployee,
    {
      onSuccess() {
        refetch();
      },
      onError() {
        alert("update failed");
      },
    }
  );
  
  const { mutateAsync: handleCreate } = useMutation(
    ["createEmployee"],
    createEmployee,
    {
      onSuccess() {
        refetch();
      },
      onError() {
        alert("create failed");
      },
    }
  );

  return { data, refetch, handleCreate, handleUpdate, handleDelete };

}


export function useEmployeeFormModal({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState();

  const handleOpenModal = (employee) => {
    setEmployee(employee);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  return [
    { handleCloseModal, handleOpenModal },

    <EmployeeFormModal
      show={open}
      employee={employee}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
    />,
  ];
}
