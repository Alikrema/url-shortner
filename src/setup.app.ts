import { INestApplication, ValidationPipe } from '@nestjs/common';
export const setupApp = (app: INestApplication<any>) => {
  app.enableCors({
    origin: `*`,
    methods: ['POST', 'PUT', 'DELETE', `GET`],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties that do not have any decorators
      forbidNonWhitelisted: true, // throw an error if non-whitelisted values are provided
      transform: true, // automatically transform payloads to the instance of DTO classes
    }),
  );
};
