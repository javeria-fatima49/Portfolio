"use client"

import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "HTML",
    icon: "5",
    description:
      "HTML is the standard markup language for creating web pages. It provides the basic structure for web documents and helps in defining the content and structure of a web page.",
    color: "bg-[#E44D26]",
  },
  {
    name: "CSS",
    icon: "N",
    description:
      "CSS is used to style and layout web pages. It controls the look and feel of the web pages, including the design, colors, fonts, and spacing, making them visually appealing.",
    color: "bg-[#264DE4]",
  },
  {
    name: "Tailwind CSS",
    icon: "~",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows for rapid design and customization of web pages without writing custom CSS. It promotes consistency and efficiency in styling.",
    color: "bg-[#38B2AC]",
  },
  {
    name: "JavaScript",
    icon: "JS",
    description:
      "JavaScript is a versatile scripting language that enables interactive web features. It is used to create dynamic content, control multimedia, and handle events on web pages.",
    color: "bg-[#F7DF2E]",
  },
  {
    name: "TypeScript",
    icon: "TS",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, which improves code quality and development experience.",
    color: "bg-[#3178C6]",
  },
  {
    name: "React.js",
    icon: "⚛",
    description:
      "React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.",
    color: "bg-[#61DAFB]/80",
  },
  {
    name: "Next.js",
    icon: "N",
    description:
      "Next.js is a React framework that provides server-side rendering and static site generation capabilities. It helps in building optimized, fast, and scalable web applications.",
    color: "bg-[#FF8C00]",
  },
  {
    name: "Node.js",
    icon: "N",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting and building scalable network applications using JavaScript.",
    color: "bg-[#339933]",
  },
];

export function Skill() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-16" data-aos="fade-up">My
          <span className="text-yellow-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
         <Card
           key={skill.name}
           className={`${skill.color} border-none text-white overflow-hidden group transition-transform duration-300 hover:scale-105`}
           data-aos="fade-up"
           data-aos-delay={index * 100}  
           data-aos-once="false" 
         >
              <CardContent className="pt-6 px-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center animate-pulse">
                    <span className="text-4xl font-bold animate-spin">{skill.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




