import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ClientBehavior } from "@/components/ClientBehavior";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://kickspace-site.vercel.app"),
  title: {
    default: "Kick Space Technologies株式会社",
    template: "%s"
  },
  description:
    "九州から超小型人工衛星のミッション検討、設計、製造、試験、運用までを支援するKick Space Technologies株式会社のコーポレートサイトです。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <p>© Kick Space Technologies Inc. 2025</p>
          <a href="#top">Back to top</a>
        </footer>
        <ClientBehavior />
      </body>
    </html>
  );
}
