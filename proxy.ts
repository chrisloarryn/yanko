import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/ynk/admin") || pathname === "/ynk/admin/login") {
    return NextResponse.next();
  }

  if (request.cookies.get("ynk-admin")?.value === "authenticated") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/ynk/admin/login", request.url));
}

export const config = {
  matcher: ["/ynk/admin/:path*"],
};
