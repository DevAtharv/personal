import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight mb-4 inline-block">
              atharv<span className="text-accent">.</span>
            </Link>
            <p className="text-foreground/60 max-w-sm mt-4">
              Building premium, high-converting websites and scalable business automation systems for modern consumer brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-foreground/60">
              <li><Link href="/work" className="hover:text-accent transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/DevAtharv" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-accent hover:text-white transition-all text-foreground/70">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/atharvagarwal0/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-accent hover:text-white transition-all text-foreground/70">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@atharvagarwal.in" className="p-2 rounded-full bg-foreground/5 hover:bg-accent hover:text-white transition-all text-foreground/70">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
          <p>&copy; {currentYear} Atharv Agarwal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
