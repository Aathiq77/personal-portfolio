import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science Student at IIT Sri Lanka",
    },
    {
      icon: Code,
      title: "Development",
      description: "Software development expertise",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Passionate about emerging technologies",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science student at IIT Sri Lanka with hands-on experience in software development
            and software engineering. I’m driven by curiosity and a strong interest in 
            building reliable, impactful tech solutions. I enjoy working with modern technologies 
            like Java, Spring Boot, and REST APIs, and I'm eager to contribute to real-world projects through 
            internship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-primary/20 hover:bg-card/70 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my degree in Computer Science at IIT Sri Lanka, 
              I’ve gained a solid foundation in software development — from core 
              programming principles to modern frameworks like Spring Boot and RESTful API design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion for technology goes beyond academics. I work on personal web projects, 
              experiment with new tools, and stay up to date with the latest trends in software engineering 
              and quality assurance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Strong grasp of object-oriented programming and software design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Experience with Java, Spring Boot, HTML/CSS, and REST APIs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Enthusiastic about writing clean, maintainable code and following Agile practices</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-card/80 border-primary/30">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-lg">Bachelor of Science in Computer Science</h5>
                    <p className="text-primary">IIT Sri Lanka </p>
                    <p className="text-muted-foreground text-sm">Current • Expected Graduation: 2027</p>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <h6 className="font-medium mb-2">Key Coursework:</h6>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Web Development</span>
                      <span>• Client-Server Architecture</span>
                      <span>• Software Developmet</span>
                      <span>• Database Systems</span>
                      <span>• Web Services (JAX-RS)</span>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;