import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { UserEntity } from '../../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwt: JwtService,
  ) {}

  async signup(user: UserEntity): Promise<UserEntity> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return await this.userRepository.save(user);
  }
  async validateUser(username: string, password: string): Promise<any> {
    const foundUser = await this.userRepository.findOne({
      where: {
        username,
      },
    });
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        const { password, ...result } = foundUser;
        return result;
      }

      return null;
    }
    return null;
  }
  async login(user: UserEntity) {
    const foundUser = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });
    if (!!foundUser) {
      const payload = { username: foundUser.username, sub: foundUser.id };
      return {
        access_token: this.jwt.sign(payload),
        user_id: foundUser.id,
      };
    } else {
      throw new HttpException(
        '사용자가 존재하지 않습니다.',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
