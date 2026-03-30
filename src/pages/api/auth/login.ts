import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { getCookieOptions } from '../../../lib/cookies';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email et mot de passe requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const cookieOpts = getCookieOptions();

    if (data.session) {
      cookies.set('sb-access-token', data.session.access_token, cookieOpts);
      cookies.set('sb-refresh-token', data.session.refresh_token, cookieOpts);
    }

    return new Response(
      JSON.stringify({
        user: {
          id: data.user?.id,
          email: data.user?.email,
          full_name: data.user?.user_metadata?.full_name,
          username: data.user?.user_metadata?.username,
          avatar_url: data.user?.user_metadata?.avatar_url,
          avatar_lottie_url: data.user?.user_metadata?.avatar_lottie_url,
        },
        session: {
          access_token: data.session?.access_token,
          expires_at: data.session?.expires_at,
        }
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || 'Erreur serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
