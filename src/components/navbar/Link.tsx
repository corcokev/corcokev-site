import { Page } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  page: Page;
  selectedPage: Page;
  setSelectedPage: (value: Page) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as Page;
  const upperCasePage = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-mgreen" : "text-white"} hover:text-mgreen transition duration-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {upperCasePage}
    </AnchorLink>
  );
};

export default Link;
