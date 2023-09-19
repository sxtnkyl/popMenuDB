import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Menu } from "./entity/Menu";
import { MenuItem } from "./entity/MenuItem";
import { Restaurant } from "./entity/Restaurant";
require("dotenv").config();

export const dataSourceConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [Restaurant, Menu, MenuItem],
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataSourceConfig);
