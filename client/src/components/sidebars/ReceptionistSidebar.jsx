import React from "react";
import {
  TbLayoutDashboard,
  TbUsers,
  TbListNumbers,
  TbCalendarEvent,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Patients", link: "/receptionist/patients", icon: TbUsers },
  { name: "Queue", link: "/receptionist/queue", icon: TbListNumbers },
  { name: "Appointments", link: "/receptionist/appointments", icon: TbCalendarEvent },
  { name: "Profile", link: "/receptionist/profile", icon: TbUser },
];

function ReceptionistSidebar({ children }) {
  return (
    <DashboardLayout role="receptionist" roleLabel="Receptionist" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default ReceptionistSidebar;
