import { string, object, date } from "yup";

export const schemaPost = object({
  countryName: string()
    .trim() // Remove whitespace
    .min(2, "Country name must be at least 2 characters")
    .max(100, "Country name must be less than 100 characters")
    .required("Country name is required"),

  placeName: string()
    .trim() // Remove whitespace
    .min(2, "Place name must be at least 2 characters")
    .max(100, "Place name must be less than 100 characters")
    .required("Place name is required"),

  zone: string()
    .trim() // Remove whitespace
    .max(100, "Zone must be less than 100 characters"),

  date: date()
    .transform((value, originalValue) => {
      if (originalValue === "null") {
        return null; // แปลงสตริง "null" เป็นค่า null จริง
      }
      return value;
    })
    .typeError("Please enter a valid date")
    .max(new Date(), "Date cannot be in the future")
    .nullable(),
});
