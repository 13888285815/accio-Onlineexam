import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }

  @Get('questions')
  async getQuestions() {
    return this.prisma.question.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get('statistics')
  async getStatistics() {
    const [questionCount, questionBankCount, examRecordCount] = await Promise.all([
      this.prisma.question.count(),
      this.prisma.questionBank.count(),
      this.prisma.examRecord.count(),
    ]);

    return {
      questionCount,
      questionBankCount,
      examRecordCount,
    };
  }
}
