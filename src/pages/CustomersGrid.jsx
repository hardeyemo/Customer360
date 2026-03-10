import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CustomerCard from "./CustomerCard";

const customers = [
  { id:1, name:"John Carter", status:"Active", phone:"+31 6 11223344", email:"johncarter@gmail.com", orders:8, sessions:15, amount:"€1,250", lastActivity:"2024-01-10 / 12:30PM", snapshot:"John booked a haircut through WhatsApp chatbot."},
  { id:2, name:"Sophia Williams", status:"Active", phone:"+31 6 88997766", email:"sophiaw@gmail.com", orders:15, sessions:30, amount:"€4,100", lastActivity:"2024-02-02 / 09:10AM", snapshot:"Sophia frequently books spa sessions."},
  { id:3, name:"Michael Brown", status:"Inactive", phone:"+31 6 44556677", email:"michaelbrown@gmail.com", orders:5, sessions:9, amount:"€650", lastActivity:"2023-12-18 / 15:00PM", snapshot:"Michael last visited in December."},
  { id:4, name:"Emma Watson", status:"Active", phone:"+31 6 22114455", email:"emmawatson@gmail.com", orders:12, sessions:20, amount:"€2,200", lastActivity:"2024-01-30 / 10:00AM", snapshot:"Emma regularly books salon appointments."},
  { id:5, name:"Daniel Smith", status:"Active", phone:"+31 6 55667788", email:"danielsmith@gmail.com", orders:9, sessions:14, amount:"€1,400", lastActivity:"2024-02-01 / 16:20PM", snapshot:"Daniel books through the mobile app."},
  { id:6, name:"Olivia Taylor", status:"Active", phone:"+31 6 99112233", email:"oliviataylor@gmail.com", orders:18, sessions:40, amount:"€5,000", lastActivity:"2024-02-05 / 11:10AM", snapshot:"Olivia is a platinum loyalty member."},
  { id:7, name:"Liam Anderson", status:"Inactive", phone:"+31 6 33445566", email:"liama@gmail.com", orders:4, sessions:6, amount:"€350", lastActivity:"2023-11-15 / 09:00AM", snapshot:"Liam has not visited recently."},
  { id:8, name:"Noah Martinez", status:"Active", phone:"+31 6 22334455", email:"noahmartinez@gmail.com", orders:10, sessions:18, amount:"€1,900", lastActivity:"2024-01-21 / 13:30PM", snapshot:"Noah booked a massage session."},
  { id:9, name:"Ava Johnson", status:"Active", phone:"+31 6 88776655", email:"avajohnson@gmail.com", orders:13, sessions:22, amount:"€2,800", lastActivity:"2024-02-03 / 17:40PM", snapshot:"Ava prefers weekend bookings."},
  { id:10, name:"William Clark", status:"Active", phone:"+31 6 66554433", email:"williamclark@gmail.com", orders:7, sessions:10, amount:"€900", lastActivity:"2024-01-28 / 14:10PM", snapshot:"William uses the chatbot booking."},
  { id:11, name:"Isabella Hall", status:"Active", phone:"+31 6 77889900", email:"isabellah@gmail.com", orders:11, sessions:16, amount:"€1,600", lastActivity:"2024-02-02 / 11:00AM", snapshot:"Isabella books beauty treatments."},
  { id:12, name:"James Allen", status:"Inactive", phone:"+31 6 10101010", email:"jamesallen@gmail.com", orders:3, sessions:5, amount:"€200", lastActivity:"2023-10-10 / 12:00PM", snapshot:"James hasn't visited recently."},
  { id:13, name:"Charlotte Young", status:"Active", phone:"+31 6 20202020", email:"charlotte@gmail.com", orders:14, sessions:25, amount:"€3,000", lastActivity:"2024-02-04 / 15:20PM", snapshot:"Charlotte is a frequent customer."},
  { id:14, name:"Benjamin King", status:"Active", phone:"+31 6 30303030", email:"benking@gmail.com", orders:6, sessions:9, amount:"€750", lastActivity:"2024-01-12 / 10:45AM", snapshot:"Benjamin books grooming services."},
  { id:15, name:"Amelia Scott", status:"Active", phone:"+31 6 40404040", email:"ameliascott@gmail.com", orders:20, sessions:50, amount:"€6,500", lastActivity:"2024-02-06 / 09:40AM", snapshot:"Amelia is a VIP client."},
  { id:16, name:"Henry Adams", status:"Inactive", phone:"+31 6 50505050", email:"henryadams@gmail.com", orders:2, sessions:3, amount:"€120", lastActivity:"2023-09-20 / 08:20AM", snapshot:"Henry visited only twice."},
  { id:17, name:"Mia Baker", status:"Active", phone:"+31 6 60606060", email:"miabaker@gmail.com", orders:16, sessions:32, amount:"€4,200", lastActivity:"2024-02-07 / 13:15PM", snapshot:"Mia books spa services frequently."},
  { id:18, name:"Lucas Perez", status:"Active", phone:"+31 6 70707070", email:"lucasperez@gmail.com", orders:9, sessions:12, amount:"€1,300", lastActivity:"2024-01-25 / 14:30PM", snapshot:"Lucas prefers afternoon bookings."},
  { id:19, name:"Lucas Perez", status:"Active", phone:"+31 6 70707070", email:"lucasperez@gmail.com", orders:9, sessions:12, amount:"€1,300", lastActivity:"2024-01-25 / 14:30PM", snapshot:"Lucas prefers afternoon bookings."},
  { id:20, name:"Harper Evans", status:"Active", phone:"+31 6 80808080", email:"harperevans@gmail.com", orders:7, sessions:11, amount:"€850", lastActivity:"2024-01-29 / 10:10AM", snapshot:"Harper uses WhatsApp bookings."},
  { id:21, name:"Jack Turner", status:"Active", phone:"+31 6 90909090", email:"jackturner@gmail.com", orders:12, sessions:19, amount:"€2,100", lastActivity:"2024-02-01 / 18:00PM", snapshot:"Jack often books evening sessions."},
];

export default function CustomersGrid() {
  const { search } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.email.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.ceil(filteredCustomers.length / cardsPerPage);
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [currentPage]);

  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {currentCustomers.map((customer) => ( <CustomerCard key={customer.id} customer={customer} /> ))}</div>

      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2 flex-wrap">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
            className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 disabled:opacity-40"> <FiChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button key={page} onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-lg border ${currentPage === page
                    ? "bg-purple-500 text-white border-purple-500" : "hover:bg-gray-100"}`} > {page}
              </button>
            );
          })}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 disabled:opacity-40"
          >
            <FiChevronRight />
          </button>
        </div>
      )}

    </div>
  );
}