import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
 const { pathname } = request.nextUrl;

 if (pathname === "/for-businesses") {
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
 }

 return NextResponse.next();
}
