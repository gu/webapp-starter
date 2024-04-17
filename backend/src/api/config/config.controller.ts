import 'reflect-metadata';
import { IConfig } from 'api-types';
import { configService } from './config.service';
import { Get, JsonController } from 'routing-controllers';

@JsonController('/config')
export class ConfigController {
  @Get('/')
  public async getConfig(): Promise<IConfig> {
    return await configService.getConfig();
  }
}
