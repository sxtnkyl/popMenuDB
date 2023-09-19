import { DataSource } from "typeorm";
import { Menu } from "../entity/Menu";
import { MenuItem } from "../entity/MenuItem";
import { Restaurant } from "../entity/Restaurant";
import { UploadObject } from "../types/types";

export const seedDbFromUploads = async (
  connection: DataSource,
  menuObject: UploadObject
) => {
  // create seed tables
  const restaurantRepo = connection.getRepository(Restaurant);
  const menuRepo = connection.getRepository(Menu);
  const menuItemRepo = connection.getRepository(MenuItem);

  // loop through restaurants
  for (const restaurantData of menuObject.restaurants) {
    const restaurant = new Restaurant();
    restaurant.name = restaurantData.name;

    //loop through the restaurant's menus
    for (const menuObject of restaurantData.menus) {
      const menu = new Menu();
      menu.name = menuObject.name;
      // loop through menu items
      if (menuObject.dishes || menuObject.menu_items) {
        for (const item of menuObject.dishes || menuObject.menu_items) {
          const menuItem = new MenuItem();
          menuItem.name = item.name;
          menuItem.price = item.price;
          menuItem.description = item?.description ?? "";

          menuItem.menus = menuItem.menus || [];
          menuItem.menus.push(menu);

          // save menuItem to MenuItem table
          await menuItemRepo.save(menuItem);

          // add new item to the menu
          menu.menuItems = menu.menuItems || [];
          menu.menuItems.push(menuItem);
        }

        restaurant.menus = restaurant.menus || [];
        restaurant.menus.push(menu);
      }

      //save menu to Menu table
      await menuRepo.save(menu);
      // save restaurant to Restaurant table
      await restaurantRepo.save(restaurant);
    }
  }
};
