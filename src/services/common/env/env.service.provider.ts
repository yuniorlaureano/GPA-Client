import { EnvService } from './env.service';

export const EnvServiceFactory = () => {
  const env = new EnvService();
  const browserWindow = (window as any) || {};
  const browserWindowEnv = browserWindow['__env'] || {};

  env.apiUrl = browserWindowEnv['apiUrl'];
  env.enableDebug = browserWindowEnv['enableDebug'];
  env.baseUrl = browserWindowEnv['baseUrl'];

  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
