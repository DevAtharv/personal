import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactEmail, githubUrl, linkedInUrl } from "@/lib/site-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { label: "GitHub", href: githubUrl, icon: Github },
    { label: "LinkedIn", href: linkedInUrl, icon: Linkedin },
    { label: "Email", href: `mailto:${contactEmail}`, icon: Mail },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" className="inline-block font-heading text-2xl font-bold tracking-tight">
              atharv<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-md text-foreground/60">
              Building focused websites and inquiry systems for food, FMCG, D2C, spice, and consumer brands.
            </p>
            <a href={`mailto:${contactEmail}`} className="mt-5 inline-flex font-semibold text-accent hover:text-accent-hover">
              {contactEmail}
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-3 text-foreground/60">
              <li><Link href="/work" className="hover:text-accent transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/10 bg-foreground/5 text-foreground/70 transition-all hover:border-accent hover:bg-accent hover:text-white"
                >
                  <social.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-foreground/10 pt-6 text-sm text-foreground/45 md:flex-row md:items-center">
          <p>&copy; {currentYear} Atharv Agarwal. All rights reserved.</p>
          <p>Built for measurable brand outcomes.</p>
        </div>
      </div>
    </footer>
  );
}
