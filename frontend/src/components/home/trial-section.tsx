import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TrialSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">立即申请免费试用</h2>
        <p className="text-blue-100 mb-10 text-lg">
          留下您的联系方式，我们的专业顾问将在 24 小时内为您开通高级版试用权限。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <Input 
            placeholder="您的电话或邮箱" 
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white focus:text-gray-900 border-2" 
          />
          <Button className="h-12 px-8 bg-white text-blue-600 hover:bg-blue-50 font-bold">免费试用</Button>
        </div>
        <p className="mt-6 text-sm text-blue-200">已有 10,000+ 企业/个人 成功申请</p>
      </div>
    </section>
  );
}
