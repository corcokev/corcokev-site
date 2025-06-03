import { Page } from "@/shared/types";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: Page) => void;
}

const Experience = ({ setSelectedPage }: Props) => {
  return (
    <section id="experience" className="bg-secondary gap-16 py-3 md:h-full">
      <motion.div
        viewport={{ amount: "all" }}
        onViewportEnter={() => setSelectedPage(Page.Experience)}
        className="bg-primary justify-left mx-auto w-3/4 items-center rounded-lg p-10 md:flex md:h-3/4"
      >
        <div className="flex flex-col justify-between">
          <h1>
            <h1 className="text-4xl font-bold text-white">Experience</h1>
          </h1>

          <div className="mt-5">
            <div className="flex justify-between">
              <p className="text-start text-xl text-gray-300">
                Software Development Engineer
              </p>
              <p className="text-end text-xl text-gray-300">
                Arlington, VA - Pittsburgh, PA
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-start text-xl text-gray-300">AWS - Amazon</p>
              <p className="text-end text-xl text-gray-300">
                May 2023 - Present
              </p>
            </div>

            <ul className="list-disc pl-5">
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Designed a Two Person Review (2PR) approval system</i>
                  </b>{" "}
                  adopted by 65+ AWS teams to safely automate Availability Zone
                  deployments.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Led the build and launch of a web app</i>
                  </b>{" "}
                  used by 1,900+ teams to track AWS region build parity.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Revamped Agile processes</i>
                  </b>{" "}
                  and introduced sprint planning standards that increased team
                  release velocity from 2 to 6/year across 25 engineers.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Led high-scale migrations</i>
                  </b>{" "}
                  for a localization platform that improved dev efficiency for
                  2,000+ customers and enabling production launch.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Led incident response</i>
                  </b>{" "}
                  and improved operational runbooks for critical services,
                  including a localization service that delivers ~20% of text on
                  the Amazon shopping page.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Served as Scrum Master</i>
                  </b>{" "}
                  to integrate Agile processes into team culture.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Mentored intern</i>
                  </b>{" "}
                  to successful project delivery and full-time offer.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <div className="mt-3 flex justify-between">
              <p className="text-start text-xl text-gray-300">
                Software Development Engineer, Intern
              </p>
              <p className="text-end text-xl text-gray-300">Arlington, VA</p>
            </div>
            <div className="flex justify-between">
              <p className="text-start text-xl text-gray-300">AWS </p>
              <p className="text-end text-xl text-gray-300">
                May 2022 - August 2022
              </p>
            </div>

            <ul className="list-disc pl-5">
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Developed clean, thoroughly tested code</i>
                  </b>{" "}
                  with extensive documentation and minimal revisions.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Implemented and released a Python API client</i>
                  </b>{" "}
                  to query and mutate data; used by over 600 customers.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Proactively identified and resolved bugs</i>
                  </b>{" "}
                  in an existing codebase, improving stability and reliability.
                </p>
              </li>
              <li>
                <p className="text-lg text-gray-300">
                  <b>
                    <i>Actively contributed to Agile ceremonies</i>
                  </b>{" "}
                  including daily standups and biweekly sprint planning.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
