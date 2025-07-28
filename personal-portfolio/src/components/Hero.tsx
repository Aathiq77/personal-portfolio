import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Aathiq Ahamed
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in-right">
            Computer Science Student
          </p>
          
          <p className="text-lg text-muted-foreground mb-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            IIT Sri Lanka
          </p>
          
          <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            Passionate about creating innovative solutions through code. 
            Exploring the frontiers of technology and building tomorrow's digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <a href="github.com/Aathiq77 " target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 animate-glow-pulse"
              >
                View My Work
              </Button>
            </a>

            <a href="#" download target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6"  />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;