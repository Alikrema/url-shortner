import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { Url } from './schemas/url.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from '../../utils/hash/hash.service';

@Injectable()
export class ShortnerService {
  constructor(
    @InjectModel(Url.name) private readonly urlModel: Model<Url>,
    private readonly hashService: HashService,
  ) {}

  async createShortUrl(createShortUrlDto: CreateShortUrlDto) {
    const { url } = createShortUrlDto;
    const urlExists = await this.urlModel.findOne({ originalUrl: url });
    if (urlExists) {
      return {
        key: urlExists.key,
        shortUrl: `http://localhost/${urlExists.key}`,
        longUrl: url,
      };
    }
    const key = await this.hashService.generateHash(url);
    const keyExists = await this.urlModel.findOne({ key });
    if (keyExists) {
      //TODO: handle collision
      throw new InternalServerErrorException('Collision');
    }
    await this.urlModel.create({
      key,
      originalUrl: url,
    });
    return {
      key,
      shortUrl: `http://localhost/${key}`,
      longUrl: url,
    };
  }
  async deleteShortUrl(key: string) {
    const url = await this.urlModel.findOneAndDelete({ key });
    if (!url) {
      throw new NotFoundException('URL not found');
    }
  }
}
