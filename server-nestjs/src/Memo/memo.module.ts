import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MemoEntity } from './entities/memo.entity';
import { MemoService } from './memo.service';
import { MemoController } from './memo.controller';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemoEntity, UserEntity])],
  controllers: [MemoController],
  providers: [MemoService],
})
export class MemoModule {}
