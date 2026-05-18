import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="DevOps Workflow Overview"
        title=" CI/CD & Deployment Pipeline"
      > This project demonstrates a complete DevOps workflow including Docker containerization, CI/CD automation using GitHub Actions, and deployment of a modern web application.
        It focuses on automation, reproducible environments, and streamlined delivery pipelines.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle=""
        title="How the Deployment Works"
      >
         This project follows a fully automated CI/CD pipeline 
         including build, containerization, and deployment stages.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle=""
        title="System Reliability & Automation"
      >
        This project demonstrates real-world DevOps practices including
        CI/CD automation, containerized deployments, and infrastructure consistency using Docker and GitHub Actions.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">

      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
