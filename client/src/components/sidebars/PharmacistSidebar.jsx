import React from "react";
import {
  TbLayoutDashboard,
  TbPill,
  TbUsers,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Provide Medication", link: "/pharmacist/provide_medications", icon: TbPill },
  { name: "Patients", link: "/pharmacist/patients", icon: TbUsers },
  { name: "Profile", link: "/pharmacist/profile", icon: TbUser },
];

function PharmacistSidebar({ children }) {
  return (
    <DashboardLayout role="pharmacist" roleLabel="Pharmacist" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default PharmacistSidebar;
