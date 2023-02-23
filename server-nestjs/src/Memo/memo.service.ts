import { Injectable, HttpException, HttpStatus, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MemoEntity } from './entities/memo.entity';
import { UserEntity } from '../users/entities/user.entity';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';

@Injectable()
export class MemoService {
  constructor(
    @InjectRepository(MemoEntity)
    private memoRepository: Repository<MemoEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async create(createMemoDto: CreateMemoDto) {
    const user = await this.userRepository.findOne({
      where: { id: createMemoDto.userId },
    });
    const data = await this.memoRepository.create(createMemoDto);

    data.user = user;
    const { id, contents } = await this.memoRepository.save(data);

    return { id, contents };
  }

  async findAll() {
    return await this.memoRepository.find();
  }

  async findByUserId(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    return await this.memoRepository.find({ where: { user } });
  }

  async findByCookie(username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
    });
    return await this.memoRepository.find({ where: { user } });
  }

  async findOne(id: number) {
    return `This action returns a #${id} memo`;
  }

  async update(id: number, updateMemoDto: UpdateMemoDto) {
    const data = await this.memoRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (data.user.id !== updateMemoDto.userId) {
      throw new HttpException(
        '작성자만 수정할 수 있습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newMemo = { contents: updateMemoDto.contents };

    await this.memoRepository.update({ id }, newMemo);
    return updateMemoDto;
  }

  async remove(id: number) {
    return await this.memoRepository.delete(id);
  }
}
