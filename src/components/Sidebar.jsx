import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TbLayoutDashboardFilled,
  TbAssetFilled,
} from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { SiTheconversation } from "react-icons/si";
import { FaFirstOrderAlt, FaArrowRight } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    { icon: <TbLayoutDashboardFilled />, text: "Dashboard", to: "/" },
    { icon: <FcCustomerSupport />, text: "Customer", to: "/customerDetails" },
    { icon: <FaFirstOrderAlt />, text: "Order", to: "/order" },
    { icon: <SiTheconversation />, text: "Conversation", to: "/conversation" },
    { icon: <TbAssetFilled />, text: "Assets", to: "/assets" },
    { icon: <IoSettingsSharp />, text: "Settings", to: "/settings" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden sm:flex ${open ? "w-64" : "w-20"
          } bg-white border-r h-screen p-6 flex flex-col justify-between transition-all duration-300 shadow-sm`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {open && (
              <div className="flex flex-col gap-0 m-0">
                <h2 className="text-2xl font-bold text-blue-600">Chatbot</h2>
                <span className="text-blue-300 text-xl font-extrabold">Evka</span>
              </div>
            )}
            <button
              onClick={() => setOpen(!open)}
              className="text-blue-400 hover:text-blue-600 transition"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <MenuItem
                key={idx}
                icon={item.icon}
                text={item.text}
                to={item.to}
                open={open}
              />
            ))}
          </nav>
        </div>

        {/* Footer */}
        {open && (
          <div className="flex flex-col items-center mt-4">
            <p className="text-sm text-gray-500 mb-2">
              Talk to Customer Support
            </p>
            <Link
              to="/snapshot"
              className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <span>Talk to Agent</span>
              <FaArrowRight />
            </Link>
          </div>
        )}
      </aside>

      {/* Mobile Top Bar */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex flex-col gap-0 m-0">
          <h2 className="text-lg font-bold text-blue-600">Chatbot</h2>
          <span className="text-blue-300 text-sm">Evka</span>
        </div>
        <button onClick={() => setMobileMenu(true)}>
          <FiMenu size={24} className="text-blue-500" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="sm:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => setMobileMenu(false)}
          />

          {/* Drawer */}
          <div className="relative w-64 bg-white h-full shadow-lg  duration-300 p-6 flex flex-col justify-between transition-transform transform translate-x-0">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-blue-600">Chatbot</h2>
                <span className="text-blue-300 text-sm">Evka</span>
                </div>
                <button onClick={() => setMobileMenu(false)}>
                  <FiX size={24} className="text-blue-500" />
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    icon={item.icon}
                    text={item.text}
                    to={item.to}
                    open={true}
                    onClick={() => setMobileMenu(false)}
                  />
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-center mt-4 bg-blue-200 p-4 rounded-lg">
              <p className="text-sm text-black font-bold mb-2">
                Talk to Customer Support
              </p>
              <Link
                to="/snapshot"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <span>Talk to Agent</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MenuItem({ icon, text, to, open, onClick }) {
  const content = (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-blue-50 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="text-blue-500">{icon}</div>
      {open && <span className="text-gray-700 font-medium">{text}</span>}
    </div>
  );

  if (to) return <Link to={to}>{content}</Link>;
  return content;
}