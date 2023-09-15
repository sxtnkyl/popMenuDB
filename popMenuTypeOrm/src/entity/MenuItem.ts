import { Column, Entity, ManyToMany, Unique } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { Menu } from "./Menu";

/**
 * The Menu Item model.
 *
 * @ManyToMany - many MenuItem may belong to multiple Menu
 */
@Entity()
@Unique(["name"])
export class MenuItem extends IdNameBase {
  @Column()
  description: string;

  @Column("decimal", { scale: 2 })
  price: number;

  @ManyToMany(() => Menu, (menu) => menu.menuItems)
  menus: Menu[];
}
