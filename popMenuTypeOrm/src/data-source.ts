import "reflect-metadata";
import { DataSource } from "typeorm";
import { Menu } from "./entity/Menu";
import { MenuItem } from "./entity/MenuItem";
import { Restaurant } from "./entity/Restaurant";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Restaurant, Menu, MenuItem],
  migrations: [],
  subscribers: [],
});
