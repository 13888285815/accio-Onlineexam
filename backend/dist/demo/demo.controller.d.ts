import { PrismaService } from '../prisma/prisma.service';
export declare class DemoController {
    private prisma;
    constructor(prisma: PrismaService);
    importDemo(): Promise<{
        message: string;
        count: number;
        questions: any[];
        error?: undefined;
    } | {
        message: string;
        error: any;
        count?: undefined;
        questions?: undefined;
    }>;
}
