import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.brians.aora",
  projectId: "6793418500288ae09f26",
  databaseId: "6793433c0007847b201f",
  userCollectionId: "67934397001980959ad4",
  videoCollectionId: "679343cf001d61146af5",
  storageId: "67934a6d0031c4e35bc1",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
