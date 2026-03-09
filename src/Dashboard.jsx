import Stats from "./pages/Stats";
import CustomersGrid from "./pages/CustomersGrid";
import { FaArrowDown } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen  md:p-8 gap-6">

      {/* Main content */}
      <div className="flex-1 rounded-2xl shadow-md p-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Customers</h1>
            <p className="text-gray-500 mt-1 sm:mt-2">Manage customers on your platform</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 border-2 border-green-500 rounded-md px-3 py-1 hover:bg-green-50 transition">
            Compare to: Jan 04 - Jul 04, 2025
            <FaArrowDown className="text-gray-500" />
          </div>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Customers Grid */}
        <CustomersGrid />

      </div>
    </div>
  );
}


