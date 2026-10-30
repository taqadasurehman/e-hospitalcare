import React, { useContext, useEffect, useState } from "react";
import axios from "../services/axios";
import { loginContext } from "../pages/context/auth";
import { TbCalendarEvent } from "react-icons/tb";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
function ReactCalendar() {
  const [appointments, setAppointments] = useState([]);
  const { user } = useContext(loginContext);

  useEffect(() => {
    axios.get("/appointment").then((res) => {
      setAppointments(res.data);
    });
  }, []);

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-2 sm:p-4">
        <h2 className="flex items-center gap-2 px-2 pb-2 pt-1 text-base font-semibold text-slate-900">
          <TbCalendarEvent size={20} className="text-brand-600" />
          Calendar
        </h2>

        {user?.role === "doctor" && (
          <Calendar
            localizer={localizer}
            events={appointments}
            titleAccessor={"name"}
            startAccessor={"date"}
            endAccessor={"date"}
            style={{ height: 500 }}
            className={"bg-white p-2"}
          />
        )}
        {user?.role !== "doctor" && (
          <Calendar
            localizer={localizer}
            style={{ height: 500 }}
            className={"bg-white p-2"}
          />
        )}
      </div>
      <div></div>
    </div>
  );
}

export default ReactCalendar;
