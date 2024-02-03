import { CommonEntity } from 'src/auth/common/common.entity';
import { Category } from 'src/category/entities/category.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class SubCategory extends CommonEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  image: string;

  @ManyToOne((type) => Category, (category) => category.subCategory)
  category: Category;

  @Column()
  categoryId: number;
}
