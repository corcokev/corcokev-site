import { Page } from "@/shared/types";
import { motion } from "framer-motion";
import {
  containerClass,
  sectionClass,
  headingClass,
  subtitleClass,
} from "../classUtils";

interface Props {
  setSelectedPage: (value: Page) => void;
}

const jobTitleClass = "text-start text-xl text-gray-300 font-semibold";
const jobLocationClass = "text-end text-xl text-gray-300";
const companyClass = "text-start text-xl text-gray-300";
const dateClass = "text-end text-xl text-gray-300";
const listClass = "list-disc pl-5 space-y-2";
const listItemTitleClass = subtitleClass + " font-medium italic";

const Experience = ({ setSelectedPage }: Props) => (
  <section id="experience" className={sectionClass}>
    <motion.div
      viewport={{ amount: "all" }}
      onViewportEnter={() => setSelectedPage(Page.Experience)}
      className={containerClass}
    >
      <div className="flex flex-col justify-between">
        <h1 className={headingClass}>Experience</h1>

        {/* Full-time Experience */}
        <div className="mb-8">
          <div className="flex justify-between">
            <p className={jobTitleClass}>Software Development Engineer II</p>
            <p className={jobLocationClass}>Arlington, VA - Pittsburgh, PA</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className={companyClass}>AWS - Amazon</p>
            <p className={dateClass}>May 2023 - Present</p>
          </div>
          <ul className={listClass}>
            <li>
              <span className={listItemTitleClass}>
                Designed a Two Person Review (2PR) approval system
              </span>{" "}
              adopted by 65+ AWS teams to safely automate Availability Zone
              deployments.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Led the build and launch of a web app
              </span>{" "}
              used by 1,900+ teams to track AWS region build parity.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Revamped Agile processes
              </span>{" "}
              and introduced sprint planning standards that increased team
              release velocity from 2 to 6/year across 25 engineers.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Led high-scale migrations
              </span>{" "}
              for a localization platform that improved dev efficiency for
              2,000+ customers and enabled production launch.
            </li>
            <li>
              <span className={listItemTitleClass}>Led incident response</span>{" "}
              and improved operational runbooks for critical services, including
              a localization service that delivers ~20% of text on the Amazon
              shopping page.
            </li>
            <li>
              <span className={listItemTitleClass}>Served as Scrum Master</span>{" "}
              to integrate Agile processes into team culture.
            </li>
            <li>
              <span className={listItemTitleClass}>Mentored intern</span> to
              successful project delivery and full-time offer.
            </li>
          </ul>
        </div>

        {/* Internship Experience */}
        <div>
          <div className="flex justify-between">
            <p className={jobTitleClass}>
              Software Development Engineer, Intern
            </p>
            <p className={jobLocationClass}>Arlington, VA</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className={companyClass}>AWS</p>
            <p className={dateClass}>May 2022 - August 2022</p>
          </div>
          <ul className={listClass}>
            <li>
              <span className={listItemTitleClass}>
                Developed clean, thoroughly tested code
              </span>{" "}
              with extensive documentation and minimal revisions.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Implemented and released a Python API client
              </span>{" "}
              to query and mutate data; used by over 600 customers.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Proactively identified and resolved bugs
              </span>{" "}
              in an existing codebase, improving stability and reliability.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Actively contributed to Agile ceremonies
              </span>{" "}
              including daily standups and biweekly sprint planning.
            </li>
          </ul>
        </div>

        {/* Carpentry Experience */}
        <div className="mt-8">
          <div className="flex justify-between">
            <p className={jobTitleClass}>Carpenter</p>
            <p className={jobLocationClass}>Irwin, PA</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className={companyClass}>Three Kelly Construction</p>
            <p className={dateClass}>2015 – 2020</p>
          </div>
          <ul className={listClass}>
            <li>
              <span className={listItemTitleClass}>
                Managed custom projects from concept to delivery
              </span>
              , ensuring precision, safety, and quality under strict deadlines.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Applied creative problem-solving
              </span>{" "}
              to design and implement solutions for unique client requirements.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Coordinated with clients, vendors, and team members
              </span>{" "}
              to meet project goals on time and within budget.
            </li>
            <li>
              <span className={listItemTitleClass}>
                Maintained a high level of craftsmanship and attention to detail
              </span>
              , qualities carried forward into engineering work.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience;
