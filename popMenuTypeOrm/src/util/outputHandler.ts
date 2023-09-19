import { DataSource } from "typeorm";
import { MenuItem } from "../entity/MenuItem";
import { Restaurant } from "../entity/Restaurant";

/**
 * output logging handler
 * add queries to print here
 */
export const outputHandler = async (connection: DataSource) => {
  const menuItemsList = await connection.manager.find(MenuItem);

  if (menuItemsList) {
    if (menuItemsList.length === 0) {
      console.log("Looks like there were not any menu items uploaded...");
    }
    console.log("Here is your uploaded menu item list: ", menuItemsList);
  } else if (!menuItemsList) {
    throw new Error("No menu items were uploaded");
  }

  // instructions only wanted menu items, but I want to know who has a small salad
  const restaurantRepo = connection.getRepository(Restaurant);
  const findSmallSaladQuery = restaurantRepo
    .createQueryBuilder("restaurant")
    .innerJoin("restaurant.menus", "menu")
    .innerJoin("menu.menuItems", "menuItem")
    .where("menuItem.name = :itemName", { itemName: "Small Salad" });
  const restaurantMatchForSmallSalad = await findSmallSaladQuery.getMany();

  console.log("Who has a tiny salad?! ", restaurantMatchForSmallSalad);
};
