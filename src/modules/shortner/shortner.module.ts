import { Module } from '@nestjs/common';
import { ShortnerService } from './shortner.service';
import { ShortnerController } from './shortner.controller';
import { Url, UrlSchema } from './schemas/url.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HashModule } from 'src/utils/hash/hash.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
    HashModule,
  ],
  controllers: [ShortnerController],
  providers: [ShortnerService],
})
export class ShortnerModule {}
