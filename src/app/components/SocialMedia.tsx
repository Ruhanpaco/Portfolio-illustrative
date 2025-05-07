import { FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa';
import { motion } from 'framer-motion'; 
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from 'react-icons/lia';
const SocialMedia = () => {
  return (
    <motion.div 
    className="flex space-x-4"
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, delay: 0.3 }}
    >
      <a
        href="https://twitter.com/Ruhanpaco"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-100 transition duration-300"
      >
        <FaTwitter className="text-black" size={24} />
      </a>
      <a
        href="https://github.com/Ruhanpaco"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-100 transition duration-300"
      >
        <FaGithub className="text-black" size={24} />
      </a>
      <a
        href="https://instagram.com/FRuhanpacodev"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-100 transition duration-300"
      >
        <FaInstagram className="text-black" size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ruhan-pacolli-a982a2364/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-100 transition duration-300"
      >
        <LiaLinkedin className="text-black" size={24} />
      </a>
      <a
      href="mailto:hi@ruhanpacolli.online"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border-2 border-black rounded-lg p-3 hover:bg-gray-100 transition duration-300"
      >
      <MdEmail className="text-black" size={24} />
      </a>
    </motion.div>
  );
};

export default SocialMedia;
