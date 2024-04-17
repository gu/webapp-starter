import { IsString } from 'class-validator';

export class Config {
  @IsString()
  version: string;
  @IsString()
  environment: string;
}
