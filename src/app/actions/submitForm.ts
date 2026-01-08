"use server";

export type FormState = {
    success: boolean;
    message: string;
};

export const submitForm = async (formData: FormData): Promise<FormState> => {
    try {
        const name = (formData.get("name") as string) || "";
        const mobile = (formData.get("mobile") as string) || "";
        const email = (formData.get("email") as string) || "";
        const data = (formData.get("data") as string) || "";

        if (!name || !mobile || !email) {
            return { success: false, message: "Please fill all required fields." };
        }

        // TODO: send this data to CRM / email / database. For now we simulate success.
        // Example: await fetch(process.env.NEXT_PUBLIC_QUOTE_API, { method: 'POST', body: JSON.stringify({ name, mobile, email, data }) })

        console.log("Quick quote submitted:", { name, mobile, email, data });

        return { success: true, message: "Quote request submitted. We'll contact you shortly." };
    } catch (err) {
        console.error("submitForm error", err);
        return { success: false, message: "An error occurred. Please try again later." };
    }
};

export default submitForm;
