import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login"
  ) {
    const session = request.cookies.get("admin_session")?.value;

    if (session !== "authenticated") {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  if (
    pathname === "/admin/login" &&
    request.cookies.get("admin_session")?.value === "authenticated"
  ) {
    return NextResponse.redirect(
      new URL("/admin/inquiries", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
