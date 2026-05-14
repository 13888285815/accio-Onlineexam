"use client";

import React, { useState } from "react";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { RightPanel } from "@/components/dashboard/RightPanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* 顶部页眉 */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* 左侧功能区 */}
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />

        {/* 中央展示区 + 右侧侧边栏 */}
        <main className="flex-1 flex overflow-hidden">
          {/* 中央展示区 (核心内容) */}
          <div className="flex-1 overflow-y-auto bg-muted/20 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {children}
            </div>
          </div>

          {/* 右侧侧边栏 (数据概览/咨询服务) */}
          <RightPanel />
        </main>
      </div>

      {/* 移动端菜单切换按钮 (简易版实现) */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        {/* 这里可以添加一个浮动按钮来触发移动端的侧边栏或菜单 */}
      </div>
    </div>
  );
}
