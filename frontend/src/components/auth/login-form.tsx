"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, QrCode, Smartphone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const [method, setMethod] = useState<"code" | "password" | "wechat">("code");

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">欢迎登录</CardTitle>
        <CardDescription className="text-center">
          选择您喜欢的登录方式
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex border-b">
          <button
            onClick={() => setMethod("code")}
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors border-b-2",
              method === "code" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            验证码登录
          </button>
          <button
            onClick={() => setMethod("password")}
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors border-b-2",
              method === "password" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            密码登录
          </button>
          <button
            onClick={() => setMethod("wechat")}
            className={cn(
              "flex-1 py-2 text-sm font-medium transition-colors border-b-2",
              method === "wechat" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            微信扫码
          </button>
        </div>

        {method === "code" && (
          <div className="grid gap-4 mt-4">
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
                  <Input placeholder="六位验证码" className="pl-10" />
                </div>
                <Button variant="outline" className="whitespace-nowrap">获取验证码</Button>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">登录</Button>
          </div>
        )}

        {method === "password" && (
          <div className="grid gap-4 mt-4">
            <div className="grid gap-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="email" placeholder="邮箱/用户名" className="pl-10" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="password" placeholder="请输入密码" className="pl-10" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                <label htmlFor="remember" className="text-sm text-gray-600">记住我</label>
              </div>
              <Link href="/forgot-password" size="sm" className="text-sm text-blue-600 hover:underline">忘记密码？</Link>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">登录</Button>
          </div>
        )}

        {method === "wechat" && (
          <div className="flex flex-col items-center justify-center p-6 gap-4">
            <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <QrCode className="w-32 h-32 text-gray-300" />
            </div>
            <p className="text-sm text-gray-500">使用微信扫码关注公众号登录</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              其他方式
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <span className="text-gray-500">还没有账号？</span>
          <Link href="/register" className="text-blue-600 hover:underline">立即注册</Link>
        </div>
      </CardFooter>
    </Card>
  );
}
