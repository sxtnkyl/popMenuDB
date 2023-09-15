import { Menu } from "../src/entity/Menu";

describe("MenuItem class", () => {
  it("should create a menu item instance", () => {
    const menu = new Menu();
    expect(menu).toBeInstanceOf(Menu);
  });

  it("should set the name property", () => {
    const menu = new Menu();
    menu.name = "test menu name";
    expect(menu.name).toBe("test menu name");
  });
});
