import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../src/data-source";
import { Menu } from "../src/entity/Menu";
import { Restaurant } from "../src/entity/Restaurant";

describe("Menu class", () => {
  let restaurantRepo: Repository<Restaurant>;
  let menuRepo: Repository<Menu>;
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
    restaurantRepo = connection.getRepository(Restaurant);
    menuRepo = connection.getRepository(Menu);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should create a menu instance", () => {
    const menu = new Menu();
    expect(menu).toBeInstanceOf(Menu);
  });

  it("should set the name property", () => {
    const menu = new Menu();
    menu.name = "test menu name";
    expect(menu.name).toBe("test menu name");
  });

  it("should save a Menu instance with restaurant relationship", async () => {
    const restaurant = new Restaurant();
    restaurant.name = "mock restaurant name";
    await restaurantRepo.save(restaurant);

    const menu = new Menu();
    menu.name = "mock Menu name";
    menu.restaurant = restaurant;
    await menuRepo.save(menu);

    const savedMenu = await menuRepo.findOne({
      where: { id: menu.id },
      relations: { restaurant: true },
    });
    expect(savedMenu).toBeDefined();
    expect(savedMenu.name).toBe("mock Menu name");
    expect(savedMenu.restaurant).toBeDefined();
    expect(savedMenu.restaurant.name).toBe("mock restaurant name");
  });
});
