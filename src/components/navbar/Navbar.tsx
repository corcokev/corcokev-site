import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { Page } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

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
  const navBarBackground = isTopOfPage ? "" : "bg-secondary shadow-md";

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

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
          ) : (
            <button
              className="rounded-full"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className={`${textColor} h-6 w-6`} />
            </button>
          )}

          {isMenuToggled && !isAboveMediumScreens && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary drop-shadow-xl">
              <div className={`${flexRight} p-12`}>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className={`${textColor} h-6 w-6`} />
                </button>
              </div>
              <div
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
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
