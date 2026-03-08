import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronBack, IoChevronForward, IoChevronDown } from "react-icons/io5";

const orders = [
  {
    date: "Apr 12, 2023",
    time: "14:32",
    name: "Tracy Quitzon",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Beard Trim",
    price: "$29.79"
  },
  {
    date: "Apr 12, 2023",
    time: "15:10",
    name: "Ruben Rutherford",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$35.00"
  },
  {
    date: "Apr 13, 2023",
    time: "13:00",
    name: "Jenny Wilson",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "None",
    price: "$18.00"
  },
  {
    date: "Apr 14, 2023",
    time: "11:45",
    name: "Albert Flores",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$30.00"
  },
  {
    date: "Apr 15, 2023",
    time: "09:30",
    name: "Wade Warren",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Styling",
    price: "$32.00"
  },
  {
    date: "Apr 16, 2023",
    time: "16:00",
    name: "Dianne Russell",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$20.00"
  },
  {
    date: "Apr 17, 2023",
    time: "12:20",
    name: "Courtney Henry",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Beard Trim",
    price: "$28.00"
  },
  {
    date: "Apr 18, 2023",
    time: "10:15",
    name: "Jerome Bell",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$34.00"
  },
  {
    date: "Apr 19, 2023",
    time: "11:05",
    name: "Kathryn Murphy",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$31.00"
  },
  {
    date: "Apr 20, 2023",
    time: "14:10",
    name: "Savannah Nguyen",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Styling",
    price: "$27.00"
  },

  {
    date: "Apr 21, 2023",
    time: "09:50",
    name: "Darrell Steward",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "None",
    price: "$22.00"
  },
  {
    date: "Apr 21, 2023",
    time: "13:40",
    name: "Kristin Watson",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$36.00"
  },
  {
    date: "Apr 22, 2023",
    time: "12:30",
    name: "Cameron Williamson",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Styling",
    price: "$33.00"
  },
  {
    date: "Apr 22, 2023",
    time: "15:45",
    name: "Annette Black",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$19.00"
  },
  {
    date: "Apr 23, 2023",
    time: "10:25",
    name: "Esther Howard",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Beard Trim",
    price: "$26.00"
  },
  {
    date: "Apr 23, 2023",
    time: "16:00",
    name: "Jacob Jones",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$34.00"
  },
  {
    date: "Apr 24, 2023",
    time: "11:20",
    name: "Jane Cooper",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "None",
    price: "$24.00"
  },
  {
    date: "Apr 24, 2023",
    time: "14:50",
    name: "Guy Hawkins",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$30.00"
  },
  {
    date: "Apr 25, 2023",
    time: "09:10",
    name: "Leslie Alexander",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Styling",
    price: "$23.00"
  },
  {
    date: "Apr 25, 2023",
    time: "13:35",
    name: "Robert Fox",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$21.00"
  },

  {
    date: "Apr 26, 2023",
    time: "11:00",
    name: "Ronald Richards",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Beard Trim",
    price: "$29.00"
  },
  {
    date: "Apr 26, 2023",
    time: "15:20",
    name: "Floyd Miles",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Styling",
    price: "$33.00"
  },
  {
    date: "Apr 27, 2023",
    time: "10:40",
    name: "Eleanor Pena",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "None",
    price: "$18.00"
  },
  {
    date: "Apr 27, 2023",
    time: "14:55",
    name: "Bessie Cooper",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "Beard Trim",
    price: "$28.00"
  },
  {
    date: "Apr 28, 2023",
    time: "09:35",
    name: "Cody Fisher",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Fade Cut",
    extra: "Styling",
    price: "$31.00"
  },
  {
    date: "Apr 28, 2023",
    time: "13:25",
    name: "Brooklyn Simmons",
    channel: "Website",
    phone: "(225) 938-2150",
    assets: "Hair Cut",
    extra: "None",
    price: "$20.00"
  },
  {
    date: "Apr 29, 2023",
    time: "12:15",
    name: "Arlene McCoy",
    channel: "Whatsapp",
    phone: "(225) 938-2150",
    assets: "Buzz Cut",
    extra: "Beard Trim",
    price: "$26.00"
  },
  {
    date: "Apr 29, 2023",
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
  const [channelFilter, setChannelFilter] = useState("All channel");
  const [channelDropdown, setChannelDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const channelOptions = ["All channel", "Whatsapp", "Website"];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.name.toLowerCase().includes(search.toLowerCase()) ||
      order.assets.toLowerCase().includes(search.toLowerCase());

    const matchesChannel =
      channelFilter === "All channel" || order.channel === channelFilter;

    return matchesSearch && matchesChannel;
  });

  const totalPages = Math.ceil(filteredOrders.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedOrders = filteredOrders.slice(start, start + perPage);

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-sm">

      {/* Search + Channel Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">

        {/* Search */}
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full md:w-72 border-blue-300 bg-blue-50">
          <FiSearch className="text-blue-400" />
          <input
            placeholder="Search Orders or Customers"
            className="outline-none text-sm w-full bg-blue-50"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Channel Dropdown */}
        <div className="relative">
          <button
            className="border rounded-full px-4 py-2 text-sm border-blue-300 flex items-center justify-between w-36 bg-blue-50 hover:bg-blue-100 transition"
            onClick={() => setChannelDropdown(!channelDropdown)}
          >
            {channelFilter} <IoChevronDown className="ml-2" />
          </button>
          {channelDropdown && (
            <ul className="absolute z-10 bg-white border border-gray-200 rounded shadow w-36 mt-1">
              {channelOptions.map((channel) => (
                <li
                  key={channel}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
                  onClick={() => {
                    setChannelFilter(channel);
                    setChannelDropdown(false);
                    setCurrentPage(1);
                  }}
                >
                  {channel}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[600px] text-sm border-collapse">
          <thead className="border-b text-gray-500 text-left">
            <tr>
              <th className="py-3 px-2">Last Order</th>
              <th className="py-3 px-2">Time</th>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Channel</th>
              <th className="py-3 px-2">Phone No</th>
              <th className="py-3 px-2">Assets</th>
              <th className="py-3 px-2">Extra</th>
              <th className="py-3 px-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-blue-50 transition">
                <td className="py-2 px-2">{order.date}</td>
                <td className="py-2 px-2">{order.time}</td>
                <td className="py-2 px-2">{order.name}</td>
                <td className="py-2 px-2">{order.channel}</td>
                <td className="py-2 px-2">{order.phone}</td>
                <td className="py-2 px-2">{order.assets}</td>
                <td className="py-2 px-2">{order.extra}</td>
                <td className="py-2 px-2 font-medium">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-3 mt-4">
        <button
          className="p-2 border rounded bg-blue-50 hover:bg-blue-100 transition"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          <IoChevronBack />
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 border rounded bg-blue-50 hover:bg-blue-100 transition"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}