"use client";

import React from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  Key,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
            A
          </div>
          <span className="font-bold text-xl hidden md:block">Accio System</span>
        </Link>
        
        <nav className="ml-8 hidden lg:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary">首页</Link>
          <Link href="/dashboard/exams" className="text-sm font-medium hover:text-primary">在线考试</Link>
          <Link href="/dashboard/question-banks" className="text-sm font-medium hover:text-primary">题库资源</Link>
          <Link href="/dashboard/analytics" className="text-sm font-medium hover:text-primary">数据看板</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索功能或题库..."
            className="pl-8 h-9"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2 hover:bg-accent">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <User className="h-5 w-5" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold leading-none">张三</p>
                <p className="text-[10px] text-muted-foreground leading-none mt-1">某某科技有限公司</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>我的账户</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>个人中心</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Key className="mr-2 h-4 w-4" />
              <span>修改密码</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>设置</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>退出登录</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
