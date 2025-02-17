import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, request) => {
    const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
    if (isAdminRoute(request) && !isAdminUser) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (!isProtectedRoute(request)) {
        await auth.protect()
    }
})
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}