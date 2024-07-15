import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the request is for "/for-businesses"
  if (url.pathname === "/for-businesses") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Specify the paths that the middleware should run on
export const config = {
  matcher: "/for-businesses",
};
