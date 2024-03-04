import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class Url {
  @Prop({ required: true })
  key: string;

  @Prop({ required: true })
  originalUrl: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
