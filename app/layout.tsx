import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Kevin6 — Useful things, made simple.";
const description =
  "A growing collection of small, thoughtful tools for everyday work.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "kevin6.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      url: origin,
      siteName: "Kevin6",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1730,
          height: 909,
          alt: "Kevin6 — Useful things, made simple.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
