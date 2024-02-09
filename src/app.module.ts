import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { QuestionTypeModule } from './modules/questionType/questionType.module';

@Module({
  imports: [QuestionTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
