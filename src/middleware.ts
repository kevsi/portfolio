import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';
import { getCookieOptions } from './lib/cookies';
import type { Session, User } from '@supabase/supabase-js';

declare module 'astro' {
  interface Locals {
    user: User | null;
    session: Session | null;
  }
}

const protectedRoutes = ['/dashboard', '/profile', '/projects/new', '/projects/edit', '/cart', '/notifications', '/settings'];
const authRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  const pathname = url.pathname;

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;

  let session: Session | null = null;
  let user: User | null = null;

  if (accessToken) {
    try {
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken || '',
      });

      if (!error && data.session) {
        session = data.session;
        user = data.user;

        if (data.session.access_token !== accessToken) {
          const cookieOpts = getCookieOptions();
          context.cookies.set('sb-access-token', data.session.access_token, cookieOpts);
          context.cookies.set('sb-refresh-token', data.session.refresh_token, cookieOpts);
        }
      }
    } catch (error) {
      console.error('Erreur de vérification de session:', error);
    }
  }

  if (isProtectedRoute && !user) {
    return redirect('/auth/login');
  }

  if (isAuthRoute && user) {
    return redirect('/');
  }

  context.locals.user = user;
  context.locals.session = session;

  return next();
});
