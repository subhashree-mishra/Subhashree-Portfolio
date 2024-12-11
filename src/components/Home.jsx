import { motion } from 'framer-motion'; // Import framer-motion
import profilePic from '../assets/profile.jpeg';

const Home = () => (
  <section
    id="home"
    className="h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col items-center justify-center text-center"
  >
    <div className="mb-6">
      <img
        src={profilePic}
        alt="Subhashree Mishra"
        className="w-36 h-36 rounded-full shadow-md border-4 border-yellow-300 object-cover"
      />
    </div>
    {/* Apply framer-motion animation and CSS rainbow text animation */}
    <motion.h1
      className="text-5xl font-bold mb-4 rainbow-text"
      initial={{ opacity: 0, y: 20 }} // Initial state (invisible and from below)
      animate={{ opacity: 1, y: 0 }}  // Final state (visible and in place)
      transition={{ duration: 1 }}
    >
      Hi, I am Subhashree Mishra
    </motion.h1>
    <p className="text-lg text-gray-300 max-w-md">
      A passionate front-end developer creating sleek and responsive designs.
    </p>
    <a
      href="#projects"
      className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
    >
      See My Work
    </a>
  </section>
);

export default Home;
