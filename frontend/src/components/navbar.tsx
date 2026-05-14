import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            考试宝 (Kaoshibao)
          </Link>
          <div className="hidden md:flex gap-4">
            <Link href="/question-banks" className="text-sm font-medium hover:underline">
              题库中心
            </Link>
            <Link href="/exams" className="text-sm font-medium hover:underline">
              我的考试
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">登录</Link>
          </Button>
          <Button asChild>
            <Link href="/register">开始使用</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
