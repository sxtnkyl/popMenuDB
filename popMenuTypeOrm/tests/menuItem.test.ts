import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../src/data-source";
import { Menu } from "../src/entity/Menu";
import { MenuItem } from "../src/entity/MenuItem";

describe("Menu Item class", () => {
  let menuRepo: Repository<Menu>;
  let menuItemRepo: Repository<MenuItem>;
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
    menuItemRepo = connection.getRepository(MenuItem);
    menuRepo = connection.getRepository(Menu);
  });

  afterAll(async () => {
    await connection.destroy();
  });

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

  it("should save a Menu Item instance with Menu relationship", async () => {
    const menu = new Menu();
    menu.name = "mock Menu name";
    await menuRepo.save(menu);

    const menuItem = new MenuItem();
    menuItem.name = "mock menu item name";
    menuItem.description = "test description";
    menuItem.price = 1.23;
    menuItem.menus = [menu];
    await menuItemRepo.save(menuItem);

    const savedMenuItem = await menuItemRepo.findOne({
      where: { id: menuItem.id },
      relations: { menus: true },
    });
    expect(savedMenuItem).toBeDefined();
    expect(savedMenuItem.name).toBe("mock menu item name");
    expect(savedMenuItem.menus).toBeDefined();
    expect(savedMenuItem.menus[0].name).toBe("mock Menu name");
  });
});
