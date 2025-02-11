import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div id="social" className="bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Social Links
      </h2>

      <section className="flex justify-center space-x-4 p-6 ">
        <a
          href="https://github.com/raselm282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 text-3xl transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/raselm282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl transition duration-300"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/raselm282"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 text-3xl transition duration-300"
        >
          <FaFacebook />
        </a>
        
        <a
          href="https://twitter.com/i-have-no-account"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-3xl transition duration-300"
        >
          <FaTwitter />
        </a>
      </section>
    </div>
  );
};

export default SocialLinks;
