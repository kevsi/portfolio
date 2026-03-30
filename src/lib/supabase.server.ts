import { createServerClient, parseCookieHeader } from '@supabase/ssr';

export const createClient = (context: { request: Request; cookies: any }) => {
  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(context.request.headers.get('cookie') ?? '');
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            context.cookies.set(name, value, {
              path: options?.path ?? '/',
              httpOnly: options?.httpOnly ?? true,
              secure: options?.secure ?? true,
              sameSite: options?.sameSite ?? 'strict',
              maxAge: options?.maxAge,
            });
          });
        },
      },
    }
  );

  return supabase;
};
