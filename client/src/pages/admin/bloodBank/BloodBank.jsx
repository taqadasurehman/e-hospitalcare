import React, { useContext } from "react";
import { loginContext } from "../../context/auth";
import AdminBloodBank from "../../../components/multipleUsers/bloodBank/BloodBank";
import { AdminSidebar } from "../../../components";

function BloodBank() {
  const { user } = useContext(loginContext);

  return (
    <AdminSidebar>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
        <AdminBloodBank />
      </div>
    </AdminSidebar>
  );
}

export default BloodBank;
