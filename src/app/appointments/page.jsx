"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import AppointmentCard from "@/components/AppointmentCard/AppointmentCard";
import { appointmentsData } from "@/components/data/Appointments";
import ProfileDropdown from "@/components/ProfileDropdown";
import profileImage from "../../../public/img/profileImg/jamesCarter_profile.svg";
import backIcon from "../../../public/img/icons/Arrow_leftIcon.svg";
import notificationIcon from "../../../public/img/icons/notificationIcon.svg";

const Appointments = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  const upcomingAppointments = appointmentsData.appointments.filter(
    (app) => app.type === "upcoming"
  );

  const pastAppointments = appointmentsData.appointments.filter(
    (app) => app.type === "past"
  );

  const handleDropdownSelect = (value) => {
    console.log("Selected:", value);
  };

  // Add scroll event listener to handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex-1 bg-contentBackground text-white">
        {/* Sticky Header */}
        <div
          className={`${
            isHeaderSticky
              ? "sticky top-0 z-10 bg-contentBackground shadow-md transition-all duration-300"
              : ""
          }`}
        >
          <div className="max-w-6xl mx-auto p-8 pt-4 pb-4">
            <div className="flex flex-row lg:justify-between justify-end items-center">
              <Link
                href="#"
                className="lg:flex items-center text-[#B9B9B9] hover:text-white text-base hidden"
              >
                <Image
                  src={backIcon}
                  alt="backIcon"
                  className="w-[16px] h-[16px] mr-2 cursor-pointer"
                />
                back to malik
              </Link>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={notificationIcon}
                  alt="notificationIcon"
                  className="w-[20px] h-[20px] cursor-pointer"
                />
                <ProfileDropdown
                  onSelect={handleDropdownSelect}
                  userImage={profileImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-8 pb-8">
          <section className="mb-12">
            <h2 className="text-[48px] font-bold mb-8">coming up.</h2>
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  showButton={true}
                />
              ))
            ) : (
              <p className="text-textColor">No upcoming appointments</p>
            )}
          </section>

          <section>
            <h2 className="text-[48px] font-bold mb-8">past.</h2>
            {pastAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Appointments;
