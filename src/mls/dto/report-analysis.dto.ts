import { IsNotEmpty } from 'class-validator';

export class ReportAnalysisDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  data: object;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  model: string;
}
