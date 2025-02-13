import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Service(){
    return(
<section id="services" className="py-20 bg-slate-950 ">
<div className="container mx-auto px-6 ">
  <h2 className="text-5xl font-bold mb-12 text-white text-center">
    My <span className="text-yellow-500">Services</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Web Development",
        description: "Creating modern and responsive websites using the latest technologies.",
      },
      {
        title: "UI/UX Design",
        description: "Designing beautiful and intuitive user interfaces and experiences.",
      },
      {
        title: "AI Integration",
        description: "Implementing AI solutions to enhance web applications.",
      },
      {
        title: "Mobile Development",
        description: "Building cross-platform mobile applications.",
      },
      {
        title: "SEO Optimization",
        description: "Optimizing websites for better search engine rankings.",
      },
      {
        title: "Consulting",
        description: "Technical consulting for your web development projects.",
      },
    ].map((service, index) => (
      <Card key={index} className="bg-gray-700 border-gray-800 group hover:border-yellow-500 transition-colors">
        <CardHeader>
          <CardTitle className="text-yellow-400">{service.title}</CardTitle>
          <CardDescription className="text-gray-300">{service.description}</CardDescription>
        </CardHeader>
      </Card>
    ))}
  </div>
</div>
</section>
)
}