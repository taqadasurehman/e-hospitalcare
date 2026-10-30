import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountantSidebar from "../../components/sidebars/AccountantSidebar";
import axios from "../../services/axios";
import { Button, Input, Select } from "../../components";
import { toast } from "react-toastify";
import ButtonPreloader from "../../components/ButtonPreloader";

function Invoice() {
  const navigate = useNavigate();
  const [medications, setMedications] = useState([]);
  const [currentPatient, setCurrentPatient] = useState([]);
  const [currentDoctor, setCurrentDoctor] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    paymentstatus: "",
    modeofpayment: "",
    paymentdate: "",
  });
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Getting Query From URL
  let search = useLocation().search;
  const id = new URLSearchParams(search).get("edit");

  useEffect(() => {
    axios.get(`/prescription/?edit=${id}`).then((response) => {
      setMedications(response.data);
      setFormData(response.data);
      setCurrentPatient(response.data.patients[0].name);
      setCurrentDoctor(response.data.doctor[0].name);
    });
  }, []);

  // To Update Prescription
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(`/accountant_payment/${id}`, {
        paymentstatus: formData.paymentstatus,
        modeofpayment: formData.modeofpayment,
        paymentdate: formData.paymentdate,
      })
      .then((res) => {
        navigate("/accountant/payment", { replace: true }),
          toast.success(res.data);
      })
      .catch((err) => toast.error(err.response.data));
  };

  return (
    <AccountantSidebar>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-10">
          <div className="grid gap-6 border-b border-slate-100 pb-6 lg:grid-cols-2">
            <h1 className="text-3xl font-semibold tracking-tight text-brand-700">Invoice</h1>
            <div>
              <h1 className="text-base font-bold">+ eHospitCare Hospital</h1>
              <h2 className="text-sm">
                Lahore Road, Narowal
              </h2>
              <h3 className="text-sm">ehospitcare@gmail.com</h3>
              <h3 className="text-sm">092 39124809</h3>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-sm lg:col-span-2">
              <p className="text-sm">Invoiced to:</p>
              <p className="font-bold text-base">{formData?.name}</p>
              <p className="font-bold text-base">
                Amount :
                <span className="font-bold">
                   Rs.
                  {formData?.drugamount}
                </span>
              </p>
              <p className="font-bold text-base">
                Issued: {formData?.paymentdate}
              </p>
            </div>
          </div>
          <h2 className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Payment description
          </h2>
          <div className="mb-6 mt-2 space-y-1 rounded-xl border border-slate-100 p-4 text-sm">
            {formData?.medication?.split("\n").map((drug, i) => (
              <div key={i} className="flex gap-2 text-base">
                <span>{i + 1}.</span>
                <span>{drug}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <Select
              label="Mode Of Payment"
              name="modeofpayment"
              type="text"
              onChange={handleChange}
            >
              <option value={formData?.modeofpayment}>
                {formData?.modeofpayment}
              </option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </Select>
            <Select
              label="Payment Status"
              name="paymentstatus"
              type="text"
              onChange={handleChange}
            >
              <option value={formData?.paymentstatus}>
                {formData?.paymentstatus}
              </option>
              <option value="Paid">Paid</option>
              <option value="UnPaid">UnPaid</option>
            </Select>
            <Input
              label={"Date Issued"}
              name="paymentdate"
              type="date"
              value={formData?.paymentdate}
              onChange={handleChange}
            />
            <Button>
              {loading ? <ButtonPreloader /> : "Add Payment Status"}
            </Button>
          </form>
        </div>
      </div>
    </AccountantSidebar>
  );
}

export default Invoice;
