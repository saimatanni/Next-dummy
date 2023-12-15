import { NextResponse } from "next/server";
import { user } from "@/app/utils/db";
export async function GET(req, content) {
  console.log("content", content);
  const data = user;
  const userData = data.filter((item) => item.id == content.params.id);
  return NextResponse.json(userData.length===0 ?{result:"No data found"}: userData, { status: 200 });
}
// export async function PUT(req, content) {
//  let payload = await req.json()

//  payload.id=  content.params.id
//   const data = user;
//   const userData = data.filter((item) => item.id == content.params.id);
//   return NextResponse.json({result:"No data found"} , { status: 200 });
// }
