import { Controller, Get, Post, Body } from '@nestjs/common';

import { QuestionTypeService } from './questionType.service';
import { CreateQuestionTypeDto } from './dto/CreateQuestionTypeDto';
import { GetQuizDto } from './dto/GetQuizDto';

@Controller('questionType')
export class QuestionTypeController {
  constructor(private questionTypeService: QuestionTypeService) {}

  // get all question
  @Get()
  getAllQuestion() {
    return this.questionTypeService.getAllQuestion();
  }

  // create new questionType
  @Post('/create')
  createNewQuestionType(@Body() createQuestionTypeDto: CreateQuestionTypeDto) {
    return this.questionTypeService.createNewQuestionType(
      createQuestionTypeDto,
    );
  }

  // 取得測驗類型下拉選單
  @Get('/getQuestionType')
  getQuestionType() {
    return this.questionTypeService.getQuestionType();
  }

  // 切換下拉選單
  @Post('/getQuestionTypeInfo')
  getQuestionTypeInfo(@Body() reqQuestionType: { questionType: string }) {
    return this.questionTypeService.getQuestionTypeInfo(reqQuestionType);
  }

  // get quiz
  @Post('/getQuiz')
  getQuiz(@Body() getQuizDto: GetQuizDto) {
    return this.questionTypeService.getQuiz(getQuizDto);
  }
}
