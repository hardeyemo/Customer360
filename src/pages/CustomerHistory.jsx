import { useState } from "react";
import ConversationTable from "./ConversationTable";
import OrdersTable from "./OrdersTable";

export default function CustomerHistory() {
  const [tab, setTab] = useState("conversations");

  return (
    <div className=" bg-white overflow-auto p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">

      {/* Tabs */}
      <div className="flex flex-wrap gap-4  mb-6">
        <button
          onClick={() => setTab("conversations")}
          className={`px-4 py-2 rounded-lg border transition
            ${tab === "conversations" 
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
        >
          Conversations
        </button>

        <button
          onClick={() => setTab("orders")}
          className={`px-4 py-2 rounded-lg border transition
            ${tab === "orders" 
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
        >
          Orders
        </button>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-auto">
        {tab === "conversations" && <ConversationTable />}
        {tab === "orders" && <OrdersTable />}
      </div>

    </div>
  );
}