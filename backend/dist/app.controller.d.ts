import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
export declare class AppController {
    private readonly appService;
    private prisma;
    constructor(appService: AppService, prisma: PrismaService);
    getHello(): string;
    getHealth(): {
        status: string;
    };
    getQuestions(): Promise<{
        id: string;
        examId: string | null;
        questionBankId: string | null;
        type: string;
        content: string;
        options: string | null;
        answer: string;
        explanation: string | null;
        score: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getStatistics(): Promise<{
        questionCount: number;
        questionBankCount: number;
        examRecordCount: number;
    }>;
}
