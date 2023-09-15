import { Entity, OneToMany } from "typeorm";
import { IdNameBase } from "./IdNameBase";
import { Menu } from "./Menu";

/**
 * The Restaurant model.
 *
 * @OneToMany - a Restaurant may have multiple Menu
 */
@Entity()
export class Restaurant extends IdNameBase {
  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];
}
