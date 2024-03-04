import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from '../shortner/schemas/url.schema';
import { Response } from 'express';

@Injectable()
export class RedirectService {
  constructor(@InjectModel(Url.name) private readonly urlModel: Model<Url>) {}

  async redirectRequest(res: Response, key: string) {
    if (key.length !== 7) {
      throw new BadRequestException('Invalid key');
    }

    const url = await this.urlModel.findOne({
      key,
    });
    if (!url) {
      throw new BadRequestException('Invalid key');
    }

    return res.redirect(url.originalUrl);
  }
}
