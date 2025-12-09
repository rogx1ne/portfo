import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Github, Linkedin, Twitter, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PageTransition, SectionWrapper, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { socialLinks, aboutData } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap: Record<string, typeof Mail> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await apiRequest("POST", "/api/contact", data);
      
      setSubmitStatus("success");
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16" data-testid="contact-page">
        <div className="container mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4"
              >
                Get in touch
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Me
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </div>
          </SectionWrapper>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionWrapper delay={0.1}>
              <Card className="gradient-border overflow-visible" data-testid="card-contact-form">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                data-testid="input-name"
                                className="bg-muted/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                                data-testid="input-email"
                                className="bg-muted/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project..."
                                {...field}
                                rows={5}
                                data-testid="input-message"
                                className="bg-muted/50 resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full neon-glow"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : submitStatus === "success" ? (
                          <>
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Message Sent!
                          </>
                        ) : submitStatus === "error" ? (
                          <>
                            <AlertCircle className="h-5 w-5 mr-2" />
                            Try Again
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </SectionWrapper>

            <div className="space-y-6">
              <SectionWrapper delay={0.2}>
                <Card className="gradient-border overflow-visible" data-testid="card-contact-info">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                    
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-md bg-muted/30"
                      >
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href="mailto:alex@example.com"
                            className="font-medium hover:text-primary transition-colors"
                            data-testid="link-email"
                          >
                            adityajeremy82@gmail.com
                          </a>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-md bg-muted/30"
                      >
                        <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium" data-testid="text-location">{aboutData.location}</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </SectionWrapper>

              <SectionWrapper delay={0.3}>
                <Card className="gradient-border overflow-visible" data-testid="card-socials">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                    
                    <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                      {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon] || Mail;
                        return (
                          <StaggerItem key={link.name}>
                            <motion.a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex items-center gap-3 p-4 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
                              data-testid={`link-social-${link.name.toLowerCase()}`}
                            >
                              <Icon className="h-5 w-5 text-primary" />
                              <span className="font-medium">{link.name}</span>
                            </motion.a>
                          </StaggerItem>
                        );
                      })}
                    </StaggerContainer>
                  </CardContent>
                </Card>
              </SectionWrapper>

              <SectionWrapper delay={0.4}>
                <Card className="gradient-border overflow-visible" data-testid="card-availability">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-4 rounded-full bg-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Available for Work</h3>
                    <p className="text-muted-foreground text-sm">
                      I'm currently open to new opportunities and freelance projects.
                      Let's build something amazing together!
                    </p>
                  </CardContent>
                </Card>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
