import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { appointmentsData } from "@/components/data/Appointments";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barber Booking App",
  description: "Book your next haircut with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar user={appointmentsData?.user} />
          {children}
        </div>
      </body>
    </html>
  );
}
