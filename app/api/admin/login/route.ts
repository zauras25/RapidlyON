import { NextResponse } from "next/server";

import {
  ADMIN_COOKIE_NAME,
  createAdminSession,
} from "@/lib/admin-auth";

type LoginBody = {
  password?: unknown;
};

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as LoginBody;

    const configuredPassword =
      process.env.ADMIN_PASSWORD;

    if (!configuredPassword) {
      return NextResponse.json(
        {
          error:
            "Admin authentication is not configured.",
        },
        { status: 500 },
      );
    }

    if (
      typeof body.password !== "string" ||
      body.password !== configuredPassword
    ) {
      return NextResponse.json(
        {
          error: "Invalid password.",
        },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: createAdminSession(),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process login.",
      },
      { status: 400 },
    );
  }
}
