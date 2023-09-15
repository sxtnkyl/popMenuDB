import "reflect-metadata";
import { DataSource } from "typeorm";
import { Menu } from "./entity/Menu";
import { MenuItem } from "./entity/MenuItem";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "username",
  password: "password",
  database: "popMenuTypeOrm",
  synchronize: true,
  logging: false,
  entities: [Menu, MenuItem],
  migrations: [],
  subscribers: [],
});
