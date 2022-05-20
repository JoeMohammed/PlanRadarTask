import * as yup from "yup";

export const editTicketSchema = yup
  .object({
    subject: yup
      .string()
      .required("This Field is required")
      .min(4, "Subject must be more than 4 character"),
    status: yup
      .string()
      .required("This Field is required")
      .min(2, "Subject must be more than 2 character"),
    priority: yup
      .string("This Field is required")
      .required("This Field is required"),
    description: yup
      .string()
      .required("This Field is required")
      .min(15, "Subject must be more than 15 character"),
  })
  .required();
