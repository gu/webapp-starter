import { Config } from 'api-schemas';
import { configService } from './config.service';
import { Get, Route } from 'tsoa';

@Route('config')
export class ConfigController {
  @Get('')
  public async getConfig(): Promise<Config> {
    return await configService.getConfig();
  }
}
