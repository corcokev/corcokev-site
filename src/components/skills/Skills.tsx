import { Page } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: Page) => void;
};

function Skills({ setSelectedPage }: Props) {
  return (
    <section id="skills" className="bg-secondary gap-16 py-3 md:h-full">
      <motion.div
        viewport={{ amount: "all" }}
        onViewportEnter={() => setSelectedPage(Page.Skills)}
        className="bg-primary justify-left mx-auto w-3/4 items-center rounded-lg p-10 md:flex md:h-3/4"
      >
        <div className="">
          <div>
            <h1 className="text-4xl font-bold text-white">Skills</h1>
          </div>

          <div className="mt-5 text-lg text-gray-300">
            <ul>
              <li>
                <b>Languages</b>: Java, Typescript, Javascript, Python, Ruby,
                SQL, GraphQL, Dart
              </li>
              <li>
                <b>Frameworks</b>: React, Flutter, Node.js, Dagger, Guice
              </li>
              <li>
                <b>Cloud & DevOps</b>: AWS (Lambda, API Gateway, DynamoDB,
                CloudFormation, SQS, SNS, S3, Step Functions), Google Cloud,
                CI/CD, Cloud Monitoring & Rollbacks
              </li>
              <li>
                <b>Tools</b>: Git, VS Code, IntelliJ, Figma, Adobe XD, Balsamiq,
                UNIX, Linux
              </li>
              <li>
                <b>Practices</b>: Agile, Sprint Planning, Code Reviews, Incident
                Mangement, Operational Excellence
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
