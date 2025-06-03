import { Page } from "@/shared/types";
import Portrait from "@/assets/Portrait.jpg";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: Page) => void;
}

function Home({ setSelectedPage }: Props) {
  return (
    <section id="home" className="bg-secondary gap-16 pt-10 pb-3 md:h-full">
      <motion.div
        viewport={{ amount: "all" }}
        onViewportEnter={() => setSelectedPage(Page.Home)}
        className="bg-primary mx-auto mt-10 w-3/4 items-center justify-center rounded-lg p-10 md:flex md:h-3/4"
      >
        <div className="m-5 flex basis-1/2 flex-col justify-center md:justify-start">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Kevin Corcoran
            </h1>
            <div className="bg-mgreen my-2 h-1 w-full rounded-sm"></div>
          </div>

          <p className="text-lg text-gray-300">Software Development Engineer</p>
          <p className="text-lg text-gray-300">Pittsburgh, PA</p>
        </div>

        <div className="m-5 flex basis-1/2 justify-center md:justify-end">
          <img
            src={Portrait}
            alt="Portrait"
            className="rounded-full shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
