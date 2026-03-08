import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const CustomerCard = ({ customer }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between space-y-6 hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">

      {/* Header */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
            {customer.name}
          </h2>

          {/* Status Badge */}
          <span className={`text-xs font-medium px-3 py-1 rounded-full
            ${customer.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"} transition-colors duration-200`}>
            {customer.status}
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center text-gray-500 text-sm gap-2 sm:gap-3">
          <span className="truncate">{customer.phone}</span>
          <span className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="truncate">{customer.email}</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h3 className="text-gray-600 font-medium text-sm">Details</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <h4 className="text-2xl font-semibold text-gray-800">{customer.orders}</h4>
            <p className="text-sm text-gray-500">Total Orders</p>
          </div>

          <div className="border rounded-lg p-4 flex flex-col items-center justify-center">
            <h4 className="text-2xl font-semibold text-gray-800">{customer.sessions}</h4>
            <p className="text-sm text-gray-500">Chat Sessions</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span className="text-gray-500 text-sm">Amount Spent</span>
          <span className="text-lg sm:text-xl font-semibold text-gray-800">{customer.amount}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span className="text-gray-500 text-sm">Last Activity</span>
          <span className="text-gray-600 text-sm">{customer.lastActivity}</span>
        </div>
      </div>

      {/* Snapshot */}
      <div className="space-y-1">
        <h3 className="font-medium text-gray-700 text-sm">360° Snapshot</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{customer.snapshot}</p>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mt-4">
        <button
          onClick={() => navigate(`/customer/${customer.id}`)}
          className="flex items-center justify-center gap-2 bg-purple-500 cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-purple-600 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base"
        >
          <FiUser />
          View Profile
        </button>

        <button className="text-gray-500 self-end sm:self-auto hover:text-gray-700 transition-colors duration-200">
          <HiOutlineDotsHorizontal size={22} />
        </button>
      </div>

    </div>
  );
};

export default CustomerCard;