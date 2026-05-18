import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">

        {/* Card 1 */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-trueGray-800 px-14 py-14 rounded-2xl">
            <p className="text-2xl leading-normal">
              CI/CD pipeline implemented using GitHub Actions for automated build, test, and deployment of a containerized application.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-trueGray-800 px-14 py-14 rounded-2xl">
            <p className="text-2xl leading-normal">
              Docker containerization ensures consistent environments across development, staging, and production systems.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-trueGray-800 px-14 py-14 rounded-2xl">
            <p className="text-2xl leading-normal">
              Automated deployment workflow reduces manual intervention and improves reliability of application delivery.
            </p>
          </div>
        </div>

      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
