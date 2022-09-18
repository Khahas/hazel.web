import { useState } from "react";
import { useMutation, useQuery } from "react-query";

import { ShiftFormModal } from "../components/ShiftFormModal";
import {
  getShifts,
  createShift,
  deleteShift,
  updateShift,
} from "../services/API";

export function useShiftApi() {
  const { data, refetch } = useQuery(["getShifts"], getShifts);

  const { mutateAsync: handleDelete } = useMutation(
    ["deleteShift"],
    deleteShift,
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
    ["updateShift"],
    updateShift,
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
    ["createShift"],
    createShift,
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

export function useShiftFormModal({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState();

  const handleOpenModal = (shift) => {
    setShift(shift);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  return [
    { handleCloseModal, handleOpenModal },

    <ShiftFormModal
      show={open}
      shift={shift}
      onClose={handleCloseModal}
      onSubmit={onSubmit}
    />,
  ];
}
