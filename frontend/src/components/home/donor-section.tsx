import { Heart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const donors = [
  { name: "张*三", date: "2026-05-12", amount: "¥100", message: "非常棒的工具！" },
  { name: "李*四", date: "2026-05-10", amount: "¥50", message: "支持一下。" },
  { name: "王*五", date: "2026-05-08", amount: "¥200", message: "希望越办越好。" },
  { name: "匿名用户", date: "2026-05-05", amount: "¥10", message: "一点心意。" },
];

export function DonorSection() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <Heart className="w-6 h-6 text-red-500 fill-current" />
          <h2 className="text-3xl font-bold">感谢您的捐助</h2>
        </div>
        <p className="text-center text-gray-500 mb-10">
          考试宝的成长离不开每一位用户的支持。您的每一分捐助都将用于提升系统性能和维护题库质量。
        </p>
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50">
                <TableHead className="w-[100px]">捐助者</TableHead>
                <TableHead className="w-[120px]">日期</TableHead>
                <TableHead className="w-[100px]">金额</TableHead>
                <TableHead>留言</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donors.map((d, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell className="text-gray-500">{d.date}</TableCell>
                  <TableCell className="text-green-600 font-bold">{d.amount}</TableCell>
                  <TableCell className="text-gray-500 italic text-sm">"{d.message}"</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-10 text-center">
           <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 h-11 px-8">我要捐助</Button>
        </div>
      </div>
    </section>
  );
}
