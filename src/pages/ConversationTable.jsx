import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoChevronBack, IoChevronForward, IoChevronDown } from "react-icons/io5";

const data = [
  { date: "Apr 12, 2023", channel: "WhatsApp", duration: "62 mins", messages: 9, summary: "Booking confirmation for Friday 3 PM", status: "Ended" },
  { date: "Apr 12, 2023", channel: "Website", duration: "8 mins", messages: 12, summary: "Rescheduled appointment", status: "Completed" },
  { date: "Apr 13, 2023", channel: "WhatsApp", duration: "12 mins", messages: 6, summary: "Asked about haircut price", status: "Ended" },
  { date: "Apr 13, 2023", channel: "Website", duration: "4 mins", messages: 3, summary: "Booking inquiry", status: "Completed" },
  { date: "Apr 14, 2023", channel: "WhatsApp", duration: "22 mins", messages: 15, summary: "Customer support conversation", status: "Ended" },
  { date: "Apr 15, 2023", channel: "Website", duration: "9 mins", messages: 7, summary: "Appointment confirmation", status: "Completed" },
  { date: "Apr 16, 2023", channel: "WhatsApp", duration: "31 mins", messages: 11, summary: "Reschedule discussion", status: "Ended" },
  { date: "Apr 17, 2023", channel: "Website", duration: "5 mins", messages: 4, summary: "Price inquiry", status: "Completed" },
  { date: "Apr 18, 2023", channel: "WhatsApp", duration: "19 mins", messages: 10, summary: "Booking conversation", status: "Ended" },
  { date: "Apr 19, 2023", channel: "Website", duration: "7 mins", messages: 5, summary: "Haircut question", status: "Completed" },

  { date: "Apr 20, 2023", channel: "WhatsApp", duration: "15 mins", messages: 8, summary: "Customer asked about beard trim", status: "Ended" },
  { date: "Apr 20, 2023", channel: "Website", duration: "6 mins", messages: 4, summary: "Service availability check", status: "Completed" },
  { date: "Apr 21, 2023", channel: "WhatsApp", duration: "40 mins", messages: 18, summary: "Detailed haircut consultation", status: "Ended" },
  { date: "Apr 21, 2023", channel: "Website", duration: "10 mins", messages: 6, summary: "New booking request", status: "Completed" },
  { date: "Apr 22, 2023", channel: "WhatsApp", duration: "27 mins", messages: 14, summary: "Customer support help", status: "Ended" },
  { date: "Apr 22, 2023", channel: "Website", duration: "5 mins", messages: 3, summary: "Booking confirmation", status: "Completed" },
  { date: "Apr 23, 2023", channel: "WhatsApp", duration: "33 mins", messages: 16, summary: "Haircut style discussion", status: "Ended" },
  { date: "Apr 23, 2023", channel: "Website", duration: "9 mins", messages: 5, summary: "Appointment rescheduled", status: "Completed" },
  { date: "Apr 24, 2023", channel: "WhatsApp", duration: "12 mins", messages: 6, summary: "Asked about opening hours", status: "Ended" },
  { date: "Apr 24, 2023", channel: "Website", duration: "4 mins", messages: 2, summary: "Quick service question", status: "Completed" },

  { date: "Apr 25, 2023", channel: "WhatsApp", duration: "20 mins", messages: 9, summary: "Follow-up on previous booking", status: "Ended" },
  { date: "Apr 25, 2023", channel: "Website", duration: "6 mins", messages: 4, summary: "Haircut pricing question", status: "Completed" },
  { date: "Apr 26, 2023", channel: "WhatsApp", duration: "29 mins", messages: 13, summary: "Customer complaint resolved", status: "Ended" },
  { date: "Apr 26, 2023", channel: "Website", duration: "8 mins", messages: 5, summary: "Appointment reminder conversation", status: "Completed" },
  { date: "Apr 27, 2023", channel: "WhatsApp", duration: "18 mins", messages: 7, summary: "Customer asked about hair products", status: "Ended" },
  { date: "Apr 27, 2023", channel: "Website", duration: "11 mins", messages: 8, summary: "Online booking assistance", status: "Completed" },
  { date: "Apr 28, 2023", channel: "WhatsApp", duration: "25 mins", messages: 12, summary: "Discussed haircut styles", status: "Ended" },
  { date: "Apr 28, 2023", channel: "Website", duration: "7 mins", messages: 4, summary: "Customer inquiry about services", status: "Completed" },
  { date: "Apr 29, 2023", channel: "WhatsApp", duration: "14 mins", messages: 6, summary: "Asked about weekend availability", status: "Ended" },
  { date: "Apr 29, 2023", channel: "Website", duration: "9 mins", messages: 5, summary: "Booking confirmation message", status: "Completed" }
];

