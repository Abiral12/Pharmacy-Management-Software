// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import {
  FiFile,
  FiEdit2,
  FiEye,
  FiSettings,
  FiHelpCircle,
  FiBattery,
} from "react-icons/fi";
import FileManager from "./fileManager";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showFileManager, setShowFileManager] = useState(false);
  const [time, setTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    {
      name: "File",
      icon: <FiFile size={14} className="mr-1" />,
      items: [
        {
          name: "Open File Manager",
          action: () => setShowFileManager(true),
        },
        { name: "Print Report", action: () => alert("Printing report...") },
        { name: "Export Data", action: () => alert("Exporting data...") },
      ],
    },
    {
      name: "Prescriptions",
      icon: <FiEdit2 size={14} className="mr-1" />,
      items: [
        {
          name: "New Prescription",
          action: () => alert("Creating new prescription..."),
        },
        { name: "View All", action: () => alert("Showing all prescriptions...") },
        { name: "Search", action: () => alert("Searching prescriptions...") },
      ],
    },
    {
      name: "View",
      icon: <FiEye size={14} className="mr-1" />,
      items: [
        { name: "Toggle Dark Mode", action: () => alert("Toggling dark mode...") },
        { name: "Zoom In", action: () => alert("Zooming in...") },
        { name: "Zoom Out", action: () => alert("Zooming out...") },
      ],
    },
    {
      name: "Settings",
      icon: <FiSettings size={14} className="mr-1" />,
      items: [
        { name: "System Preferences", action: () => alert("Opening preferences...") },
        { name: "User Management", action: () => alert("Managing users...") },
        { name: "Pharmacy Details", action: () => alert("Editing pharmacy details...") },
      ],
    },
    {
      name: "Help",
      icon: <FiHelpCircle size={14} className="mr-1" />,
      items: [
        {
          name: "Documentation",
          action: () => window.open("https://example.com/docs", "_blank"),
        },
        { name: "Support", action: () => alert("Contacting support...") },
        { name: "About", action: () => alert("Pharmacy Management System v1.0") },
      ],
    },
  ];

  const closeFileManager = () => {
    setShowFileManager(false);
  };

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = time.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="relative z-[10000] bg-gray-900/50 text-gray-200 text-sm px-4 py-1 flex justify-between items-center backdrop-blur-2xl border-b border-gray-700/30">
        {/* Left Side: App Name + Menus */}
        <div className="flex space-x-4">
          <span className="font-semibold text-blue-300">MyPharmaCity</span>
          {menuItems.map((menu) => (
            <div key={menu.name} className="relative">
              <button
                className="flex items-center hover:text-white transition-colors"
                onClick={() =>
                  setActiveMenu(activeMenu === menu.name ? null : menu.name)
                }
              >
                {menu.icon}
                {menu.name}
              </button>

              {activeMenu === menu.name && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-800/90 backdrop-blur-sm rounded-md shadow-lg border border-gray-700/30 z-20">
                  {menu.items.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700/50 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        item.action();
                        setActiveMenu(null);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Status Icons */}
        <div className="flex items-center space-x-4">
          {/* WiFi Icon */}
          <svg
            className="w-4 h-4 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>

          {/* Battery Icon */}
          <div className="flex items-center">
            <FiBattery className="w-5 h-5 text-green-400 mr-1" />
            <span className="text-xs">100%</span>
          </div>

          <span>{formattedDate}</span>
          <span className="font-medium">{formattedTime}</span>
        </div>
      </div>

      {/* File Manager Modal */}
      {showFileManager && <FileManager onClose={closeFileManager} />}
    </>
  );
}
