import React from "react";
import {
  TbLayoutDashboard,
  TbPill,
  TbListNumbers,
  TbActivityHeartbeat,
  TbUsers,
  TbCalendarEvent,
  TbBed,
  TbDroplet,
  TbTruckDelivery,
  TbBuildingBank,
  TbScissors,
  TbBabyCarriage,
  TbCross,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Prescriptions", link: "/doctor/prescriptions", icon: TbPill },
  { name: "Queue", link: "/doctor/queue", icon: TbListNumbers },
  { name: "Vital Signs", link: "/doctor/vital_sign", icon: TbActivityHeartbeat },
  { name: "Patients", link: "/doctor/patients", icon: TbUsers },
  { name: "Appointments", link: "/doctor/appointments", icon: TbCalendarEvent },
  { name: "Bed Allotment", link: "/doctor/bed_allotment", icon: TbBed },
  { name: "Blood Donors", link: "/doctor/blood_donor", icon: TbDroplet },
  { name: "Dispatch Blood", link: "/doctor/dispatch_blood", icon: TbTruckDelivery },
  { name: "Blood Bank", link: "/doctor/blood_bank", icon: TbBuildingBank },
  { name: "Operation Reports", link: "/doctor/operation", icon: TbScissors },
  { name: "Birth Reports", link: "/doctor/birth", icon: TbBabyCarriage },
  { name: "Death Reports", link: "/doctor/death", icon: TbCross },
  { name: "Profile", link: "/doctor/profile", icon: TbUser },
];

function DoctorSidebar({ children }) {
  return (
    <DashboardLayout role="doctor" roleLabel="Doctor" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default DoctorSidebar;
