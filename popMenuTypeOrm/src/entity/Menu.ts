import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * The Menu model.
 */
@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
