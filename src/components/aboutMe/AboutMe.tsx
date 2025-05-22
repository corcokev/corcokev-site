import { Page } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: Page) => void;
};

function AboutMe({ setSelectedPage }: Props) {
  return (
    <section id="about" className="gap-16 bg-secondary py-3 md:h-full">
      <motion.div onViewportEnter={() => setSelectedPage(Page.About)}>
        <div className="bg-primary rounded-lg p-10 md:flex mx-auto w-3/4 items-center justify-left md:h-3/4">
          <div className="">
            <h1 className="text-4xl font-bold text-white">About me</h1>
            <p className="text-lg text-gray-300">
              Full-stack software engineer with proven success designing and
              launching scalable cloud-based systems at AWS. Skilled in building
              production-ready APIs, infrastructure automation, and data-driven
              dashboards used by thousands of teams. Adept in AWS services
              (Lambda, DynamoDB, CloudFormation, etc.) with a track record of
              mentoring, incident leadership, and Agile process development.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMe;
