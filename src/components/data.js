import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "CI/CD & Automation Pipeline",
  desc: "This section demonstrates a complete DevOps workflow including Docker containerization, automated CI/CD pipelines, and deployment of a modern web application using GitHub Actions.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Containerized Deployment",
      desc: "Application is packaged using Docker to ensure consistent environments across development and production.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Automated CI/CD Workflow",
      desc: "GitHub Actions is used to automate build, test, and deployment processes.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Improved Deployment Efficiency",
      desc: "Reduces manual deployment effort and increases reliability through automation.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "DevOps Infrastructure & Workflow",
  desc: "Showcasing practical DevOps implementation with focus on scalable deployment architecture, automation practices, and modern development workflows.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Docker-Based Environment",
      desc: "Ensures consistent runtime environments using containerization technology.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "GitHub Integration",
      desc: "Source control and CI/CD integration using GitHub for seamless workflow automation.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Scalable Deployment Design",
      desc: "Architecture designed for scalability, reliability, and efficient application delivery.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
