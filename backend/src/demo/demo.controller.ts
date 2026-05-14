import { Controller, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as mammoth from 'mammoth';

@Controller('demo')
export class DemoController {
  constructor(private prisma: PrismaService) {}

  @Post('import')
  async importDemo() {
    const filePath = '/Users/zzx/Desktop/云南昆明市西山区+2026年中考一模生物+试题卷.docx';
    
    try {
      const result = await mammoth.extractRawText({ path: filePath });
      const text = result.value;
      
      // Simple logic: split by question numbers like "1.", "2.", etc.
      const questions = text.split(/\d+[\.．]/).filter(q => q.trim().length > 10).slice(0, 10);
      
      const createdQuestions: any[] = [];
      for (const qContent of questions) {
        const question = await (this.prisma.question as any).create({
          data: {
            type: 'SINGLE',
            content: qContent.trim(),
            answer: 'A', // Mock answer
            score: 2,
            options: ['A', 'B', 'C', 'D'], // Mock options
          },
        });
        createdQuestions.push(question);
      }
      
      return {
        message: 'Successfully imported questions',
        count: createdQuestions.length,
        questions: createdQuestions,
      };
    } catch (error) {
      return {
        message: 'Failed to import questions',
        error: error.message,
      };
    }
  }
}
