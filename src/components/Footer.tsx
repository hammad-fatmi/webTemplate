import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <div className="relative mt-20 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <Container>

        <div className="grid max-w-screen-xl grid-cols-1 gap-12 py-16 mx-auto lg:grid-cols-3">

          {/* Left Side */}
          <div>
            <Link
              href="/"
              className="flex items-center space-x-3 text-2xl font-bold text-white"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                ⚡
              </div>

              <span>DevOps Workflow Showcase</span>
            </Link>

            <p className="max-w-md mt-6 leading-relaxed text-gray-400">
              A modern DevOps portfolio project demonstrating Docker
              containerization, CI/CD automation using GitHub Actions,
              cloud-ready deployment workflows, and scalable infrastructure practices.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Technologies
            </h3>

            <div className="flex flex-col space-y-3 text-gray-400">

              <span className="transition-all duration-300 hover:text-indigo-400 hover:translate-x-1">
                Docker Containerization
              </span>

              <span className="transition-all duration-300 hover:text-indigo-400 hover:translate-x-1">
                GitHub Actions CI/CD
              </span>

              <span className="transition-all duration-300 hover:text-indigo-400 hover:translate-x-1">
                Kubernetes Deployment
              </span>

              <span className="transition-all duration-300 hover:text-indigo-400 hover:translate-x-1">
                Cloud Infrastructure
              </span>

            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Project Repository
            </h3>

            <a
              href="https://github.com/hammad-fatmi/webTemplate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 font-medium text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
            >
              <Github />
              <span>View Source Code</span>
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-6 text-sm text-center text-gray-500 border-t border-white/10">
          © {new Date().getFullYear()} DevOps Workflow Showcase. Built with
          Next.js, Tailwind CSS, Docker, and GitHub Actions.
        </div>

      </Container>
    </div>
  );
}

/* ---------------- GITHUB ICON ---------------- */

const Github = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.17c-3.25.71-3.94-1.56-3.94-1.56-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.76.4-1.27.72-1.56-2.6-.3-5.34-1.3-5.34-5.77 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.2 3.2-1.2.64 1.62.24 2.82.12 3.12.75.82 1.2 1.86 1.2 3.14 0 4.48-2.75 5.47-5.37 5.76.42.36.8 1.08.8 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);