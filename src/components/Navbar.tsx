"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Architecture", href: "#architecture" },
    { name: "Tech Stack", href: "#techstack" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-black/60 via-indigo-950/40 to-black/60 backdrop-blur-2xl">

      <nav className="container flex items-center justify-between p-4 mx-auto">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(99,102,241,0.7)] animate-pulse" />

          <span className="text-lg font-bold text-white tracking-wide">
            DevOps Showcase
          </span>

        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.15)]">

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-300 rounded-full transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-pink-500/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <ThemeChanger />

          {/* Glow button instead of GitHub */}
          <button className="px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]">
            Live Demo
          </button>

        </div>

        {/* Mobile */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="md:hidden text-white text-xl">
                {open ? "✕" : "☰"}
              </Disclosure.Button>

              <Disclosure.Panel className="absolute left-0 right-0 top-16 bg-black/90 backdrop-blur-xl border-t border-white/10 p-4">

                <div className="flex flex-col gap-2">

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-gray-300 rounded-lg transition hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-pink-500/20"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <button className="mt-3 px-4 py-3 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Live Demo
                  </button>

                </div>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </nav>
    </div>
  );
};