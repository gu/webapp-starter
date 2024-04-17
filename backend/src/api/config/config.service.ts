import { Config } from 'api-schemas';

class ConfigService {
  public async getConfig(): Promise<Config> {
    // TODO: pull from env
    return {
      version: 'local',
      environment: 'local',
    };
  }
}

const configService = new ConfigService();

export { configService };
