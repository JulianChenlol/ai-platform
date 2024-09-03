"use server";

import {z} from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";

const FormSchema = z.object({
    id: z.string(),
    active: z.boolean(),
});

const CreateApiKey = FormSchema.omit({id: true});
const UpdateApiKey = FormSchema.omit({id: true});

export async function createApiKey(formData: FormData) {
    const active = CreateApiKey.parse({
        active: formData.get("active"),
    });
    
    const res = await fetch("http://localhost:8001/api/v1/api_keys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ active}),
    });

    if (!res.ok) {
        throw new Error("Failed to create api key");
    }

    revalidatePath("/dashboard/apikeys");
    redirect("/dashboard/apikeys");
}

export async function updateApiKey(id: string, formData: FormData) {
    const {active} = UpdateApiKey.parse({
        active: formData.get("active") === "active",
    });
    const res = await fetch(`http://localhost:8001/api/v1/api_keys/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({active}),
    });
    if (!res.ok) {
        throw new Error("Failed to update api key");
    }

    revalidatePath("/dashboard/apikeys");
    redirect("/dashboard/apikeys");
}