import React from "react";
import {
  TbLayoutDashboard,
  TbActivityHeartbeat,
  TbBed,
  TbPlus,
  TbBuildingBank,
  TbDroplet,
  TbTruckDelivery,
  TbBabyCarriage,
  TbCross,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Vital Signs", link: "/nurse/vitalSigns", icon: TbActivityHeartbeat },
  { name: "Bed Allotment", link: "/nurse/bed_allotment", icon: TbBed },
  { name: "Add Bed", link: "/nurse/add_bed", icon: TbPlus },
  { name: "Blood Bank", link: "/nurse/blood_bank", icon: TbBuildingBank },
  { name: "Blood Donors", link: "/nurse/blood_donor", icon: TbDroplet },
  { name: "Dispatch Blood", link: "/nurse/dispatch_blood", icon: TbTruckDelivery },
  { name: "Birth Reports", link: "/nurse/birth", icon: TbBabyCarriage },
  { name: "Death Reports", link: "/nurse/death", icon: TbCross },
  { name: "Profile", link: "/nurse/profile", icon: TbUser },
];

function NurseSidebar({ children }) {
  return (
    <DashboardLayout role="nurse" roleLabel="Nurse" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default NurseSidebar;
