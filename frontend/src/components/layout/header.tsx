import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8 flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-2xl">
              考
            </div>
            <span className="text-2xl font-bold text-gray-800">考试宝</span>
          </Link>
          
          <div className="flex items-center gap-0 max-w-2xl flex-1 px-4">
            <div className="relative flex-1">
               <Input placeholder="站内分类检索" className="rounded-r-none border-r-0 focus-visible:ring-0 bg-gray-50 h-11" />
            </div>
            <div className="relative flex-[2]">
              <Input placeholder="输入试题内容、题库名称进行搜索" className="rounded-none pl-4 pr-10 focus-visible:ring-0 bg-gray-50 h-11" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 h-11 rounded-l-none px-8">搜索</Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">登录</Link>
          </Button>
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
            <Link href="/register">注册</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
