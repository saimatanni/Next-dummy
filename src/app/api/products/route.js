import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      name: "sayma",
      age: "28",
      city: "dhaka",
    },
    { status: 201 }
  );
}
