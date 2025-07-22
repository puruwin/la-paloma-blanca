export async function onRequest(context: any, next: any) {
  const { pathname } = new URL(context.request.url);
  const origin = new URL(context.request.url).origin;

  if (pathname === "/") {
    const lang = context.request.headers.get("accept-language") || "";
    if (lang.startsWith("en")) {
      return Response.redirect(`${origin}/en/`, 302);
    } else if (lang.startsWith("nl")) {
      return Response.redirect(`${origin}/nl/`, 302);
    } else {
      return Response.redirect(`${origin}/es/`, 302);
    }
  }

  return next();
}
