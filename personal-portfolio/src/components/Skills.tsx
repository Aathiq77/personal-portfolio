import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java","JavaScript","SQL"],
      color: "bg-primary/20 text-primary border-primary/30",
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3","ReactJS","Tailwind CSS","BootStrap"],
      color: "bg-accent/20 text-accent-foreground border-accent/30",
    },
    {
      title: "Backend Development",
      skills: [ "Spring Boot","REST APIs"],
      color: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Postman","Figma", "VS Code"],
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through academic learning, personal projects, 
            and hands-on experience with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-primary/20 hover:bg-card/70 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`${category.color} hover:scale-105 transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Expert", skills: ["Java","HTML/CSS"], percentage: 80 },
              { level: "Advanced", skills: ["Figma","Postman", "SQL"], percentage: 75 },
              { level: "Intermediate", skills: ["ReactJS", "BootSrap", "Pythin"], percentage: 70 },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-muted/30"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      className="text-primary"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${item.percentage}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">{item.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.level}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;