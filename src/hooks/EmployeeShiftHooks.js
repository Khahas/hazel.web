import { useState } from "react";
import { useMutation, useQuery } from "react-query";

import { EmployeeShiftFormModal } from "../components/EmployeeShiftFormModal";
import {
  getEmployeeShifts,
  createEmployeeShift,
  deleteEmployeeShift,
  updateEmployeeShift,
} from "../services/API";

export function useEmployeeShiftApi() {
  const { data, refetch } = useQuery(["getEmployeeShifts"], getEmployeeShifts);

  const { mutateAsync: handleDelete } = useMutation(
    ["deleteEmployeeShift"],
    deleteEmployeeShift,
    {
      onSuccess() {
        refetch();
      },
      onError() {
        alert("delete failed");
      },
    }
  );
  console.log(data);
  const { mutateAsync: handleUpdate } = useMutation(
    ["updateEmployeeShift"],
    updateEmployeeShift,
    {
      onSuccess() {
        refetch();
      },
      onError() {
        alert("update failed");
      },
    }
  );
  console.log(data);
  const { mutateAsync: handleCreate } = useMutation(
    ["createEmployeeShift"],
    createEmployeeShift,
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

export function useEmployeeShiftFormModal({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [employeeShift, setEmployeeShift] = useState();

  const handleOpenModal = (employeeShift) => {
    setEmployeeShift(employeeShift);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  return [
    { handleCloseModal, handleOpenModal },

    <EmployeeShiftFormModal
      show={open}
      employeeShift={employeeShift}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
    />,
  ];
}
