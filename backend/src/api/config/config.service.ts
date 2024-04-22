import { Config } from 'api-schemas';
import { getEnv } from '../../env';

const env = getEnv();

class ConfigService {
  public async getConfig(): Promise<Config> {
    return {
      version: env.API_VERSION,
      environment: env.ENVIRONMENT,
      banner: env.BANNER,
      appName: env.APP_NAME,
    };
  }
}

const configService = new ConfigService();

export { configService };
