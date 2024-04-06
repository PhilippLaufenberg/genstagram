import { INewUser } from "@/types";
import { ID } from "appwrite";
import { appwriteAccount, appwriteAvatars } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await appwriteAccount.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw new Error("Could not create user account");
    const avatarUrl = appwriteAvatars.getInitials(user.name);
    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newAccount;
  } catch (error) {
    console.error(error);
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
}) {}
