import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./Layouts/DashboardLayout";

import Dashboard from "./Dashboard";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerProfile from "./pages/CustomerProfile";
import Snapshot from "./pages/Snapshot";
import Order from "./pages/Order";
import Settings from "./pages/Settings";
import Conversations from "./pages/Conversation";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<DashboardLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/snapshot" element={<Snapshot />} />
          <Route path="/conversation" element={<Conversations />} />

          <Route path="/customerDetails" element={<CustomerDetails />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" element={<Settings />} />


          <Route path="/customer/:id" element={<CustomerProfile />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}