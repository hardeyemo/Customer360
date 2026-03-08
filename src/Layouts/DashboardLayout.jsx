import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {

  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header search={search} setSearch={setSearch} />

        {/* Page Content */}
        <main className="overflow-y-auto p-6">

          {/* Send search to pages */}
          <Outlet context={{ search }} />

        </main>

      </div>

    </div>
  );
}