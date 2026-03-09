import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronBack, IoChevronForward, IoChevronDown } from "react-icons/io5";





const orders = [
  {
    lastOrders: "Apr 12, 2023",
    time: "14:32",
    name: "Tracy Quitzon",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Beard Trim",
    price: "$29.79"
  },
  {
    lastOrders: "Apr 12, 2023",
    time: "15:10",
    name: "Ruben Rutherford",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$35.00"
  },
  {
    lastOrders: "Apr 13, 2023",
    time: "13:00",
    name: "Jenny Wilson",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "None",
    price: "$18.00"
  },
  {
    lastOrders: "Apr 14, 2023",
    time: "11:45",
    name: "Albert Flores",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$30.00"
  },
  {
    lastOrders: "Apr 15, 2023",
    time: "09:30",
    name: "Wade Warren",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Styling",
    price: "$32.00"
  },
  {
    lastOrders: "Apr 16, 2023",
    time: "16:00",
    name: "Dianne Russell",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$20.00"
  },
  {
    lastOrders: "Apr 17, 2023",
    time: "12:20",
    name: "Courtney Henry",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Beard Trim",
    price: "$28.00"
  },
  {
    lastOrders: "Apr 18, 2023",
    time: "10:15",
    name: "Jerome Bell",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$34.00"
  },
  {
    lastOrders: "Apr 19, 2023",
    time: "11:05",
    name: "Kathryn Murphy",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$31.00"
  },
  {
    lastOrders: "Apr 20, 2023",
    time: "14:10",
    name: "Savannah Nguyen",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Styling",
    price: "$27.00"
  },
  {
    lastOrders: "Apr 21, 2023",
    time: "09:50",
    name: "Darrell Steward",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "None",
    price: "$22.00"
  },
  {
    lastOrders: "Apr 21, 2023",
    time: "13:40",
    name: "Kristin Watson",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$36.00"
  },
  {
    lastOrders: "Apr 22, 2023",
    time: "12:30",
    name: "Cameron Williamson",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Styling",
    price: "$33.00"
  },
  {
    lastOrders: "Apr 22, 2023",
    time: "15:45",
    name: "Annette Black",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$19.00"
  },
  {
    lastOrders: "Apr 23, 2023",
    time: "10:25",
    name: "Esther Howard",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Beard Trim",
    price: "$26.00"
  },
  {
    lastOrders: "Apr 23, 2023",
    time: "16:00",
    name: "Jacob Jones",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$34.00"
  },
  {
    lastOrders: "Apr 24, 2023",
    time: "11:20",
    name: "Jane Cooper",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "None",
    price: "$24.00"
  },
  {
    lastOrders: "Apr 24, 2023",
    time: "14:50",
    name: "Guy Hawkins",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$30.00"
  },
  {
    lastOrders: "Apr 25, 2023",
    time: "09:10",
    name: "Leslie Alexander",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Styling",
    price: "$23.00"
  },
  {
    lastOrders: "Apr 25, 2023",
    time: "13:35",
    name: "Robert Fox",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$21.00"
  },
  {
    lastOrders: "Apr 26, 2023",
    time: "11:00",
    name: "Ronald Richards",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Beard Trim",
    price: "$29.00"
  },
  {
    lastOrders: "Apr 26, 2023",
    time: "15:20",
    name: "Floyd Miles",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$33.00"
  },
  {
    lastOrders: "Apr 27, 2023",
    time: "10:40",
    name: "Eleanor Pena",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "None",
    price: "$18.00"
  },
  {
    lastOrders: "Apr 27, 2023",
    time: "14:55",
    name: "Bessie Cooper",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$28.00"
  },
  {
    lastOrders: "Apr 28, 2023",
    time: "09:35",
    name: "Cody Fisher",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Styling",
    price: "$31.00"
  },
  {
    lastOrders: "Apr 28, 2023",
    time: "13:25",
    name: "Brooklyn Simmons",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$20.00"
  },
  {
    lastOrders: "Apr 29, 2023",
    time: "12:15",
    name: "Arlene McCoy",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Beard Trim",
    price: "$26.00"
  },
  {
    lastOrders: "Apr 29, 2023",
    time: "16:05",
    name: "Devon Lane",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$35.00"
  }
];

export default function OrdersTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Channels");
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const perPage = 7;
  const statusOptions = ["All Channels", "Whatsapp", "Website"];

  // Filter orders based on search and channel
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.name.toLowerCase().includes(search.toLowerCase()) ||
      order.phone.includes(search);

    const matchesStatus =
      statusFilter === "All Channels" || order.channel === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredOrders.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedOrders = filteredOrders.slice(start, start + perPage);

  return (
    <div className="flex flex-col md:flex-row gap-6 ">
      {/* Orders Table */}
      <div className="flex-1">
        <p className="text-gray-500 mb-4">Manage all customer orders</p>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full md:w-72 border-blue-300 bg-blue-50">
            <FiSearch className="text-blue-400" />
            <input
              placeholder="Search by name or phone..."
              className="outline-none text-sm w-full bg-blue-50"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="relative">
            <button
              className="border rounded-full px-4 py-2 text-sm border-blue-300 flex items-center w-36 justify-between bg-blue-50"
              onClick={() => setStatusDropdown(!statusDropdown)}
            >
              {statusFilter}
              <IoChevronDown />
            </button>

            {statusDropdown && (
              <ul className="absolute z-10 bg-white border rounded shadow w-36 mt-1">
                {statusOptions.map((status) => (
                  <li
                    key={status}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                    onClick={() => {
                      setStatusFilter(status);
                      setStatusDropdown(false);
                      setCurrentPage(1);
                    }}
                  >
                    {status}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className=" text-gray-500 text-left text-sm sticky top-0 border-b">
              <tr>
                <th className="px-4 py-3">Last Orders</th> {/* Updated */}
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Channel</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Assets</th>
                <th className="px-4 py-3">Extra</th>
                <th className="px-4 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order, index) => (
                <tr
                  key={index}
                  className={`border-b hover:bg-blue-50 cursor-pointer ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                  onClick={() => setSelectedOrder(order)}
                >
                  <td className="px-4 py-3 text-sm text-gray-700">{order.lastOrders}</td> {/* Updated */}
                  <td className="px-4 py-3 text-sm text-gray-700">{order.time}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.price}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.channel}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.assets}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.extra}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <p className="text-center text-gray-400 mt-4">No orders found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            className="p-2 border rounded bg-blue-50 hover:bg-blue-100"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            <IoChevronBack />
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="p-2 border rounded bg-blue-50 hover:bg-blue-100"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>

      {/* Customer Snapshot Panel */}
      {selectedOrder && (
        <div className="md:w-1/3 bg-white rounded-xl shadow-md p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Client Info</h2>
            <FiX
              className="cursor-pointer text-2xl text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedOrder(null)}
            />
          </div>
          <p className="text-gray-700 font-medium">{selectedOrder.name}</p>
          <p className="text-gray-500 text-sm">{selectedOrder.phone}</p>

          <div className="bg-purple-50 rounded-lg p-3 mt-4 text-sm text-gray-700">
            <h3 className="font-semibold mb-1">Order Details</h3>
            <p>
              {selectedOrder.assets} - {selectedOrder.extra}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-500">Amount</span>
            <span className="text-xl font-semibold">{selectedOrder.price}</span>
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500">Channel</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
              {selectedOrder.channel}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}