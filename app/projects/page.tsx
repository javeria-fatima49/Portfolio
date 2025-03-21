"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

 const projects = [
   { id: '1', title: 'Resume', description: 'This resume is first milestone of my project, developed with HTML/CSS, focusing on creating the foundationalstructure and layout.', image: "/image/milestone 1.png", gitlink: "https://github.com/javeria-fatima49/resume.git", vercel: "http://resume-kohl-nine.vercel.app/" },
   { id: '2', title: 'Milestone 5', description: 'Milestone 2 highlights my skills in building dynamic, interactive elements using HTML/CSS while ensuring a smooth and responsive user experience.', image: "/image/milestone 5.png", gitlink: "https://github.com/javeria-fatima49/milestone-5.git", vercel: "https://milestone-5-snowy.vercel.app/" },
   { id: '3', title: 'Movie website', description: 'In Milestone 3, I added functionality to generate user-specific content dynamically, using HTML/CSS, to enhance the overall interactivity of the project.', image: "/image/movie.png", gitlink: "https://github.com/javeria-fatima49/internintelligence-movie-websitee.git", vercel: "https://internintelligence-movie-websitee.vercel.app/" },
   { id: '4', title: 'Blog website', description: 'A responsive calculator app built with HTML and CSS.It demonstrates my skills in creating clean, interactive user interfaces with dynamic functionality.', image: "/image/blog.png", gitlink: "https://github.com/javeria-fatima49/blog.git", vercel: "https://blog-azure-eta.vercel.app/"},
   { id: '5', title: "Men's clothes collection", description: 'An e-commerce website displaying a men&apos;s clothing collection, developed using Next.js with a focus oncreating a user-friendly shopping experience.', image: "/image/men.png", gitlink: "https://github.com/javeria-fatima49/Men-clothes-collection.git", vercel: "https://men-clothes-collection.vercel.app/" },
   { id: '6', title: 'Portfolio', description: 'A personal portfolio built with HTML/CSS showcasing my web development skills, including responsive design and modern user interfaces.', image: "/image/portfolio.png", gitlink: "https://github.com/javeria-fatima49/javeria-projects-portfolio.git", vercel: "https://javeria-projects-portfolio.vercel.app/" },
   { id: '7', title: 'E-commerce Shop.co', description: 'A personal portfolio built with HTML/CSS showcasing my web development skills, including responsive design and modern user interfaces.', image: "/image/e-commerce.png", gitlink: "https://github.com/javeria-fatima49/e-commerce.git", vercel: "https://e-commerce-pi-jet.vercel.app/" },
  ];


function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-white text-center">
          My <span className="text-yellow-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              data-aos="fade-up" 
              data-aos-once="false" 
              className="bg-gray-900 border-gray-800 overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-video">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="hover:bg-yellow-500 hover:text-white transition-colors">
                    <Link href={project.vercel} target="_blank">View Project</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.gitlink} target="_blank" className="hover:bg-yellow-500 hover:text-white transition-colors flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;
