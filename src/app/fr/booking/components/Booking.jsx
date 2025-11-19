"use client";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";
import Link from "next/link";
import { ToastContainer, toast, Bounce } from "react-toastify";

const optionsTime = [
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
];

const optionsGuests = [
  "1 Invité",
  "2 Invités",
  "3 Invités",
  "4 Invités",
  "5 Invités",
  "6 Invités",
  "7 Invités",
  "8 Invités",
  "9 Invités",
  "10 Invités",
  "11 Invités",
  "12 Invités",
];

const Booking = () => {
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
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    guests: "1 Invité",
    time: "13:00",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clickBook = async (e) => {
    const serviceId = "service_zk1myao";
    const templateId = "template_c262tqj";
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.guests &&
      formData.time &&
      phone &&
      reservationDate
    ) {
      try {
        setLoading(true);
        const res = await emailjs.send(serviceId, templateId, {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: phone,
          number_personne: formData.guests,
          date: new Intl.DateTimeFormat("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(reservationDate)),
          time: formData.time,
          comment: formData.comment,
        });
        if (res.status === 200) {
          setMessageSent(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      notify();
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
  }, []);

  return (
    isClient && (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {!messageSent ? (
          <form className="w-full flex flex-col justify-center items-center uppercase gap-4 text-[12.08px] mt-5 px-11  lg:px-52 pt-14 overflow-y-auto">
            <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label htmlFor="firstName">{"Prénom"}</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full rounded-md p-2 focus:outline-none"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label htmlFor="lastName">{"Nom"}</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full rounded-md p-2 focus:outline-none"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="email">{"E-mail"}</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md p-2 focus:outline-none"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
              <div className=" flex flex-col justify-center items-start gap-1">
                <label htmlFor="phone">{"Téléphone"}</label>
                <PhoneInput
                  id="phone"
                  country={"ma"}
                  inputClass="w-full"
                  //value={this.state.phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </div>
              <div className="w-full flex flex-col justify-center items-start gap-1">
                <label htmlFor="guests">{"Invités"}</label>
                <select
                  name="guests"
                  id="guests"
                  className="w-full rounded-md p-2 focus:outline-none bg-white"
                  onChange={(e) => handleChange(e)}
                >
                  {optionsGuests.map((guest, i) => (
                    <option value={guest} key={i}>
                      {guest}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="reservationDate">{"Date de réservation"}</label>
              <input
                type="date"
                name="reservationDate"
                id="reservationDate"
                className="w-full rounded-md p-2 focus:outline-none bg-white"
                onChange={(e) => setReservationDate(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="time">{"Temps"}</label>
              <select
                name="time"
                id="time"
                className="w-full rounded-md p-2 focus:outline-none bg-white"
                onChange={(e) => handleChange(e)}
              >
                {optionsTime.map((time) => (
                  <option value={time} key={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="comment">{"Commentaire"}</label>

              <textarea
                name="comment"
                id="comment"
                rows={3}
                className="w-full rounded-md p-2 focus:outline-none"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <button
              onClick={(e) => clickBook(e)}
              className="py-3 px-6 mt-4 w-full bg-casa_scarlet rounded-md text-white mr-auto cursor-pointer uppercase flex justify-center items-center"
            >
              {loading ? <ClockLoader size={20} color="#ffffff" /> : `Demande`}
            </button>
          </form>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center gap-5 p-3.5 mt-3">
            <span className="pr-2 text-casa_scarlet">
              <strong className="mr-1">Succès!</strong>
              {
                "Merci pour votre demande, nous vous répondrons dans les plus brefs délais."
              }
            </span>
            <Link
              href="/fr"
              //onClick={() => setOpenBook(false)}
              className="w-20 text-center bg-casa_scarlet text-[#DDF5F0] rounded hover:opacity-80 px-3 py-1"
            >
              {"Accueil"}
            </Link>
          </div>
        )}
      </>
    )
  );
};

export default Booking;
