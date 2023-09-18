import { Restaurant } from "../src/entity/Restaurant";

describe("Restaurant class", () => {
  it("should create a restaurant instance", () => {
    const restaurant = new Restaurant();
    expect(restaurant).toBeInstanceOf(Restaurant);
  });

  it("should set the name property", () => {
    const restaurant = new Restaurant();
    restaurant.name = "test restaurant name";
    expect(restaurant.name).toBe("test restaurant name");
  });
});
