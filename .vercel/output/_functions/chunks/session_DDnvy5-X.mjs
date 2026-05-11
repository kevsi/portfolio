import { s as supabase } from './supabase_DTCsrQ25.mjs';
import { g as getCookieOptions } from './cookies_ZhfdiC_f.mjs';

const GET = async ({ cookies }) => {
  try {
    const accessToken = cookies.get("sb-access-token")?.value;
    const refreshToken = cookies.get("sb-refresh-token")?.value;
    if (!accessToken) {
      return new Response(
        JSON.stringify({ user: null, session: null }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken || ""
    });
    if (error || !data.session) {
      cookies.delete("sb-access-token", { path: "/" });
      cookies.delete("sb-refresh-token", { path: "/" });
      return new Response(
        JSON.stringify({ user: null, session: null }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    const cookieOpts = getCookieOptions();
    if (data.session.access_token !== accessToken) {
      cookies.set("sb-access-token", data.session.access_token, cookieOpts);
      cookies.set("sb-refresh-token", data.session.refresh_token, cookieOpts);
    }
    return new Response(
      JSON.stringify({
        user: {
          id: data.user?.id,
          email: data.user?.email,
          full_name: data.user?.user_metadata?.full_name,
          username: data.user?.user_metadata?.username,
          avatar_url: data.user?.user_metadata?.avatar_url,
          avatar_lottie_url: data.user?.user_metadata?.avatar_lottie_url
        },
        session: {
          access_token: data.session.access_token,
          expires_at: data.session.expires_at
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Erreur serveur" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
