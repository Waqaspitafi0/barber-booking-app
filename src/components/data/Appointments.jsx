// src/data/appointments.js
import barber1 from "../../../public/img/profileImg/clientImg1.svg";
import barber2 from "../../../public/img/profileImg/clientImg2.svg";
export const appointmentsData = {
  user: {
    name: "James Carter",
    bookings: 6,
    totalSpent: "$200+",
  },
  appointments: [
    {
      id: 1,
      barber: "Malik",
      image: barber1,
      service: "Skin Fade, Beard Trim & Shape Up",
      date: "2025-02-11T15:00:00Z",
      status: "Confirmed",
      type: "upcoming",
    },
    {
      id: 2,
      barber: "Malik",
      image: barber1,
      service: "Buzz Cut",
      date: "2025-01-24T11:00:00Z",
      status: "Fix Payment Issue",
      type: "past",
    },
    {
      id: 3,
      barber: "Unknown",
      image: barber2,
      service: "Buzz Cut",
      date: "2025-01-04T11:00:00Z",
      status: "Paid",
      type: "past",
    },
  ],
};
