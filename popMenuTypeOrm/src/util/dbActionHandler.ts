import { PostgresError } from "../types/types";

const errorFormatter = (error: any): PostgresError => {
  return {
    code: error.code || "unknown error code",
    message: error.message || "unknown error message",
  };
};

/**
 * handler to catch postges errors.
 * should add error code specific actions here
 */
export const dbActionHandler = async (action: () => Promise<any>) => {
  try {
    await action();
  } catch (error) {
    const { code, message } = errorFormatter(error);
    throw new Error(
      `\n Process failed with error code: ${code}. \n Message: ${message}.`
    );
  }
};
