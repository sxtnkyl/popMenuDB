import { validate } from "class-validator";

/**
 * validator for handling class-validator
 * defined errors within an Entity
 */
export const classValidatorHandler = async (saveItem: object) => {
  const validators = await validate(saveItem);
  if (validators.length > 0) {
    validators.forEach(({ value, property }) => {
      throw new Error(
        `Validation failed for property: ${property} \n with value: ${value}`
      );
    });
  }
};
