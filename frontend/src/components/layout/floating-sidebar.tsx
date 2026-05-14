"use client";

import { MessageSquare, Phone, QrCode } from "lucide-react";

export function FloatingSidebar() {
  return (
    <div className="fixed right-6 bottom-24 flex flex-col gap-2 z-50">
      <div className="group relative flex items-center justify-center w-12 h-12 bg-white shadow-lg border rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          在线咨询
        </span>
      </div>
      <div className="group relative flex items-center justify-center w-12 h-12 bg-white shadow-lg border rounded-lg cursor-pointer hover:bg-green-600 hover:text-white transition-colors">
        <QrCode className="w-6 h-6" />
        <div className="absolute right-14 p-2 bg-white border shadow-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
           <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center p-4">微信扫码<br/>咨询</div>
        </div>
      </div>
      <div className="group relative flex items-center justify-center w-12 h-12 bg-white shadow-lg border rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white transition-colors">
        <Phone className="w-6 h-6" />
        <span className="absolute right-14 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          400-XXX-XXXX
        </span>
      </div>
    </div>
  );
}
