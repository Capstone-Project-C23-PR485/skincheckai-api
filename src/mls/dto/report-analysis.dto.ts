import { IsNotEmpty } from 'class-validator';

export class ReportAnalysisDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  data: any;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  model: string;
}
