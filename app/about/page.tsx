import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 animate-accordion-up">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white text-center">
          About <span className="text-yellow-500">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-gray-200 text-lg sm:text-md">
              Hello! I&apos;m Javeria, a passionate learner currently in my second year of pre-medical studies.
              While my academic path is in pre-med, my curiosity for technology led me to explore web development.
              I&apos;ve been building my skills in Next.js, TypeScript, HTML, CSS, and Tailwind CSS, and
              I love creating interactive and visually engaging applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Name:</p>
                <p className="text-lg font-medium">Javeria Fatima</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Email:</p>
                <p className="text-lg font-medium">fatimajaveria409@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Location:</p>
                <p className="text-lg font-medium">Karachi, Pakistan</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Availability:</p>
                <p className="text-lg font-medium">Open for Work</p>
              </div>
            </div>

            <Button className="bg-yellow-500 hover:bg-yellow-600 w-full sm:w-auto">Download CV</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "20+", label: "Projects Completed" },
              { value: "10+", label: "Happy Clients" },
              { value: "5+", label: "Certifications" },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-700 border-gray-800 text-center p-4">
                <CardHeader>
                  <CardTitle className="text-3xl sm:text-4xl font-bold text-yellow-500">{item.value}</CardTitle>
                  <CardDescription className="text-gray-200 text-sm sm:text-md">{item.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
