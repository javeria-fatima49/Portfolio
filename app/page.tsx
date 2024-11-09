import Image from "next/image";

export default function Home() {
  return (
  <div>
    <div className="animate-slideRight bg-gradient-to-br from-gray-700 via-black to-gray-700  flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-2/3 h-2/3 lg:h-full">
        <Image
          src="/image/girl-image.jpg"
          alt="Profile"
          layout="responsive"
          width={736}
          height={700}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8  text-white">
        <div className="flex items-center w-full font-serif">
          <span className="text-4xl lg:text-6xl font-bold">My</span>
          <div className="flex-grow border-t border-white mx-4"></div>
          <span className="text-4xl lg:text-6xl font-bold">Portfolio</span>
        </div>
        <p className="mt-6 text-gray-300 text-lg lg:text-base">
        Hi, I&apos;m Javeria Fatima a passionate web developer specializing in Typescript,HTML,CSS,Javascript,Next.js.        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-white text-black px-6 py-2 font-semibold hover:bg-slate-100 hover:scale-105 animate-pulse"><a href="/projects">Explore Now</a></button>
        </div>
    </div>    
      </div>
      <footer className="bg-[#222222] p-4 mt-auto">
        <p className="text-center text-white">Follow me for more updates</p>
        <div className="flex justify-center space-x- mt-4">
          <a
            href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/image/linkdin.jpg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </a>
          <a href="https://github.com/javeria-fatima49" target="_blank" rel="noopener noreferrer">
            <Image
              src="/image/github.png"
              alt="GitHub"
              width={30}
              height={30}
              className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </a>
        </div>
        <p className="text-center text-white mt-4">fatimajaveria409@gmail.com</p>
      </footer>
    </div>
  );
}
