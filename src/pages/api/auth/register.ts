import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { getCookieOptions } from '../../../lib/cookies';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { email, password, fullName, username, avatarId, avatarLottieUrl, avatarUrl } = await request.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email et mot de passe requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Créer l'utilisateur
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          username: username,
          avatar_url: avatarUrl,
          avatar_lottie_url: avatarLottieUrl,
        },
      },
    });

    if (authError) {
      return new Response(
        JSON.stringify({ error: authError.message }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Créer le profil avec service_role si disponible, sinon avec le contexte signUp
    if (authData.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: authData.user.id,
        email: email,
        full_name: fullName,
        username: username,
        avatar_id: avatarId || null,
        avatar_lottie_url: avatarLottieUrl || null,
        avatar_url: avatarUrl || null,
        created_at: new Date().toISOString(),
      });

      if (profileError) {
        console.error('Erreur création profil:', profileError);
      }

      // Si signUp retourne une session (email confirmation désactivé), définir les cookies
      if (authData.session) {
        const cookieOpts = getCookieOptions();
        cookies.set('sb-access-token', authData.session.access_token, cookieOpts);
        cookies.set('sb-refresh-token', authData.session.refresh_token, cookieOpts);
      }
    }

    return new Response(
      JSON.stringify({
        user: authData.user,
        hasSession: !!authData.session,
        message: 'Inscription réussie. Vérifiez votre email pour confirmer votre compte.'
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || 'Erreur serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
