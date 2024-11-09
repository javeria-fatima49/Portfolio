import Image from "next/image"
export default function Contact() {
    return (
      
        <div className="bg-gradient-to-br from-gray-600 via-black to-gray-600 flex text-center p-8 h-screen ">
        <section id="contact" className="flex-grow animate-slideBottom">
        <h2 className=" md:text-3xl font-bold mb-4 font-serif">Contact Me</h2>
        <p className="mb-6 ">If you have any questions or would like to get in touch, please fill out the form below:</p>
        <form action="https://formspree.io/your-email@example.com" method="POST" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-serif">Name:</label>
            <input type="text" id="name" name="name" required className="w-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 font-serif">Email:</label>
            <input type="email" id="email" name="email" required className="w-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 font-serif">Message:</label>
            <textarea id="message" name="message" rows={4} required className="w-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-black" />
          </div>
          <div>
         <button type="submit" id="submit-button" className="font-serif bg-gray-800 text-white py-3 px-12 rounded text-left transition-transform duration-300 hover:bg-gray-900  hover:shadow-xl animate-pulse">
           Submit
           </button>
          </div>
        </form>
      </section>
  <footer className="bg-[#222222] p-4 fixed bottom-0 left-0 right-0 font-sans" >
        <p className="text-center text-white">Follow me for more updates</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
            <Image src="/image/linkdin.jpg" alt="LinkedIn" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
          </a>
          <a href="https://github.com/javeria-fatima49" target="_blank">
            <Image src="/image/github.png" alt="GitHub" width={30} height={30} className=" shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
          </a>
          </div>
        <p className="text-center text-white mt-4">fatimajaveria409@gmail.com</p>
      </footer>
        </div>
)}