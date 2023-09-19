import { IsInt, IsOptional, IsString, Min } from "class-validator";
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
  @IsString()
  @IsOptional()
  description: string;

  @Column("decimal", { scale: 2 })
  @Min(0)
  @IsInt()
  price: number;

  @ManyToMany(() => Menu, (menu) => menu.menuItems)
  menus: Menu[];
}
