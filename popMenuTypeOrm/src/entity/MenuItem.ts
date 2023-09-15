import { Column, Entity, ManyToOne } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { Menu } from "./Menu";

/**
 * The Menu Item model.
 *
 * @ManyToOne - a MenuItem may be on multiple Menus
 */
@Entity()
export class MenuItem extends IdNameBase {
  @Column()
  description: string;

  @Column("decimal", { scale: 2 })
  price: number;

  @ManyToOne(() => Menu, (menu) => menu.menuItems)
  menu: Menu;
}
