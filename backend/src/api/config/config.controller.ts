import 'reflect-metadata';
import { Config } from 'api-schemas';
import { configService } from './config.service';
import { Get, JsonController } from 'routing-controllers';

@JsonController('/config')
export class ConfigController {
  @Get('/')
  public async getConfig(): Promise<Config> {
    return await configService.getConfig();
  }
}
