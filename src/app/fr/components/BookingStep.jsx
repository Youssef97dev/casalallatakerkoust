"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MIN_TIME = 13 * 60; // 13:00
const MAX_TIME = 16 * 60 + 45; // 16:45
const STEP = 15;

const BookingStep = ({
  formData,
  setFormData,
  reservationDate,
  setReservationDate,
  onAddCustomer,
}) => {
  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  const incrementGuest = () => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.min(prev.guests + 1, 30),
    }));
  };

  const decrementGuest = () => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(prev.guests - 1, 1),
    }));
  };

  const incrementTime = () => {
    setFormData((prev) => ({
      ...prev,
      time: Math.min(prev.time + STEP, MAX_TIME),
    }));
  };

  const decrementTime = () => {
    setFormData((prev) => ({
      ...prev,
      time: Math.max(prev.time - STEP, MIN_TIME),
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-center text-[20px] text-casa_scarlet uppercase">
        Demande de réservation
      </h2>

      {/* Calendar placeholder */}
      <div className="h-fit border border-casa_scarlet rounded-md flex items-center justify-center text-gray-400">
        <DayPicker
          animate
          mode="single"
          selected={reservationDate}
          onSelect={setReservationDate}

          /*footer={
            selected
              ? `Selected: ${selected.toLocaleDateString()}`
              : "Pick a day."
          }*/
        />
      </div>

      {/* Guests */}
      <div className="text-center">
        <p className="text-sm text-gray-500">Les invités</p>
        <div className="w-full flex justify-between items-center">
          <button onClick={() => decrementGuest()}>
            <IoIosArrowBack size={20} />
          </button>
          <p className="text-lg font-medium">{formData.guests}</p>
          <button onClick={() => incrementGuest()}>
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Time */}
      <div className="text-center">
        <p className="text-sm text-gray-500">Temps</p>
        <div className="w-full flex justify-between items-center">
          <button
            onClick={() => decrementTime()}
            disabled={formData.time === MIN_TIME}
            className="disabled:opacity-40"
          >
            <IoIosArrowBack size={20} />
          </button>
          <p className="text-lg font-medium">{formatTime(formData.time)}</p>
          <button
            onClick={() => incrementTime()}
            disabled={formData.time === MAX_TIME}
            className="disabled:opacity-40"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={onAddCustomer}
          className="flex-1 border border-casa_scarlet hover:bg-casa_scarlet hover:text-white text-[#2d2a1e] py-3 rounded-md"
        >
          Suivante
        </button>
      </div>
    </div>
  );
};

export default BookingStep;
