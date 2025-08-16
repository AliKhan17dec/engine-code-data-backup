"use server";

import { z } from "zod";
const schema = z.object({
  engineCode: z.string().min(1, { message: "Engine code is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export async function submitQuotationForm(formData: FormData): Promise<void> {
  console.log(formData);
  try {
    const data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      vehicle: formData.get("vehicle"),
      message: formData.get("message"),
      engineCode: formData.get("engineCode"),
    });

    // TODO: Handle your business logic
    console.log("Form submitted:", data);

    // Server Actions must return void
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Modern error handling for Zod v4
      const fieldErrors: Record<string, string[]> = {};

      for (const issue of error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) {
          fieldErrors[key] = [];
        }
        fieldErrors[key].push(issue.message);
      }

      console.error("Validation errors:", fieldErrors);
    } else {
      console.error("Submission error:", error);
    }
  }
}
