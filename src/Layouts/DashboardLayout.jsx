import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {

  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header search={search} setSearch={setSearch} />

        <main className=" ">
          <Outlet context={{ search }} />
        </main>
      </div>

    </div>
  );
}