import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false, nullable: false })
  isDeleted: boolean;

  @Column({ nullable: true })
  createdBy: number;

  @CreateDateColumn()
  createdTimestamp: string;

  @Column({ nullable: true })
  updatedBy: number;

  @UpdateDateColumn()
  updatedTimestamp: string;
}
