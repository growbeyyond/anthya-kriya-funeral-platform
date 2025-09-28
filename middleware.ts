import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
 
export async function middleware(request: NextRequest) {
	const session = await auth.api.getSession({
		headers: await headers()
	})
 
	if(!session) {
		return NextResponse.redirect(new URL("/login", request.url));
	}
 
	return NextResponse.next();
}
 
export const config = {
  runtime: "nodejs",
  matcher: ["/admin", "/vendor", "/vendor/jobs", "/vendor/wallet", "/vendor/onboarding", "/partner", "/memorials/new"], // Apply middleware to specific routes
};