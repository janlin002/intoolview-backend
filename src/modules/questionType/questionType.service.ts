import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { CreateQuestionTypeDto } from './dto/CreateQuestionTypeDto';

const prisma = new PrismaClient();

@Injectable()
export class QuestionTypeService {
  private readonly test = [];

  async getAllQuestion() {
    return await prisma.questionDetail.findMany({
      select: {
        questionType: true,
        questionContent: true,
        answerContent: true,
        companies: true,
      },
    });
  }

  async createNewQuestionType(createQuestionTypeDto: CreateQuestionTypeDto) {
    await prisma.questionDetail.create({
      data: createQuestionTypeDto,
    });

    return createQuestionTypeDto;
  }

  async findByQuestionType(questionType: string) {
    const targetQuestionType = await prisma.questionDetail.findMany({
      where: {
        questionType: questionType,
      },
    });

    console.log(targetQuestionType, 'targetQuestionType');
  }
}
