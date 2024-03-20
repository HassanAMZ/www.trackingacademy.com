import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
 const { pathname } = request.nextUrl;

 if (pathname === "/for-freelancers") {
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
 }

 return NextResponse.next();
}
