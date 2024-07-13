"use server";

import { signIn } from "@/auth.config";
import { sleep } from "@/utils";
import { AuthError } from "next-auth";

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // await sleep(2);

    // console.log(Object.fromEntries(formData));
    // await signIn("credentials", formData);
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return 'Success';

  } catch (error) {
    // console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
    // return 'CredentialsSignIn';
  }
}
