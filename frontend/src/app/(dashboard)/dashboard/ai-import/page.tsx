"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Loader2, CheckCircle2, AlertCircle, List, Trash2 } from "lucide-react";
import { API_BASE_URL } from "@/lib/api-config";
import { Badge } from "@/components/ui/badge";

export default function AIImportPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [result, setResult] = useState<{ success: boolean; message: string; count?: number } | null>(null);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/questions`);
      if (response.ok) {
        const data = await response.json();
        setQuestions(data);
      }
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleDemoImport = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch(`${API_BASE_URL}/demo/import`, {
        method: "POST",
      });
      const data = await response.json();
      if (response.ok && data.count > 0) {
        setResult({ success: true, message: data.message, count: data.count });
        // 成功后立即刷新列表
        fetchQuestions();
      } else {
        setResult({ success: false, message: data.message || data.error || "导入失败" });
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
        <h1 className="text-3xl font-bold tracking-tight">AI 智能导题</h1>
        <p className="text-muted-foreground">通过 AI 技术快速将各种格式的试卷转换为系统题目</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
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

        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <List className="w-5 h-5 text-purple-600" />
                已导入题目列表
              </CardTitle>
              <CardDescription>展示当前题库中所有已导入的题目</CardDescription>
            </div>
            <Badge variant="secondary">{questions.length} 道题目</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {questions.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground border-2 border-dashed rounded-lg">
                  暂无题目，请点击左侧按钮开始导入
                </div>
              ) : (
                questions.map((q, index) => (
                  <div key={q.id} className="p-4 border rounded-lg hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{q.type}</span>
                      <span className="text-xs text-muted-foreground">ID: {q.id.slice(0, 8)}</span>
                    </div>
                    <p className="text-sm line-clamp-2 mb-2 font-medium">{q.content}</p>
                    <div className="flex gap-2">
                      {JSON.parse(q.options || "[]").map((opt: string) => (
                        <Badge key={opt} variant="outline" className="font-normal">{opt}</Badge>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
