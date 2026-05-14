import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";
import Link from "next/link";

const QUESTION_BANKS = [
  { id: "1", title: "Java 高级程序设计", count: 120, type: "专业课", status: "已发布" },
  { id: "2", title: "计算机网络基础", count: 85, type: "公共课", status: "草稿" },
  { id: "3", title: "马克思主义基本原理", count: 200, type: "通识课", status: "已发布" },
  { id: "4", title: "数据结构与算法", count: 150, type: "专业课", status: "已发布" },
];

export default function QuestionBanksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">题库中心</h1>
          <p className="text-muted-foreground">管理并浏览您的所有题目资源</p>
        </div>
        <Button className="flex gap-2">
          <Plus className="w-4 h-4" />
          新建题库
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="搜索题库名称..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="w-4 h-4" />
          筛选
        </Button>
      </div>

      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>题库名称</TableHead>
              <TableHead>题目数量</TableHead>
              <TableHead>分类</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {QUESTION_BANKS.map((bank) => (
              <TableRow key={bank.id}>
                <TableCell className="font-medium">{bank.title}</TableCell>
                <TableCell>{bank.count} 道</TableCell>
                <TableCell>{bank.type}</TableCell>
                <TableCell>
                  <Badge variant={bank.status === "已发布" ? "default" : "secondary"}>
                    {bank.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/question-banks/${bank.id}`}>详情</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    删除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
