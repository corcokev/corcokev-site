import { Page } from "@/shared/types";
import Portrait from "@/assets/portrait.jpg";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: Page) => void;
}

function Home({ setSelectedPage }: Props) {
  return (
    <section id="home" className="gap-16 bg-secondary pt-10 pb-3 md:h-full">
      <motion.div onViewportEnter={() => setSelectedPage(Page.Home)}>
        <div className="bg-primary rounded-lg mt-10 p-10 md:flex mx-auto w-3/4 items-center justify-center md:h-3/4">
          <div className="flex basis-1/2 justify-center m-5 md:justify-start flex-col">
            <h1 className="text-6xl font-bold text-white">Kevin Corcoran</h1>
            <div className="w-4/5 h-1 bg-mgreen my-2 rounded-sm"></div>
            <p className="text-lg text-gray-300">
              Software Development Engineer
            </p>
            <p className="text-lg text-gray-300">Pittsburgh, PA</p>
          </div>

          <div className="flex basis-1/2 justify-center m-5 md:justify-end">
            <img
              src={Portrait}
              alt="Portrait"
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
