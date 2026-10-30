import React from "react";
import {
  TbLayoutDashboard,
  TbBuildingCommunity,
  TbStethoscope,
  TbUsers,
  TbNurse,
  TbPill,
  TbFlask,
  TbCash,
  TbHeadset,
  TbScissors,
  TbBabyCarriage,
  TbCross,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Departments", link: "/admin/departments", icon: TbBuildingCommunity },
  { name: "Doctors", link: "/admin/doctors", icon: TbStethoscope },
  { name: "Patients", link: "/admin/patients", icon: TbUsers },
  { name: "Nurses", link: "/admin/nurses", icon: TbNurse },
  { name: "Pharmacists", link: "/admin/pharmacists", icon: TbPill },
  { name: "Laboratorists", link: "/admin/labouratorists", icon: TbFlask },
  { name: "Accountants", link: "/admin/accountants", icon: TbCash },
  { name: "Receptionists", link: "/admin/receptionists", icon: TbHeadset },
  { name: "Operations", link: "/admin/operations", icon: TbScissors },
  { name: "Birth Reports", link: "/admin/births", icon: TbBabyCarriage },
  { name: "Death Reports", link: "/admin/deaths", icon: TbCross },
  { name: "Profile", link: "/admin/profile", icon: TbUser },
];

function AdminSidebar({ children }) {
  return (
    <DashboardLayout role="admin" roleLabel="Admin" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default AdminSidebar;
