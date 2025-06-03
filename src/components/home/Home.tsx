import { Page } from "@/shared/types";
import Portrait from "@/assets/Portrait.jpg";
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

const leftColClass =
  "m-5 flex basis-1/2 flex-col justify-center md:justify-start";
const nameBlockClass = "mb-2 flex flex-col items-start justify-center";
const nameClass = headingClass + " md:text-6xl";
const dividerClass = "bg-mgreen my-2 h-1 w-full rounded-sm";
const rightColClass = "m-5 flex basis-1/2 justify-center md:justify-end";
const imgClass = "rounded-full shadow-lg";

const Home = ({ setSelectedPage }: Props) => (
  <section id="home" className={sectionClass + " pt-20"}>
    <motion.div
      viewport={{ amount: "all" }}
      onViewportEnter={() => setSelectedPage(Page.Home)}
      className={containerClass}
    >
      <div className={leftColClass}>
        <div className={nameBlockClass}>
          <h1 className={nameClass}>Kevin Corcoran</h1>
          <div className={dividerClass} />
        </div>
        <p className={subtitleClass}>Software Development Engineer</p>
        <p className={subtitleClass}>Pittsburgh, PA</p>
      </div>
      <div className={rightColClass}>
        <img src={Portrait} alt="Portrait" className={imgClass} />
      </div>
    </motion.div>
  </section>
);

export default Home;
