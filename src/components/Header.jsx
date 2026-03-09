import { IoIosNotifications } from "react-icons/io";
import { GoSearch } from "react-icons/go";

export default function Header({ search, setSearch }) {
  return (
    <header className="border-b bg-white px-5 md:px-6 py-4 shadow-sm">

      <div className="flex items-center justify-between gap-4">

        {/* Search */}
        <div className="flex items-center border border-blue-200 rounded-lg px-3 w-full max-w-md bg-blue-50">
          <GoSearch className="text-blue-400" />

          <input
            type="text"
            placeholder="Search orders or customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 outline-none text-sm bg-transparent placeholder-blue-300"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Notification */}
          <button className="relative p-2 rounded-full hover:bg-blue-100 transition">
            <IoIosNotifications size={22} className="text-blue-500"/>
            {/* Example Badge */}
            <span className="absolute -top-1 -right-1 bg-red-400 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-semibold shadow-sm">
            JD
          </div>

        </div>

      </div>

    </header>
  );
}