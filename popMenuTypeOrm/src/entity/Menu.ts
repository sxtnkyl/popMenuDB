import { Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { MenuItem } from "./MenuItem";
import { Restaurant } from "./Restaurant";

/**
 * The Menu model.
 *
 * @ManyToMany - Menu may have multiple MenuItem and MenuItem may be on multiple Menus
 *
 * @ManyToOne - many Menu may belong to one Restaurant
 */
@Entity()
export class Menu extends IdNameBase {
  @ManyToMany(() => MenuItem, (menuItem) => menuItem.menus)
  @JoinTable()
  menuItems: MenuItem[];

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  restaurant: Restaurant;
}
