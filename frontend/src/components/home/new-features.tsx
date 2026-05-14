import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function NewFeatures() {
  return (
    <section className="bg-white py-16 border-y">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <Sparkles className="w-6 h-6 text-orange-500" />
          <h2 className="text-3xl font-bold">新功能试用介绍</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI 智能搜题", desc: "拍一拍，扫一扫，精准匹配全库试题与解析。", tag: "Beta" },
            { title: "自动组卷系统", desc: "设置大纲，一键生成符合考试要求的标准试卷。", tag: "Hot" },
            { title: "跨平台同步", desc: "手机、电脑、平板，学习进度实时云同步。", tag: "New" }
          ].map((f) => (
            <Card key={f.title} className="overflow-hidden hover:border-blue-300 transition-colors shadow-none border-gray-100">
              <div className="h-40 bg-gray-50 flex items-center justify-center text-gray-300 text-sm font-medium">
                Feature Preview Image
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl">{f.title}</CardTitle>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-none">{f.tag}</Badge>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
