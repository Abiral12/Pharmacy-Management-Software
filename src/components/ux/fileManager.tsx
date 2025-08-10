// components/FileManager.tsx
"use client";

import { FiX, FiDownload, FiFile, FiFolder } from "react-icons/fi";

interface FileManagerProps {
  onClose: () => void;
}

export default function FileManager({ onClose }: FileManagerProps) {
  const files = [
    { name: "Monthly_Report_August.pdf", type: "pdf", size: "2.4 MB" },
    { name: "Inventory_List.xlsx", type: "excel", size: "1.8 MB" },
    { name: "Prescription_Template.docx", type: "word", size: "350 KB" },
    { name: "Pharmacy_Guidelines.pdf", type: "pdf", size: "5.2 MB" },
    { name: "Employee_Handbook.pdf", type: "pdf", size: "3.1 MB" },
  ];

  const downloadFile = (filename: string) => {
    alert(`Downloading ${filename}...`);
    // In a real app, you would implement actual file download logic here
  };

  return (
    <div className="fixed inset-0 z-[500000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-700/30 shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
        {/* Window Header */}
        <div className="bg-gray-800/90 border-b border-gray-700/30 px-4 py-2 flex items-center justify-between">
          <h3 className="text-sm font-medium text-white/90">File Manager</h3>
          <button 
            className="text-gray-400 hover:text-white transition-colors"
            onClick={onClose}
          >
            <FiX size={18} />
          </button>
        </div>
        
        {/* Window Content */}
        <div className="p-4 h-[70vh] overflow-auto">
          <div className="grid grid-cols-12 bg-gray-800/70 text-gray-300 text-sm font-medium p-3 rounded-lg">
            <div className="col-span-6">Name</div>
            <div className="col-span-3">Type</div>
            <div className="col-span-2">Size</div>
            <div className="col-span-1">Actions</div>
          </div>
          
          {files.map((file, index) => (
            <div key={index} className="grid grid-cols-12 border-t border-gray-700/30 p-3 hover:bg-gray-700/50 transition-colors text-white/90">
              <div className="col-span-6 font-medium flex items-center">
                {file.type === "pdf" ? (
                  <FiFile className="mr-2 text-red-400" />
                ) : (
                  <FiFolder className="mr-2 text-blue-400" />
                )}
                {file.name}
              </div>
              <div className="col-span-3 text-sm text-gray-400">{file.type.toUpperCase()}</div>
              <div className="col-span-2 text-sm text-gray-400">{file.size}</div>
              <div className="col-span-1 flex justify-end">
                <button 
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => downloadFile(file.name)}
                  title="Download"
                >
                  <FiDownload size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}