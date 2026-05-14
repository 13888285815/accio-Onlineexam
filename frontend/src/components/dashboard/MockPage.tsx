import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MockPage({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>功能开发中</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-md bg-muted/20">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-2">{title} 模块正在建设中</p>
            <p className="text-sm text-muted-foreground">该页面作为 Phase 2 UI 布局展示的一部分。</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
