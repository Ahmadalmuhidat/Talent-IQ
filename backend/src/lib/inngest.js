import { Inngest } from "inngest";
import User from "../models/userModel.js";
import { connectToDatabase } from "./database.js";
import { upsertStreamUser, deleteStreamUser } from './stream.js';
export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },

  async ({ event }) => {
    // Connect to the database
    await connectToDatabase();

    // Extract user data from the event
    const {
      id,
      email_addresses,
      first_name,
      last_name,
      image_url
    } = event.data;

    // Check if user already exists
    const existingUser = await User.findOne({ clerkId: id });
    if (existingUser) {
      console.log(`User with clerkId ${clerkId} already exists.`);
      return;
    }

    // Create a new user
    const newUser = new User({
      clerkId: id,
      email: email_addresses?.[0]?.email_address || "",
      username: `${first_name}_${last_name}`.toLowerCase(),
      profilePicture: image_url || "",
    });

    // Save the new user to the database
    await newUser.save();

    // Save user in Stream
    await upsertStreamUser({
      id: newUser._id.toString(),
      name: `${first_name} ${last_name}`,
      image: image_url || ""
    });
  }
);

const deleteUser = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },

  async ({ event }) => {
    await connectToDatabase();

    const { id } = event.data;
    const deletedUser = await User.deleteOne({ clerkId: id });

    if (!deletedUser) {
      console.log(`No user found with clerkId ${id} to delete.`);
      return;
    }

    // Delete user from Stream
    deleteStreamUser(deletedUser._id.toString());
  }
);

export const functions = [
  syncUser,
  deleteUser
];