import React, { useContext, useEffect, useState } from "react";
// import { AiOutlineSetting } from "react-icons/ai";
import { loginContext } from "../../pages/context/auth";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../inputs/Input";
import Button from "../buttons/Button";

function Profile() {
  const { user } = useContext(loginContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const id = user?._id;

  // To Get Current Staff Details
  useEffect(() => {
    axios.get(`/staff/?edit=${id}`).then((response) => {
      setFormData(response.data);
    });
  }, []);

  // To Update Staff
  const updateProfile = (e) => {
    e.preventDefault();
    axios
      .put(`/profile/${id}`, {
        name: formData?.name,
        email: formData?.email,
        address: formData?.address,
        phone: formData?.phone,
      })
      .then(() => window.location.reload(true), { replace: true })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  // updatePassword
  const updatePassword = (e) => {
    e.preventDefault();
    axios
      .put(`/updatepassword/${id}`, {
        oldpassword: formData?.oldpassword,
        newpassword: formData?.newpassword,
        confirmpassword: formData?.confirmpassword,
      })
      .then(() => window.location.reload(true), { replace: true })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const demoProfile = (e) => {
    e.preventDefault();
    toast.success("For demo profile details would not be changed");
  };

  const demoPassword = (e) => {
    e.preventDefault();
    toast.success("For demo passwords would not be changed");
  };

  const initials = (user?.name || "")
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-semibold text-brand-700">
          {initials}
        </div>
        <h2 className="mt-4 text-lg font-semibold text-slate-900">{user?.name}</h2>
        <p className="text-sm text-slate-500">{user?.email}</p>
        <span className="mt-3 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium capitalize text-brand-700">
          {user?.role}
        </span>
        <dl className="mt-6 w-full space-y-3 border-t border-slate-100 pt-6 text-left text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Department</dt>
            <dd className="font-medium text-slate-800">{user?.department}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Phone</dt>
            <dd className="font-medium text-slate-800">{user?.phone}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Address</dt>
            <dd className="text-right font-medium text-slate-800">{user?.address}</dd>
          </div>
        </dl>
      </div>

      <div className="space-y-6 xl:col-span-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-base font-semibold text-slate-900">Personal information</h2>
          <p className="mb-6 text-sm text-slate-500">Update your contact details.</p>
          <form onSubmit={updateProfile}>
            <div className="grid gap-x-4 sm:grid-cols-2">
              <Input label="Name" type="text" value={formData?.name} name="name" onChange={handleChange} />
              <Input label="Email" type="text" value={formData?.email} name="email" onChange={handleChange} />
              <Input label="Phone" type="text" value={formData?.phone} name="phone" onChange={handleChange} />
              <Input label="Address" type="text" value={formData?.address} name="address" onChange={handleChange} />
            </div>
            <Button>Save changes</Button>
          </form>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-base font-semibold text-slate-900">Change password</h2>
          <p className="mb-6 text-sm text-slate-500">Use a strong password you do not use elsewhere.</p>
          <form onSubmit={updatePassword}>
            <div className="grid gap-x-4 sm:grid-cols-3">
              <Input label="Current password" type="password" name="oldpassword" onChange={handleChange} />
              <Input label="New password" type="password" name="newpassword" onChange={handleChange} />
              <Input label="Confirm password" type="password" name="confirmpassword" onChange={handleChange} />
            </div>
            <Button>Update password</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
