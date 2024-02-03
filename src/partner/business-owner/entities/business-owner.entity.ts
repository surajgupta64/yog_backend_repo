import { CommonEntity } from 'src/auth/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class BusinessOwner extends CommonEntity {
  @Column()
  name: string;

  @Column()
  profileImg: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  dob: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  contactNumber: number;

  @Column({
    default: true,
    nullable: false,
  })
  whatsappNotification: boolean;

  @Column({
    nullable: false,
  })
  whatsappNumber: number;

  @Column({
    nullable: false,
  })
  aadharNumber: number;

  @Column({
    nullable: false,
  })
  aadharFile: number;
}
