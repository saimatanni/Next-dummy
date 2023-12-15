import { NextResponse } from "next/server";
import { user } from "@/app/utils/db";
export async function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
export async function POST(req) {
  let payload = await req.json();
  console.log('payload', payload)
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Data not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "New user create", success: true },
    { status: 201 }
  );
}
