import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR WORKS", href: "/works" },
  { label: "GET IN TOUCH", href: "/contact" },
] as const;

const socialLinks = [
  { label: "BEHANCE", href: "https://behance.net" },
  { label: "DRIBBLE", href: "https://dribbble.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
] as const;

const Footer = () => {
  return (
    <footer className="font-sans bg-foreground text-background">
      <div className="w-full h-[80vh] bg-primary flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <h2 className="text-5xl md:text-8xl font-bold text-center leading-tight md:leading-none">Let&apos;s build something great together</h2>
          <div className="flex justify-center mt-16 lg:mt-20">
            <a href='mailto:inthecreativesphere@gmail.com' target='_blank' className=' bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 justify-center text-sm font-medium hover:bg-black/80 transition-colors duration-300'>Get in touch <ArrowRight className='w-4 h-4' /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20 lg:px-16">
        {/* Top: info columns + copyright */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="grid flex-1 grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-3 lg:gap-10">
            {/* Navigation */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a3522d]">
                NAVIGATION:
              </p>
              <nav aria-label="Footer navigation" className="flex flex-col gap-2">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-white/80"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a3522d]">
                SOCIALS:
              </p>
              <ul className="flex flex-col gap-2">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-white/80"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio info */}
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#a3522d]">
                STUDIO INFO:
              </p>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-white">
                <li>Located in: Lagos, NG</li>
                <li>
                  Work:{" "}
                  <a
                    href="mailto:inthecreativesphere@gmail.com"
                    className="underline-offset-2 hover:underline"
                  >
                    inthecreativesphere@gmail.com
                  </a>
                </li>
                <li>
                  Call:{" "}
                  <a
                    href="tel:09057051623"
                    className="underline-offset-2 hover:underline"
                  >
                    09057051623
                  </a>
                </li>
                <li>Business hours: Mon-Fri, 9:00-18:00</li>
              </ul>
            </div>
          </div>

          <p className="shrink-0 text-xs leading-relaxed text-neutral-500 lg:max-w-[220px] lg:text-right">
            © 2026 Creative sphere. All rights reserved.
          </p>
        </div>

        {/* Brand */}
        <h2 className="mt-16 hidden lg:block text-[clamp(2.75rem,12vw,9rem)] font-bold leading-[0.95] tracking-tight text-white md:mt-24">
          ( Creative sphere )
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
