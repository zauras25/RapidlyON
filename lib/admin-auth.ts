import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "rapidlyon_admin";

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not configured.",
    );
  }

  return secret;
}

export function createAdminSession() {
  const value = `admin:${Date.now()}`;
  const signature = createHmac(
    "sha256",
    getSecret(),
  )
    .update(value)
    .digest("hex");

  return `${value}.${signature}`;
}

export function isValidAdminSession(
  session: string | undefined,
) {
  if (!session) {
    return false;
  }

  const separator = session.lastIndexOf(".");

  if (separator === -1) {
    return false;
  }

  const value = session.slice(0, separator);
  const signature = session.slice(separator + 1);

  if (!value.startsWith("admin:")) {
    return false;
  }

  const expected = createHmac(
    "sha256",
    getSecret(),
  )
    .update(value)
    .digest("hex");

  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (
    actualBuffer.length !== expectedBuffer.length
  ) {
    return false;
  }

  return timingSafeEqual(
    actualBuffer,
    expectedBuffer,
  );
}
