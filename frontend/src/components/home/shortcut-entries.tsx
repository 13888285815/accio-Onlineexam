import { Upload, FileText, Search, Trophy, Wallet, Users } from "lucide-react";
import Link from "next/link";

const shortcuts = [
  { icon: Upload, label: "上传题库", href: "/upload", color: "bg-blue-100 text-blue-600" },
  { icon: FileText, label: "在线考试", href: "/exams", color: "bg-green-100 text-green-600" },
  { icon: Trophy, label: "成绩查询", href: "/results", color: "bg-orange-100 text-orange-600" },
  { icon: Search, label: "搜题中心", href: "/search", color: "bg-purple-100 text-purple-600" },
  { icon: Wallet, label: "商城交易", href: "/mall", color: "bg-pink-100 text-pink-600" },
  { icon: Users, label: "个人中心", href: "/profile", color: "bg-teal-100 text-teal-600" },
];

export function ShortcutEntries() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {shortcuts.map((s) => (
          <Link key={s.label} href={s.href} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-transparent hover:border-blue-100 hover:shadow-md transition-all group">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${s.color}`}>
              <s.icon className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium text-gray-700">{s.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
