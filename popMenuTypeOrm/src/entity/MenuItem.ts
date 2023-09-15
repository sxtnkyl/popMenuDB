import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * The Menu Item model.
 */
@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: string;
}
