import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateShortUrlDto {
  @IsNotEmpty()
  @IsUrl()
  readonly url: string;
}
