import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Filter, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageTransition, SectionWrapper, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { projects } from "@/lib/data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((project) => {
      project.techStack.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects;
    return projects.filter((project) =>
      project.techStack.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16" data-testid="projects-page">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
              >
                My work
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Projects
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects that showcase my skills and experience
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-testid="project-filters">
              <Button
                variant={activeFilter === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(null)}
                className={activeFilter === null ? "neon-glow" : ""}
                data-testid="button-filter-all"
              >
                <Filter className="h-4 w-4 mr-2" />
                All
              </Button>
              {allTechs.map((tech) => (
                <Button
                  key={tech}
                  variant={activeFilter === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(activeFilter === tech ? null : tech)}
                  className={activeFilter === tech ? "neon-glow" : "border-primary/30"}
                  data-testid={`button-filter-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {tech}
                  {activeFilter === tech && (
                    <X className="h-3 w-3 ml-1" />
                  )}
                </Button>
              ))}
            </div>
          </SectionWrapper>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter || "all"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {filteredProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card 
                        className="group h-full gradient-border overflow-visible"
                        data-testid={`card-project-${project.id}`}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-start justify-between mb-4">
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center"
                            >
                              <Folder className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div className="flex items-center gap-2">
                              {project.githubUrl && (
                                <motion.a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  data-testid={`link-github-${project.id}`}
                                >
                                  <Github className="h-5 w-5" />
                                </motion.a>
                              )}
                              {project.liveUrl && (
                                <motion.a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="text-muted-foreground hover:text-accent transition-colors"
                                  data-testid={`link-live-${project.id}`}
                                >
                                  <ExternalLink className="h-5 w-5" />
                                </motion.a>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <h3 
                              className="text-xl font-bold group-hover:text-primary transition-colors"
                              data-testid={`text-project-title-${project.id}`}
                            >
                              {project.title}
                            </h3>
                            {project.highlightTag && (
                              <Badge 
                                variant="default" 
                                size="sm"
                                className="neon-glow"
                                data-testid={`badge-highlight-${project.id}`}
                              >
                                {project.highlightTag}
                              </Badge>
                            )}
                          </div>

                          <p 
                            className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3"
                            data-testid={`text-project-desc-${project.id}`}
                          >
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                size="sm"
                                className="text-xs border-primary/30"
                                data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Folder className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                No projects found with the selected filter
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveFilter(null)}
                className="mt-4"
                data-testid="button-clear-filter"
              >
                Clear filter
              </Button>
            </motion.div>
          )}

          <SectionWrapper delay={0.3} className="mt-16 text-center">
            <Card className="gradient-border overflow-visible inline-block" data-testid="card-more-projects">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Want to see more?</h3>
                <p className="text-muted-foreground mb-4">
                  Check out my GitHub for more projects and contributions
                </p>
                <Button asChild className="neon-glow" data-testid="button-github-profile">
                  <a
                    href="https://github.com/rogx1ne"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </SectionWrapper>
        </div>
      </div>
    </PageTransition>
  );
}
