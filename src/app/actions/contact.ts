// app/actions/contact.ts
"use server";

import { ZodError, z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  vehicle: z.string().optional(),
  message: z.string().optional(),
  engineKey: z.string().min(1),
});

export type FormState = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    vehicle?: string[];
    message?: string[];
    engineKey?: string[];
  };
};

export async function submitQuotationForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    // Validate form data
    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      vehicle: formData.get("vehicle"),
      message: formData.get("message"),
      engineKey: formData.get("engineKey"),
    });

    // TODO: Send email, save to DB, etc.
    console.log("Form data:", data);

    // Simulate success
    return {
      success: true,
      message: "Thank you! We will contact you shortly.",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      message: "Something went wrong. Please try again.",
    };
  }
}
