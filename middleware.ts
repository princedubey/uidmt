import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const middleware = (req: NextRequest) => {
  const accessToken = req.cookies.get("access_token");


  const {pathname} = req.nextUrl;

  const previousPage = req.headers.get('referer');

  if(pathname.includes('/login') && accessToken){
    return NextResponse.redirect(new URL('/dashboard',req.url));
  }
  if (pathname.includes('/dashboard') && !accessToken && !previousPage?.includes('/login')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // console.log(pathname);
  return NextResponse.next();;
};

export default middleware;

export const config = {
  matcher: ['/','/dashboard/:path*','/login','/admin/:path*'],
};
