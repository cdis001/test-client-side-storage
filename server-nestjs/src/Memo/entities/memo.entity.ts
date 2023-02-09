import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import { UserEntity } from '../../users/entities/user.entity';

@Entity()
export class MemoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contents: string;

  @ManyToOne((type) => UserEntity, (user) => user.id)
  @JoinColumn()
  user: UserEntity;
}
