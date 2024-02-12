import { IsNotEmpty } from 'class-validator';

export class CreateQuestionTypeDto {
  @IsNotEmpty()
  questionType: string;

  @IsNotEmpty()
  questionContent: string[];

  @IsNotEmpty()
  answerContent: string[];

  companies?: string[];
}
