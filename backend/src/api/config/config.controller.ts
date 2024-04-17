import 'reflect-metadata';
import { Config } from 'api-schemas';
import { configService } from './config.service';
import { Get, JsonController } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

@JsonController('/config')
export class ConfigController {
  @Get('/')
  @ResponseSchema(Config)
  public async getConfig(): Promise<Config> {
    return await configService.getConfig();
  }
}
