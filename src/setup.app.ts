import { INestApplication, VersioningType } from '@nestjs/common';
export const setupApp = (app: INestApplication<any>) => {
  app.enableCors({
    origin: `*`,
    methods: ['POST', 'PUT', 'DELETE', `GET`],
  });
  app.setGlobalPrefix('smolurl/');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
};
