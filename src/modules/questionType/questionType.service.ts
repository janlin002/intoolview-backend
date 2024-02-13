import { Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { CreateQuestionTypeDto } from './dto/CreateQuestionTypeDto';
import { GetQuizDto } from './dto/GetQuizDto';

const prisma = new PrismaClient();

@Injectable()
export class QuestionTypeService {
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

  async getQuestionType() {
    const allQuestionType = await prisma.questionDetail.findMany();

    const allQuestionTypeArr = allQuestionType.map((item) => item.questionType);

    return Array.from(new Set(allQuestionTypeArr));
  }

  async getQuestionTypeInfo(reqQuestionType: { questionType: string }) {
    const { questionType } = reqQuestionType;
    const targetQuestionType = await prisma.questionDetail.findMany({
      where: {
        questionType: questionType,
      },
    });

    const allQuestionTypeArr = targetQuestionType.flatMap(
      (item) => item.companies,
    );

    return {
      length: targetQuestionType.length,
      company: Array.from(new Set(allQuestionTypeArr)),
    };
  }

  async getQuiz(getQuizDto: GetQuizDto) {
    const { questionType, quantity, companies } = getQuizDto;

    const targetQuestionType = await prisma.questionDetail.findMany({
      where: {
        questionType: questionType,
        ...(companies && { companies: { hasSome: companies } }),
      },
    });

    // 隨機出題
    const quizArr = [];
    const newArr = Array.from(targetQuestionType);
    for (let i = 0; i < quantity; i++) {
      if (newArr.length === 0) return;
      const randomNum = Math.floor(Math.random() * newArr.length);
      const test = newArr[randomNum];
      quizArr.push(test);
      newArr.splice(randomNum, 1);
    }

    return quizArr;
  }
}
