import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-gradient-to-br from-gray-700 via-black to-gray-700 text-center px-16 items-center text-white">
      <div className="animate-slideLeft justify-items-center">
        <h1 className="p-4 text-3xl font-bold md:text-5xl mb-0 text-center font-serif">My Projects</h1>
        <p className="px-6 text-md md:text-md font-sans">
          Here are some of the projects I&apos;ve developed using HTML, CSS, and Next.js, each focusing on creating responsive, interactive, and 
          user-friendly websites.
          These projects highlight my skills in front-end development and modern web technologies. Feel free to explore the details below!
        </p>

        <h3 className="p-6 text-2xl font-semibold md:text-4xl mb-0 font-serif">Milestone 1</h3>
        <div className="flex-1 w-96 md:ml-8 bg-[#2d2d2d] transform transition duration-300 hover:scale-105 animate-fadeIn">
          <Image
            src="/image/milestone 1.png"
            alt="Profile"
            layout="responsive"
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="px-6 text-md md:text-md font-sans">The first milestone of my project, developed with HTML/CSS, focusing on creating the foundational
             structure and layout.</p>
          <ul>
            <li>GitHub:<a className="underline text-blue-400" href="https://github.com/javeria-fatima49/resume.git">Milestone 1</a></li>
            <li>Vercel:<a className="underline text-blue-400" href="http://resume-kohl-nine.vercel.app/">Milestone 1</a></li>
          </ul>
        </div>

        <h3 className="p-6 text-2xl font-semibold md:text-4xl mb-0 font-serif">Milestone 2</h3>
        <div className="flex-1 w-96 md:ml-8 bg-[#2d2d2d] transform transition duration-300 hover:scale-105 animate-fadeIn">
          <Image
            src="/image/milestone 2.png"
            alt="Profile"
            layout="responsive"
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="px-6 text-md md:text-md font-sans">Milestone 2 highlights my skills in building dynamic, interactive elements using HTML/CSS while 
            ensuring a smooth and responsive user experience.</p>
          <ul>
            <li>GitHub:<a className="underline text-blue-400" href="https://github.com/javeria-fatima49/milestone-3.git">Milestone 2</a></li>
            <li>Vercel:<a className="underline text-blue-400" href="https://milestone-3-one-henna.vercel.app/">Milestone 2</a></li>
          </ul>
        </div>

        <h3 className="p-6 text-2xl font-semibold md:text-4xl mb-0 font-serif">Milestone 3</h3>
        <div className="flex-1 w-96 md:ml-8 bg-[#2d2d2d] transform transition duration-300 hover:scale-105 animate-fadeIn">
          <Image
            src="/image/milestone 3.png"
            alt="Profile"
            layout="responsive"
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="px-6 text-md md:text-md font-sans">In Milestone 3, I added functionality to generate user-specific content dynamically, using HTML/CSS, 
            to enhance the overall interactivity of the project.</p>
          <ul>
            <li>GitHub:<a className="underline text-blue-400" href="https://github.com/javeria-fatima49/milestone-4.git">Milestone 3</a></li>
            <li>Vercel:<a className="underline text-blue-400" href="https://milestone-4-orpin.vercel.app/">Milestone 3</a></li>
          </ul>
        </div> 

        <h3 className="p-6 text-2xl font-semibold md:text-4xl mb-0 font-serif">Calculator</h3>
        <div className="flex-1 w-96 md:ml-8 bg-[#2d2d2d] transform transition duration-300 hover:scale-105 animate-fadeIn">
          <Image
            src="/image/calculator.png"
            alt="Profile"
            layout="responsive"
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="px-6 text-md md:text-md font-sans">A responsive calculator app built with HTML and CSS.
             It demonstrates my skills in creating clean, interactive user interfaces with dynamic functionality.</p>
          <ul>
            <li>GitHub:<a className="underline text-blue-400" href="https://github.com/javeria-fatima49/calculator-.git ">Calculator</a></li>
            <li>Vercel:<a className="underline text-blue-400" href="https://calculator-vert-ten-77.vercel.app/">Calculator</a></li>
          </ul>
        </div>  

        <h3 className="p-6 text-2xl font-semibold md:text-4xl mb-0 font-serif">Portfolio</h3>
        <div className="flex-1 w-96 md:ml-8 bg-[#2d2d2d] transform transition duration-300 hover:scale-105 animate-fadeIn">
          <Image
            src="/image/portfolio.png"
            alt="Profile"
            layout="responsive"
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="px-6 text-md md:text-md font-sans">A personal portfolio built with HTML/CSS showcasing my web development skills, including responsive design and
             modern user interfaces.</p>
          <ul>
            <li>GitHub:<a className="underline text-blue-400" href="https://github.com/javeria-fatima49/javeria-projects-portfolio.git">Portfolio</a></li>
            <li>Vercel:<a className="underline text-blue-400" href="https://javeria-projects-portfolio.vercel.app/">Portfolio</a></li>
          </ul>
        </div>     

        <h3 className="p-6 text-2xl font-semibold md:text-4xl mb-0 font-serif">Men&apos;s clothes collection</h3>
        <div className="flex-1 w-96 md:ml-8 bg-[#2d2d2d] transform transition duration-300 hover:scale-105">
          <Image
            src="/image/men.png"
            alt="Profile"
            layout="responsive"
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
          <p className="px-6 text-md md:text-md font-sans">An e-commerce website displaying a men&apos;s clothing collection, developed using Next.js with a focus on
             creating a user-friendly shopping experience.</p>
          <ul>
            <li>GitHub:<a className="underline text-blue-400" href="https://github.com/javeria-fatima49/Men-clothes-collection.git">Men&apos;s collection</a></li>
            <li>Vercel:<a className="underline text-blue-400" href="https://men-clothes-collection.vercel.app/">Men&apos;s collection</a></li>
          </ul>
        </div>

        <br />
        <footer className="bg-[#222222] p-4 w-full absolute mt-0 mb-0 mr-0 left-0 font-sans">
          <p className="text-center text-white">Follow me for more updates</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
              <Image src="/image/linkdin.jpg" alt="LinkedIn" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
            </a>
            <a href="https://github.com/javeria-fatima49" target="_blank">
              <Image src="/image/github.png" alt="GitHub" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
            </a>
            <a href="mailto:javeria.fatima49@gmail.com">
              <Image src="/image/mail.jpg" alt="Mail" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
