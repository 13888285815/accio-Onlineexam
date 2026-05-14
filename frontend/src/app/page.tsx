import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShortcutEntries } from '@/components/home/shortcut-entries';
import { NewFeatures } from '@/components/home/new-features';
import { TrialSection } from '@/components/home/trial-section';
import { DonorSection } from '@/components/home/donor-section';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
            让考试更智能 <br className="md:hidden" />
            <span className="text-blue-600">让学习更高效</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            考试宝是基于 AI 驱动的现代化考试与练习系统。
            从自动出题到智能分析，为您提供一站式解决方案。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-base" asChild>
              <Link href="/question-banks">开始练习</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-gray-300" asChild>
              <Link href="/about">产品详情 <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-12 grayscale opacity-40">
             <span className="font-bold text-2xl">Client A</span>
             <span className="font-bold text-2xl">Client B</span>
             <span className="font-bold text-2xl">Client C</span>
             <span className="font-bold text-2xl">Client D</span>
          </div>
        </div>
      </section>

      {/* Shortcut Entries */}
      <ShortcutEntries />

      {/* New Features */}
      <NewFeatures />

      {/* Trial Registration */}
      <TrialSection />

      {/* Donor Section */}
      <DonorSection />
      
      {/* Promotion Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">准备好提升您的学习效率了吗？</h2>
            <p className="text-gray-400 text-lg">加入 100,000+ 学员，开启智能学习新篇章。</p>
          </div>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold h-12 px-8 whitespace-nowrap" asChild>
            <Link href="/register">立即注册</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
