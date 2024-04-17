import { IConfig } from 'api-types';
import { configService } from './config.service';

class ConfigController {
  public async getConfig(): Promise<IConfig> {
    return await configService.getConfig();
  }
}

const configController = new ConfigController();

export { configController };
