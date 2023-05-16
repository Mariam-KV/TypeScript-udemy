export interface Validatable {
  value: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
export function validate(validatable: Validatable) {
  let isValid = true;
  if (validatable.required) {
    isValid = isValid && validatable.value.toString().trim().length !== 0;
  }
  if (validatable.minLength && typeof validatable.value === "string") {
    isValid =
      isValid &&
      validatable.value.toString().trim().length >= validatable.minLength;
  }
  if (validatable.min && typeof validatable.value === "number") {
    isValid = isValid && validatable.min <= validatable.value;
  }
  return isValid;
}