export default function ConversationTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [channelFilter, setChannelFilter] = useState("All Channel");
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [channelDropdown, setChannelDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 7;

  const statusOptions = ["All Status", "Completed", "Ended"];
  const channelOptions = ["All Channel", "WhatsApp", "Website"];

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.summary.toLowerCase().includes(search.toLowerCase()) ||
      item.channel.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" || item.status === statusFilter;
    const matchesChannel =
      channelFilter === "All Channel" || item.channel === channelFilter;
    return matchesSearch && matchesStatus && matchesChannel;
  });

  const totalPages = Math.ceil(filteredData.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedData = filteredData.slice(start, start + perPage);

  return (
    <div className="bg-white rounded-lg shadow-sm ">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full md:w-72 border-blue-300 bg-blue-50">
          <FiSearch className="text-blue-400" />
          <input
            placeholder="Search conversations"
            className="outline-none text-sm w-full bg-blue-50"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          />
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <button
              className="border rounded-full px-4 py-2 text-sm border-blue-300 flex items-center w-36 justify-between bg-blue-50"
              onClick={() => setStatusDropdown(!statusDropdown)}
            >
              {statusFilter} <IoChevronDown />
            </button>
            {statusDropdown && (
              <ul className="absolute z-10 bg-white border rounded shadow w-36 mt-1">
                {statusOptions.map((status) => (
                  <li
                    key={status}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
                    onClick={() => { setStatusFilter(status); setStatusDropdown(false); setCurrentPage(1); }}
                  >
                    {status}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              className="border rounded-full px-4 py-2 text-sm border-blue-300 flex items-center w-36 justify-between bg-blue-50"
              onClick={() => setChannelDropdown(!channelDropdown)}
            >
              {channelFilter} <IoChevronDown />
            </button>
            {channelDropdown && (
              <ul className="absolute z-10 bg-white border rounded shadow w-36 mt-1">
                {channelOptions.map((channel) => (
                  <li key={channel} className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
                    onClick={() => { setChannelFilter(channel); setChannelDropdown(false); setCurrentPage(1); }} >  {channel}  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full md:w-[1000px] bg-white rounded-lg shadow-md">
          <thead className="border-b text-gray-500 text-left text-sm">
            <tr>
              <th className="py-2 px-8 ">Date</th>
              <th className="px-3 py-4">Channel</th>
              <th className="px-3 py-4">Duration</th>
              <th className="px-3 py-4">Messages</th>
              <th className="px-3 py-4">Summary</th>
              <th className="px-3 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-blue-50  transition even:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">{item.date}</td>
                <td className="px-4 py-3 txt-gray-700 text-sm">{item.channel}</td>
                <td className="px-4 text-sm py-3 text-gray-700">{item.duration}</td>
                <td className="px-4 text-sm py-3 text-gray-700">{item.messages}</td>
                <td className="px-4 text-sm py-3 text-gray-700">{item.summary}</td>
                <td className="px-4 text-sm text-gray-700 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${item.status === "Completed" ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"}`} >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-3 mt-4 flex-wrap">
        <button
          className="p-2 border rounded bg-blue-50 hover:bg-blue-100 transition disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1} ><IoChevronBack />
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 border rounded bg-blue-50 hover:bg-blue-100 transition disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}