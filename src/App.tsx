import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { Page } from "./shared/types";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(Page.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(Page.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Selected Page:", selectedPage);

  return (
    <>
      <div className="app">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <AboutMe setSelectedPage={setSelectedPage} />
        <Skills setSelectedPage={setSelectedPage} />
        <Experience setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    </>
  );
}

export default App;
