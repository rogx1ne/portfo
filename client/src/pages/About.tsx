import { motion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles, Code, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition, SectionWrapper, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { aboutData } from "@/lib/data";

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
};

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16" data-testid="about-page">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
              >
                Get to know me
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Me
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A passionate developer crafting digital experiences
              </p>
            </div>
          </SectionWrapper>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionWrapper delay={0.1}>
              <Card className="gradient-border overflow-visible" data-testid="card-about-bio">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.3 }}
                      className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center"
                    >
                      <Sparkles className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold">Who I Am</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-bio">
                    {aboutData.bio}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      <span className="text-sm" data-testid="text-about-education">{aboutData.education}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="text-sm" data-testid="text-about-location">{aboutData.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SectionWrapper>

            <div className="space-y-6">
              <SectionWrapper delay={0.2}>
                <Card className="gradient-border overflow-visible" data-testid="card-about-interests">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.4 }}
                        className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center"
                      >
                        <Heart className="h-6 w-6 text-accent" />
                      </motion.div>
                      <h2 className="text-2xl font-bold">My Interests</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {aboutData.interests.map((interest, index) => (
                        <motion.div
                          key={interest}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1"
                            data-testid={`badge-interest-${index}`}
                          >
                            {interest}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SectionWrapper>

              <SectionWrapper delay={0.3}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  Quick Stats
                </h2>
                <StaggerContainer className="grid grid-cols-2 gap-4">
                  {aboutData.stats.map((stat, index) => (
                    <StaggerItem key={stat.label}>
                      <Card className="gradient-border overflow-visible group" data-testid={`card-stat-${index}`}>
                        <CardContent className="p-6 text-center">
                          <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2"
                            data-testid={`text-stat-value-${index}`}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </SectionWrapper>
            </div>
          </div>

          <SectionWrapper delay={0.4} className="mt-16">
            <Card className="gradient-border overflow-visible" data-testid="card-about-journey">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.6 }}
                    className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center"
                  >
                    <Code className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">My Journey</h2>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
                  <div className="space-y-8 pl-12">
                    {[
                      { year: "2023", title: "Started BCA", desc: "Began my formal journey into computer science" },
                      { year: "2024", title: "First Projects", desc: "Built my first web applications with React" },
                      //{ year: "2023", title: "Internship", desc: "Gained real-world experience as a frontend developer" },
                      { year: "2025", title: "Full-Stack", desc: "Expanded to full-stack development with Node.js" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                        data-testid={`journey-item-${index}`}
                      >
                        <div className="absolute -left-12 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <div className="text-xs text-primary font-mono mb-1">{item.year}</div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </SectionWrapper>
        </div>
      </div>
    </PageTransition>
  );
}
