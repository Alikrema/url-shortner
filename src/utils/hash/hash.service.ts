import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async generateHash(value: string) {
    const saltOrRounds = 10;
    let hash = (await bcrypt.hash(value, saltOrRounds)).substring(8, 15); //length 7
    hash = hash.replace(/\//g, '0'); // replace all '/' with '0' to avoid issues with the URL
    return hash;
  }
}
