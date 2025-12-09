import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layout, Server, Settings, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PageTransition, SectionWrapper, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Code> = {
  Code,
  Layout,
  Server,
  Settings,
};

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(skills[0]?.category);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16" data-testid="skills-page">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
              >
                What I know
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-skills-title">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Skills
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </SectionWrapper>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SectionWrapper delay={0.1}>
                <Card className="gradient-border overflow-visible sticky top-24" data-testid="card-skills-categories">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 px-2">
                      Categories
                    </h3>
                    <div className="space-y-1">
                      {skills.map((category, index) => {
                        const Icon = iconMap[category.icon] || Code;
                        const isExpanded = expandedCategory === category.category;
                        
                        return (
                          <motion.button
                            key={category.category}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setExpandedCategory(
                              isExpanded ? null : category.category
                            )}
                            className={cn(
                              "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-left transition-colors",
                              isExpanded
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-muted text-foreground"
                            )}
                            data-testid={`button-category-${category.category.toLowerCase()}`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-5 w-5" />
                              <span className="font-medium">{category.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" size="sm">
                                {category.items.length}
                              </Badge>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </motion.div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </SectionWrapper>
            </div>

            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {skills.map((category) => {
                  if (expandedCategory !== category.category) return null;
                  const Icon = iconMap[category.icon] || Code;

                  return (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="gradient-border overflow-visible" data-testid={`card-skills-${category.category.toLowerCase()}`}>
                        <CardContent className="p-8">
                          <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold">{category.category}</h2>
                              <p className="text-sm text-muted-foreground">
                                {category.items.length} skills
                              </p>
                            </div>
                          </div>

                          <StaggerContainer className="space-y-6" staggerDelay={0.05}>
                            {category.items.map((skill, index) => (
                              <StaggerItem key={skill.name}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div 
                                      className="group cursor-help"
                                      data-testid={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                    >
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium group-hover:text-primary transition-colors">
                                          {skill.name}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                          {skill.level}%
                                        </span>
                                      </div>
                                      <div className="skill-bar">
                                        <motion.div
                                          className="skill-bar-fill"
                                          initial={{ width: 0 }}
                                          whileInView={{ width: `${skill.level}%` }}
                                          viewport={{ once: true }}
                                          transition={{
                                            duration: 1,
                                            delay: index * 0.1,
                                            ease: "easeOut",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-[200px]">{skill.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </StaggerItem>
                            ))}
                          </StaggerContainer>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {!expandedCategory && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Code className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select a category to view skills
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          <SectionWrapper delay={0.3} className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">All Technologies</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.flatMap((cat) => cat.items).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm cursor-help border-primary/30 hover:border-primary hover:bg-primary/5 transition-colors"
                        data-testid={`badge-tech-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {skill.name}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Proficiency: {skill.level}%
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </PageTransition>
  );
}
