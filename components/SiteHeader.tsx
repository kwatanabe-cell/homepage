"use client";

import { usePathname } from "next/navigation";

const navItems = [
  { href: "/service", label: "Service" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/media", label: "Media" },
  { href: "/access", label: "Access" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const isRecruit = pathname.startsWith("/recruit") || pathname.startsWith("/job-");
  const isCorporate = pathname === "/";

  return (
    <header className="site-header" id="siteHeader">
      <a className="brand" href="/" aria-label="Kick Space Technologies株式会社 トップへ">
        <img className="brand-logo" src="/assets/kst-logo-white.png" alt="Kick Space Technologies Inc." />
      </a>
      <button
        className="nav-toggle"
        id="navToggle"
        aria-expanded="false"
        aria-controls="globalNav"
        aria-label="メニューを開閉"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="global-nav" id="globalNav">
        <a className={`nav-tab ${isCorporate ? "active" : ""}`} href="/">
          Corporate
        </a>
        <a className={`nav-tab ${isRecruit ? "active" : ""}`} href="/recruit">
          Recruit
        </a>
        {navItems.map((item) => (
          <a className={pathname.startsWith(item.href) ? "active-link" : ""} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}
