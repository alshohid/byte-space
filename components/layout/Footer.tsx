import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse">
      <Container>
        {/* Main Footer */}
        <div className="section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xl font-extrabold"
              >
                <span className="text-2xl">🚀</span>
                <span>{SITE_NAME}</span>
              </Link>
              <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
                বাংলায় সেরা অনলাইন লার্নিং প্ল্যাটফর্ম। আপনার স্কিল
                ডেভেলপমেন্ট জার্নি শুরু করুন আজই।
              </p>
              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-4">
                {["Facebook", "YouTube", "LinkedIn", "GitHub"].map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="w-9 h-9 rounded-full bg-bg-dark-secondary flex items-center justify-center text-gray-400 hover:text-text-inverse hover:bg-primary transition-colors"
                    aria-label={name}
                  >
                    <span className="text-sm">{name[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.platform.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teaching Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                Teaching
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.teaching.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/terms" className="hover:text-gray-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-gray-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
