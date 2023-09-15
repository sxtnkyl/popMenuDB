import { Menu } from "../src/entity/Menu";
import { MenuItem } from "../src/entity/MenuItem";

describe("Menu class", () => {
  it("should create a menuItem instance", () => {
    const menuItem = new MenuItem();
    expect(menuItem).toBeInstanceOf(MenuItem);
  });

  it("should set the name, description, and price property", () => {
    const menuItem = new MenuItem();
    menuItem.name = "test name";
    menuItem.description = "test description";
    menuItem.price = 1.23;

    expect(menuItem.name).toBe("test name");
    expect(menuItem.description).toBe("test description");
    expect(menuItem.price).toBe(1.23);
  });

  it("should create a menu relationship", () => {
    const menu = new Menu();
    const menuItem = new MenuItem();
    menuItem.menu = menu;

    expect(menuItem.menu).toBe(menu);
  });
});
