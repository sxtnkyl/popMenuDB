/**
 * Data types for JSON upload
 */
export type MenuName = "menu_items" | "dishes";
export type MenuItem = {
  name: string;
  price: number;
  description?: string;
};

export type MenuObject = {
  name: string;
  menu_items?: MenuItem[];
  dishes?: MenuItem[];
};

export type RestaurantObject = {
  name: string;
  menus: MenuObject[];
};

export type UploadObject = {
  restaurants: RestaurantObject[];
};

/**
 * other types
 */

export interface PostgresError {
  code: string;
  message: string;
}
