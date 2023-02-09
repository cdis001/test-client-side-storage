import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from '../auth/service/auth.service';
import { LocalStrategy } from '../auth/local.strategy';
import { jwtConstants } from '../auth/contants';
import { JwtStrategy } from '../auth/jwt-strategy';
import { AuthController } from '../auth/auth.controller';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
})
export class UsersModule {}
