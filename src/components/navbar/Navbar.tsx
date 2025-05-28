import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { Page } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion, useAnimationControls } from "framer-motion";

interface Props {
  isTopOfPage: boolean;
  selectedPage: Page;
  setSelectedPage: (value: Page) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const flexLeft = "flex items-center justify-start";
  const flexRight = "flex items-center justify-end";
  const textColor = "text-white";
  const navBarBackground = isTopOfPage ? "" : "bg-secondary drop-shadow-xl";

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const containerControls = useAnimationControls();

  const containerVariants = {
    open: {
      width: "300px",
      transition: { type: "spring", damping: 15, duration: 0.3 },
    },
    close: {
      width: "0px",
      transition: { type: "spring", damping: 15, duration: 0.3 },
    },
  };

  useEffect(() => {
    if (isMenuToggled) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [isMenuToggled]);

  const handleOpenClose = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4`}
      >
        <div className={`${flexBetween} mx-auto w-3/4`}>
          <div className={`${flexLeft} w-full gap-16`}>
            <img className="logo" alt="logo" src={Logo} />
          </div>

          {isAboveMediumScreens ? (
            <div className={`${flexRight} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page={Page.Home}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={Page.About}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={Page.Skills}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={Page.Experience}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={Page.Contact}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          ) : isMenuToggled ? (
            <button className="rounded-full" onClick={() => handleOpenClose()}>
              <XMarkIcon className={`${textColor} h-6 w-6`} />
            </button>
          ) : (
            <button className="rounded-full" onClick={() => handleOpenClose()}>
              <Bars3Icon className={`${textColor} h-6 w-6`} />
            </button>
          )}
        </div>
      </div>
      <div className="w-full">
        {!isAboveMediumScreens && (
          <motion.div
            initial="close"
            animate={containerControls}
            variants={containerVariants}
            className="bg-secondary fixed right-0 bottom-0 flex h-full flex-col overflow-hidden pt-20 drop-shadow-xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isMenuToggled ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={`${flexRight} flex-col gap-10 text-center text-2xl`}
            >
              <Link
                page={Page.Home}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={Page.About}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={Page.Skills}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={Page.Experience}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={Page.Contact}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
