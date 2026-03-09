import { useState } from "react";

import { FiSearch, FiX } from "react-icons/fi";


 const orders = [
  {
    id: "ORD-001",
    customer: "John Carter",
    date: "2024-02-05",
    time: "14:30",
    amount: "€150",
    status: "Completed",
    snapshot: "John booked a haircut through WhatsApp chatbot.",
    phone: "+31 6 11223344",
    email: "johncarter@gmail.com",
  },
  {
    id: "ORD-002",
    customer: "Sophia Williams",
    date: "2024-02-06",
    time: "10:00",
    amount: "€200",
    status: "Pending",
    snapshot: "Sophia frequently books spa sessions.",
    phone: "+31 6 88997766",
    email: "sophiaw@gmail.com",
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    date: "2024-02-07",
    time: "12:15",
    amount: "€90",
    status: "Completed",
    snapshot: "Michael last visited in December.",
    phone: "+31 6 44556677",
    email: "michaelbrown@gmail.com",
  },
  {
    id: "ORD-004",
    customer: "Emma Watson",
    date: "2024-02-08",
    time: "09:45",
    amount: "€120",
    status: "Cancelled",
    snapshot: "Emma regularly books salon appointments.",
    phone: "+31 6 22114455",
    email: "emmawatson@gmail.com",
  },
  {
    id: "ORD-005",
    customer: "Daniel Smith",
    date: "2024-02-09",
    time: "15:20",
    amount: "€130",
    status: "Completed",
    snapshot: "Daniel books through the mobile app.",
    phone: "+31 6 55667788",
    email: "danielsmith@gmail.com",
  },
  {
    id: "ORD-006",
    customer: "Olivia Taylor",
    date: "2024-02-10",
    time: "11:10",
    amount: "€250",
    status: "Pending",
    snapshot: "Olivia is a platinum loyalty member.",
    phone: "+31 6 99112233",
    email: "oliviataylor@gmail.com",
  },
  {
    id: "ORD-007",
    customer: "Liam Anderson",
    date: "2024-02-11",
    time: "16:00",
    amount: "€75",
    status: "Completed",
    snapshot: "Liam has not visited recently.",
    phone: "+31 6 33445566",
    email: "liama@gmail.com",
  },
  {
    id: "ORD-008",
    customer: "Noah Martinez",
    date: "2024-02-12",
    time: "10:40",
    amount: "€180",
    status: "Completed",
    snapshot: "Noah booked a massage session.",
    phone: "+31 6 22334455",
    email: "noahmartinez@gmail.com",
  },
  {
    id: "ORD-009",
    customer: "Ava Johnson",
    date: "2024-02-13",
    time: "14:55",
    amount: "€210",
    status: "Pending",
    snapshot: "Ava prefers weekend bookings.",
    phone: "+31 6 88776655",
    email: "avajohnson@gmail.com",
  },
  {
    id: "ORD-010",
    customer: "William Clark",
    date: "2024-02-14",
    time: "13:30",
    amount: "€95",
    status: "Completed",
    snapshot: "William uses the chatbot booking.",
    phone: "+31 6 66554433",
    email: "williamclark@gmail.com",
  },
  {
    id: "ORD-011",
    customer: "Isabella Hall",
    date: "2024-02-15",
    time: "12:50",
    amount: "€160",
    status: "Completed",
    snapshot: "Isabella books beauty treatments.",
    phone: "+31 6 77889900",
    email: "isabellah@gmail.com",
  },
  {
    id: "ORD-012",
    customer: "James Allen",
    date: "2024-02-16",
    time: "09:20",
    amount: "€80",
    status: "Cancelled",
    snapshot: "James hasn't visited recently.",
    phone: "+31 6 10101010",
    email: "jamesallen@gmail.com",
  },
  {
    id: "ORD-013",
    customer: "Charlotte Young",
    date: "2024-02-17",
    time: "15:10",
    amount: "€220",
    status: "Completed",
    snapshot: "Charlotte is a frequent customer.",
    phone: "+31 6 20202020",
    email: "charlotte@gmail.com",
  },
  {
    id: "ORD-014",
    customer: "Benjamin King",
    date: "2024-02-18",
    time: "11:30",
    amount: "€110",
    status: "Pending",
    snapshot: "Benjamin books grooming services.",
    phone: "+31 6 30303030",
    email: "benking@gmail.com",
  },
  {
    id: "ORD-015",
    customer: "Amelia Scott",
    date: "2024-02-19",
    time: "16:40",
    amount: "€320",
    status: "Completed",
    snapshot: "Amelia is a VIP client.",
    phone: "+31 6 40404040",
    email: "ameliascott@gmail.com",
  },
  {
    id: "ORD-016",
    customer: "Henry Adams",
    date: "2024-02-20",
    time: "10:05",
    amount: "€50",
    status: "Cancelled",
    snapshot: "Henry visited only twice.",
    phone: "+31 6 50505050",
    email: "henryadams@gmail.com",
  },
  {
    id: "ORD-017",
    customer: "Mia Baker",
    date: "2024-02-21",
    time: "13:15",
    amount: "€280",
    status: "Completed",
    snapshot: "Mia books spa services frequently.",
    phone: "+31 6 60606060",
    email: "miabaker@gmail.com",
  },
  {
    id: "ORD-018",
    customer: "Lucas Perez",
    date: "2024-02-22",
    time: "14:20",
    amount: "€140",
    status: "Pending",
    snapshot: "Lucas prefers afternoon bookings.",
    phone: "+31 6 70707070",
    email: "lucasperez@gmail.com",
  },
  {
    id: "ORD-019",
    customer: "Harper Evans",
    date: "2024-02-23",
    time: "09:45",
    amount: "€125",
    status: "Completed",
    snapshot: "Harper uses WhatsApp bookings.",
    phone: "+31 6 80808080",
    email: "harperevans@gmail.com",
  },
  {
    id: "ORD-020",
    customer: "Jack Turner",
    date: "2024-02-24",
    time: "15:50",
    amount: "€190",
    status: "Pending",
    snapshot: "Jack often books evening sessions.",
    phone: "+31 6 90909090",
    email: "jackturner@gmail.com",
  },
];



