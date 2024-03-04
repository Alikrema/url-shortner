import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupApp } from './setup.app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  setupApp(app);

  app.listen(port).then(async () => {
    console.log(`Server is running on port ${await app.getUrl()} 🦣🦣🦣`);
  });
}
bootstrap();
