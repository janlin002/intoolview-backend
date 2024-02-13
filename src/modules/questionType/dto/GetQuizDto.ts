import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetQuizDto {
  @IsNotEmpty()
  questionType: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  companies?: string[];
}
