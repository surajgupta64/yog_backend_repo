import { CommonEntity } from 'src/auth/common/common.entity';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Category extends CommonEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  image: string;

  @OneToMany((type) => SubCategory, (subCategory) => subCategory.category, {
    eager: true,
  })
  subCategory: SubCategory[];
}
