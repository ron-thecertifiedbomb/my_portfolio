import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

export function AppFooter() {
  return (
    <footer className="w-full py-6 px-4 flex flex-col items-center gap-5">
      <div className="flex items-center gap-4">
        <a
          href="https://www.facebook.com/lizardinteractive.rrs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6 text-blue-600 hover:opacity-80" />
        </a>
        <a
          href="https://www.linkedin.com/in/ronan-sibunga-2747a5252/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 text-blue-700 hover:opacity-80" />
        </a>
        <a
          href="https://www.youtube.com/@ronansibunga8148"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="w-6 h-6 text-red-600 hover:opacity-80" />
        </a>
        <a
          href="https://github.com/ron-thecertifiedbomb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 text-gray-900 hover:opacity-80" />
        </a>
        <a
          href="https://aboutme.google.com/u/0/?referer=gplus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google About Me"
        >
          <FaGoogle className="w-6 h-6 text-gray-700 hover:opacity-80" />
        </a>
      </div>
      <p className="text-center text-sm md:text-base">
        © {new Date().getFullYear()} Ronan Ramos Sibunga
      </p>
    </footer>
  );
}
