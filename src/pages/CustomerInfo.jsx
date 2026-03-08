import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function CustomerDetailsHeader() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* Title & Subtitle */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Customer History
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          View conversation sessions and appointment history
        </p>
      </div>

      {/* Optional Back Link */}
      <Link
        to="/customers"
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
      >
        <FiArrowLeft />
        Back to Customers
      </Link>

    </div>
  );
}