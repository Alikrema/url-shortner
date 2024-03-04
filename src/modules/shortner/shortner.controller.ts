import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { ShortnerService } from './shortner.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';

@Controller()
export class ShortnerController {
  constructor(private readonly shortnerService: ShortnerService) {}

  @Post('')
  async createShortUrl(@Body() createShortUrlDto: CreateShortUrlDto) {
    return await this.shortnerService.createShortUrl(createShortUrlDto);
  }

  @Delete(':key')
  async deleteShortUrl(@Param('key') key: string) {
    return await this.shortnerService.deleteShortUrl(key);
  }
}
