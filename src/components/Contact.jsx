const Contact = () => (
    <section id="contact" className="py-16 bg-gradient-to-b from-teal-500 to-teal-700 text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-100 text-gray-900"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-100 text-gray-900"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-100 text-gray-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  