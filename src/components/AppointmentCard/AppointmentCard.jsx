import React from "react";
import Image from "next/image";
import Dropdown from "../reuseableComponents/Dropdown";
import dropIcon from "../../../public/img/icons/dropIcon.svg";
import lineDivider from "../../../public/img/icons/lineDivider.svg";

import deleteIcon from "../../../public/img/icons/deleteIcon.svg";
import editIcon from "../../../public/img/icons/editIcon.svg";
import rebookIcon from "../../../public/img/icons/rebookIcon.svg";

const AppointmentCard = ({ appointment, showButton }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options).toLowerCase();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
  };

  const getStatusColor = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes("confirmed")) return "text-warning";
    if (statusLower.includes("paid")) return "text-success";
    if (statusLower.includes("fix payment") || statusLower.includes("no-show"))
      return "text-failed";
    return "text-gray-500";
  };

  const options = [
    { label: "rebook", value: "rebook", icon: rebookIcon },
    { label: "edit", value: "edit", icon: editIcon },
    { label: "remove", value: "remove", icon: deleteIcon },
  ];

  const handleOptionSelect = (value) => {
    console.log(`Selected: ${value} for appointment ${appointment.id}`);
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-between py-10 border-t border-gray-700">
      <div className="flex gap-4">
        <div className="relative rounded overflow-hidden flex-shrink-0">
          <Image
            src={appointment.image}
            alt={appointment.barber}
            width={84}
            height={84}
            className="w-[84px] h-[84px]"
          />
        </div>
        <div>
          <p
            className={`text-xs mb-1 uppercase font-medium ${getStatusColor(
              appointment.status
            )}`}
          >
            {appointment.status}
          </p>
          <div className="flex flex-row gap-4">
            <p className="md:text-2xl font-bold text-[#DDDDDD]">
              {formatDate(appointment.date)}
            </p>

            <Image className="" src={lineDivider} alt="lineDivider" />
            <p className="md:text-2xl font-bold text-[#DDDDDD]">
              {formatTime(appointment.date)}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center md:hidden">
            <p className="text-[#7E7E7E] md:text-lg font-medium mt-1">
              {appointment.service}
            </p>
            <Dropdown
              options={options}
              onSelect={handleOptionSelect}
              className=" text-textColor"
              icon={
                <Image
                  src={dropIcon}
                  alt="dropIcon"
                  className="w-[20px] h-[20px]"
                />
              }
            />
          </div>
          <p className="text-[#7E7E7E] md:text-lg font-medium mt-1 hidden md:block">
            {appointment.service}
          </p>
        </div>
      </div>
      {showButton ? (
        <div className="flex md:flex-col flex-row md:gap-4 gap-24 mt-6">
          <button className="md:px-10 px-5 py-2 border border-gray-300 font-bold rounded-full bg-[#E0E0E0] text-sm hover:bg-gray-800 hover:text-white text-[#121212] transition">
            rebook
          </button>
          <button className="md:px-10 px-5 py-2 bg-[#232323] rounded-full font-bold text-sm hover:bg-white transition hover:text-black text-textColor">
            call malik
          </button>
        </div>
      ) : (
        <Dropdown
          options={options}
          onSelect={handleOptionSelect}
          className="hidden md:block text-textColor"
          icon={
            <Image
              src={dropIcon}
              alt="dropIcon"
              className="w-[20px] h-[20px]"
            />
          }
        />
      )}
    </div>
  );
};

export default AppointmentCard;
