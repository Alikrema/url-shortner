import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortnerModule } from './shortner/shortner.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_CONNECTION'),
      }),
      inject: [ConfigService],
    }),
    ShortnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
