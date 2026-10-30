import React, { useState } from "react";
import ButtonPreloader from "../ButtonPreloader";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "../../services/axios";

function DeleteButton({ path, id, record, children }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    confirmAlert({
      title: "Delete this record?",
      message: "This action cannot be undone.",
      buttons: [
        {
          label: "Delete",
          onClick: () =>
            axios.delete(`/${path}/${id}`).then((res) => {
              setLoading(false);
              record();
              toast.success(res.data);
            }),
        },
        {
          label: "Cancel",
          onClick: () => setLoading(false),
        },
      ],
    });
  };

  return (
    <button
      className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-100"
      onClick={handleDelete}
    >
      {loading ? <ButtonPreloader /> : children}
    </button>
  );
}

export default DeleteButton;
