import { NextRequest, NextResponse } from "next/server";
import { Lang } from "../declarations";

const PUBLIC_FILE = /\.(.*)$/;
const locales: Lang[] = ["en", "it"];
const defaultLocale: Lang = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // Ignora static files and API
  if (
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes("_next")
  ) {
    return;
  }

  // If the URL does not already include a language, redirect
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.includes(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;

    const response = NextResponse.redirect(url, 301);
    if (process.env.VERCEL_ENV === "production") {
      response.headers.delete("x-robots-tag");
      response.headers.set("x-robots-tag", "index, follow");
    }
    return response;
  }

  const response = NextResponse.next();
  if (process.env.VERCEL_ENV === "production") {
    response.headers.delete("x-robots-tag");
    response.headers.set("x-robots-tag", "index, follow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
