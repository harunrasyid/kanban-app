import { useState } from "react";

export default function useAddModal() {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const showModal = () => {
    setTitle("");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return {
    open,
    showModal,
    closeModal,
    title,
    setTitle,
  };
}
