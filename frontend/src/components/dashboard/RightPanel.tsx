"use client";

import React from "react";
import {
  Bell,
  Zap,
  Phone,
  MessageSquare,
  QrCode,
  TrendingUp,
  Clock,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function RightPanel() {
  return (
    <aside className="w-80 border-l bg-muted/30 hidden xl:flex flex-col overflow-y-auto p-4 gap-6">
      {/* 重要提示 */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" />
            重要提示
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs space-y-2">
            <p className="flex justify-between">
              <span>账号安全级别</span>
              <span className="text-yellow-600 font-medium">中</span>
            </p>
            <p className="flex justify-between">
              <span>待处理阅卷</span>
              <Badge variant="secondary" className="h-5">12</Badge>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 订阅状态 */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            服务计划
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-3 rounded-md">
            <p className="text-xs font-bold">专业版订阅</p>
            <p className="text-[10px] text-muted-foreground">有效期至 2026-12-31</p>
          </div>
          <Button size="sm" className="w-full text-xs bg-yellow-500 hover:bg-yellow-600">
            升级/续费
          </Button>
        </CardContent>
      </Card>

      {/* 进行中的任务 */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">
          进行中的任务
        </h3>
        <div className="space-y-2">
          {[
            { label: "期末模拟考", type: "考试", count: 156, icon: Clock, color: "text-blue-500" },
            { label: "AI题目智能生成", type: "后台", count: "80%", icon: TrendingUp, color: "text-green-500" },
            { label: "基础算法课程", type: "阅卷", count: 24, icon: BookOpen, color: "text-purple-500" },
          ].map((task, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors border border-transparent hover:border-border">
              <div className={cn("p-2 rounded-md bg-background border", task.color)}>
                <task.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">{task.label}</p>
                <p className="text-[10px] text-muted-foreground">{task.type}</p>
              </div>
              <div className="text-xs font-bold">{task.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 咨询服务 */}
      <div className="mt-auto space-y-3">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">
          咨询服务
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className="flex-col h-auto py-2 gap-1 text-[10px]">
            <MessageSquare className="h-4 w-4" />
            在线客服
          </Button>
          <Button variant="outline" size="sm" className="flex-col h-auto py-2 gap-1 text-[10px]">
            <Phone className="h-4 w-4" />
            咨询电话
          </Button>
          <Button variant="outline" size="sm" className="flex-col h-auto py-2 gap-1 text-[10px]">
            <QrCode className="h-4 w-4" />
            微信扫码
          </Button>
        </div>
      </div>
    </aside>
  );
}

import { cn } from "@/lib/utils";