export default function OrdersTable() {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700";
      case "Pending": return "bg-yellow-100 text-yellow-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">

      {/* Orders Table */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-1">Orders</h1>
        <p className="text-gray-500 mb-4">Manage all customer orders</p>

        <div className="mb-4 flex items-center border-2 border-gray-300 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by customer or order ID..."
            className="flex-1 px-3 py-2 outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-50 text-gray-500 text-left text-sm">
              <tr>
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`border-b hover:bg-blue-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} cursor-pointer`}
                  onClick={() => setSelectedOrder(order)}
                >
                  <td className="px-4 py-3 text-sm text-gray-700">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.customer}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.time}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.amount}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && <p className="text-center text-gray-400 mt-4">No orders found.</p>}
        </div>
      </div>

      {/* Customer Info / Snapshot Panel */}
      {selectedOrder && (
        <div className="md:w-1/3 bg-white rounded-xl shadow-md p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Client</h2>
            <FiX
              className="cursor-pointer text-2xl text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedOrder(null)}
            />
          </div>
          <p className="text-gray-700 font-medium">{selectedOrder.customer}</p>
          <p className="text-gray-500 text-sm">{selectedOrder.email}</p>
          <p className="text-gray-500 text-sm mb-2">{selectedOrder.phone}</p>

          <div className="bg-purple-50 rounded-lg p-3 mt-4 text-sm text-gray-700">
            <h3 className="font-semibold mb-1">360 Snapshot</h3>
            <p>{selectedOrder.snapshot}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-500">Order Amount</span>
            <span className="text-xl font-semibold">{selectedOrder.amount}</span>
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500">Status</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(selectedOrder.status)}`}>
              {selectedOrder.status}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}