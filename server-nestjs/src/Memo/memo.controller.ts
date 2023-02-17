import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { MemoService } from './memo.service';
import { CreateMemoDto } from './dto/create-memo.dto';
import { UpdateMemoDto } from './dto/update-memo.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('memo')
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  @Post()
  create(@Body() createMemoDto: CreateMemoDto) {
    return this.memoService.create(createMemoDto);
  }

  @Get()
  findAll() {
    return this.memoService.findAll();
  }

  @Get('user/:id')
  findByUserId(@Param('id') id: string) {
    return this.memoService.findByUserId(+id);
  }

  @Get('cookie/user')
  findByCookie(@Req() request: Request) {
    const user = { username: '', ...request.user };

    return this.memoService.findByCookie(user.username);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemoDto: UpdateMemoDto) {
    return this.memoService.update(+id, updateMemoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memoService.remove(+id);
  }
}
