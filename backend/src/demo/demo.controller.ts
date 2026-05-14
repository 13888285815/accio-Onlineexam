import { Controller, Post, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as mammoth from 'mammoth';
import * as fs from 'fs';

@Controller('demo')
export class DemoController {
  constructor(private prisma: PrismaService) {}

  @Post('import')
  async importDemo() {
    const filePath = '/Users/zzx/Desktop/云南昆明市西山区+2026年中考一模生物+试题卷.docx';
    
    if (!fs.existsSync(filePath)) {
      return {
        message: '演示文件不存在',
        error: `找不到文件: ${filePath}`,
      };
    }

    try {
      const result = await mammoth.extractRawText({ path: filePath });
      const text = result.value;
      
      // 增强的分隔逻辑：尝试识别题号并分割
      const questions = text.split(/\n\s*\d+[\.．]/).filter(q => q.trim().length > 10).slice(0, 10);
      
      const createdQuestions: any[] = [];
      for (const qContent of questions) {
        const question = await this.prisma.question.create({
          data: {
            type: 'SINGLE',
            content: qContent.trim(),
            answer: 'A', // 演示环境模拟答案
            score: 2,
            options: JSON.stringify(['A', 'B', 'C', 'D']), // 存储为 JSON 字符串
          },
        });
        createdQuestions.push(question);
      }
      
      return {
        message: '试卷导入成功',
        count: createdQuestions.length,
        questions: createdQuestions,
      };
    } catch (error) {
      console.error('Import error:', error);
      return {
        message: '解析导入失败',
        error: error.message,
      };
    }
  }
}
