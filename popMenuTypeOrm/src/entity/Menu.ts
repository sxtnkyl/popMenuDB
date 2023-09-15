import { Entity, ManyToOne, OneToMany } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { MenuItem } from "./MenuItem";
import { Restaurant } from "./Restaurant";

/**
 * The Menu model.
 *
 * @OneToMany - a Menu may have multiple MenuItems
 *
 * @ManyToOne - many Menu may belong to one Restaurant
 */
@Entity()
export class Menu extends IdNameBase {
  @OneToMany(() => MenuItem, (menuItem) => menuItem.menu)
  menuItems: MenuItem[];

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.menus)
  restaurant: Restaurant;
}
