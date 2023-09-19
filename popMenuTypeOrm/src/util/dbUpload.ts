import { promises as fsPromises } from "fs";
import { UploadObject } from "../types/types";

export async function dbUpload(filePath: string): Promise<UploadObject> {
  try {
    const jsonMenuData = await fsPromises.readFile(filePath, "utf8");
    const jsonMenuObject = JSON.parse(jsonMenuData) as UploadObject;
    return jsonMenuObject;
  } catch (error) {
    throw new Error(
      `Error during reading or parsing the json file within the data folder: ${error.message}`
    );
  }
}
