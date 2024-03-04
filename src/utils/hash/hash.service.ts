import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async generateHash(value: string) {
    const saltOrRounds = 10;
    const hash = (await bcrypt.hash(value, saltOrRounds)).substring(8, 15); //length 7
    return hash;
  }
}
