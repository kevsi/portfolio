const isDev = import.meta.env.DEV;

export function getCookieOptions(maxAge = 60 * 60 * 24 * 7) {
  return {
    path: '/',
    httpOnly: true,
    secure: !isDev,
    sameSite: 'lax' as const,
    maxAge,
  };
}
