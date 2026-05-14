import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  FileText, 
  CheckCircle2,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const stats = [
    { label: "总用户数", value: "1,284", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "活跃题库", value: "42", icon: BookOpen, color: "text-green-600", bg: "bg-green-50" },
    { label: "已发布考试", value: "15", icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "今日完成练习", value: "328", icon: CheckCircle2, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">控制中心</h1>
          <p className="text-muted-foreground">欢迎回来，这是您的系统实时概况。</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">导出报表</Button>
          <Button>新建考试</Button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <div className={`${stat.bg} p-2 rounded-full`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500 font-medium">+12%</span> 较上月
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>考试活跃度趋势</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-md bg-muted/20">
            <p className="text-muted-foreground">图表占位符 (Chart Placeholder)</p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>最近动态</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="font-medium">用户 张三 完成了《Java基础》考试</p>
                    <p className="text-xs text-muted-foreground">2分钟前</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
