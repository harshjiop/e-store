import mongoose from "mongoose";
import { User } from "@/models/User.model";
export async function POST(req) {
  const body = await req.json();
  // console.log(body.name)

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log("mongo connected")
    if (
      [body.name, body.email, body.password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new Response(400, "All filleds is required");
    }
    const useremail = body.email;

    const existedUser = User.findOne(useremail);
    // console.log(existedUser)
    if (existedUser) {
      
      const createsuser = await User.create(body);

      // console.log(createsuser);
    }
    else{
      console.log("User already exist Go to login page ");
    }
  } catch (error) {
    console.log(error, "data base connection error in register Route");
  }

  // console.log(body)
  return Response.json("ok");
}


/*import mongoose from "mongoose";
import { User } from "@/models/User.model";

export async function POST(req, res) {
  const body = await req.json();

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    if ([body.name, body.email, body.password].some(field => field?.trim() === "")) {
      throw new Error("All fields are required");
    }

    const useremail = body.email;
    const existedUser = await User.findOne({ email: useremail });

    if (existedUser) {
      return res.status(400).json({ error: "User already exists. Go to the login page." });
    }

    const createdUser = await User.create(body);
    return res.status(200).json({ message: "User created successfully", user: createdUser });
  } catch (error) {
    console.log(error, "Database connection error in register route");
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
 */