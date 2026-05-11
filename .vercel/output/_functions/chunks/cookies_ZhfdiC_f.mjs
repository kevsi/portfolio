function getCookieOptions(maxAge = 60 * 60 * 24 * 7) {
  return {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge
  };
}

export { getCookieOptions as g };
