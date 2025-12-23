"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";

const CustomerForm = ({
  formData,
  setFormData,
  reservationDate,
  onBack,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);

  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  const notify = () =>
    toast.warn("Tous les champs sont obligatoires.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const notifySent = () =>
    toast.success(
      "Merci pour votre demande, nous vous recontacterons prochainement.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );

  const clickBook = async () => {
    const serviceId = "service_zk1myao";
    const templateId = "template_c262tqj";
    if (
      formData.fullName &&
      formData.email &&
      formData.guests &&
      formData.time &&
      formData.phone &&
      reservationDate
    ) {
      try {
        setLoading(true);
        const res = await emailjs.send(serviceId, templateId, {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          number_personne: formData.guests,
          date: new Intl.DateTimeFormat("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(reservationDate)),
          time: formatTime(formData.time),
          comment: formData.comment,
        });
        if (res.status === 200) {
          notifySent();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setTimeout(() => onClose(), 1500);
      }
    } else {
      notify();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
  }, []);

  return (
    <div className="space-y-6">
      <ToastContainer
        position="top-center"
        style={{ zIndex: 999999 }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h2 className="text-center text-[20px] text-casa_scarlet uppercase">
        Demande de réservation
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nom et Prénom"
          name="fullName"
          onChange={(e) => handleChange(e)}
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
        />

        <input
          type="tel"
          placeholder="Téléphone"
          name="phone"
          onChange={(e) => handleChange(e)}
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
        />

        <textarea
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
          placeholder="Commentaire"
          name="comment"
          onChange={(e) => handleChange(e)}
          rows={3}
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center gap-2 flex-1 border py-3 rounded-md"
        >
          <FiArrowLeft /> Retour
        </button>

        <button
          className="flex-1 bg-[#2d2a1e] text-white py-3 rounded-md flex justify-center items-center"
          onClick={() => clickBook()}
        >
          {loading ? <ClockLoader size={20} color="#ffffff" /> : `Demande`}
        </button>
      </div>
    </div>
  );
};

export default CustomerForm;
