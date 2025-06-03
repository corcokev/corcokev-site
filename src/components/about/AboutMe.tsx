import { Page } from "@/shared/types";
import { motion } from "framer-motion";
import {
  containerClass,
  sectionClass,
  headingClass,
  subtitleClass,
} from "../classUtils";

type Props = {
  setSelectedPage: (value: Page) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => (
  <section id="about" className={sectionClass}>
    <motion.div
      viewport={{ amount: "all" }}
      onViewportEnter={() => setSelectedPage(Page.About)}
      className={containerClass}
    >
      <div>
        <h1 className={headingClass}>About Me</h1>
        <p className={subtitleClass}>
          Full-stack software engineer with proven success designing and
          launching scalable cloud-based systems at AWS. Skilled in building
          production-ready APIs, infrastructure automation, and data-driven
          dashboards used by thousands of teams. Adept in AWS services (Lambda,
          DynamoDB, CloudFormation, etc.) with a track record of mentoring,
          incident leadership, and Agile process development.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutMe;
