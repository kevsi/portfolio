import { createServerClient, parseCookieHeader } from '@supabase/ssr';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ?? import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Les variables d\'environnement Supabase sont manquantes pour le client serveur. ' +
    'Définissez PUBLIC_SUPABASE_URL et PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, ' +
    'ou SUPABASE_URL et SUPABASE_ANON_KEY dans Vercel.'
  );
}

export const createClient = (context: { request: Request; cookies: any }) => {
  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
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
