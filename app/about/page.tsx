import Image from "next/image";

export default function About() {
    return (
        <div className="bg-gradient-to-br from-gray-600 via-black to-gray-600  text-white flex flex-col md:flex-row p-10 md:p-40 justify-between items-center min-h-screen animate-slideTop">
            <div className="flex-1 mb-0 md:mb-0">
                <h1 className="font-bold text-3xl md:text-4xl mb-4 font-serif">About Me</h1>
                <p className="text-sm md:text-md">
                    Hello! I&apos;m Javeria, a passionate learner currently in my second year of pre-medical studies.
                    While my academic path is in pre-med, my curiosity for technology led me to explore web development.
                    I&apos;ve been building my skills in Next.js, TypeScript, HTML, CSS, and Tailwind CSS, and
                    I love creating interactive and visually engaging applications.
                </p>

                <h1 className="font-bold text-3xl md:text-4xl mt-8 mb-4 font-serif">Learning & Growing</h1>
                <p className="text-sm md:text-md">
                    Balancing my studies with my interest in tech has been challenging but rewarding, and
                    I&apos;m always excited to take on new projects that push my skills further.
                    I believe in the power of technology to create meaningful experiences, and
                    I&apos;m looking forward to connecting with others who share this passion.
                    Whether it&apos;s about web development, user experience, or new tech trends, I&apos;d love to connect!
                </p>
            </div>
            <div className="flex-1 w-full md:ml-8">
                <Image
                    src="/image/AI-image.jpg"
                    alt="Profile"
                    layout="intrinsic"
                    width={800}
                    height={500}
                    className="object-cover h-full w-full rounded-lg transform transition duration-300 hover:scale-105"
                />
            </div>  
        
            <footer className="hidden md:block bg-[#222222] p-4 font-sans fixed bottom-0 left-0 right-0">
                <p className="text-center text-white">Follow me for more updates</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
                        <Image src="/image/linkdin.jpg" alt="LinkedIn" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
                    </a>
                    <a href="https://github.com/javeria-fatima49" target="_blank">
                        <Image src="/image/github.png" alt="GitHub" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
                    </a>
                </div>
                <p className="text-center text-white mt-4">fatimajaveria409@gmail.com</p>
            </footer>

<footer className="md:hidden bg-[#222222] w-screen p-4 mt-2 -mb-11 text-center">
<p className="text-white text-sm">Follow me for updates</p>
<div className="flex justify-center space-x-4 mt-2">
    <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
        <Image src="/image/linkdin.jpg" alt="LinkedIn" width={24} height={24} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
    </a>
    <a href="https://github.com/javeria-fatima49" target="_blank">
        <Image src="/image/github.png" alt="GitHub" width={24} height={24} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
    </a>
</div>
<p className="text-white text-sm mt-2">fatimajaveria409@gmail.com</p>
</footer>
</div>
);
}


// import Image from "next/image";

// export default function About() {
//     return (
//         <div className="bg-gradient-to-br from-gray-600 via-black to-gray-600 flex flex-col p-10 md:p-40 items-center min-h-screen animate-slideTop">
//             <div className="flex-1 w-full mb-6 md:mb-0 text-center md:text-left">
//                 <h1 className="font-bold text-3xl md:text-4xl mb-4 font-serif">About Me</h1>
//                 <p className="text-sm md:text-md">
//                     Hello! I&apos;m Javeria, a passionate learner currently in my second year of pre-medical studies.
//                     While my academic path is in pre-med, my curiosity for technology led me to explore web development.
//                     I&apos;ve been building my skills in Next.js, TypeScript, HTML, CSS, and Tailwind CSS, and
//                     I love creating interactive and visually engaging applications.
//                 </p>

//                 <h1 className="font-bold text-3xl md:text-4xl mt-8 mb-4 font-serif">Learning & Growing</h1>
//                 <p className="text-sm md:text-md">
//                     Balancing my studies with my interest in tech has been challenging but rewarding, and
//                     I&apos;m always excited to take on new projects that push my skills further.
//                     I believe in the power of technology to create meaningful experiences, and
//                     I&apos;m looking forward to connecting with others who share this passion.
//                     Whether it&apos;s about web development, user experience, or new tech trends, I&apos;d love to connect!
//                 </p>
//             </div>

//             <div className="flex-1 w-full md:ml-8">
//                 <Image
//                     src="/image/AI-image.jpg"
//                     alt="Profile"
//                     layout="responsive"
//                     width={800}
//                     height={500}
//                     className="object-cover w-full rounded-lg transform transition duration-300 hover:scale-105"
//                 />
//             </div>  
        
//             {/* Footer for larger screens */}
//             <footer className="hidden md:block bg-[#222222] w-full fixed bottom-0 left-0 right-0 py-4 text-center">
//                 <p className="text-white">Follow me for more updates</p>
//                 <div className="flex justify-center space-x-4 mt-4">
//                     <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
//                         <Image src="/image/linkdin.jpg" alt="LinkedIn" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
//                     </a>
//                     <a href="https://github.com/javeria-fatima49" target="_blank">
//                         <Image src="/image/github.png" alt="GitHub" width={30} height={30} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
//                     </a>
//                 </div>
//                 <p className="text-white mt-4">fatimajaveria409@gmail.com</p>
//             </footer>

//             {/* Footer for mobile screens */}
//             <footer className="md:hidden bg-[#222222] w-screen p-4 mt-2 -mb-11 text-center">
//                 <p className="text-white text-sm">Follow me for updates</p>
//                 <div className="flex justify-center space-x-4 mt-2">
//                     <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
//                         <Image src="/image/linkdin.jpg" alt="LinkedIn" width={24} height={24} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
//                     </a>
//                     <a href="https://github.com/javeria-fatima49" target="_blank">
//                         <Image src="/image/github.png" alt="GitHub" width={24} height={24} className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
//                     </a>
//                 </div>
//                 <p className="text-white text-sm mt-2">fatimajaveria409@gmail.com</p>
//             </footer>
//         </div>
//     );
// }
