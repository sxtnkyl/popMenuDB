import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../src/data-source";
import { Restaurant } from "../src/entity/Restaurant";

describe("Restaurant class", () => {
  let restaurantRepo: Repository<Restaurant>;
  let connection: DataSource;

  beforeAll(async () => {
    connection = await AppDataSource.initialize();
    restaurantRepo = connection.getRepository(Restaurant);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should create a restaurant instance", () => {
    const restaurant = new Restaurant();
    expect(restaurant).toBeInstanceOf(Restaurant);
  });

  it("should set the name property", () => {
    const restaurant = new Restaurant();
    restaurant.name = "test restaurant name";
    expect(restaurant.name).toBe("test restaurant name");
  });

  it("should save a restaurant instance", async () => {
    const restaurant = new Restaurant();
    restaurant.name = "mock restaurant name";
    await restaurantRepo.save(restaurant);

    const savedRestaurant = await restaurantRepo.findOne({
      where: { id: restaurant.id },
    });
    expect(savedRestaurant).toBeDefined();
    expect(savedRestaurant.name).toBe("mock restaurant name");
  });
});
