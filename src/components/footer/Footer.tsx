import githubIcon from "@/assets/Github.png";
import linkedinIcon from "@/assets/LinkedIn.png";

const Footer = () => (
  <footer className="bg-secondary flex w-full flex-row items-center justify-center pt-3 pb-6">
    <div className="flex gap-6">
      <a
        href="https://github.com/corcokev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="h-7 w-7 hover:opacity-80"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/corcokev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          className="h-7 w-7 hover:opacity-80"
        />
      </a>
      <div className="mt-2 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Kevin Corcoran
      </div>
    </div>
  </footer>
);

export default Footer;
