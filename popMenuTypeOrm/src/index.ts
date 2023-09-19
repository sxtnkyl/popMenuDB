import { AppDataSource } from "./data-source";
import { dbUpload } from "./util/dbUpload";
import { seedDbFromUploads } from "./util/seedDbFromUpload";

const jsonDataPath = `./src/data/uploadData.json`;

AppDataSource.initialize()
  .then(async (connection) => {
    console.log("connected: ");

    console.log("reading input for db upload...");
    const uploadData = await dbUpload(jsonDataPath);

    console.log("Seeding db with uploaded json...");
    await seedDbFromUploads(connection, uploadData);

    // console.log("logging the inserted table data...")
    // const restaurantTable = await AppDataSource.manager.find(Restaurant);
    // console.log("restaurant table: ", restaurantTable);
    // const menuTable = await AppDataSource.manager.find(Menu);
    // console.log("menu table: ", menuTable);

    // NOTE: this drop is only included to avoid having to reset before next upload
    // do not do this in prod!
    console.log("dropping db...");
    await connection.dropDatabase();

    // best practice to close the connection
    console.log("closing connection...");
    await AppDataSource.destroy();
  })
  .catch((error) => console.log(error));
