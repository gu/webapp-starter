import { IConfig } from 'api-types';

class ConfigService {
  public getConfig(): IConfig {
    return {
      version: 'local',
      environment: 'local',
    };
  }
}

const configService = new ConfigService();

export { configService };
