"use client";

import { useState, useEffect } from "react";
import { FiHome, FiX } from "react-icons/fi";
import Image from "next/image";
import { Rnd } from "react-rnd";

// Material Design Icons
import {
  MdOutlineDashboard,
  MdOutlineInventory2,
  MdOutlineReceiptLong,
  MdOutlineAnalytics,
  MdOutlineApps,
} from "react-icons/md";
import { FaPills, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "@/components/ux/desktopNavbar";

export default function PharmacyDesktop() {
  const [activeApp, setActiveApp] = useState("home");
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dock applications with icons
  const dockApps = [
    { id: "home", icon: <FiHome size={24} className="text-blue-400" />, name: "Home" },
    { id: "dashboard", icon: <MdOutlineDashboard size={24} className="text-purple-400" />, name: "Dashboard" },
    { id: "inventory", icon: <MdOutlineInventory2 size={24} className="text-green-400" />, name: "Inventory" },
    { id: "billing", icon: <FaMoneyBillWave size={20} className="text-yellow-400" />, name: "Billing" },
    { id: "reports", icon: <MdOutlineAnalytics size={24} className="text-red-400" />, name: "Reports" },
    { id: "prescriptions", icon: <MdOutlineReceiptLong size={24} className="text-pink-400" />, name: "Prescriptions" },
    { id: "apps", icon: <MdOutlineApps size={24} className="text-cyan-400" />, name: "Apps" },
  ];

  // Sample inventory data
  const inventoryItems = [
    { id: 1, name: "Paracetamol 500mg", stock: 142, price: 2.5, category: "Pain Relief" },
    { id: 2, name: "Ibuprofen 200mg", stock: 87, price: 3.2, category: "Pain Relief" },
    { id: 3, name: "Amoxicillin 250mg", stock: 43, price: 8.75, category: "Antibiotics" },
    { id: 4, name: "Loratadine 10mg", stock: 56, price: 5.4, category: "Allergy" },
    { id: 5, name: "Omeprazole 20mg", stock: 32, price: 6.8, category: "Antacid" },
  ];

  const closeActiveApp = () => {
    setActiveApp("home");
  };

  // App content components
  const AppContent = () => {
    switch (activeApp) {
      case "dashboard":
        return (
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Pharmacy Dashboard
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800/70 rounded-xl p-4 backdrop-blur-sm border border-gray-700/30">
                <h3 className="text-gray-400 text-sm mb-2">Today's Prescriptions</h3>
                <p className="text-3xl font-bold text-purple-300">24</p>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-4 backdrop-blur-sm border border-gray-700/30">
                <h3 className="text-gray-400 text-sm mb-2">Inventory Alerts</h3>
                <p className="text-3xl font-bold text-red-300">8</p>
              </div>
              <div className="bg-gray-800/70 rounded-xl p-4 backdrop-blur-sm border border-gray-700/30">
                <h3 className="text-gray-400 text-sm mb-2">Today's Revenue</h3>
                <p className="text-3xl font-bold text-green-300">$1,842</p>
              </div>
            </div>
          </div>
        );
      case "inventory":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Inventory Management
            </h2>
            <div className="bg-gray-800/80 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/30">
              <div className="grid grid-cols-12 bg-gray-700/90 text-gray-300 text-sm font-medium p-3">
                <div className="col-span-6">Medication</div>
                <div className="col-span-2">Stock</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Actions</div>
              </div>

              {inventoryItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 border-t border-gray-700/30 p-3 hover:bg-gray-700/50 transition-colors text-white/90"
                >
                  <div className="col-span-6 font-medium flex items-center">
                    <FaPills className="mr-2 text-teal-400" />
                    {item.name}
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.stock < 50
                          ? "bg-amber-900/50 text-amber-300"
                          : "bg-green-900/30 text-green-300"
                      }`}
                    >
                      {item.stock} in stock
                    </span>
                  </div>
                  <div className="col-span-2">${item.price.toFixed(2)}</div>
                  <div className="col-span-2 flex space-x-2">
                    <button className="text-teal-400 hover:text-teal-300 text-sm">
                      Edit
                    </button>
                    <button className="text-gray-400 hover:text-gray-300 text-sm">
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col font-sans relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
        <Image
          width={1920}
          height={1080}
          src="/images/pharmacy-dashboard-pro.jpg"
          alt="Pharmacy background"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <Navbar />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex overflow-hidden">
        {/* Active Window */}
        {activeApp !== "home" && (
          <Rnd
            default={{
              x: windowSize.width / 2 - 400,
              y: windowSize.height / 2 - 300,
              width: 800,
              height: 600,
            }}
            minWidth={500}
            minHeight={400}
            maxWidth={windowSize.width - 40}
            maxHeight={windowSize.height - 120}
            bounds="parent"
            dragHandleClassName="window-drag-handle"
            className="z-50"
            cancel=".no-drag"
          >
            <div className="bg-gray-900/80 backdrop-blur-2xl rounded-xl border border-gray-700/30 shadow-2xl w-full h-full overflow-hidden flex flex-col">
              {/* Window Header */}
              <div className="window-drag-handle bg-gray-800/90 border-b border-gray-700/30 px-4 py-2 flex items-center justify-between backdrop-blur-sm cursor-move">
                <div className="flex space-x-2">
                  <button
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors no-drag"
                    onClick={closeActiveApp}
                    aria-label="Close window"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors no-drag"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors no-drag"></div>
                </div>
                <h3 className="text-sm font-medium text-white/90 no-drag">
                  {dockApps.find((app) => app.id === activeApp)?.name || "Application"}
                </h3>
                <button
                  className="text-gray-400 hover:text-white transition-colors no-drag"
                  onClick={closeActiveApp}
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Window Content */}
              <div className="flex-1 overflow-auto no-drag">
                <AppContent />
              </div>
            </div>
          </Rnd>
        )}
      </div>

      {/* Dock */}
      <div className="relative z-20 flex justify-center pb-6">
        <div className="bg-gray-900/50 backdrop-blur-2xl rounded-2xl px-4 py-3 flex items-end border border-gray-700/30 shadow-xl">
          {dockApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col items-center mx-1 group relative"
            >
              <button
                className={`p-3 rounded-xl transition-all ${
                  activeApp === app.id ? "bg-gray-700/50" : "hover:bg-gray-700/30"
                }`}
                onClick={() => setActiveApp(app.id)}
                aria-label={`Open ${app.name}`}
              >
                <div
                  className={`transition-transform duration-200 ${
                    activeApp === app.id ? "scale-125" : "group-hover:scale-110"
                  }`}
                >
                  {app.icon}
                </div>
              </button>
              <span
                className="absolute -top-8 bg-gray-800/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition-all opacity-0 group-hover:opacity-100 shadow-lg shadow-black/40"
              >
                {app.name}
              </span>
              {activeApp === app.id && (
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shadow-sm"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}