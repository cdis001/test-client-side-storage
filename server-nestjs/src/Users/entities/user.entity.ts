import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  JoinColumn,
} from 'typeorm';

import { MemoEntity } from '../../memo/entities/memo.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => MemoEntity, (memo) => memo.id)
  @JoinColumn()
  memo: MemoEntity[];
}
