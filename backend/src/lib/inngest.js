import { Inngest } from "inngest";
import userModel from "../models/userModel";
import { connectToDatabase } from "./database";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },

  async ({ event }) => {
    await connectToDatabase();

    const {
      id,
      email_addresses,
      first_name,
      last_name,
      image_url
    } = event.data;
    const existingUser = await userModel.findOne({ clerkId: id });

    if (existingUser) {
      console.log(`User with clerkId ${clerkId} already exists.`);
      return;
    }

    const newUser = new userModel({
      clerkId: id,
      email: email_addresses?.[0]?.email_address || "",
      username: `${first_name}_${last_name}`.toLowerCase(),
      profilePicture: image_url || "",
    });

    await newUser.save();
  }
);

const deleteUser = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },

  async ({ event }) => {
    await connectToDatabase();

    const { id } = event.data;
    const deletedUser = await userModel.deleteOne({ clerkId: id });

    if (!deletedUser) {
      console.log(`No user found with clerkId ${id} to delete.`);
      return;
    }
  }
);

export const functions = [syncUser, deleteUser];