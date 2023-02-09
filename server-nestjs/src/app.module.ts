import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoModule } from './memo/memo.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/service/auth.service';
import { AuthController } from './auth/auth.controller';

import { MemoEntity } from './memo/entities/memo.entity';
import { UserEntity } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'MemoDB.db',
      entities: [MemoEntity, UserEntity],
      synchronize: true,
    }),
    MemoModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
