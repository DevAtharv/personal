import Link from "next/link";
import { Mail } from "lucide-react";
import { contactEmail, githubUrl, linkedInUrl, navLinks } from "@/lib/site-content";

function GitHubMark() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.23.7-3.91-1.39-3.91-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.74 0-1.27.45-2.3 1.2-3.11-.12-.29-.52-1.48.11-3.07 0 0 .98-.31 3.16 1.19A10.87 10.87 0 0 1 12 6.01c.98 0 1.96.13 2.88.39 2.18-1.5 3.16-1.19 3.16-1.19.63 1.59.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.11 0 4.46-2.72 5.45-5.31 5.74.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.47H5.86V18h2.48ZM7.1 9.51c.86 0 1.4-.57 1.4-1.28-.02-.73-.54-1.28-1.38-1.28-.84 0-1.39.55-1.39 1.28 0 .71.53 1.28 1.35 1.28h.02ZM18.24 18v-4.28c0-2.29-1.22-3.35-2.85-3.35-1.31 0-1.9.72-2.23 1.23v-1.07h-2.48c.03.7 0 7.47 0 7.47h2.48v-4.17c0-.22.02-.45.08-.61.18-.45.58-.91 1.25-.91.88 0 1.24.68 1.24 1.67V18h2.51Z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { label: "GitHub", href: githubUrl, icon: <GitHubMark /> },
    { label: "LinkedIn", href: linkedInUrl, icon: <LinkedInMark /> },
    { label: "Email", href: `mailto:${contactEmail}`, icon: <Mail size={19} /> },
  ];

  return (
    <footer className="border-t border-white/10 bg-background py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" className="inline-block font-heading text-2xl font-bold tracking-tight">
              atharv<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-md text-foreground/60">
              Vibe coding practical software, automations, and digital systems for real business problems.
            </p>
            <a href={`mailto:${contactEmail}`} className="mt-5 inline-flex font-semibold text-accent hover:text-accent-hover">
              {contactEmail}
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-3 text-foreground/60">
              {navLinks.map((link) => (
                <li key={link.path}><Link href={link.path} className="hover:text-accent transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-foreground/70 transition-all hover:border-accent hover:bg-accent hover:text-black"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-foreground/45 md:flex-row md:items-center">
          <p>&copy; {currentYear} Atharv Agarwal. All rights reserved.</p>
          <p>Real solutions for real problems.</p>
        </div>
      </div>
    </footer>
  );
}
