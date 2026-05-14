"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { API_BASE_URL } from "@/lib/api-config";

export default function AIImportPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; count?: number } | null>(null);

  const handleDemoImport = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch(`${API_BASE_URL}/demo/import`, {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok) {
        setResult({ success: true, message: data.message, count: data.count });
      } else {
        setResult({ success: false, message: data.message || "导入失败" });
      }
    } catch (error) {
      setResult({ success: false, message: "网络错误，请检查后端是否开启" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">AI 智能导题</h1>
        <p className="text-muted-foreground">通过 AI 技术快速将各种格式的试卷转换为系统题目</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              一键演示导入
            </CardTitle>
            <CardDescription>
              点击下方按钮，系统将自动读取本地测试试卷文件并进行解析演示。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 p-4 rounded-lg mb-6 text-sm text-slate-600">
              <p className="font-medium mb-1">演示文件路径：</p>
              <p className="break-all">/Users/zzx/Desktop/云南昆明市西山区+2026年中考一模生物+试题卷.docx</p>
            </div>
            
            <Button 
              onClick={handleDemoImport} 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  解析导入中...
                </>
              ) : (
                "一键演示导入"
              )}
            </Button>

            {result && (
              <div className={`mt-6 p-4 rounded-lg border flex items-start gap-3 ${
                result.success ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
              }`}>
                {result.success ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 mt-0.5" />
                )}
                <div>
                  <p className="font-bold">{result.success ? "导入成功" : "导入失败"}</p>
                  <p className="text-sm">{result.message}</p>
                  {result.count !== undefined && (
                    <p className="text-sm mt-1">成功解析出 {result.count} 道题目。</p>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="opacity-60 grayscale cursor-not-allowed">
          <CardHeader>
            <CardTitle>手动上传解析</CardTitle>
            <CardDescription>支持 PDF, DOCX, TXT 等格式试卷上传。</CardDescription>
          </CardHeader>
          <CardContent className="h-40 flex items-center justify-center border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">功能开发中...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
