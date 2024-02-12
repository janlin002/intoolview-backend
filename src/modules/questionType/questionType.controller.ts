import { Controller, Get, Post, Body } from '@nestjs/common';

import { QuestionTypeService } from './questionType.service';
import { CreateQuestionTypeDto } from './dto/CreateQuestionTypeDto';

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
  // find by questionType
  @Post('/findByQuestionType')
  findByQuestionType(@Body() questionType: string) {
    return this.questionTypeService.findByQuestionType(questionType);
  }

  // get quiz
  // @Post()
}
