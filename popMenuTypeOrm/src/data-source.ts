import "reflect-metadata";
import { DataSource } from "typeorm";
import { Menu } from "./entity/Menu";
import { MenuItem } from "./entity/MenuItem";
import { Restaurant } from "./entity/Restaurant";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "username",
  password: "password",
  database: "popMenuTypeOrm",
  synchronize: true,
  logging: false,
  entities: [Restaurant, Menu, MenuItem],
  migrations: [],
  subscribers: [],
});
