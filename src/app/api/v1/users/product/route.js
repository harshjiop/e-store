import mongoose from "mongoose";
import Product from "../../../../../models/Product.model";
export async function POST(req) {
  const body = await req.json();
  // console.log(body.name)

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log("mongo connected")
    // if (
    //   [body.name, body.email, body.password].some(
    //     (field) => field?.trim() === ""
    //   )
    // ) {
    //   throw new Response(400, "All filleds is required");
    // }
    // const useremail = body.email;

    // const existedUser = User.findOne(useremail);
    // console.log(existedUser)
    // if (existedUser) {
      
      const createsproduct = await Product.create(body);
      console.log(createsproduct)
      // console.log(createsuser);
    // }
    // else{
    //   console.log("User already exist Go to login page ");
    // }
  } catch (error) {
    console.log(error, "data base connection error in register Route");
  }

  // console.log(body)
  return Response.json("ok");
}