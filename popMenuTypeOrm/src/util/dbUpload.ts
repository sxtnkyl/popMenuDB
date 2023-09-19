import { promises as fsPromises } from "fs";
import { UploadObject } from "../types/types";

export async function dbUpload(filePath: string): Promise<UploadObject> {
  try {
    const jsonMenuData = await fsPromises.readFile(filePath, "utf8");
    const jsonMenuObject = JSON.parse(jsonMenuData);
    return jsonMenuObject;
  } catch (error) {
    throw new Error(
      `Error reading or parsing the file within /data: ${error.message}`
    );
  }
}
