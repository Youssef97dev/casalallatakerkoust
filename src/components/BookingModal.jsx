"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import BookingStep from "./BookingStep";
import CustomerForm from "./CustomerForm";

const MIN_TIME = 13 * 60; // 13:00

const BookingModal = ({ open, onClose }) => {
  const [step, setStep] = useState("booking");
  const [reservationDate, setReservationDate] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: 2,
    time: MIN_TIME,
    phone: "",
    comment: "",
  });

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <FiX size={20} />
        </button>

        <div className="p-6">
          {step === "booking" ? (
            <BookingStep
              formData={formData}
              setFormData={setFormData}
              reservationDate={reservationDate}
              setReservationDate={setReservationDate}
              onAddCustomer={() => setStep("customer")}
            />
          ) : (
            <CustomerForm
              formData={formData}
              setFormData={setFormData}
              reservationDate={reservationDate}
              onBack={() => setStep("booking")}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
