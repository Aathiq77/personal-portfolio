import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RESTful Bookstore API",
      description: "Built a RESTful API for a bookstore using JAX-RS in Java, supporting CRUD operations and tested thoroughly with Postman.",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["java", "JAX-RS", "JSON", "Postman"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Estate Agent Client-Side Web Application",
      description: "Built a client-side web application for estate agents to showcase property listings. Focused on responsive design, user-friendly navigation, and integration of search and filter functionalities.",
      image: "photo-1611224923853-80b023f02d71",
      technologies: ["React JS" , "HTML", "CSS3","JS",  "Boot Strap ","JSON"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: " Real-Time Event Ticketing System",
      description: "A full-stack application built with ReactJS and Spring Boot that enables real-time event ticket booking.",
      image: "photo-1504608524841-42fe6f032b4b",
      technologies: ["React JS" , "Spring Boot", "Java"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Theatre Seat Management System",
      description: "Developed a system to manage theatre seat bookings efficiently. Implemented features like seat selection, availability tracking, and booking confirmation using Java.",
      image: "photo-1460925895917-afdab827c52f",
      technologies: ["java"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my technical skills, problem-solving abilities,
            and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:bg-card/70 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className="h-64 md:h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/${project.image}?w=500&h=300&fit=crop)`
                    }}
                  >
                    <div className="h-full bg-gradient-to-r from-primary/20 to-transparent flex items-center justify-center">
                      <Code className="w-16 h-16 text-primary/60" />
                    </div>
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/20 text-primary border-primary/30 hover:scale-105 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 hover:bg-primary/10 hover:border-primary"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:opacity-90"
                          asChild
                        >
                      
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-primary/20 hover:bg-card/70 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className="h-48 bg-cover bg-center bg-no-repeat rounded-t-lg"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/${project.image}?w=400&h=200&fit=crop)`
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-card/80 to-transparent flex items-end p-6">
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardDescription className="mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground border-accent/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.githubUrl}>
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                        asChild
                      >
                    
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
