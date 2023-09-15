import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { Menu } from "./Menu";

/**
 * The Menu Item model.
 *
 * @ManyToOne - many MenuItem may belong to one Menu
 */
@Entity()
@Unique(["name"])
export class MenuItem extends IdNameBase {
  @Column()
  description: string;

  @Column("decimal", { scale: 2 })
  price: number;

  @ManyToOne(() => Menu, (menu) => menu.menuItems)
  menu: Menu;
}
