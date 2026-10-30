import React from "react";
import { Link } from "react-router-dom";
import {
  TbUsers, TbStethoscope, TbNurse, TbHeadset, TbPill, TbFlask, TbCash, TbBed,
  TbBuildingBank, TbCalendarEvent, TbReceipt, TbUser, TbListNumbers, TbDroplet,
  TbTruckDelivery, TbScissors, TbBabyCarriage, TbCross, TbActivityHeartbeat,
  TbFileInvoice, TbArrowUpRight, TbLayoutDashboard,
} from "react-icons/tb";

// Icon and accent colour for each dashboard card, matched by its label
const cardStyles = {
  patients: [TbUsers, "bg-sky-50 text-sky-600"],
  doctor: [TbStethoscope, "bg-brand-50 text-brand-600"],
  nurse: [TbNurse, "bg-pink-50 text-pink-600"],
  receptionist: [TbHeadset, "bg-amber-50 text-amber-600"],
  pharmacist: [TbPill, "bg-violet-50 text-violet-600"],
  labouratorists: [TbFlask, "bg-indigo-50 text-indigo-600"],
  accountants: [TbCash, "bg-emerald-50 text-emerald-600"],
  bed: [TbBed, "bg-orange-50 text-orange-600"],
  "bed allotment": [TbBed, "bg-orange-50 text-orange-600"],
  "blood bank": [TbBuildingBank, "bg-red-50 text-red-600"],
  appointments: [TbCalendarEvent, "bg-sky-50 text-sky-600"],
  payments: [TbReceipt, "bg-emerald-50 text-emerald-600"],
  profile: [TbUser, "bg-slate-100 text-slate-600"],
  queue: [TbListNumbers, "bg-amber-50 text-amber-600"],
  prescriptions: [TbPill, "bg-violet-50 text-violet-600"],
  "provide medication": [TbPill, "bg-violet-50 text-violet-600"],
  "blood donor": [TbDroplet, "bg-red-50 text-red-600"],
  "dispatch blood": [TbTruckDelivery, "bg-rose-50 text-rose-600"],
  operation: [TbScissors, "bg-indigo-50 text-indigo-600"],
  "birth report": [TbBabyCarriage, "bg-pink-50 text-pink-600"],
  "death report": [TbCross, "bg-slate-100 text-slate-600"],
  "vital signs": [TbActivityHeartbeat, "bg-brand-50 text-brand-600"],
  "take payments": [TbReceipt, "bg-emerald-50 text-emerald-600"],
  "new invoice": [TbFileInvoice, "bg-sky-50 text-sky-600"],
  "view payments": [TbCash, "bg-emerald-50 text-emerald-600"],
};

function Card({ cardname, number, linkTo, styles = "" }) {
  const [icon, accent] = cardStyles[cardname?.toLowerCase()] || [
    TbLayoutDashboard,
    "bg-slate-100 text-slate-600",
  ];
  const isCount = typeof number === "number";

  return (
    <Link
      to={linkTo}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft ${styles}`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}>
          {React.createElement(icon, { size: 22 })}
        </div>
        <TbArrowUpRight
          size={18}
          className="text-slate-300 transition group-hover:text-brand-600"
        />
      </div>
      <div className="mt-4">
        {isCount && (
          <p className="text-2xl font-semibold text-slate-900">{number}</p>
        )}
        <p className={`text-sm ${isCount ? "text-slate-500" : "font-medium text-slate-800"}`}>
          {cardname}
        </p>
      </div>
    </Link>
  );
}

export default Card;
