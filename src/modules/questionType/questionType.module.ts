import { Module } from '@nestjs/common';

import { QuestionTypeController } from './questionType.controller';
import { QuestionTypeService } from './questionType.service';

@Module({
  controllers: [QuestionTypeController],
  providers: [QuestionTypeService],
})
export class QuestionTypeModule {}
