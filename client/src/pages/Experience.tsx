import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition, SectionWrapper, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
  const workExperience = experience.filter((exp) => exp.type === "work");
  const education = experience.filter((exp) => exp.type === "education");

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16" data-testid="experience-page">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
              >
                My journey
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-experience-title">
                Experience &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Education
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of my professional journey and academic background
              </p>
            </div>
          </SectionWrapper>

          <div className="grid lg:grid-cols-2 gap-12">
            <SectionWrapper delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                
                <StaggerContainer className="space-y-8" staggerDelay={0.15}>
                  {workExperience.map((exp, index) => (
                    <StaggerItem key={exp.id}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="relative pl-12"
                        data-testid={`work-item-${exp.id}`}
                      >
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="w-2 h-2 rounded-full bg-primary"
                          />
                        </div>

                        <Card className="gradient-border overflow-visible" data-testid={`card-work-${exp.id}`}>
                          <CardContent className="p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="default" size="sm" className="neon-glow">
                                {exp.period}
                              </Badge>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-1" data-testid={`text-work-title-${exp.id}`}>
                              {exp.title}
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {exp.organization}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </span>
                            </div>
                            
                            <p className="text-sm text-muted-foreground" data-testid={`text-work-desc-${exp.id}`}>
                              {exp.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />
                
                <StaggerContainer className="space-y-8" staggerDelay={0.15}>
                  {education.map((exp, index) => (
                    <StaggerItem key={exp.id}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="relative pl-12"
                        data-testid={`edu-item-${exp.id}`}
                      >
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-accent flex items-center justify-center z-10">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="w-2 h-2 rounded-full bg-accent"
                          />
                        </div>

                        <Card className="gradient-border overflow-visible" data-testid={`card-edu-${exp.id}`}>
                          <CardContent className="p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge variant="secondary" size="sm" className="bg-accent/10 text-accent border-accent/30">
                                {exp.period}
                              </Badge>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-1" data-testid={`text-edu-title-${exp.id}`}>
                              {exp.title}
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <GraduationCap className="h-4 w-4" />
                                {exp.organization}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </span>
                            </div>
                            
                            <p className="text-sm text-muted-foreground" data-testid={`text-edu-desc-${exp.id}`}>
                              {exp.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SectionWrapper>
          </div>

          <SectionWrapper delay={0.4} className="mt-16">
            <Card className="gradient-border overflow-visible" data-testid="card-summary">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {[
                    { value: "3+", label: "Years Learning", icon: Calendar },
                    { value: "2+", label: "Work Experiences", icon: Briefcase },
                    { value: "1", label: "Degree in Progress", icon: GraduationCap },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center"
                      data-testid={`stat-${index}`}
                    >
                      <stat.icon className="h-8 w-8 text-primary mb-3" />
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </SectionWrapper>
        </div>
      </div>
    </PageTransition>
  );
}
