import { Module } from '@nestjs/common';
import { RedirectService } from './redirect.service';
import { RedirectController } from './redirect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlSchema } from '../shortner/schemas/url.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  providers: [RedirectService],
  controllers: [RedirectController],
})
export class RedirectModule {}
