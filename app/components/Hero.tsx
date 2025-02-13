import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Hero(){
    return(
<section id="home" className="pt-24 min-h-screen flex items-center animate-slideTop">
<div className="container mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-yellow-500">
          Hello,
          <br />
          <Typewriter
            words={[" World!","I am Javeria Fatima!", "I am a web developer!", "I Love Coding!"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            />
        </h1>
      </div>
      <p className="text-gray-300 max-w-lg">
      I&apos;m a passionate and dedicated IT student currently in my 2nd year, specializing in web development with expertise in 
      TypeScript, Next.js, and Tailwind CSS. I have experience in building interactive applications, including a resume builder,
       a to-do app, and an adventure game. I enjoy creating visually appealing and functional web solutions. I&apos;m always eager to
        learn new technologies and improve my skills. My goal is to contribute effectively to the tech industry and work on 
        innovative projects.
      </p>
      <div className="flex gap-4">
        <button className="rounded-full animate-bounce">
          <Link href="https://github.com/javeria-fatima49" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-white "/>
          </Link>
        </button>
        <button   className="rounded-full text-white animate-bounce" >
          <Link href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BDkXLXNMJQU2KvpnVM5TKCg%3D%3D" >
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white bg-slate-800"/>
          </Link>
        </button>
      </div>
    </div>
    <div className="relative w-full max-w-md h-4/6 aspect-[9/19.5] overflow-hidden">
      <Image
        src="/image/girl-image.jpg"
        alt="Profile Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-0 w-full h-6 bg-gray-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-gray-950 rounded-full" />
      </div>
    </div>
  </div>
</div>
</section>

)
}