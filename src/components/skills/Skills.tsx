import { Page } from "@/shared/types";
import { motion } from "framer-motion";
import {
  containerClass,
  sectionClass,
  headingClass,
  subtitleClass,
} from "../classUtils";
import javaIcon from "@/assets/Java.png";
import typescriptIcon from "@/assets/Typescript.png";
import reactIcon from "@/assets/React.png";
import pythonIcon from "@/assets/Python.png";
import nodeIcon from "@/assets/NodeJS.png";
import javascriptIcon from "@/assets/Javascript.png";
import awsIcon from "@/assets/AWS.png";
import gitIcon from "@/assets/Git.png";
import rubyIcon from "@/assets/Ruby.png";
import sqlIcon from "@/assets/SQL.png";
import graphqlIcon from "@/assets/GraphQL.png";
import dartIcon from "@/assets/Dart.png";
import flutterIcon from "@/assets/Flutter.png";
import daggerIcon from "@/assets/Dagger.png";
import guiceIcon from "@/assets/Guice.png";
import gcpIcon from "@/assets/GCP.png";

type Props = {
  setSelectedPage: (value: Page) => void;
};

const skillsFlexClass = "flex flex-wrap gap-6 justify-start";
const skillCardClass =
  "flex flex-col items-center rounded-lg bg-secondary p-6 shadow-md w-35 h-38 justify-center";
const skillIconClass = "mb-2 h-12 w-12 text-mgreen";
const skillNameClass = subtitleClass + " font-semibold text-white";
const skillLevelClass = "text-sm text-gray-400";

enum SkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

function Skills({ setSelectedPage }: Props) {
  return (
    <section id="skills" className={sectionClass}>
      <motion.div
        viewport={{ amount: "all" }}
        onViewportEnter={() => setSelectedPage(Page.Skills)}
        className={containerClass}
      >
        <div className="">
          <div>
            <h1 className={headingClass}>Skills</h1>
          </div>

          <div className={skillsFlexClass}>
            {/* Advanced */}
            <div className={skillCardClass}>
              <img src={javaIcon} className={skillIconClass} alt="Java" />
              <span className={skillNameClass}>Java</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            <div className={skillCardClass}>
              <img src={awsIcon} className={skillIconClass} alt="AWS" />
              <span className={skillNameClass}>AWS</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            <div className={skillCardClass}>
              <img
                src={typescriptIcon}
                className={skillIconClass}
                alt="Typescript"
              />
              <span className={skillNameClass}>TypeScript</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            <div className={skillCardClass}>
              <img
                src={javascriptIcon}
                className={skillIconClass}
                alt="Javascript"
              />
              <span className={skillNameClass}>JavaScript</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            <div className={skillCardClass}>
              <img src={reactIcon} className={skillIconClass} alt="React" />
              <span className={skillNameClass}>React</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            <div className={skillCardClass}>
              <img src={gitIcon} className={skillIconClass} alt="Git" />
              <span className={skillNameClass}>Git</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            <div className={skillCardClass}>
              <img src={daggerIcon} className={skillIconClass} alt="Dagger" />
              <span className={skillNameClass}>Dagger</span>
              <span className={skillLevelClass}>{SkillLevel.Advanced}</span>
            </div>
            {/* Intermediate */}
            <div className={skillCardClass}>
              <img src={guiceIcon} className={skillIconClass} alt="Guice" />
              <span className={skillNameClass}>Guice</span>
              <span className={skillLevelClass}>{SkillLevel.Intermediate}</span>
            </div>
            <div className={skillCardClass}>
              <img src={pythonIcon} className={skillIconClass} alt="Python" />
              <span className={skillNameClass}>Python</span>
              <span className={skillLevelClass}>{SkillLevel.Intermediate}</span>
            </div>
            <div className={skillCardClass}>
              <img src={nodeIcon} className={skillIconClass} alt="Node" />
              <span className={skillNameClass}>Node.js</span>
              <span className={skillLevelClass}>{SkillLevel.Intermediate}</span>
            </div>
            <div className={skillCardClass}>
              <img src={rubyIcon} className={skillIconClass} alt="Ruby" />
              <span className={skillNameClass}>Ruby</span>
              <span className={skillLevelClass}>{SkillLevel.Intermediate}</span>
            </div>
            <div className={skillCardClass}>
              <img src={sqlIcon} className={skillIconClass} alt="SQL" />
              <span className={skillNameClass}>SQL</span>
              <span className={skillLevelClass}>{SkillLevel.Intermediate}</span>
            </div>
            <div className={skillCardClass}>
              <img src={graphqlIcon} className={skillIconClass} alt="GraphQL" />
              <span className={skillNameClass}>GraphQL</span>
              <span className={skillLevelClass}>{SkillLevel.Intermediate}</span>
            </div>
            {/* Beginner */}
            <div className={skillCardClass}>
              <img src={flutterIcon} className={skillIconClass} alt="Flutter" />
              <span className={skillNameClass}>Flutter</span>
              <span className={skillLevelClass}>{SkillLevel.Beginner}</span>
            </div>
            <div className={skillCardClass}>
              <img src={dartIcon} className={skillIconClass} alt="Dart" />
              <span className={skillNameClass}>Dart</span>
              <span className={skillLevelClass}>{SkillLevel.Beginner}</span>
            </div>
            <div className={skillCardClass}>
              <img src={gcpIcon} className={skillIconClass} alt="GCP" />
              <span className={skillNameClass}>GCP</span>
              <span className={skillLevelClass}>{SkillLevel.Beginner}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
