import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  // TS will complain about this, so need to add vite-env.d.ts to src folder
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  database: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  saveCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const appwriteClient = new Client();

appwriteClient.setProject(appwriteConfig.projectId);
appwriteClient.setEndpoint(appwriteConfig.url);

export const appwriteAccount = new Account(appwriteClient);
export const appwriteDatabases = new Databases(appwriteClient);
export const appwriteStorage = new Storage(appwriteClient);
export const appwriteAvatars = new Avatars(appwriteClient);
