import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "./Menu";

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

  @Column("decimal", { scale: 2 })
  price: number;

  @ManyToOne(() => Menu, (menu) => menu.menuItems)
  menu: Menu;
}
