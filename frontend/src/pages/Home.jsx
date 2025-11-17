import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CloudCards from "../components/CloudCards";
import CostOverview from "../components/CostOverview";
import UsageOverview from "../components/UsageOverview";
import RequestedServices from "../components/RequestedServices";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    API.get("/auth/home")
      .then((res) => {
        if (res.data.user) {
          setUser(res.data.user);
        } else {
          navigate("/login");
        }
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  return (
    <div className="flex h-screen bg-white-100">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Topbar />

        <h1 className="text-3xl font-bold text-red-500 mb-6">Dashboard</h1>

        <CloudCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <UsageOverview />
          </div>

          <CostOverview />
        </div>

        <RequestedServices />
      </div>
    </div>
  );
}
