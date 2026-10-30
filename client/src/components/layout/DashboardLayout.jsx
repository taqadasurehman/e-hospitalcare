import React, { useContext, useState } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { TbBuildingHospital, TbLogout, TbMenu2, TbX } from "react-icons/tb";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { loginContext } from "../../pages/context/auth";
import Forbidden from "../Forbidden";

function initials(name = "") {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function DashboardLayout({ role, roleLabel, menus, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logout, loggedIn, user } = useContext(loginContext);
  const { pathname } = useLocation();

  if (!loggedIn) {
    return <Navigate to={"/"} />;
  }
  if (user?.role !== role) {
    return <Forbidden />;
  }

  const handleLogout = () => {
    confirmAlert({
      title: "Log out?",
      message: "You will need to sign in again to continue.",
      buttons: [
        { label: "Log out", onClick: logout },
        { label: "Cancel" },
      ],
    });
  };

  const current =
    menus.find((menu) => pathname === menu.link) ||
    menus.find((menu) => menu.link !== "/dashboard" && pathname.startsWith(menu.link));
  // Pages outside the menu (edit pages, blood bank from a card) get a title from their URL
  const title =
    current?.name ||
    (pathname === "/dashboard"
      ? "Dashboard"
      : pathname
          .split("/")
          .pop()
          .replace(/[_-]/g, " ")
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/\b\w/g, (c) => c.toUpperCase()));

  const sidebar = (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center gap-2.5 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
          <TbBuildingHospital size={20} />
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-slate-900">e-HospitCare</p>
          <p className="text-xs text-slate-500">{roleLabel} portal</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Menu
        </p>
        <ul className="space-y-0.5">
          {menus.map((menu) => (
            <li key={menu.link}>
              <NavLink
                to={menu.link}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {React.createElement(menu.icon, { size: 19, className: "shrink-0" })}
                <span className="truncate">{menu.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-100 p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
            {initials(user?.name)}
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-medium text-slate-900">{user?.name}</p>
            <p className="truncate text-xs text-slate-500">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            title="Log out"
            className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
          >
            <TbLogout size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-white lg:block">
        {sidebar}
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 bg-white shadow-xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-4 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"
            >
              <TbX size={20} />
            </button>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur sm:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <TbMenu2 size={20} />
          </button>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-lg font-semibold text-slate-900">{title}</h1>
          </div>
          <span className="hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 sm:inline-block">
            {roleLabel}
          </span>
        </header>

        <main className="p-4 text-sm sm:p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
