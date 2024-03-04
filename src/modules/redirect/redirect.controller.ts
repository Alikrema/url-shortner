import { Controller, Get, Param, Res } from '@nestjs/common';
import { RedirectService } from './redirect.service';
import { Response } from 'express';

@Controller()
export class RedirectController {
  constructor(private readonly redirectService: RedirectService) {}

  @Get(':key')
  async redirectRequest(@Res() res: Response, @Param('key') key: string) {
    return await this.redirectService.redirectRequest(res, key);
  }
}
