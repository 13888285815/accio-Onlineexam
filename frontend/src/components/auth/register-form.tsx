"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, Smartphone, User } from "lucide-react";
import Link from "next/link";

export function RegisterForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">注册新账号</CardTitle>
        <CardDescription className="text-center">
          通过邮箱快速创建您的考试宝账号
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="用户名" className="pl-10" />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="email" placeholder="邮箱地址" className="pl-10" />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="邮箱验证码" className="pl-10" />
            </div>
            <Button variant="outline" className="whitespace-nowrap">获取验证码</Button>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="password" placeholder="设置登录密码" className="pl-10" />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="password" placeholder="确认登录密码" className="pl-10" />
          </div>
        </div>
        
        <div className="flex items-start gap-2 mt-2">
          <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 mt-0.5" />
          <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
            注册即代表您同意我们的 <Link href="/terms" className="text-blue-600 hover:underline">服务协议</Link> 和 <Link href="/privacy" className="text-blue-600 hover:underline">隐私政策</Link>
          </label>
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">立即注册</Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              已有账号
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <span className="text-gray-500">已经有考试宝账号？</span>
          <Link href="/login" className="text-blue-600 hover:underline">返回登录</Link>
        </div>
      </CardFooter>
    </Card>
  );
}
