import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">快速导航</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/upload" className="hover:text-white">上传题库</Link></li>
            <li><Link href="/exams" className="hover:text-white">在线考试</Link></li>
            <li><Link href="/create-exam" className="hover:text-white">在线组卷</Link></li>
            <li><Link href="/search" className="hover:text-white">搜题中心</Link></li>
            <li><Link href="/results" className="hover:text-white">成绩查询</Link></li>
            <li><Link href="/pricing" className="hover:text-white">服务价格</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">客户服务</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cooperation" className="hover:text-white">商务合作</Link></li>
            <li><Link href="/terms" className="hover:text-white">用户协议</Link></li>
            <li><Link href="/privacy" className="hover:text-white">隐私政策</Link></li>
            <li><Link href="/feedback" className="hover:text-white">意见反馈</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">关于我们</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/tutorials" className="hover:text-white">使用教程</Link></li>
            <li><Link href="/versions" className="hover:text-white">版本记录</Link></li>
            <li><Link href="/about" className="hover:text-white">公司介绍</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">联系我们</h3>
          <div className="space-y-4">
             <div className="flex gap-4">
               <div className="w-20 h-20 bg-white p-1 rounded">
                 <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-400">公众号</div>
               </div>
               <div className="w-20 h-20 bg-white p-1 rounded">
                 <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-400">APP下载</div>
               </div>
             </div>
             <p className="text-sm">咨询电话：400-XXX-XXXX</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© 2026 北京考试宝科技有限公司 版权所有</p>
        <p className="mt-2">京ICP备XXXXXXXX号-X | 京公网安备 XXXXXXXXXXXXXX号</p>
      </div>
    </footer>
  );
}
