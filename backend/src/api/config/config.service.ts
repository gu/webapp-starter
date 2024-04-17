import { IConfig } from 'api-types';

class ConfigService {
  public async getConfig(): Promise<IConfig> {
    // TODO: pull from env
    return {
      version: 'local',
      environment: 'local',
    };
  }
}

const configService = new ConfigService();

export { configService };
