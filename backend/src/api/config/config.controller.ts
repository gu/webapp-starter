import { IConfig } from 'api-types';
import { configService } from './config.service';

class ConfigController {
  public getConfig(): IConfig {
    return configService.getConfig();
  }
}

const configController = new ConfigController();

export { configController };
