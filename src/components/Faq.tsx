"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">

        {faqdata.map((item) => (
          <div
            key={item.question}
            className="mb-5 relative group p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-5 py-5 text-left text-gray-900 dark:text-gray-100 rounded-2xl bg-white/80 dark:bg-trueGray-900/80 backdrop-blur-md hover:bg-white dark:hover:bg-trueGray-800 transition-all duration-300">

                    <span className="font-medium text-base md:text-lg">
                      {item.question}
                    </span>

                    <ChevronUpIcon
                      className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${
                        open ? "rotate-180 text-pink-400" : ""
                      }`}
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="px-5 pt-4 pb-5 text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-trueGray-900/70 backdrop-blur-md rounded-b-2xl">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}

      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What does this project demonstrate?",
    answer:
      "This project demonstrates a complete DevOps workflow including Docker containerization, CI/CD automation using GitHub Actions, and deployment of a modern web application.",
  },
  {
    question: "How is CI/CD implemented in this project?",
    answer:
      "CI/CD is implemented using GitHub Actions to automate build, test, and deployment processes whenever code is pushed to the repository.",
  },
  {
    question: "Is Docker used in this project?",
    answer:
      "Yes, Docker is used to containerize the application, ensuring consistent environments across development, staging, and production.",
  },
  {
    question: "Is this project cloud-ready?",
    answer:
      "Yes, the architecture is designed to be cloud-ready and can be deployed on platforms like AWS, Azure, or any container-supported environment.",
  },
];
