import { Controller, Get } from '@nestjs/common';

import { QuestionTypeService } from './questionType.service';

@Controller('questionType')
export class QuestionTypeController {
  constructor(private questionTypeService: QuestionTypeService) {}

  @Get()
  findAll() {
    return this.questionTypeService.findAll();
  }

  // create
}
