import { Entity, OneToMany } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { MenuItem } from "./MenuItem";

/**
 * The Menu model.
 *
 * @OneToMany - a Menu may have multiple MenuItems
 */
@Entity()
export class Menu extends IdNameBase {
  @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
  menuItems: MenuItem[];
}
