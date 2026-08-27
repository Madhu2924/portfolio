import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const OWNER_EMAIL = "madhusakthi0126@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

function encodeHeader(value: string) {
  // Keep header values single-line and ASCII-safe.
  const cleaned = value.replace(/[\r\n]+/g, " ").trim();
  // eslint-disable-next-line no-control-regex
  if (/^[\x20-\x7E]*$/.test(cleaned)) return cleaned;
  return `=?UTF-8?B?${Buffer.from(cleaned, "utf8").toString("base64")}?=`;
}

function toBase64Url(input: string) {
  return Buffer.from(input, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const lovableKey = process.env["LOVABLE_API_KEY"];
        const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
        if (!lovableKey || !gmailKey) {
          return Response.json({ error: "Email is not configured" }, { status: 500 });
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ error: "Please check your details and try again." }, { status: 400 });
        }
        const { name, email, message } = parsed.data;

        const raw = [
          `To: ${OWNER_EMAIL}`,
          `Reply-To: ${encodeHeader(email)}`,
          `Subject: ${encodeHeader(`Portfolio contact from ${name}`)}`,
          'Content-Type: text/plain; charset="UTF-8"',
          "MIME-Version: 1.0",
          "",
          `${message}\n\n— ${name} (${email})`,
        ].join("\r\n");

        const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": gmailKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw: toBase64Url(raw) }),
        });

        if (!res.ok) {
          const body = await res.text();
          console.error(`Gmail send failed [${res.status}]: ${body}`);
          return Response.json({ error: "Could not send the message right now." }, { status: 502 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
