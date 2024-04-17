import { IConfig } from 'api-types';

class ConfigService {
  public async getConfig(): Promise<IConfig> {
    return {
      version: 'local',
      environment: 'local',
    };
  }
}

const configService = new ConfigService();

export { configService };
