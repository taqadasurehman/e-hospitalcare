import React from "react";
import {
  TbLayoutDashboard,
  TbReceipt,
  TbFileInvoice,
  TbCash,
  TbUser,
} from "react-icons/tb";
import DashboardLayout from "../layout/DashboardLayout";

const menus = [
  { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboard },
  { name: "Prescription Payments", link: "/accountant/payment", icon: TbReceipt },
  { name: "New Invoice", link: "/accountant/new_invoice", icon: TbFileInvoice },
  { name: "View Payments", link: "/accountant/viewpayments", icon: TbCash },
  { name: "Profile", link: "/accountant/profile", icon: TbUser },
];

function AccountantSidebar({ children }) {
  return (
    <DashboardLayout role="accountant" roleLabel="Accountant" menus={menus}>
      {children}
    </DashboardLayout>
  );
}

export default AccountantSidebar;
