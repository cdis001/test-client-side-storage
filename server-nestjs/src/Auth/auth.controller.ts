import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';

import { AuthService } from './service/auth.service';
import { UserEntity } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() user: UserEntity): Promise<UserEntity> {
    return this.authService.signup(user);
  }

  @Post('login')
  async login(@Body() user: UserEntity) {
    return this.authService.login(user);
  }
}
