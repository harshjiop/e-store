import mongoose from "mongoose";
import { User } from "@/models/User.model";
export async function POST(req) {
  const body = await req.json();
  // console.log(body.name)

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log("mongo connected")
    if (
      [body.name, body.email, body.username, body.password].some((field) => field?.trim() === "")
    ) {
      throw new Response(400, "All filleds is required");
    }
    const useremail=body.email;
    const username=body.username
    const existedUser = User.findOne({
      $or: [{ username }, { useremail }],
    });
    if(!existedUser){
      const createsuser = await User.create(body);

      console.log(createsuser);
    }
    if(existedUser){
      console.log("User already exist Go to login page ")
    }

    

    
  } catch (error) {
    console.log(error, "data base connection error in register Route");
  }

  // console.log(body)
  return Response.json("ok");
}
