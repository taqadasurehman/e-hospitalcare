import React from "react";
import {
  TbLayoutDashboard,
  TbDroplet,
  TbTruckDelivery,
  TbBuildingBank,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Blood Donors", link: "/labouratorist/blood_donor", icon: TbDroplet },
  { name: "Dispatch Blood", link: "/labouratorist/dispatch_blood", icon: TbTruckDelivery },
  { name: "Blood Bank", link: "/labouratorist/blood_bank", icon: TbBuildingBank },
  { name: "Profile", link: "/labouratorist/profile", icon: TbUser },
];

function LabouratoristSidebar({ children }) {
  return (
    <DashboardLayout role="labouratorist" roleLabel="Laboratorist" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default LabouratoristSidebar;
