"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Database,
  FileText,
  Users,
  Building,
  UserCircle,
  Settings,
  LayoutDashboard,
  HelpCircle,
  Folder,
  FileX,
  Star,
  History,
  Cpu,
  Search,
  PlusCircle,
  Clock,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  label: string;
  icon: React.ElementType;
  href?: string;
  items?: { label: string; icon: React.ElementType; href: string }[];
  isCollapsed: boolean;
  isActive: boolean;
}

const NavItem = ({ label, icon: Icon, href, items, isCollapsed, isActive }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = items && items.length > 0;

  const content = (
    <div
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
        isActive && !hasChildren ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
      onClick={() => hasChildren && setIsOpen(!isOpen)}
    >
      <Icon className={cn("h-5 w-5", isCollapsed ? "mx-auto" : "mr-3")} />
      {!isCollapsed && (
        <>
          <span className="flex-1">{label}</span>
          {hasChildren && (isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
        </>
      )}
    </div>
  );

  return (
    <div className="space-y-1">
      {href && !hasChildren ? (
        <Link href={href}>{content}</Link>
      ) : (
        content
      )}
      {!isCollapsed && hasChildren && isOpen && (
        <div className="pl-9 space-y-1">
          {items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "flex items-center w-full px-3 py-2 text-xs font-medium rounded-md transition-colors",
                "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <child.icon className="h-4 w-4 mr-2" />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export function Sidebar({ isCollapsed, toggleCollapse }: { isCollapsed: boolean; toggleCollapse: () => void }) {
  const pathname = usePathname();

  const navigation = [
    {
      label: "控制中心",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      label: "题库管理",
      icon: Database,
      items: [
        { label: "我的题库", icon: Folder, href: "/dashboard/question-banks" },
        { label: "错题", icon: FileX, href: "/dashboard/wrong-questions" },
        { label: "收藏", icon: Star, href: "/dashboard/favorites" },
        { label: "练习记录", icon: History, href: "/dashboard/records" },
        { label: "AI导题", icon: Cpu, href: "/dashboard/ai-import" },
        { label: "解析", icon: Search, href: "/dashboard/analysis" },
      ],
    },
    {
      label: "试卷管理",
      icon: FileText,
      items: [
        { label: "新增试卷", icon: PlusCircle, href: "/dashboard/exams/new" },
        { label: "历史试卷", icon: Clock, href: "/dashboard/exams/history" },
        { label: "在线组卷", icon: Zap, href: "/dashboard/exams/online" },
      ],
    },
    {
      label: "我的群组",
      icon: Users,
      href: "/dashboard/groups",
    },
    {
      label: "企业管理",
      icon: Building,
      href: "/dashboard/enterprise",
    },
    {
      label: "账户管理",
      icon: UserCircle,
      href: "/dashboard/account",
    },
    {
      label: "系统设置",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      label: "帮助支持",
      icon: HelpCircle,
      href: "/dashboard/help",
    },
  ];

  return (
    <aside
      className={cn(
        "bg-sidebar border-r flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
        {navigation.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            items={item.items}
            isCollapsed={isCollapsed}
            isActive={pathname === item.href}
          />
        ))}
      </div>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          size="icon"
          className="w-full justify-center"
          onClick={toggleCollapse}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
    </aside>
  );
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-left"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
