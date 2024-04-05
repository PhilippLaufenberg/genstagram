import { INewUser } from "@/types";
import { ID } from "appwrite";
import { appwriteAccount } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await appwriteAccount.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (error) {
    console.error(error);
  }
}
