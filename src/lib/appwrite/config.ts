import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  // TS will complain about this, so need to add vite-env.d.ts to src folder
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

export const appwriteClient = new Client();

appwriteClient.setProject(appwriteConfig.projectId);
appwriteClient.setEndpoint(appwriteConfig.url);

export const appwriteAccount = new Account(appwriteClient);
export const appwriteDatabases = new Databases(appwriteClient);
export const appwriteStorage = new Storage(appwriteClient);
export const appwriteAvatars = new Avatars(appwriteClient);
