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
          <i>
            Carpenter and Touring Musician turned Full Stack Software Engineer:
          </i>
        </p>
        <p>
          <br />
          I’m a software engineer with a passion for building secure, scalable
          systems that make a real impact. At Amazon Web Services, I’ve designed
          and launched backend services, APIs, and operational tools used by
          thousands of teams worldwide—projects that demanded precision,
          collaboration, and a relentless focus on reliability.
          <br />
          <br />
          Before entering tech, I spent five years as a carpenter, managing
          projects from concept to delivery. That hands-on experience taught me
          how to think creatively under constraints, balance quality with
          deadlines, and collaborate closely with clients and teammates—skills I
          carry into every engineering challenge.
          <br />
          <br />I thrive in environments where I can combine technical expertise
          with problem-solving creativity, whether it’s automating multi-region
          deployments, improving developer workflows, or enhancing system
          observability. My goal is always the same: deliver high-quality
          solutions that empower users, scale effectively, and stand the test of
          time.
        </p>
      </div>
    </motion.div>
  </section>
);

export default AboutMe;
